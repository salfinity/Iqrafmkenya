import Image from "next/image";
import React from "react";
import impressImg from "public/management/impress.jpg";
import { RiRadioButtonFill, RiArrowGoBackFill } from "react-icons/ri";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { IoIosCall } from "react-icons/io";
import { FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import Link from "next/link";
import { AiFillTwitterSquare } from "react-icons/ai";

function HistoryPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="font-serif text-2xl md:text-4xl text-center mb-5 mt-3">
        <span
          className="underline decoration-6 
         decoration-orange-300"
        >
          COMPANY
        </span>{" "}
        HISTORY
      </h1>
      <div className="max-w-6xl h-[50vh] relative">
        <div className="absolute top-0 left-0 max-w-6xl h-[50vh] bg-black/70 z-10" />
        <Image
          className="rounded-lg"
          layout="fill"
          objectFit="cover"
          src={impressImg}
          alt="/"
        />
        <div className="font-serif absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 font-extrabold text-4xl">IQRA FM</h2>
          <h3>The station with a Difference</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="font-serif col-span-4">
          <p>OUR STORY</p>
          <h2>
            <span className="text-red-600 font-serif text-5xl font-extrabold pr-3">
              Since
            </span>
            <span className="text-5xl font-extrabold">2001</span>
          </h2>
          <p className="mb-3 text-gray-900 dark:text-gray-300 font-semibold">
            May the peace, mercy, and blessings of Allah be upon you.
          </p>{" "}
          <p className="mb-3 text-gray-900 dark:text-gray-300">
            Since 2001, IQRA FM has stood as the pioneering and foremost radio
            station in Kenya. Currently undergoing a transformative rebranding
            and relaunching process, we herald a new era marked by superior
            programming and presentation.
          </p>{" "}
          <p className="mb-3 text-gray-900 dark:text-gray-300 ">
            This evolution signifies a commitment to becoming a premier platform
            for Islamic content and education. With a proactive approach, we are
            dedicated to enlightening, entertaining, exploring, and educating
            individuals across all age groups and society at large. Our
            particular emphasis lies in mentorship, fostering growth, and
            promoting Islamic values, ideas, talents, and businesses to a
            diverse and expanding audience, spanning across Africa and beyond.
          </p>{" "}
          <p className="mb-3 text-gray-900 dark:text-gray-300 ">
            Recognized as the top Islamic Radio Station by IPSOS, securing the
            1st position, we boast a reach of 700,000 regular listeners. IQRA FM
            has been a stalwart representative of Muslim voices for over two
            decades, and we remain steadfast in solidifying this position while
            increasingly resonating with a vibrant and youthful audience. Our
            reporting, programming, and segmentation are consistently
            distinctive.
          </p>
          {""}
          <p className="mb-3 text-gray-900 dark:text-gray-300 ">
            Moreover, we actively offer networking opportunities and welcome
            collaborations with various Islamic businesses to promote growth and
            development. Our overarching goal is to create an environment
            conducive to collaboration, positively impacting all stakeholders to
            achieve shared objectives. As we continually evolve, we engage with
            industry players to deliver educational programs that provide social
            and economic solutions to our esteemed listenership.
          </p>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-300 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Reach out</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <FaInstagramSquare size={35} className="pr-3" />
                <a
                  href="https://www.instagram.com/your_instagram_username/"
                  target="_blank"
                >
                  Instagram
                </a>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <AiFillTwitterSquare size={35} className="pr-3" />
                <a href="https://twitter.com/iqrafm?lang=en" target="_blank">
                  WhatsApp
                </a>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <BiLogoFacebookSquare size={40} className="pr-3" />
                <a
                  href="https://www.facebook.com/IdhaaIliotofauti/"
                  target="_blank"
                >
                  Facebook
                </a>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <ImLocation size={35} className="pr-3" />
                <a
                  href="https://goo.gl/maps/bh9qoWpYvqq5w3oz5/"
                  target="_blank"
                >
                  Location-kenya
                </a>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <IoIosCall size={35} className="pr-3" />
                <a href="tel:+254727444454">Call</a>
              </p>
            </div>
          </div>
        </div>
        <button className="border-4 dark:border-white border-black rounded-md px-4 py-2">
          <Link href="/">
            <p className="underline text-black dark:text-white cursor-pointer items-center flex pl-16 gap-2">
              <RiArrowGoBackFill className="text-bold" /> Back
            </p>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default HistoryPage;
