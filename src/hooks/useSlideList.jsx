import { useState, useEffect } from 'react';

const useSlideList = ({data, time = 3000}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, time);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return [currentIndex, handleIndicatorClick];
};

export default useSlideList;