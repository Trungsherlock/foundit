import {NextPage} from 'next';
import { GetServerSideProps } from 'next';
import { Category, Type } from '@prisma/client';
import { Layout } from '../src/components/layout';
import { Ideas } from '../src/components/templates/ideas';
import { prisma } from '../lib/prismadb';
import { TIdeas } from '@/components/templates/ideas/types';

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {

    const ideas = await prisma.idea.findMany();

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