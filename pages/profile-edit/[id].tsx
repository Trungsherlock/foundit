import { NextPage } from 'next';
import { Layout } from '../../src/components/layout';
import { ProfileEdit } from '../../src/components/templates/profileEdit';
import { prisma } from '../../lib/prismadb';
import { useSession } from 'next-auth/react';
import { IProfileEdit } from '../../src/components/templates/profileEdit/types';

export const getServerSideProps = async ({ params } : any) => {
    const userId = params.id;
    
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    if (user) {
        return {
            props: {
                user: JSON.parse(JSON.stringify(user))
            }
        }  
    }

    return {
        redirect: {
            destination: '/login',
            permanent: false
        }
    }
}

const ProfileEditPage: NextPage<IProfileEdit> = ({ user }) => {
    const { data: session } = useSession();

    if (session?.user) {
        return (
            <Layout>
                <ProfileEdit
                    user={user}
                />
            </Layout>
        );
    }

    return (
        <Layout>
            <p>Not logged in</p>
        </Layout>
    )

    
};

export default ProfileEditPage;