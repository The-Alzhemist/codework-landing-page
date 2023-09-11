import { GTM_PRODUCTION } from '@/config/environment';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import TagManager from 'react-gtm-module'



export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    TagManager.initialize({ gtmId: GTM_PRODUCTION });
}, []);

  return <Component {...pageProps} />
}
