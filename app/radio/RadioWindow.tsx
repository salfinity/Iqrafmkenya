"use client";

import Image from "next/image";
import RadioButton from "./RadioButton";
import Slide from "../Slide";
import Slider from "react-slick";

function RadioWindow() {
  const imageWidth = 100;
  const imageHeight = 100;

  const slideData = [
    {
      id: 0,
      img: "/radiowindow/aqsaday.jpeg",
    },
    {
      id: 1,
      img: "/radiowindow/madinaday.jpeg",
    },
    {
      id: 2,
      img: "/radiowindow/meccaday.jpeg",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  return (
    <div className="h-[auto] md:h-[auto] relative container box-border items-center max-w-6xl md:max-w-6xl mx-auto overflow-clip cursor-pointer ">
      <div className="absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <RadioButton />
      </div>

      {/* Display only one image on smaller screens with certain effect*/}
      <div className="w-full sm:hidden">
        <div className="container">
          <Slider {...settings}>
            {slideData.map((item) => (
              <Slide key={item.id} img={item.img} />
            ))}
          </Slider>
          <div className="absolute inset-0 bg-black opacity-0 dark:opacity-30 z-10"></div>
        </div>
      </div>
      {/* Display all images on larger screens */}
      <div className="w-full hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="w-full rounded m-0 scale-150 dark:scale-125 hover:shadow-xl transition-all duration-200 ease-in-out">
          <Image
            className="w-full h-full"
            layout="responsive"
            width={imageWidth}
            height={imageHeight}
            objectFit="cover"
            src="/radiowindow/aqsaday.jpeg"
            alt="image"
          />
          <div className="absolute inset-0 bg-black opacity-0 dark:opacity-30 z-50"></div>
        </div>

        <div className="rounded m-0 scale-125 dark:scale-150 hover:shadow-xl transition-all duration-200 ease-in-out">
          <Image
            className="w-full h-full"
            layout="responsive"
            width={imageWidth}
            height={imageHeight}
            objectFit="cover"
            src="/radiowindow/madinanight.jpeg"
            alt="image"
          />
          <div className="absolute inset-0 bg-black opacity-70 dark:opacity-0 z-50"></div>
        </div>

        <div className="w-full rounded mr-10 scale-150 dark:scale-125 hover:shadow-xl transition-all duration-200 ease-in-out">
          <Image
            className="w-full h-full"
            layout="responsive"
            width={imageWidth}
            height={imageHeight}
            objectFit="cover"
            src="/radiowindow/madinaday.jpeg"
            alt="image"
          />
          <div className="absolute inset-0 bg-black opacity-0 dark:opacity-30 z-50"></div>
        </div>

        <div className="w-full rounded m-0 scale-125 dark:scale-150 hover:shadow-xl transition-all duration-200 ease-in-out">
          <Image
            className="w-full h-full"
            layout="responsive"
            width={imageWidth}
            height={imageHeight}
            objectFit="cover"
            src="/radiowindow/aqsanight.jpeg"
            alt="image"
          />
          <div className="absolute inset-0 bg-black opacity-40 dark:opacity-10 z-50"></div>
        </div>
        {/* Add similar divs for other images */}
      </div>

      {/* 
     <div className="w-full rounded m-0 scale-150 dark:scale-125 hover:shadow-xl
       transition-all duration-200 ease-in-out">
           <Image 
           className="w-full h-full"
           layout="responsive"
           width={imageWidth}
           height={imageHeight}
           objectFit="cover"
           src="/radiowindow/aqsaday.jpeg"
           alt="image"
           />
           <div className='absolute inset-0 bg-black opacity-0 dark:opacity-30 z-50'></div>
       </div>
  */}
      {/* <div className="w-full h-auto rounded m-0 scale-125 dark:scale-125 hover:shadow-xl
       transition-all duration-200 ease-in-out">
           <Image 
           className="w-full h-full"
           layout="responsive"
           width={imageWidth}
           height={imageHeight}
           objectFit="cover"
           src="/radiowindow/madinanight.jpeg"
           alt="image"
           />

           <div className='absolute inset-0 bg-black opacity-70 dark:opacity-0 z-50'></div>
       </div>
       <div className="w-full rounded m-0 scale-150 dark:scale-125 hover:shadow-xl
       transition-all duration-200 ease-in-out">
           <Image 
           className="w-full h-full"
           layout="responsive"
           width={imageWidth}
           height={imageHeight}
           objectFit="cover"
           src="/radiowindow/madinaday.jpeg"
           alt="image"
          />
          <div className='absolute inset-0 bg-black opacity-0 dark:opacity-30 z-50'></div>
       </div> */}
      {/* <div className="w-full rounded scale-125 ml-auto dark:scale-125 blur-sm dark:blur-none hover:shadow-xl
       transition-all duration-200 ease-in-out"> */}
      {/* <div className="w-full rounded m-0 scale-125 dark:scale-125 hover:shadow-xl
       transition-all duration-200 ease-in-out">
        <Image 
           className="w-full h-full"
           layout="responsive"
           width={imageWidth}
           height={imageHeight}
           objectFit="cover"
           src="/radiowindow/aqsanight.jpeg"
           alt="image"
           />
           <div className='absolute inset-0 bg-black opacity-70 dark:opacity-0 z-50'></div>
       </div> */}
    </div>
  );
}

export default RadioWindow;
