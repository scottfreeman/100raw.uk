import React from 'react';
import Script from 'next/script';

const GoogleAnalytics = () => {
  const GA = 'G-YB6B2T63DC';

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA}`} />
      <Script id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
