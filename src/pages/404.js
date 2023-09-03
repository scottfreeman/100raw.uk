import Head from 'next/head';
import Link from 'next/link';

import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import Container from '@/components/atoms/Container';
import { fonts } from '@/helpers/fonts';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found | 100raw.uk</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <Container className='py-10 text-xl'>
            <h1 className={`${fonts.header.className} uppercase text-7xl mb-4`}>Page Not Found</h1>
            <p className='mb-4'>The page you requested could not be found.</p>
            <p className='mb-4'>
              We recently launched a new website, so it's possible the page has been moved or deleted.
            </p>
            <p className='mb-4'>
              Please use the navigation to find the page you're looking for, or{' '}
              <Link href='/' className='text-blue-400 underline hover:text-red-600'>
                return to the homepage
              </Link>
              .
            </p>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
