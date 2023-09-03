import React, { useEffect, useState } from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';

interface Props extends ReactPlayerProps {
  file: string;
}

const Video = ({ file, ...props }: Props) => {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  return hasWindow && <ReactPlayer playing url={file} {...props} />;
};

export default Video;
