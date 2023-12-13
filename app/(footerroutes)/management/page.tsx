import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowGoBackFill } from "react-icons/ri";

function Page() {
  const imageWidth = 200; // Set a reasonable width for your images
  const imageHeight = 200; // Set a reasonable height for your images
  const largerimageWidth = 400; // Set a reasonable width for your images
  const largerimageHeight = 400; // Set a reasonable height for your images

  return (
    <div className="container items-center mt-3 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h1 className="font-serif md:text-4xl text-2xl text-center mt-3 mb-5">
          <span className="underline decoration-6 decoration-orange-400">
            MANAGE
          </span>{" "}
          MENT
        </h1>

        <div className="mb-12">
          <Image
            layout="fixed" // Use "fixed" layout to specify width and height
            width={largerimageWidth} // Set the width for the image
            height={largerimageHeight} // Set the height for the image
            objectFit="cover"
            alt=""
            src="/management/bahaidar.jpeg"
            className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20"
          />
          <p className="mb-2 font-bold text-2xl">Dr. Mohamed Ahmed Bahaidar</p>
          <p className="text-neutral-500 dark:text-neutral-300 text-3xl">CEO</p>
        </div>

        <div className="lg:gap-xl-12 grid gap-x-6 md:grid-cols-3 xl:grid-cols-3">
          <div className="mb-12">
            <Image
              layout="fixed" // Use "fixed" layout to specify width and height
              width={imageWidth} // Set the width for the image
              height={imageHeight} // Set the height for the image
              objectFit="cover"
              alt=""
              src="/management/mosque.jpg"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20"
            />
            <p className="mb-2 font-bold">Sofia Ibrahim</p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Head of Productions
            </p>
          </div>
          <div className="mb-12">
            <Image
              layout="fixed" // Use "fixed" layout to specify width and height
              width={imageWidth} // Set the width for the image
              height={imageHeight} // Set the height for the image
              objectFit="cover"
              alt=""
              src="/management/mosque.jpg"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20"
            />
            <p className="mb-2 font-bold">Khamis Abdallah</p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Head of staff
            </p>
          </div>

          <div className="mb-12">
            <Image
              layout="fixed" // Use "fixed" layout to specify width and height
              width={imageWidth} // Set the width for the image
              height={imageHeight} // Set the height for the image
              objectFit="cover"
              alt=""
              src="/management/ramla.jpeg"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20"
            />
            <p className="mb-2 font-bold">Ramla Abdi</p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Head of admin
            </p>
          </div>
          <div className="mb-12">
            <Image
              layout="fixed" // Use "fixed" layout to specify width and height
              width={imageWidth} // Set the width for the image
              height={imageHeight} // Set the height for the image
              objectFit="cover"
              alt=""
              src="/team/galoro.jpeg"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20"
            />
            <p className="mb-2 font-bold">Samira Galoro</p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Technical support officer
            </p>
          </div>

          <div className="mb-12">
            <Image
              layout="fixed" // Use "fixed" layout to specify width and height
              width={imageWidth} // Set the width for the image
              height={imageHeight} // Set the height for the image
              objectFit="cover"
              alt=""
              src="/management/moha.jpeg"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20"
            />
            <p className="mb-2 font-bold">Mohammed Rajab</p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Technical support officer
            </p>
          </div>
          {/* ... Repeat this structure for other team members */}
        </div>
        <button className="border-4 dark:border-white border-black rounded-full px-4 py-2">
          <Link href="/home">
            <p className="underline text-black dark:text-white cursor-pointer items-center flex pl-8 pr-8 gap-2">
              <RiArrowGoBackFill className="text-bold" /> Back
            </p>
          </Link>
        </button>
      </section>
    </div>
  );
}

export default Page;
