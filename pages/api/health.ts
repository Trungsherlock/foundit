import type { NextApiRequest, NextApiResponse } from 'next';
import { redis } from 'lib/redis';
import { prisma } from 'lib/prismadb';

type HealthStatus = {
    status: 'healthy' | 'unhealthy'
    timestamp: string
    uptime: number
    checks: {
        database: 'ok' | 'error'
        redis: 'ok' | 'error'
        memory: {
            used: number 
            total: number
            percentage: number
        }
    }
    version?: string
    error?: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<HealthStatus>
) {
    const startTime = Date.now();

    const checks = {
        database: 'error' as 'ok' | 'error',
        redis: 'error' as 'ok' | 'error',
        memory: {
            used: 0,
            total: 0,
            percentage: 0
        }
    }

    try {
        try {
            await prisma.$queryRaw`SELECT 1`
            checks.database = 'ok'
        } catch (error) {
            console.error('Database health check failed:', error)
        }

        try {
            await redis.ping()
            checks.redis = 'ok'
        } catch (error) {
            console.error('Redis health check failed:', error)
        }

        const memUsage = process.memoryUsage()
        checks.memory = {
            used: Math.round(memUsage.heapUsed / 1024 / 1024),
            total: Math.round(memUsage.heapTotal / 1024 / 1024),
            percentage: Math.round((memUsage.heapUsed / memUsage.heapTotal) * 100)
        }

        const isHealthy = checks.database === 'ok' && checks.redis === 'ok'
        const statusCode = isHealthy ? 200 : 503

        const response: HealthStatus = {
            status: isHealthy ? 'healthy' : 'unhealthy',
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
            checks,
            version: process.env.npm_package_version || '1.0.0'
        }

        res.status(statusCode).json(response)
    } catch (error) {
        console.error('Health check failed:', error)
        res.status(503).json({
            status: 'unhealthy',
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
            checks,
            error: error instanceof Error ? error.message : 'Unknown error'
        })
    }
}