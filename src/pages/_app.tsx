import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import GoogleAnalytics from '@/helpers/GoogleAnalytics';
import SEO from '@/helpers/SEO';
import '@/helpers/fonts';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics />
      <SEO />
    </>
  );
}
