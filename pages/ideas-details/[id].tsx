import { NextPage } from 'next';
import { Layout } from '../../src/components/layout';
import { prisma } from '../../lib/prismadb';
import { IdeasDetails } from '../../src/components/templates/ideas-details';
import { TIdeasDetails } from '../../src/components/templates/ideas-details/types';

export const getServerSideProps = async ({ params }: any) => {
    const issueId = params.id;

    const issue = await prisma.idea.findUnique({
        where: {
            id: issueId
        },
        // include: {
        //     categories: true
        // }
    })


    if (issue) {
        return {
            props: {
                issue: JSON.parse(JSON.stringify(issue))
            }
        }
    }

    return {
        redirect: {
            destination: '/issues',
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
