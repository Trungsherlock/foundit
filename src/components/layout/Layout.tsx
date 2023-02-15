import { FC, ReactNode} from 'react';
import Head from 'next/head';
import { Header } from '../modules/header';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>  
            <Head>
                <title>FoundIt</title>
                <meta
                    content="Epic Idea Exchange Forum"
                    name="description" />
                <meta content="FoundIt - Idea Exchange Forum" property="og:title" />
                <meta
                    content="Epic Idea Exchange Forum"
                    property="og:description" />
                <meta content="%PUBLIC_URL%/fb-og-image.png" property="og:image" />
                <meta property="og:url" content="https://ui8.net/ui8/products/crypter-nft-marketplace-ui-kit" />
                <meta property="og:site_name" content="crypter-nft-marketplace-ui-kit" />
                <meta content="FoundIt - Idea Exchange Forum" property="twitter:title" />
                <meta
                    content="Premium Web UI Kit for Fitness Experience"
                    property="twitter:description" />
                <meta content="%PUBLIC_URL%/twitter-card.png" property="twitter:image" />
                <meta property="og:type" content="website" />
                <meta content="summary" name="twitter:card" />
                <meta name="twitter:site" content="@ui8" />
                <meta name="twitter:creator" content="@ui8" />
                <meta property="fb:admins" content="132951670226590" />
                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <link rel="apple-touch-icon" sizes="180x180" href="%PUBLIC_URL%/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="%PUBLIC_URL%/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="%PUBLIC_URL%/favicon-16x16.png" />
                <link rel="manifest" href="%PUBLIC_URL%/site.webmanifest" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
            </Head>
            <Header />
            <main>{children}</main>
        </>
    )
} 

export default Layout;