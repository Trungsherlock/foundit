import type { NextPage } from 'next'
import { Layout } from '../../src/components/layout';
import {PostsDetails} from "../../src/components/templates/posts-details"
import {prisma} from '../../lib/prismadb';
import { TProductDetails } from '@/components/templates/details/types';

export const getServerSideProps = async ({ params }: any) => {
  const productId = params.id;

  const product = await prisma.product.findUnique({
      where: {
          id: productId
      },
  })


  if (product) {
      return {
          props: {
              product: JSON.parse(JSON.stringify(product))
          }
      }
  }

  return {
      redirect: {
          destination: '/',
          permanent: false
      }
  }
}

const DetailsPage: NextPage<TProductDetails> = ({product}) => {

  return (
    <Layout>
      <PostsDetails product = {product}/>
    </Layout>
  )
}

export default DetailsPage