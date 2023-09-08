import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import TagManager from 'react-gtm-module'



export default function App({ Component, pageProps }: AppProps) {

  const sgt = 'GTM-5TFLN7ZM'
  useEffect(() => {
    TagManager.initialize({ gtmId: sgt });
}, []);

  return <Component {...pageProps} />
}
