import React from 'react';
import { getScreenSize } from '../utils/mediaQuery';

const useMediaQuery = () => {
  const initScreenSize = getScreenSize();
  const [screenSize, setScreenSize] = React.useState(initScreenSize);

  React.useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize());
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
};

export default useMediaQuery;
