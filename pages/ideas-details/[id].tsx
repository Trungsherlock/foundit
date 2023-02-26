import { NextPage } from 'next';
import { Layout } from '../../src/components/layout';
import { prisma } from '../../lib/prismadb';
import { IdeasDetails } from '../../src/components/templates/ideas-details';
import { TIdeasDetails } from '../../src/components/templates/ideas-details/types';
export const getServerSideProps = async ({ params }: any) => {
    const ideasId = params.id;

    const idea = await prisma.idea.findUnique({
        where: {
            id: ideasId
        },
        // include: {
        //     categories: true
        // }
    })


    if (idea) {
        return {
            props: {
                idea: JSON.parse(JSON.stringify(idea))
            }
        }
    }

    return {
        redirect: {
            destination: '/ideas',
            permanent: false
        }
    }
}

const IdeasDetailsPage: NextPage<TIdeasDetails> = ({ idea }) => {
    return (
        <Layout>
            <IdeasDetails idea={idea} />
        </Layout>
    );
};

export default IdeasDetailsPage;
