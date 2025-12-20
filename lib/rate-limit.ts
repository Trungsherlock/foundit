import { NextApiRequest, NextApiResponse } from 'next';
import { redis } from './redis';

interface RateLimitOptions {
    interval: number;
    uniqueTokenPerInterval: number;
}

export function rateLimit(options: RateLimitOptions) {
    return {
        check: async (req: NextApiRequest, res: NextApiResponse, limit: number) => {
            // Get client IP address
            const forwarded = req.headers['x-forwarded-for'];
            const ip = typeof forwarded === 'string'
                ? forwarded.split(',')[0]
                : req.socket.remoteAddress || 'unknown';

            // Create unique key for this IP
            const key = `rate=limit:${ip}`;

            try {
                // Get current request count
                const current = await redis.incr(key);

                if (current === 1) {
                    await redis.expire(key, options.interval / 1000);
                }

                if ( current > limit) {
                    res.status(429).json({
                        error: 'Rate limit exceeded',
                        message: `Too many requests. Please try again later.`,
                    });
                    return false;
                }

                res.setHeader('X-RateLimit-Limit', limit.toString());
                res.setHeader('X-RateLimit-Remaining', (limit - current).toString());

                return true;
            } catch (error) {
                console.error('Rate limit error:', error);
                return true;
            }
        },
    };
}

export const limiter = rateLimit({
    interval: 15 * 60 * 1000,
    uniqueTokenPerInterval: 500,
});
