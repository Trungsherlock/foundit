import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { cache } from '../lib/redis';

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'foundit',
  user: 'postgres',
  password: 'trung123',
});
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

async function benchmark() {
  console.log('Performance Benchmark\n');
  console.log('Testing query performance with 3000+ products...\n');

  // Clear Redis cache to get accurate baseline
  await cache.flush();
  console.log('✓ Cleared Redis cache\n');

  // Test 1: Direct database query (no cache)
  console.log('📊 Test 1: Direct PostgreSQL Query (No Cache)');
  const dbStart = Date.now();
  const productsFromDB = await prisma.product.findMany();
  const dbTime = Date.now() - dbStart;
  console.log(`   ⏱️  Time: ${dbTime}ms`);
  console.log(`   📦 Records: ${productsFromDB.length}`);
  console.log('');

  // Save to cache
  await cache.set('products:all', productsFromDB, 300);

  // Test 2: Redis cached query
  console.log('📊 Test 2: Redis Cached Query');
  const cacheStart = Date.now();
  const productsFromCache = await cache.get('products:all');
  const cacheTime = Date.now() - cacheStart;
  console.log(`   ⏱️  Time: ${cacheTime}ms`);
  console.log(`   📦 Records: ${Array.isArray(productsFromCache) ? productsFromCache.length : 0}`);
  console.log('');

  // Calculate improvement
  const improvement = ((dbTime - cacheTime) / dbTime * 100).toFixed(1);
  const speedup = (dbTime / cacheTime).toFixed(1);

  console.log('📈 Results:');
  console.log(`   🐌 Database Query: ${dbTime}ms`);
  console.log(`   ⚡ Cached Query: ${cacheTime}ms`);
  console.log(`   📉 Improvement: ${improvement}% faster`);
  console.log(`   🚀 Speed Multiplier: ${speedup}x faster`);
  console.log('');

  // Test with indexes
  console.log('📊 Test 3: Indexed Query (Sort by vote)');
  const indexStart = Date.now();
  const topProducts = await prisma.product.findMany({
    orderBy: { vote: 'desc' },
    take: 10,
  });
  const indexTime = Date.now() - indexStart;
  console.log(`   ⏱️  Time: ${indexTime}ms`);
  console.log(`   📦 Top product votes: ${topProducts[0]?.vote || 0}`);
  console.log('');

  console.log('✅ Benchmark complete!\n');

  await prisma.$disconnect();
  process.exit(0);
}

benchmark().catch((e) => {
  console.error('❌ Benchmark failed:', e);
  process.exit(1);
});
