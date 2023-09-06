import React from 'react';
import { useRouter } from 'next/router';

type Props = {
  href: string;
};

const Link = ({ href, children }: React.PropsWithChildren<Props>) => {
  const router = useRouter();
  const current = router.asPath === href;

  return (
    <a
      href={href}
      className={`${current ? 'bg-red-900' : ''} text-white rounded-md px-2 lg:px-3 py-2 text-sm font-medium`}
    >
      {children}
    </a>
  );
};

export default Link;
