import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';

import GoogleAnalytics from '@/helpers/GoogleAnalytics';
import SEO from '@/helpers/SEO';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      <GoogleAnalytics />
      <SEO />
    </>
  );
}
