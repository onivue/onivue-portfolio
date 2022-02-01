import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { Layout } from '@/components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no ,height=device-height"
                />
                <title>onivue-portfolio</title>
            </Head>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    )
}

export default MyApp
