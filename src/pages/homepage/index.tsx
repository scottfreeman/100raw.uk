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
      <main className='text-white flex flex-col h-screen items-center justify-center align-middle from-gray-950 to-gray-700 bg-gradient-to-tl'>
        <div className='text-4xl md:text-6xl -mt-10'>100raw.uk</div>
      </main>
      <Footer />
    </>
  );
}
