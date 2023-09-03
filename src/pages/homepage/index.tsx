import Head from 'next/head';

import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';

export default function Homepage() {
  return (
    <>
      <Head>
        <title>100raw.uk</title>
      </Head>
      <Header />
      <Navbar />
      <main>Welcome to 100raw.uk</main>
      <Footer />
    </>
  );
}
