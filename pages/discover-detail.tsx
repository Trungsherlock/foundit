import type { NextPage } from 'next'
import { Layout } from '../src/components/layout';
import {Details} from "../src/components/templates/details"
import {prisma} from '../lib/prismadb';

const DetailsPage: NextPage = () => {

  return (
    <Layout>
      <Details/>
    </Layout>
  )
}

export default DetailsPage