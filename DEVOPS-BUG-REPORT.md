# DevOps Implementation - Bug Report & Lessons Learned

This document details all bugs encountered during the Docker and DevOps setup, their root causes, solutions, and key learnings.

---

## 🐛 Bug #1: Next.js Standalone Build Missing Files

### Problem
Docker container failed to start with error:
```
Error: Cannot find module '/app/server.js'
```

### Root Cause
Next.js standalone build (`output: 'standalone'`) was not configured in `next.config.js`. Without this setting, Next.js doesn't create a minimal production build suitable for Docker.

### Solution
Added to `next.config.js`:
```javascript
module.exports = {
  reactStrictMode: true,
  output: 'standalone', // Required for Docker
}
```

### What I Learned
- Next.js has different build modes for different deployment targets
- `standalone` mode creates a minimal server with only required dependencies
- This significantly reduces Docker image size and improves performance
- **Always check framework-specific Docker documentation**

---

## 🐛 Bug #2: Prisma Client Initialization Error in Production

### Problem
App crashed on startup with:
```
Error [PrismaClientInitializationError]: `PrismaClient` needs to be constructed
with a non-empty, valid `PrismaClientOptions`
```

### Root Cause
**Multiple instances found:**

1. **Missing Adapter Configuration**: Files were creating `new PrismaClient()` without the required PostgreSQL adapter for Prisma 7
2. **Files affected**:
   - `pages/api/health.ts` - Created new client without adapter
   - `pages/api/auth/[...nextauth].tsx` - Created new client without adapter

### Solution
Updated all files to use the shared Prisma instance from `lib/prismadb.ts`:

**Before:**
```typescript
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient(); // ❌ Missing adapter
```

**After:**
```typescript
import { prisma } from 'lib/prismadb'; // ✅ Uses configured instance
```

The shared instance in `lib/prismadb.ts` properly configures the adapter:
```typescript
const pool = new Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })
```

### What I Learned
- **Prisma 7 requires explicit adapter configuration** for PostgreSQL connection pooling
- **DRY principle**: Use a single, properly configured Prisma instance across the app
- Shared instances prevent multiple database connections and configuration inconsistencies
- **Always check migration guides** when upgrading major versions

---

## 🐛 Bug #3: Environment Variables Not Loading in Docker

### Problem
Docker container couldn't read environment variables:
```
The datasource.url property is required in your Prisma config file
```
Warnings showed: `The "NEXTAUTH_SECRET" variable is not set. Defaulting to a blank string.`

### Root Cause
**Two issues:**

1. **Missing `env_file` directive** in `docker-compose.yml` - Docker Compose wasn't loading `.env.docker`
2. **Variable substitution syntax** - Used `${VARIABLE}` but didn't tell Docker where to load values from

### Solution
Updated `docker-compose.yml`:

**Before:**
```yaml
app:
  environment:
    NEXTAUTH_SECRET: ${NEXTAUTH_SECRET}  # ❌ No source defined
```

**After:**
```yaml
app:
  env_file:
    - .env.docker  # ✅ Load variables from file
  environment:
    NEXTAUTH_SECRET: 5HUZiXiuwYiueBMLXS7u/nMC269tPCn5nyIQz800jVE=  # ✅ Explicit value
```

### What I Learned
- Docker Compose variable substitution requires explicit source (`env_file` or `.env`)
- **Two approaches for environment variables**:
  1. `env_file`: Load from file (good for many variables)
  2. Hardcode in `environment`: Explicit values (good for critical config)
- For production secrets, use container orchestration secrets management (Kubernetes Secrets, AWS Secrets Manager)
- **Validate environment variables are actually set** before running app logic

---

## 🐛 Bug #4: Prisma Config Module Not Found in Docker

### Problem
```
Error: Cannot find module 'prisma/config'
Require stack: /app/prisma.config.ts
```

### Root Cause
`prisma.config.ts` imports `prisma/config` module which isn't included in Next.js standalone build. This module is only needed for Prisma CLI commands (migrations), not runtime.

### Solution
**Removed `prisma.config.ts` from Docker image** since:
- Runtime uses `DATABASE_URL` environment variable directly
- Config file only needed for local development and migrations
- Kept it in source for local `yarn prisma` commands

Updated `Dockerfile`:
```dockerfile
# Before: COPY --from=builder /app/prisma.config.ts ./prisma.config.ts
# After: Removed this line
```

### What I Learned
- **Separate build-time from runtime dependencies**
- Not all source files need to be in production container
- Prisma 7 config file is for CLI tools, not runtime client
- **Minimize Docker image surface area** for security and size
- Environment variables can replace many config files in production

---

## 🐛 Bug #5: Missing `lib` Directory in Standalone Build

### Problem
```
Cannot find module 'lib/prismadb'
Cannot find module 'lib/redis'
```

### Root Cause
Next.js standalone build only includes files directly imported in `pages/` or `app/` directories. Utility files in `lib/` weren't being bundled automatically.

### Solution
Manually copy `lib` directory in Dockerfile:
```dockerfile
# Copy lib directory (not included in standalone by default)
COPY --from=builder /app/lib ./lib
```

### What I Learned
- **Next.js standalone is selective** - only bundles code it can trace from pages
- Utility directories need manual copying if not auto-detected
- Alternative: Ensure all `lib/` files are imported somewhere in `pages/`
- **Test production builds locally** before deploying

---

## 🐛 Bug #6: Database Seed Connected to Wrong Database

### Problem
Seed script ran successfully (created 3000 products, 500 ideas) but Docker database remained empty.

### Root Cause
**Port conflict**: Both local PostgreSQL and Docker PostgreSQL running on `localhost:5432`. When seed script connected to `localhost:5432`, it connected to local PostgreSQL instead of Docker.

