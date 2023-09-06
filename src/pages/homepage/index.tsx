import Head from 'next/head';

import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import Container from '@/components/atoms/Container';

export default function Homepage() {
  return (
    <>
      <Head>
        <title>100raw.uk</title>
      </Head>
      <Header />
      {/* <Navbar /> */}
      <div className='bg-red-700 h-10 mb-4'>&nbsp;</div>
      <Container>
        <div className='text-center text-2xl'>Website coming soon!</div>
      </Container>
      <Footer />
    </>
  );
}
