import Image from "next/image";
import React from "react"

interface propsType {
  img: string;
  }

const Slide: React.FC<propsType> = ({ img }) => {
  const imageWidth = 100; // Set a reasonable width for your images
  const imageHeight = 100; 

  return (
    <div className="outline-none border-none relative">  
      <Image
        className="w-full h-full rounded-xl"
        src={img}
        alt="banner"
        layout="responsive"
        objectFit="cover"
        width={imageWidth}
        height={imageHeight}
      />
    </div>
  );
};

export default Slide;
