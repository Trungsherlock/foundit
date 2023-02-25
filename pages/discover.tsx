import type { NextPage } from 'next'
import { Layout } from '../src/components/layout';
import { Discover } from '../src/components/templates/discover';
import {prisma} from '../lib/prismadb';

const DiscoverPage: NextPage = () => {

  return (
    <Layout>
      <Discover/>
    </Layout>
  )
}

export default DiscoverPage