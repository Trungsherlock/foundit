import type { NextPage } from 'next'
import { Layout } from '../src/components/layout'
import { Login } from '../src/components/templates/login';

const LoginPage: NextPage = () => {

  return (
    <Layout>
      <Login/>
    </Layout>
  )
}

export default LoginPage