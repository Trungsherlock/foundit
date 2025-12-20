import { PrismaClient, Category, Type } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { faker } from '@faker-js/faker';

// Use explicit connection parameters to avoid password parsing issues
const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'foundit',
  user: 'postgres',
  password: 'trung123',
  connectionTimeoutMillis: 5000,
});
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
  log: ['error'],
});

function getRandomItems<T>(arr: T[], count: number): T[] {
    const shuffed = [...arr].sort(() => 0.5 - Math.random());
    return shuffed.slice(0, count);
}

function getRandomEnum<T extends Record<string, any>>(enumObj: T): T[keyof T] {
    const values = Object.values(enumObj);
    return values[Math.floor(Math.random() * values.length)] as T[keyof T];
}

const categories = Object.values(Category);
const types = Object.values(Type);

async function main() {
    console.log('Starting seed...\n');

    const testUser = await prisma.user.upsert({
        where: { email: 'test@foundit.com' },
        update: {},
        create: {
            email: 'test@foundit.com',
            name: 'Test User',
            bio: 'Seeded test user for FoundIt',
            point: 100,
        },
    });

    console.log(`Created test user: ${testUser.email}\n`);

    console.log(`\n Seeding 3000 products...`);
    const productsToCreate = 3000;
    const batchSize = 100;
    for (let i = 0; i < productsToCreate; i += batchSize) {
        const batch = [];
        const remaining = Math.min(batchSize, productsToCreate - i);

        for (let j = 0; j < remaining; j++) {
            batch.push({
                title: faker.company.catchPhrase(),
                type: [getRandomEnum(Type)],
                brief: faker.company.buzzPhrase(),
                description: faker.lorem.paragraph(2),
                link: faker.internet.url(),
                image: [faker.image.url()],
                vote: faker.number.int({ min: 0, max: 500 }),
                authorId: testUser.id,
                categories: getRandomItems(categories, faker.number.int({ min: 1, max: 5 })),
                likeAuthor: [],
            });
        }

        await prisma.product.createMany({
            data: batch,
        });

        console.log(`Created ${i + remaining}/${productsToCreate} products`);
    }

    // Seed 500 ideas
    console.log('\n Seeding 500 ideas...');
    const ideasToCreate = 500;

    for (let i = 0; i < ideasToCreate; i += batchSize) {
        const batch = [];
        const remaining = Math.min(batchSize, ideasToCreate - i);

        for (let j = 0; j < remaining; j++) {
            batch.push({
                title: faker.company.catchPhrase(),
                type: [getRandomEnum(Type)],
                description: faker.lorem.paragraph(2),
                feature: faker.lorem.paragraph(),
                vote: faker.number.int({ min: 0, max: 200 }),
                authorId: testUser.id,
                categories: getRandomItems(categories, faker.number.int({ min: 1, max: 3 })),
                likeAuthor: [],
            });
        }

        await prisma.idea.createMany({
            data: batch,
        });
        console.log(`Created ${i + remaining}/${ideasToCreate} ideas`);
    }

    const productCount = await prisma.product.count();
    const ideaCount = await prisma.idea.count();
    console.log(`\nTotal products: ${productCount}`);
    console.log(`Total ideas: ${ideaCount}\n`);
} 


main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });