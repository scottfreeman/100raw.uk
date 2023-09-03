import React, { useState } from 'react';
import MobileMenuButton from './MobileMenuButton';
import DropdownItem from './DropdownItem';
import DropdownMenu from './DropdownMenu';
import Link from './Link';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className='navbar sticky top-24 z-50 md:relative bg-gray-800 text-offwhite md:h-16 md:top-0'>
      <div className='m-auto max-w-7xl px-0 lg:px-4'>
        <div className='md:flex md:items-center md:justify-between'>
          <div className='h-16 inset-y-0 left-0 flex items-center md:hidden'>
            <MobileMenuButton mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
          </div>
          <div
            className={`${
              mobileMenuOpen ? 'translate-x-0 mobile-menu' : '-translate-x-full'
            } min-h-screen md:min-h-0 px-4 absolute w-full bg-gray-800 transition ease-in-out pb-8 md:relative md:translate-x-0 md:px-0 md:pb-0 md:flex md:flex-1 md:items-center md:justify-start md:h-16`}
          >
            <div className='flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-0 lg:space-x-3'>
              <Link href='/'>Home</Link>
              <DropdownMenu href='/about' text='About Us'>
                <DropdownItem href='/about'>About Us</DropdownItem>
                <DropdownItem href='/meet-the-team'>Meet the Team</DropdownItem>
                <DropdownItem href='/academy'>Academy</DropdownItem>
                <DropdownItem href='/sponsors'>Sponsors</DropdownItem>
                <DropdownItem href='/ipl'>About the IPL</DropdownItem>
                <DropdownItem href='/contact'>Contact Us</DropdownItem>
              </DropdownMenu>
              <Link href='/membership'>Membership</Link>
              <Link href='/events'>Events</Link>
              <DropdownMenu href='/results' text='Results'>
                <DropdownItem href='/results/'>British Records 2023</DropdownItem>
                <DropdownItem href='/results/competitions'>Competition Results</DropdownItem>
                <DropdownItem href='/results/previous'>Previous British Records</DropdownItem>
              </DropdownMenu>
              <DropdownMenu href='/blog' text='Community'>
                <DropdownItem href='/blog'>Blog</DropdownItem>
                <DropdownItem href='/newsletters'>Newsletters</DropdownItem>
                <DropdownItem href='/accredited'>Accredited Gyms & Trainers</DropdownItem>
                <DropdownItem href='/gallery'>Gallery</DropdownItem>
              </DropdownMenu>
              <DropdownMenu href='/rules' text='Policies'>
                <DropdownItem href='/rules'>Rules</DropdownItem>
                <DropdownItem href='/drug-testing'>Drug Testing & Results</DropdownItem>
                <DropdownItem href='/banned-lifters'>Banned Lifters</DropdownItem>
              </DropdownMenu>
              <DropdownMenu href='/strict-curl/events' text='Strict Curl'>
                <DropdownItem href='/strict-curl/events'>Strict Curl Events</DropdownItem>
                <DropdownItem href='/strict-curl/records'>Strict Curl Records</DropdownItem>
                <DropdownItem href='/strict-curl/rules'>Strict Curl Rules</DropdownItem>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
