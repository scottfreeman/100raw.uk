import { fonts } from '@/helpers/fonts';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta
          name='keywords'
          content='100raw.uk, BPF, IPL, british powerlifting, powerlifting, weightlifting, strongman'
        />
        <meta name='author' content='Scott Freeman' />
      </Head>
      <body className={`${fonts.body.className}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
