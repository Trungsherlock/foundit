import type { NextPage } from 'next'
import { GetServerSideProps } from 'next';
import { Layout } from '../src/components/layout';
import { Discover } from '../src/components/templates/discover';
import {prisma} from '../lib/prismadb';
import { TProducts } from '@/components/templates/discover/types';

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {

  const products = await prisma.product.findMany();

  return {
      props: { products: JSON.parse(JSON.stringify(products))},
  }
}


const DiscoverPage: NextPage<TProducts> = ({products}) => {

  return (
    <Layout>
      <Discover products = {products}/>
    </Layout>
  )
}

export default DiscoverPage