import type { AppProps } from 'next/app';
import "../src/styles/app.sass";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
