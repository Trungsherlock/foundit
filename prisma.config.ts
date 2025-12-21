// Only load dotenv in non-production or when .env files exist
if (process.env.NODE_ENV !== 'production') {
  try {
    require('dotenv/config')
  } catch (e) {
    // dotenv not available or no .env file, use environment variables directly
  }
}

import { defineConfig, env } from 'prisma/config'

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    url: env('DATABASE_URL'),
  },
})
