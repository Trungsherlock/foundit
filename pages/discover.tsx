import type { NextPage } from 'next'
import { GetServerSideProps } from 'next';
import { Layout } from '../src/components/layout';
import { Discover } from '../src/components/templates/discover';
import {prisma} from '../lib/prismadb';
import { TProducts } from '@/components/templates/discover/types';
import { cache } from '../lib/redis';

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
  const CACHE_KEY = 'products:all';
  const cachedProducts = await cache.get(CACHE_KEY);

  if (cachedProducts) {
    return {
      props: { products: JSON.parse(JSON.stringify(cachedProducts)) },
    };
  }

  const products = await prisma.product.findMany();
  const serializedProducts = JSON.parse(JSON.stringify(products));
  await cache.set(CACHE_KEY, serializedProducts, 300);

  return {
    props: { products: serializedProducts },
  };
}


const DiscoverPage: NextPage<TProducts> = ({products}) => {

  return (
    <Layout>
      <Discover products = {products}/>
    </Layout>
  )
}

export default DiscoverPage