import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';

interface propsType {
  img: string;
}

const Slide: React.FC<propsType> = ({ img }) => {
  const imageWidth = 100; // Set a reasonable width for your images
  const imageHeight = 100;
  const { theme } = useTheme(); // Use useTheme hook to get the current theme

  return (
    <div className={`outline-none border-none relative ${theme === 'dark' ? 'dark' : ''}`}>
      <Image
        className="w-full h-full rounded-xl object-cover"
        src={img}
        alt="banner"
        width={imageWidth}
        height={imageHeight}
      />
    </div>
  );
};

export default Slide;
