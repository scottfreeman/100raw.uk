import React from 'react';

type Props = {
  className?: string;
};

const Container = ({ className, children }: React.PropsWithChildren<Props>) => {
  return <div className={`m-auto max-w-7xl px-4 ${className}`}>{children}</div>;
};

export default Container;
