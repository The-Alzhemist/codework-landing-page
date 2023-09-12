import { GTM_PRODUCTION } from '@/config/environment';

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import TagManager from 'react-gtm-module'
import Cookies from 'js-cookie';
import PDPAPopup from '@/features/PAPAPopup/PDPAPopup';



export default function App({ Component, pageProps }: AppProps) {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const userHasGivenConsent = Cookies.get('consent') === 'true';
    if (userHasGivenConsent) {
      setHasConsent(true);
      TagManager.initialize({ gtmId: GTM_PRODUCTION });
    }
  }, [hasConsent]);

  return (
    <>
    {!hasConsent && <PDPAPopup onAccept={() => setHasConsent(true)} />} 
      <Component {...pageProps} />
    </>
  ) 

}
