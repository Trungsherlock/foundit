# FoundIt - DevOps Documentation

Complete guide for Docker, CI/CD, monitoring, and deployment.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Local Development with Docker](#local-development-with-docker)
- [CI/CD Pipeline](#cicd-pipeline)
- [Monitoring & Health Checks](#monitoring--health-checks)
- [Production Deployment](#production-deployment)
- [Troubleshooting](#troubleshooting)

---

## 🎯 Overview

FoundIt is a Next.js application with:
- **Frontend/Backend**: Next.js 16.1.0 (React 19.2.3)
- **Database**: PostgreSQL with Prisma ORM 7.2.0
- **Caching**: Redis (ioredis)
- **Authentication**: NextAuth.js
- **Package Manager**: Yarn

### DevOps Features

✅ Docker containerization with multi-stage builds
✅ Docker Compose for local development
✅ GitHub Actions CI/CD pipelines
✅ Health check endpoints
✅ Prometheus metrics & Grafana dashboards
✅ Automated testing and linting
✅ Production-ready configuration

---

## 🏗️ Architecture

### Container Architecture

```
┌─────────────────────────────────────┐
│         Docker Compose              │
├─────────────────────────────────────┤
│                                     │
│  ┌──────────┐  ┌──────────┐       │
│  │PostgreSQL│  │  Redis   │       │
│  │  :5432   │  │  :6379   │       │
│  └────┬─────┘  └────┬─────┘       │
│       │             │              │
│       └─────┬───────┘              │
│             │                      │
│      ┌──────▼──────┐              │
│      │  Next.js    │              │
│      │  App :3000  │              │
│      └─────────────┘              │
│                                     │
└─────────────────────────────────────┘
```

### Application Stack

- **App Container**: Node.js 20 Alpine with Next.js standalone build
- **Database**: PostgreSQL 16 Alpine with persistent volumes
- **Cache**: Redis 7 Alpine with AOF persistence
- **Network**: Bridge network for inter-container communication

---

## 🐳 Local Development with Docker

### Prerequisites

- Docker Desktop installed
- Docker Compose installed
- Git Bash or WSL (for Windows)

### Quick Start

```bash
# 1. Clone the repository
git clone <repository-url>
cd foundit

# 2. Start all services
docker-compose up -d

# 3. Setup database (first time only)
.\setup-docker-db.bat

# 4. Access the application
open http://localhost:3000
```

### Docker Commands

```bash
# Start all containers
docker-compose up -d

# Stop all containers
docker-compose down

# View logs
docker-compose logs -f app

# Restart app only
docker-compose restart app

# Rebuild containers
docker-compose up -d --build

# Stop and remove volumes (WARNING: deletes data)
docker-compose down -v
```

### Database Management

```bash
# Setup database (create tables + seed data)
.\setup-docker-db.bat

# Access PostgreSQL CLI
docker-compose exec postgres psql -U postgres -d foundit

# Run migrations
$env:DATABASE_URL="postgresql://postgres:trung123@localhost:5432/foundit"
yarn prisma migrate deploy

# Access Redis CLI
docker-compose exec redis redis-cli

# Check data
docker-compose exec postgres psql -U postgres -d foundit -c "SELECT COUNT(*) FROM \"Product\";"
```

---

## 🔄 CI/CD Pipeline

### GitHub Actions Workflows

Located in `.github/workflows/`:

#### **CI Pipeline** (`ci.yml`)

Triggers on:
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop`

Steps:
1. **Lint & Type Check** - ESLint + TypeScript validation
2. **Build** - Next.js production build
3. **Docker Build Test** - Validates Docker image builds
4. **Security Scan** - Trivy vulnerability scanner

```bash
# Manually trigger CI
git push origin main
```

#### **CD Pipeline** (`cd.yml`)

Triggers on:
- Push to `main` branch
- Manual workflow dispatch

Steps:
1. **Build Docker Image** - Multi-stage production build
2. **Push to Registry** - GitHub Container Registry (ghcr.io)
3. **Tag Images** - Version, branch, SHA, and `latest`
4. **Deploy** - (Customize deployment step)

```bash
# Manually trigger CD
gh workflow run cd.yml
```

### Setting Up GitHub Secrets

Go to: **Repository → Settings → Secrets → Actions**

Add these secrets:

```
NEXTAUTH_SECRET=<your-secret>
GOOGLE_ID=<google-oauth-id>
GOOGLE_SECRET=<google-oauth-secret>
GITHUB_ID=<github-oauth-id>
GITHUB_SECRET=<github-oauth-secret>
EMAIL_SERVER_HOST=<smtp-host>
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=<smtp-user>
EMAIL_SERVER_PASSWORD=<smtp-password>
EMAIL_FROM=<sender-email>
NEXT_PUBLIC_SUPABASE_URL=<supabase-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<supabase-key>
OPENAI_API_KEY=<openai-key>
```

---

## 📊 Monitoring & Health Checks

### Health Check Endpoints

#### `/api/health`

Comprehensive health check with database, Redis, and memory checks.

**Response (healthy)**:
```json
{
  "status": "healthy",
  "timestamp": "2025-12-21T04:14:56.330Z",
  "uptime": 25.34,
  "checks": {
    "database": "ok",
    "redis": "ok",
    "memory": {
      "used": 46,
      "total": 68,
      "percentage": 68
    }
  },
  "version": "1.0.0"
}
```

**Test it**:
```bash
curl http://localhost:3000/api/health
```

#### `/api/ready`

Simple readiness probe for Kubernetes/orchestration.

```bash
curl http://localhost:3000/api/ready
```

#### `/api/metrics`

Prometheus-compatible metrics endpoint.

```bash
curl http://localhost:3000/api/metrics
```

### Docker Health Checks

The Dockerfile includes automatic health checking:

```dockerfile
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/api/health', ...)"
```

Check container health:
```bash
docker ps
# Look for "healthy" status
```

### Monitoring Stack (Optional)

Run Prometheus + Grafana:

```bash
docker-compose -f docker-compose.yml -f docker-compose.monitoring.yml up -d

# Access Grafana
open http://localhost:3001
# Default: admin/admin

# Access Prometheus
open http://localhost:9090
```

---

## 🚀 Production Deployment

### Building for Production

```bash
# Build Docker image
docker build -t foundit:latest .

# Or use docker-compose
docker-compose build app
```

### Environment Variables

Required for production:

```bash
# Database
DATABASE_URL=postgresql://user:pass@host:5432/dbname

# Redis
REDIS_HOST=production-redis-host
REDIS_PORT=6379

# NextAuth
NEXTAUTH_URL=https://yourdomain.com
NEXTAUTH_SECRET=<generate-with-openssl-rand-base64-32>

# OAuth (optional)
GOOGLE_ID=<production-google-id>
GOOGLE_SECRET=<production-google-secret>
GITHUB_ID=<production-github-id>
GITHUB_SECRET=<production-github-secret>

# Email (optional)
EMAIL_SERVER_HOST=<production-smtp>
EMAIL_FROM=<production-email>

# Application
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

### Deployment Options

#### **Option 1: Docker Compose (VPS/Server)**

```bash
# On your server
git clone <repo>
cd foundit

# Create .env.production file with your secrets
cp .env.example .env.production

# Start services
docker-compose --env-file .env.production up -d

# Run migrations
docker-compose exec app npx prisma migrate deploy
```

#### **Option 2: Kubernetes**

```bash
# Deploy to Kubernetes
kubectl apply -f k8s/

# Check status
kubectl get pods
kubectl logs -f <pod-name>
```

#### **Option 3: Cloud Platforms**

- **AWS ECS/Fargate**: Use GitHub Actions CD to push to ECR
- **Google Cloud Run**: Deploy container directly
- **Azure Container Apps**: Use Azure Container Registry
- **Vercel**: Use Vercel CLI (no Docker needed)

### GitHub Container Registry

Images are automatically pushed to:
```
ghcr.io/<username>/foundit:latest
ghcr.io/<username>/foundit:main
ghcr.io/<username>/foundit:<sha>
```

Pull and run:
```bash
docker pull ghcr.io/<username>/foundit:latest
docker run -p 3000:3000 \
  -e DATABASE_URL=<url> \
  -e REDIS_HOST=<host> \
  ghcr.io/<username>/foundit:latest
```

---

## 🔧 Troubleshooting

### Common Issues

#### 1. **Docker Container Won't Start**

```bash
# Check logs
docker-compose logs app

# Common fixes:
# - Rebuild: docker-compose build app
# - Check environment variables
# - Ensure postgres/redis are healthy
```

#### 2. **Database Tables Don't Exist**

```bash
# Run setup script
.\setup-docker-db.bat

# Or manually:
$env:DATABASE_URL="postgresql://postgres:trung123@localhost:5432/foundit"
yarn prisma db push
yarn seed
```

#### 3. **Port 3000 Already in Use**

```bash
# Find process using port
netstat -ano | findstr :3000

# Kill process or change port in docker-compose.yml:
ports:
  - "3001:3000"  # Change to 3001
```

#### 4. **Seed Data Goes to Wrong Database**

Make sure local PostgreSQL is stopped:
```bash
# Windows Services
services.msc
# Find "postgresql" → Stop

# Then run setup
.\setup-docker-db.bat
```

#### 5. **Health Check Failing**

```bash
# Test health endpoint
curl http://localhost:3000/api/health

# Check if postgres/redis are accessible
docker-compose exec app ping postgres
docker-compose exec app ping redis
```

### Debug Commands

```bash
# Enter running container
docker-compose exec app sh

# Check environment variables
docker-compose exec app env | grep DATABASE_URL

# Test database connection
docker-compose exec postgres psql -U postgres -d foundit -c "SELECT 1;"

# Test Redis connection
docker-compose exec redis redis-cli ping

# View container resource usage
docker stats
```

---

## 📝 File Structure

```
foundit/
├── .github/
│   └── workflows/
│       ├── ci.yml                 # CI pipeline
│       └── cd.yml                 # CD pipeline
├── pages/
│   └── api/
│       ├── health.ts             # Health check endpoint
│       ├── ready.ts              # Readiness probe
│       └── metrics.ts            # Prometheus metrics
├── prisma/
│   ├── schema.prisma             # Database schema
│   ├── migrations/               # Database migrations
│   └── seed.ts                   # Seed script
├── lib/
│   ├── prismadb.ts              # Prisma client
│   └── redis.ts                  # Redis client
├── monitoring/
│   ├── prometheus.yml            # Prometheus config
│   └── grafana/                  # Grafana dashboards
├── Dockerfile                    # Multi-stage production build
├── docker-compose.yml            # Local development stack
├── docker-compose.monitoring.yml # Monitoring stack
├── .dockerignore                 # Docker build exclusions
├── docker-entrypoint.sh          # Container startup script
├── setup-docker-db.bat           # Database setup utility
└── README-DEVOPS.md              # This file
```

---

## 🔗 Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Docker Documentation](https://docs.docker.com/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Redis Documentation](https://redis.io/documentation)

---

## 📄 License

[Your License Here]

---

**Built with ❤️ using Next.js, Docker, and GitHub Actions**
