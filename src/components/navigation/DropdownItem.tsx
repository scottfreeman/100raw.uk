import React from 'react';

type Props = {
  href: string;
};

const DropdownItem = ({ href, children }: React.PropsWithChildren<Props>) => {
  return (
    <li>
      <a href={href} className='block text-white rounded-md p-2 text-sm font-medium hover:underline'>
        {children}
      </a>
    </li>
  );
};

export default DropdownItem;
