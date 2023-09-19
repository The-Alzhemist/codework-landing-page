import { GTM_PRODUCTION, LOCAL_STORAGE_PDPA_KEY } from '@/config/environment';

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import TagManager from 'react-gtm-module'
import Cookies from 'js-cookie';
import PDPAPopup from '@/features/PAPAPopup/PDPAPopup';
import Head from 'next/head';



export default function App({ Component, pageProps }: AppProps) {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const userHasGivenConsent = typeof window !== 'undefined' && localStorage.getItem(LOCAL_STORAGE_PDPA_KEY);
    if (userHasGivenConsent) {
      setHasConsent(true);
      TagManager.initialize({ gtmId: GTM_PRODUCTION });
    }
  }, [hasConsent]);

  return (
    <>
    {!hasConsent && <PDPAPopup onAccept={() => setHasConsent(true)} />} 
    <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/seo/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/seo/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/seo/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <Component {...pageProps} />
    </>
  ) 

}
