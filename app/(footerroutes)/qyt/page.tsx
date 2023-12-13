import Image from "next/image";
import React from "react";
import qytImg from "public/projects/qyt.jpg";
import { RiRadioButtonFill, RiArrowGoBackFill } from "react-icons/ri";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { IoIosCall } from "react-icons/io";
import { FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import Link from "next/link";

function qytPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="max-w-6xl h-[50vh] relative">
        <div className="absolute top-0 left-0 max-w-6xl h-[50vh] bg-black/70 z-10" />
        <Image
          className="rounded-lg"
          layout="fill"
          objectFit="cover"
          src={qytImg}
          alt="/"
        />
        <div className="font-serif text-black absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h2 className="py-2 font-extrabold text-4xl">QYT healthcare</h2>
          <h3>Health is important to you</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="font-serif col-span-4">
          <p>OUR STORY</p>
          <h2>
            <span className="text-red-600 font-serif text-5xl font-extrabold pr-3">
              Since
            </span>
            <span className="text-5xl font-extrabold">2015</span>
          </h2>
          <p>
            The Company is registered in Hong Kong. Its Chinese as QING YU TANG.
            It English abbreviation is QYT. Our products are produced in Shang
            Hai. Shang Hai is the most developement city in science technology
            and economy are first—rate. All products of our company adpt
            international quality standards. Product performance is specially
            prominent. QYT has been in Africa for 8 years and is love by many
            people. QYT has good reputation and very faithful company. QYT has
            first–class technical team. first–class products and have
            first–class money making business system. QYT business system is
            most advanced and simple to follow. Some people ask who makes the
            most money in Africa, some answers that QYT members have the most
            salary bonus pay. I think if you join our company and work hard you
            will get a lot of money it is true.
          </p>
          <a href="https://qythealthcare.com/" target="_blank" rel="noreferrer">
            <button className="border-4 dark:border-white border-black rounded-md px-8 py-2 mt-4 mr-8">
              Website
            </button>
          </a>
          <a
            href="https://qythealthcare.com/contact/"
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
                  href="https://www.instagram.com/your_instagram_username/"
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
                  href="https://www.facebook.com/p/QYT-company-100084114591956/"
                  target="_blank"
                >
                  Facebook
                </a>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <ImLocation size={35} className="pr-3" />
                <a
                  href="https://goo.gl/maps/1WQkBoj4X2C6HZHv7/"
                  target="_blank"
                >
                  Location-kenya
                </a>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <IoIosCall size={35} className="pr-3" />
                <a href="tel:+1234567890">Call</a>
              </p>
            </div>
          </div>
        </div>
        <button className="border-4 dark:border-white border-black rounded-full px-4 py-2">
          <Link href="/adverts">
            <p className="underline text-black dark:text-white cursor-pointer items-center flex pl-16 gap-2">
              <RiArrowGoBackFill className="text-bold" /> Back
            </p>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default qytPage;
