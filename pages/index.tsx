import type { NextPage } from 'next'
import { Layout } from '../src/components/layout'
import { Home } from '../src/components/templates/home';

const HomePage: NextPage = () => {

  return (
    <Layout>
      <Home/>
    </Layout>
  )
}

export default HomePage