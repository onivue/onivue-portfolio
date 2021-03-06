import Document, { Html, Head, Main, NextScript } from 'next/document'

const APP_NAME = 'onivue'
const APP_DESCRIPTION = 'Portfolio'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="apple-mobile-web-app-title" content={APP_NAME} />
                    <meta name="application-name" content={APP_NAME} />
                    <meta name="description" content={APP_DESCRIPTION} />
                    <meta name="theme-color" content="#f9e288" />
                    <meta charSet="utf-8" />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/icons/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/icons/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/icons/favicon-16x16.png"
                    />
                    <link rel="shortcut icon" href="/icons/favicon.ico" />
                    <link rel="icon" href="/favicon.ico" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
                        rel="stylesheet"
                    />
                    {/* <link rel="manifest" href="/manifest.json" /> */}
                </Head>

                <body className="bg-lightTheme antialiased transition-colors duration-300 selection:bg-amber-300 dark:bg-darkTheme">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
