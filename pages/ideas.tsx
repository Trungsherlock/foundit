import {NextPage} from 'next';
import { GetServerSideProps } from 'next';
import { Category, Type } from 'types/WebData';
import { Layout } from '../src/components/layout';
import { Ideas } from '../src/components/templates/ideas';
import {prisma} from '../lib/prismadb';
import { TIdeas } from '@/components/templates/ideas/types';

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {

    const ideas = await prisma.idea.findMany();

    return {
        props: { ideas: JSON.parse(JSON.stringify(ideas))},
    }
}

const IdeaPage: NextPage<TIdeas> = ({ideas}) => {
    // const ideas = [
    //     {
    //         id: "1",
    //         title: "nothin",
    //         type: [Type.AI],
    //         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    //         feature: "string",
    //         createdAt: "string",
    //         updatedAt: "string",
    //         authorId: "string",
    //         author: "string",
    //         categories: [Category.ADVERTISING],
    //     },
    //     {
    //         id: "1",
    //         title: "nothin",
    //         type: [Type.AI],
    //         description: "string",
    //         feature: "string",
    //         createdAt: "string",
    //         updatedAt: "string",
    //         authorId: "string",
    //         author: "string",
    //         categories: [Category.ADVERTISING],
    //     },
    //     {
    //         id: "1",
    //         title: "nothin",
    //         type: [Type.AI],
    //         description: "string",
    //         feature: "string",
    //         createdAt: "string",
    //         updatedAt: "string",
    //         authorId: "string",
    //         author: "string",
    //         categories: [Category.ADVERTISING],
    //     },
    //     {
    //         id: "1",
    //         title: "nothin",
    //         type: [Type.AI],
    //         description: "string",
    //         feature: "string",
    //         createdAt: "string",
    //         updatedAt: "string",
    //         authorId: "string",
    //         author: "string",
    //         categories: [Category.ADVERTISING],
    //     },
    //     {
    //         id: "1",
    //         title: "nothin",
    //         type: [Type.AI],
    //         description: "string",
    //         feature: "string",
    //         createdAt: "string",
    //         updatedAt: "string",
    //         authorId: "string",
    //         author: "string",
    //         categories: [Category.ADVERTISING],
    //     },
    // ]

    return (
        <Layout>
            <Ideas ideas = {ideas}/>
        </Layout>
    );
};

export default IdeaPage;