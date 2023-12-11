import Image from "next/image";
import React from "react";
import UnityImg from "public/projects/unity2.jpg";
import { RiRadioButtonFill, RiArrowGoBackFill } from "react-icons/ri";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { IoIosCall } from "react-icons/io";
import { FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import Link from "next/link";

function UnityPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="max-w-6xl h-[50vh] relative">
        <div className="absolute top-0 left-0 max-w-6xl h-[50vh] bg-black/70 z-10" />
        <Image
          className="rounded-lg"
          layout="fill"
          objectFit="cover"
          src={UnityImg}
          alt="/"
        />
        <div className="font-serif text-black absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h2 className="py-2 font-extrabold text-4xl">Unity Auto Garage</h2>
          <h3>.....the friendly garage</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="font-serif pt-3 col-span-4">
          <p>OUR STORY</p>
          <h2>
            <span className="text-red-600 font-serif text-5xl font-extrabold pr-3">
              Company
            </span>
            <span className="text-5xl font-extrabold">History</span>
          </h2>
          <p className="bt-3">
            Unity Auto Garage was established in 1974 and has over the years
            earned itself a place as a leader within the motor industry, whilst
            standing by the motto “ the friendly garage” to ensure services
            provided are delivered in a personal and professional manner at cost
            effective pricing. With over 40 years of experince Unity has gained
            knowledge and expertise in a variety of vehicles with trained staff
            able to deal in repairs of all vehicles models; both Japanese and
            European. We specialise in Mercedes, Land Rovers, VW, BMW, Porches,
            Toyota, Nissan, Mitsubishi, Subaru and all 4 by 4s. Unity Auto
            Garage is a member of KEMRA and appointed by AA as a 3 spanner
            garage. We are also appointed as repair service providers and on
            panels of 95% of insurance companies in East africa. We have the
            following state of the art machinery and equipment to ensure you, as
            our client, that we are the right people for the job.
          </p>
          <a
            href="https://unityautogarage.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="border-4 dark:border-white border-black rounded-md px-8 py-2 mt-4 mr-8">
              Website
            </button>
          </a>
          <a
            href="https://unityautogarage.com/contact/"
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
                  href="https://www.instagram.com/unityautogarage/"
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
                  href="https://www.facebook.com/UnityAutoGarage/"
                  target="_blank"
                >
                  Facebook
                </a>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <ImLocation size={35} className="pr-3" />
                <a
                  href="https://maps.app.goo.gl/NBSsMSaRjFS8YRT77"
                  target="_blank"
                >
                  Location-kenya
                </a>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <IoIosCall size={35} className="pr-3" />
                <a href="tel:+254721206033">Call</a>
              </p>
            </div>
          </div>
        </div>
        <button className="border-4 dark:border-white border-black rounded-md px-4 py-2">
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

export default UnityPage;
