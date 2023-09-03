import React from 'react';

type Props = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileMenuButton = ({ mobileMenuOpen, setMobileMenuOpen }: Props) => {
  return (
    <button
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      type='button'
      className='mx-4 inline-flex items-center justify-center rounded-md p-2 text-offwhite md:text-gray-400 hover:bg-gray-700 hover:text-offwhite focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
    >
      <svg
        className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
      </svg>
      <svg
        className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        aria-hidden='true'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
      </svg>
      <span className='pl-2'>Menu</span>
    </button>
  );
};

export default MobileMenuButton;
