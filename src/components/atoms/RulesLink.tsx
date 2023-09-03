import React from 'react';
import Link from 'next/link';

import Button from '@/components/atoms/Button';
import { fonts } from '@/helpers/fonts';

type Props = {
  title: string;
  link: string;
  buttonText?: string;
  isLast?: boolean;
};

const RulesLink = ({ title, link, buttonText = 'Download', isLast = false }: Props) => {
  return (
    <>
      <h2 className={`${fonts.header.className} uppercase text-center md:text-right text-3xl`}>{title}</h2>
      <div className='ml-4 md:w-56 text-center mt-4 md:mt-0 md:text-left'>
        <Button href={link} target='_blank'>
          {buttonText}
        </Button>
      </div>
      {!isLast && <hr className='border-red-800 col-span-3 my-4 md:my-0' />}
    </>
  );
};

export default RulesLink;
