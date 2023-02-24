import type { NextPage } from 'next'
import { Layout } from '../src/components/layout'
import { Profile } from '../src/components/templates/profile';

const user = {
    id: '1',
    //userId:string;
    //type: string;
    //provider: string;
    //providerAccountId: string;
    name: "string",
    address: "string", // Wallet address of user
    avatar: "/images/mock-logo/1.webp",
    bio: "string",
    facebook: "string",
    twitter: "string",
    instagram: "string",
    createdAt: "string",
}

const HomePage: NextPage = () => {

  return (
    <Layout>
      <Profile user={user}/>
    </Layout>
  )
}

export default HomePage