#!/bin/sh
set -e

echo "=== Environment Check ==="
echo "NODE_ENV: $NODE_ENV"
echo "DATABASE_URL is set: $(if [ -n "$DATABASE_URL" ]; then echo "YES"; else echo "NO"; fi)"

if [ -z "$DATABASE_URL" ]; then
  echo "ERROR: DATABASE_URL is not set!"
  exit 1
fi

echo ""
echo "=== Running Prisma Migrations ==="
# Skip migrations for now since prisma.config.ts causes issues in standalone
# Migrations should be run separately before deployment
echo "Skipping migrations in Docker (run separately if needed)"

echo ""
echo "=== Starting Application ==="
exec node server.js
