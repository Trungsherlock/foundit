/* eslint-disable react-hooks/exhaustive-deps */
import { NextPage } from 'next';
import { Layout } from '../../src/components/layout';
import { Profile } from '../../src/components/templates/profile';
import { useSession } from "next-auth/react";
import { prisma } from '../../lib/prismadb';
import { IProfile } from '../../src/components/templates/profile/types';


export const getServerSideProps = async ({ params } : any) => {
    const userId = params.id;
    
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    const products = await prisma.product.findMany({
        where: { authorId: userId },
    });

    const ideas = await prisma.idea.findMany({
        where: { authorId: userId },
    });


    if (user && products && ideas) {
        return {
            props: {
                user: JSON.parse(JSON.stringify(user)),
                products: JSON.parse(JSON.stringify(products)),
                ideas: JSON.parse(JSON.stringify(ideas)),
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


const ProfilePage: NextPage<IProfile> = ({ user, products, ideas}) => {
    const { data: session } = useSession();
    if (session?.user) {
        return (
            <Layout>
                <Profile 
                    user={user}
                    products = {products}
                    ideas = {ideas}
                />
            </Layout>
        )
    }

    return (
        <Layout>
            <div>Loading User Profile ...</div>
        </Layout>
    )

};

export default ProfilePage;