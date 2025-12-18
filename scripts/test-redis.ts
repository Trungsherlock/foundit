import { redis, cache } from "../lib/redis";

async function testRedis() {
    console.log("Testing Redis")

    try {
        await redis.ping();
        console.log('Redis is connected!');

        await cache.set('test-key', {message: 'Hello Redis!'}, 60);
        const data = await cache.get('test-key');
        console.log('Cache set/get works:', data);

        const start = Date.now();
        await cache.set('spped-test', {data: 'performance'});
        await cache.get('speed-test');
        const end = Date.now();
        console.log(`Redis response time: ${end - start}ms`);

        await cache.del('test-key');
        await cache.del('speed-test');

        console.log('All tests passed!');
        process.exit(0);
    } catch (error) {
        console.log('Redis connection falied:', error);
        process.exit(1);
    }
}

testRedis();