import Head from 'next/head';

import '../styles/global.css';

import React, { useEffect } from 'react';
import { Workbox } from 'workbox-window';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.OneSignal = window.OneSignal || [];

    OneSignal.push(function () {
      OneSignal.init({
        appId: 'ab6f6d29-5824-4b7e-a023-70767d69b25a',
        safari_web_id: '',
        promptOptions: {
          slidedown: {
            enabled: true,
            autoPrompt: true,
            timeDelay: 20,
            pageViews: 3,
          },
        },
      });

      OneSignal.isPushNotificationsEnabled(function (isEnabled) {
        if (isEnabled) {
          console.log('Push notifications are enabled!');
        } else {
          console.log('Push notifications are not enabled yet.');
        }
      });
    });

    if (!('serviceWorker' in navigator) || process.env.NODE_ENV !== 'production') {
      console.warn('Progressive Web App support is disabled');
      return;
    }

    const wb = new Workbox('/OneSignalSDKWorker.js');
    wb.register();

    return () => {
      window.OneSignal = undefined;
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <title>A Powerful Regulatory Management Suite - Copperbell</title>
        <link rel="manifest" href="/manifest.json" />
        <link href="/icons/icon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/icons/icon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon-180x180.png"></link>
        <meta name="theme-color" content="#7C6A54" />
        <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
