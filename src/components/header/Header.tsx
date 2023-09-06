import React from 'react';
import Image from 'next/image';

import logo from '../../../public/images/100rawlogo.jpg';
import Container from '../atoms/Container';
import { fonts } from '@/helpers/fonts';

const Header = () => {
  return (
    <header className='bg-white text-black py-5'>
      <Container>
        <div className='flex items-center flex-col md:flex-row'>
          <div className='mr-4'>
            <Image src={logo} alt='100% Raw Powerlifting UK' width={200} />
          </div>
          <div className={`${fonts.header.className} text-5xl uppercase hidden md:block`}>100% RAW Powerlifting UK</div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
