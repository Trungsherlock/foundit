import type { NextPage } from 'next'
import { Layout } from '../src/components/layout'
import { Chatgpt } from '../src/components/templates/chatgpt';

const ChatgptPage: NextPage = () => {

  return (
    <Layout>
      <Chatgpt/>
    </Layout>
  )
}

export default ChatgptPage