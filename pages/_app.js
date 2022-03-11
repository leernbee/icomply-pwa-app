import Head from 'next/head';

import '../styles/global.css';

import React, { useEffect } from 'react';
import { Workbox } from 'workbox-window';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <title>A Powerful Regulatory Management Suite - iComply</title>
        <link rel="manifest" href="/manifest.json" />
        <link href="/icons/icon-48x48.png" rel="icon" type="image/png" sizes="48x48" />
        <link rel="apple-touch-icon" href="/icons/icon-152x152.png"></link>
        <meta name="theme-color" content="#7C6A54" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