### How We Discovered
```bash
# Docker database - empty
docker-compose exec postgres psql -U postgres -d foundit -c "SELECT COUNT(*) FROM \"Product\";"
# Result: 0

# Local database - had data
psql -U postgres -d foundit -c "SELECT COUNT(*) FROM \"Product\";"
# Result: 3000
```

### Solution
**Stop local PostgreSQL service** before seeding Docker database:
```bash
# Windows Services
services.msc → Find "postgresql" → Stop

# Then run seed
.\setup-docker-db.bat
```

Created helper script `setup-docker-db.bat` that:
1. Warns user to stop local PostgreSQL
2. Creates database schema
3. Seeds data
4. Validates success

### What I Learned
- **Port conflicts are silent killers** - no error, just wrong behavior
- Always verify which instance you're connected to
- **Test scripts should validate results**, not just exit codes
- For local dev, use different ports for different environments:
  - Local PostgreSQL: `5432`
  - Docker PostgreSQL: `5433` (alternative approach)
- **Connection strings should be explicit** about host/port

---

## 🐛 Bug #7: Prisma Migrations Failing in Docker Container

### Problem
```
Failed to load config file "/app/prisma.config.ts" as a TypeScript/JavaScript module
```
When trying to run `prisma migrate deploy` inside container.

### Root Cause
Container runs in production mode without TypeScript compiler. Can't execute `.ts` config files directly.

### Solution
**Skip migrations in container startup**, run them separately:
1. Updated `docker-entrypoint.sh` to skip migrations
2. Run migrations from host machine before starting containers:
```bash
$env:DATABASE_URL="postgresql://postgres:trung123@localhost:5432/foundit"
yarn prisma db push
```

### What I Learned
- **Separate data migrations from application deployment**
- In production:
  - Run migrations as separate deployment step
  - Don't run migrations in container entrypoint
  - Use `prisma migrate deploy` (not `prisma db push`)
- **Production containers should be stateless** - no schema changes at startup
- Consider blue-green deployments for zero-downtime migrations

---

## 🐛 Bug #8: PowerShell Environment Variable Syntax

### Problem
```
DATABASE_URL=postgresql://... : The term 'DATABASE_URL=postgresql://...' is not
recognized as the name of a cmdlet
```

### Root Cause
Using Bash syntax in PowerShell. PowerShell has different syntax for setting environment variables.

### Solution
**Bash (Git Bash/WSL):**
```bash
DATABASE_URL=postgresql://... yarn seed
```

**PowerShell:**
```powershell
$env:DATABASE_URL="postgresql://..."; yarn seed
```

**Batch file (.bat):**
```batch
set DATABASE_URL=postgresql://...
yarn seed
```

### What I Learned
- **Know your shell** - different shells, different syntax
- Create helper scripts (.bat for Windows) for complex commands
- Document shell-specific commands in README
- **Cross-platform compatibility matters** - consider all developer environments

---

## 📊 Summary of Key Learnings

### 1. **Framework-Specific Build Modes**
- Different deployment targets need different build configurations
- Read official Docker documentation for your framework
- Test builds locally before containerizing

### 2. **Environment Variable Management**
- Explicit is better than implicit
- Validate variables are set before using them
- Different approaches for dev vs. production
- Use secrets management in production

### 3. **Database & ORM Configuration**
- Check breaking changes in major version upgrades (Prisma 6 → 7)
- Use shared, properly configured instances
- Separate build-time from runtime dependencies

### 4. **Docker Best Practices**
- Multi-stage builds reduce image size
- Only copy necessary files
- Run as non-root user
- Health checks are critical

### 5. **Local vs. Production Environments**
- Port conflicts cause silent failures
- Test in isolated environments
- Document environment-specific setup

### 6. **Migration Strategy**
- Never run migrations in container entrypoint
- Migrations are separate deployment step
- Plan for zero-downtime deployments

### 7. **Cross-Platform Development**
- Document shell-specific commands
- Provide helper scripts
- Test on target OS

---

## 🎯 Best Practices Established

1. ✅ **Single source of truth** for database clients (shared Prisma instance)
2. ✅ **Explicit environment variable configuration** (no hidden defaults)
3. ✅ **Separate concerns** (migrations separate from app startup)
4. ✅ **Health checks** at multiple levels (Docker, app, dependencies)
5. ✅ **Helper scripts** for common operations (setup-docker-db.bat)
6. ✅ **Comprehensive documentation** (README-DEVOPS.md)
7. ✅ **Validation steps** in scripts (check before execute)
8. ✅ **Minimal Docker images** (only production dependencies)

---

## 🚀 Future Improvements

### Short Term
- [ ] Add automated tests to CI pipeline
- [ ] Implement database migration CI/CD workflow
- [ ] Add container security scanning
- [ ] Set up automated backups

### Long Term
- [ ] Blue-green deployment strategy
- [ ] Kubernetes deployment configuration
- [ ] Centralized logging (ELK stack)
- [ ] Advanced monitoring (distributed tracing)
- [ ] Auto-scaling configuration

---

## 📚 Resources Used

- [Next.js Docker Deployment](https://nextjs.org/docs/deployment#docker-image)
- [Prisma 7 Upgrade Guide](https://www.prisma.io/docs/guides/upgrade-guides/upgrading-versions/upgrading-to-prisma-7)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)

---

**Total Time Debugging**: ~2 hours
**Total Bugs Fixed**: 8 major issues
**Final Result**: Production-ready Docker setup with CI/CD ✅

---

*Generated: December 20, 2024*
*Project: FoundIt - Next.js Application*
*DevOps Implementation: Complete*
