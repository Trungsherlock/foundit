import type { NextPage } from 'next'
import { Layout } from '../src/components/layout';
import { Discover } from '../src/components/templates/discover';
import {prisma} from '../lib/prismadb';
import { IdeasDetails } from '@/components/templates/ideas-details';

const IdeaDetailPage: NextPage = () => {

  return (
    <Layout>
      <IdeasDetails idea={{
              id: '',
              title: '',
              type: [],
              description: '',
              feature: '',
              createdAt: '',
              updatedAt: '',
              authorId: '',
              author: '',
              categories: []
          }}/>
    </Layout>
  )
}

export default IdeaDetailPage