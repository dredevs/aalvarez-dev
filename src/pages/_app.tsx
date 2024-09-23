import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>DreDevs</title> {/* Optional: Set a default title */}
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
