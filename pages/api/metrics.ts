import type { NextApiRequest, NextApiResponse } from "next";
import { register, collectDefaultMetrics, Counter, Histogram } from 'prom-client';

collectDefaultMetrics()

export const httpRequestDuration = new Histogram({
    name: 'http_request_duration_seconds',
    help: 'Duration of HTTP requests in seconds',
    labelNames: ['method', 'route', 'status_code'],
})

export const httpRequestTotal = new Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'route', 'status_code'],
})

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET') {
        return res.status(405).end()
    }

    try {
        res.setHeader('Content-Type', register.contentType)
        const metrics = await register.metrics()
        res.status(200).send(metrics)
    } catch {
        res.status(500).json({ error: 'Failed to collect metrics' })
    }
}