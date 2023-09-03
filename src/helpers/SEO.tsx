import React from 'react';
import { NextSeo } from 'next-seo';

const SEO = () => {
  const url = 'https://100raw.co';
  const title = '100raw.uk';
  const description = '';

  return (
    <NextSeo
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
        type: 'website',
        images: [
          {
            url: 'https://100raw.co/images/og-image.jpg',
            width: 1200,
            height: 630,
            alt: title,
            type: 'image/jpeg'
          }
        ],
        site_name: title
      }}
    />
  );
};

export default SEO;
