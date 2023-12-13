import Image from "next/image";
import React from "react";
import KipsImg from "public/projects/kips.jpg";
import { RiRadioButtonFill, RiArrowGoBackFill } from "react-icons/ri";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { IoIosCall } from "react-icons/io";
import { FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import Link from "next/link";

function KipsPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="max-w-6xl h-[50vh] relative">
        <div className="absolute top-0 left-0 max-w-6xl h-[50vh] bg-black/70 z-10" />
        <Image
          className="rounded-lg"
          layout="fill"
          objectFit="cover"
          src={KipsImg}
          alt="/"
        />
        <div className="font-serif text-black absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h2 className="py-2 font-extrabold text-4xl">
            KIPS TECHNICAL COLLEGE
          </h2>
          <h3>Kenya Institute of Professional Studies</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="font-serif col-span-4">
          <p>ABOUT US</p>
          <h2>
            <span className="text-red-600 font-serif text-5xl font-extrabold pr-3">
              Company
            </span>
            <span className="text-5xl font-extrabold">Description</span>
          </h2>
          <p>
            KIPS TECHNICAL COLLEGE is a premier Tertiary Institution established
            and mandated to operate as an Educational Training Institute by
            TIVET Authority under the Ministry of Higher Education, Science and
            Technology to offer technical training leading to Artisans,
            Certificates, Diplomas and higher Diplomas in various Courses.
          </p>
          <a href="https://www.kips.ac.ke/" target="_blank" rel="noreferrer">
            <button className="border-4 dark:border-white border-black rounded-md px-8 py-2 mt-4 mr-8">
              Website
            </button>
          </a>
          <a
            href="https://www.kips.ac.ke/contacts/"
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
                  href="https://www.instagram.com/kipstechnical/?hl=en/"
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
                  href="https://www.facebook.com/KIPStechnical/"
                  target="_blank"
                >
                  Facebook
                </a>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <ImLocation size={35} className="pr-3" />
                <a
                  href="https://maps.app.goo.gl/YoK2dZBjJqg8uLbA7"
                  target="_blank"
                >
                  Location-kenya
                </a>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <IoIosCall size={35} className="pr-3" />
                <a href="tel:+254720813113">Call</a>
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

export default KipsPage;
