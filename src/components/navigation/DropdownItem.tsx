import React from 'react';

type Props = {
  href: string;
};

const DropdownItem = ({ href, children }: React.PropsWithChildren<Props>) => {
  return (
    <li>
      <a
        href={href}
        className='block text-gray-300 hover:bg-gray-600 hover:text-offwhite rounded-md p-2 text-sm font-medium'
      >
        {children}
      </a>
    </li>
  );
};

export default DropdownItem;
