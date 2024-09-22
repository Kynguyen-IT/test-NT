import { useState, useEffect, useRef } from 'react';

const useElementSize = () => {
  const elementRef = useRef(null); 
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      if (elementRef.current) {
        const { width, height } = elementRef.current.getBoundingClientRect();
        setSize({ width, height });
      }
    };

    updateSize();

    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return [elementRef, size];
};

export default useElementSize;