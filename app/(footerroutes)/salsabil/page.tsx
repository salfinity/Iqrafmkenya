import Image from "next/image";
import React from "react";
import SalsabilImg from "public/projects/sals.jpg";
import { RiRadioButtonFill, RiArrowGoBackFill } from "react-icons/ri";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { IoIosCall } from "react-icons/io";
import { FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import Link from "next/link";

function SalsabilPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="max-w-6xl h-[50vh] relative">
        <div className="absolute top-0 left-0 max-w-6xl h-[50vh] bg-black/70 z-10" />
        <Image
          className="rounded-lg"
          layout="fill"
          objectFit="cover"
          src={SalsabilImg}
          alt="/"
        />
        <div className="font-serif text-black absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h2 className="py-2 font-extrabold text-4xl">Salsabil Heights</h2>
          <h3>Womens only students Hostels</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="font-serif col-span-4">
          <p>ABOUT US</p>
          <h2>
            <span className="text-red-600 font-serif text-5xl font-extrabold pr-3 pb-6">
              WHO WE
            </span>
            <span className="text-5xl font-extrabold">ARE</span>
          </h2>
          <p className="pt-6">
            Rising above Suswa Road overlooking Karura Forest, the fusion of
            contemporary and Islamic architectural design brings a touch and
            sense of home to Salsabil Heights. Salsabil heights aims to be a
            hostel with various social amenities that stands as a beacon of
            Islamic standards that provides an Islamic Environment for female
            students studying in universities, colleges, e.t.c.
          </p>
          <a
            href="https://www.salsabilheights.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="border-4 dark:border-white border-black rounded-md px-8 py-2 mt-4 mr-8">
              Website
            </button>
          </a>
          <a
            href="https://www.salsabilheights.com/#section-contact"
            target="_blank"
            rel="noreferrer"
          >
            <button className="border-4 dark:border-white border-black rounded-md px-8 py-2 mt-4 mr-8">
              Contacts
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Reach out</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <FaInstagramSquare size={35} className="pr-3" />
                <a
                  href="https://www.instagram.com/salsabilheights/?hl=en/"
                  target="_blank"
                >
                  Instagram
                </a>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <FaWhatsappSquare size={35} className="pr-3" />
                <a
                  href="https://api.whatsapp.com/send?phone=your_phone_number"
                  target="_blank"
                >
                  WhatsApp
                </a>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <BiLogoFacebookSquare size={40} className="pr-3" />
                <a
                  href="https://www.facebook.com/SalsabilHeights/"
                  target="_blank"
                >
                  Facebook
                </a>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <ImLocation size={35} className="pr-3" />
                <a
                  href="https://goo.gl/maps/N2BazhJYWVWmmCjt7/"
                  target="_blank"
                >
                  Location-kenya
                </a>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <IoIosCall size={35} className="pr-3" />
                <a href="tel:+254723222265">Call</a>
              </p>
            </div>
          </div>
        </div>
        <button className="border-4 dark:border-white border-black rounded-full px-8 py-2">
          <Link href="/adverts">
            <p className=" underline text-black dark:text-white cursor-pointer items-center flex pl-16 gap-2">
              <RiArrowGoBackFill className="text-bold" /> Back
            </p>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default SalsabilPage;
