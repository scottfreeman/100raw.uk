import React, { PropsWithChildren, useState } from 'react';

type Props = {
  href: string;
  text: string;
};

const DropdownMenu = ({ href, text, children }: PropsWithChildren<Props>) => {
  const [visible, setVisible] = useState(false);

  return (
    <ul
      className='md:flex md:items-center'
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <li className='w-100 md:w-auto'>
        <span
          className='select-none cursor-pointer hidden md:block text-gray-300 hover:bg-gray-700 hover:text-offwhite rounded-md px-3 py-2 text-sm font-medium'
          onClick={() => setVisible(!visible)}
        >
          {text}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='hidden md:inline w-4 h-4 ml-2 align-text-top'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
          </svg>
        </span>
        <a
          href='#'
          className='block text-gray-300 rounded-md px-3 py-2 text-sm font-medium md:hidden'
          onClick={(e) => {
            e.preventDefault();
            setVisible(!visible);
          }}
        >
          {text}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className={`${visible ? 'hidden' : 'inline-block'} w-4 h-4 ml-2`}
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className={`${visible ? 'inline-block' : 'hidden'} w-4 h-4 ml-2`}
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 15.75l7.5-7.5 7.5 7.5' />
          </svg>
        </a>
        <ul
          className={`${
            visible ? 'block' : 'hidden'
          } mt-4 bg-gray-700 flex flex-col space-y-4 p-4 rounded-md rounded-t-none md:absolute md:bg-gray-800 md:top-14 md:-mt-1.5 md:space-y-2`}
        >
          {children}
        </ul>
      </li>
    </ul>
  );
};

export default DropdownMenu;
