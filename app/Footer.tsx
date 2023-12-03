"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaTiktok, FaYoutube } from "react-icons/fa";

function Footer() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/team");
  };
  const handleManClick = () => {
    router.push("/management");
  };
  const handleScholarsClick = () => {
    router.push("/scholars");
  };
  const handleAdvertClick = () => {
    router.push("/adverts");
  };
  const handleHistoryClick = () => {
    router.push("/history");
  };
  const handleBusinessClick = () => {
    router.push("/businesses");
  };
  const handleScheduleClick = () => {
    router.push("/schedule");
  };

  return (
    <div className="mx-auto max-w-6xl border-t border-gray-100 mt-6 items-center px-4 pb-6 pt-8 sm:px-6 lg:px-8">
      <div className="lg:flex items-center lg:items-center justify-between">
        <div className="grid grid-cols-1 md:grid-cols-3 ml-auto mx-auto justify-center text-teal-600">
          <Image
            layout="fixed"
            width={300}
            height={300}
            objectFit="cover"
            className="rounded-full w-32 ml-28 md:ml-0"
            src="/iqra.jpg"
            alt=""
          />

          <p className="mt-4 max-w-sm md:max-w-md text-center leading-relaxed text-gray-500 dark:text-white  mr-auto">
            At Masjid Al-Huda - South B MRQQ+WVR, Aoko Rd, Nairobi. | Phone•0727
            444454|IqraFM Tel 3861555 | Fax 3861543 www.iqrafm.com | Copyright
            &copy; 2023 All rights reserved.
          </p>

          <iframe
            className="items-center mt-4 md:mt-0 ml-14 md:ml-auto"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.10123905002!2d36.839656!3d-1.3101315!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11a778e3c841%3A0xcb7b083704c07fc7!2sMasjid%20Al-Huda%20-%20South%20B!5e0!3m2!1sen!2ske!4v1699994265643!5m2!1sen!2ske"
            width="250"
            height="150"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="mt-10 justify-center grid gap-16 border-t border-gray-100 pt-16 grid-cols-2 md:grid-cols-6">
        <div className="grid col-span-1 md:col-span-1">
          <div className="grid text-left md:text-left">
            <p className="text-lg font-medium text-gray-900 dark:text-orange-400">
              About Us
            </p>
            <ul className="mt-4 space-y-4 text-sm">
              <li>
                <a
                  className="text-gray-700 cursor-pointer transition dark:text-white hover:text-gray-700/75"
                  onClick={handleHistoryClick}
                >
                  Company History
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 cursor-pointer transition dark:text-white hover:text-gray-700/75"
                  onClick={handleManClick}
                >
                  Management
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 cursor-pointer transition dark:text-white hover:text-gray-700/75"
                  onClick={handleClick}
                >
                  Presenters
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 cursor-pointer transition dark:text-white hover:text-gray-700/75"
                  onClick={handleScholarsClick}
                >
                  Sheikhs/scholars
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid col-span-1 md:col-span-1">
          <div className="grid text-left md:text-left">
            <p className="text-lg font-medium dark:text-orange-400 text-gray-900">
              Our Services
            </p>
            <ul className="mt-4 space-y-4 text-sm">
              <li>
                <a className="text-gray-700 dark:text-white transition hover:text-gray-700/75">
                  News
                </a>
              </li>
              <li>
                <a className="text-gray-700 dark:text-white transition hover:text-gray-700/75">
                  Marketing
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 cursor-pointer dark:text-white transition hover:text-gray-700/75"
                  onClick={handleAdvertClick}
                >
                  Advertisements
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 dark:text-white transition hover:text-gray-700/75"
                  href="https://twitter.com/iqrafm?lang=en"
                  target="_blank"
                >
                  Announcements
                </a>
              </li>
              <li>
                <a className="text-gray-700 dark:text-white transition hover:text-gray-700/75">
                  Donations support
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid col-span-1 md:col-span-1">
          <div className="grid text-left md:text-left">
            <p className="text-lg font-medium text-gray-900 dark:text-orange-400">
              Resources
            </p>
            <ul className="mt-4 space-y-4 text-sm">
              <li>
                <a
                  className="text-gray-700 cursor-pointer transition dark:text-white hover:text-gray-700/75"
                  onClick={handleScheduleClick}
                >
                  Weekly Schedule
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 dark:text-white transition hover:text-gray-700/75"
                  href="https://twitter.com/iqrafm?lang=en"
                  target="_blank"
                >
                  Quotes
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 dark:text-white transition cursor-pointer hover:text-gray-700/75"
                  onClick={handleBusinessClick}
                >
                  Iqra Biashara
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid col-span-1 md:col-span-1">
          <div className="grid text-left md:text-left">
            <p className="text-lg font-medium dark:text-orange-400 text-gray-900">
              Helpful Links
            </p>
            <ul className="mt-4 space-y-4 text-sm">
              <li>
                <a
                  className="text-gray-700 dark:text-white transition hover:text-gray-700/75"
                  href="https://twitter.com/iqrafm?lang=en"
                  target="_blank"
                >
                  Islamic Education
                </a>
              </li>
              <li>
                <a className="text-gray-700 dark:text-white transition hover:text-gray-700/75">
                  FAQs
                </a>
              </li>
              <li>
                <a className="text-gray-700 dark:text-white transition hover:text-gray-700/75">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid col-span-2 md:col-span-2">
          <div className="text-center md:text-left items-center">
            <p className="text-lg font-medium dark:text-orange-400 text-gray-900">
              Stay in Touch
            </p>
            <div className="mx-auto mt-4 max-w-md sm:ms-0">
              <p className="leading-relaxed dark:text-white text-gray-700 ltr:sm:text-left rtl:sm:text-right">
                IQRA FM, The station with a difference. We love you for the sake
                of Allah Subhanahu Wataalah.
              </p>
              <form
                action="https://getform.io/f/acf85c8f-60e6-46f0-bbc7-33461ad39d07"
                method="POST"
                className="mt-4"
              >
                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start">
                  <input
                    className="w-full rounded-full border-gray-400 px-6 py-3 shadow-sm"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                  <input
                    className="w-full rounded-full border-gray-400 px-6 py-3 shadow-sm"
                    type="text"
                    name="message"
                    placeholder="Enter your message"
                    required
                  />
                  <button
                    className="block rounded-full bg-indigo-500 px-8 py-3 font-medium text-white transition hover:bg-indigo-600"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-gray-100 pt-6 items-center sm:flex sm:items-center sm:justify-between">
        <p className="text-center text-sm text-gray-500 dark:text-white sm:text-left">
          Copyright &copy; IqraFM 2023. All rights reserved.
        </p>

        <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
          <li>
            <a
              href="https://www.facebook.com/IdhaaIliotofauti/"
              rel="noreferrer"
              target="_blank"
              className="text-teal-700 transition hover:text-teal-700/75"
            >
              <span className="sr-only">Facebook</span>
              <BsFacebook
                className="h-6 w-6"
                fill="currentColor"
                aria-hidden="true"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@iqrafm.95.0?_t=8hr9rQxiy18&_r=1"
              rel="noreferrer"
              target="_blank"
              className="text-teal-700 transition hover:text-teal-700/75"
            >
              <span className="sr-only">Tiktok</span>
              <FaTiktok
                className="h-6 w-6"
                fill="currentColor"
                aria-hidden="true"
              />
            </a>
          </li>
          <li>
            <a
              href="https://youtube.com/@IqraFm95.0"
              rel="noreferrer"
              target="_blank"
              className="text-teal-700 transition hover:text-teal-700/75"
            >
              <span className="sr-only">YouTube</span>
              <FaYoutube
                className="h-6 w-6"
                fill="currentColor"
                aria-hidden="true"
              />
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com/iqrafm?lang=en"
              rel="noreferrer"
              target="_blank"
              className="text-teal-700 transition hover:text-teal-700/75"
            >
              <span className="sr-only">Twitter</span>
              <AiFillTwitterCircle
                className="h-6 w-6"
                fill="currentColor"
                aria-hidden="true"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/iqrafm/?hl=es-la"
              rel="noreferrer"
              target="_blank"
              className="text-teal-700 transition hover:text-teal-700/75"
            >
              <span className="sr-only">Instagram</span>
              <AiFillInstagram
                className="h-7 w-7"
                fill="currentColor"
                aria-hidden="true"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
