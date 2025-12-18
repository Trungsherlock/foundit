import {NextPage} from 'next';
import { GetServerSideProps } from 'next';
import { Category, Type } from '@prisma/client';
import { Layout } from '../src/components/layout';
import { Ideas } from '../src/components/templates/ideas';
import { prisma } from '../lib/prismadb';
import { cache } from '../lib/redis';
import { TIdeas } from '@/components/templates/ideas/types';

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {

    const CACHE_KEY = 'ideas:all';
    const cachedIdeas = await cache.get(CACHE_KEY);

    if (cachedIdeas) {
        return {
            props: { ideas: cachedIdeas },
        };
    }

    const ideas = await prisma.idea.findMany();
    await cache.set(CACHE_KEY, ideas, 300);

    return {
        props: { ideas: JSON.parse(JSON.stringify(ideas))},
    }
}

const IdeaPage: NextPage<TIdeas> = ({ideas}) => {

    return (
        <Layout>
            <Ideas ideas = {ideas}/>
        </Layout>
    );
};

export default IdeaPage;