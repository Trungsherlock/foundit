import type { AppProps } from 'next/app';
import "../src/styles/app.sass";
import { SessionProvider as AuthProvider } from 'next-auth/react';


export default function App({ Component, pageProps : {session, ...pageProps} }: AppProps) {
  return (
    <>
     <AuthProvider session = {session}>
      <Component {...pageProps} />
     </AuthProvider>
    </>
  )
}
