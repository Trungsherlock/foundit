import Redis from 'ioredis';

const globalForRedis = global as unknown as { redis: Redis };

export const redis = 
    globalForRedis.redis ||
    new Redis({
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT || '6379'),
        password: process.env.REDIS_PASSWORD,
        maxRetriesPerRequest: 3,
        retryStrategy(times) {
            const delay = Math.min(times * 50, 2000);
            return delay;
        },
    });

if (process.env.NODE_ENV !== 'production') {
    globalForRedis.redis = redis;
}

export const cache = {
    async get<T>(key: string): Promise<T | null> {
        const data = await redis.get(key);
        return data ? JSON.parse(data): null;
    },

    async set(key: string, value: any, expirationInSeconds = 300): Promise<void> {
        await redis.setex(key, expirationInSeconds, JSON.stringify(value));
    },

    async del(key: string): Promise<void> {
        await redis.del(key);
    },

    async flush(): Promise<void> {
        await redis.flushall();
    },
};

