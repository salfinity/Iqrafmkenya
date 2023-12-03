import Image from "next/image";
import React from "react";
import impressImg from "public/management/impress.jpg";
import { RiArrowGoBackFill } from "react-icons/ri";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { IoIosCall } from "react-icons/io";
import {
  FaInstagramSquare,
  FaTiktok,
  FaWhatsappSquare,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import { AiFillTwitterSquare } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

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
            In the name of Allah, The most gracious, The merciful.
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
          <h2 className="mt-4">
            <span className="text-red-600 font-serif text-3xl font-extrabold pr-3">
              Our
            </span>
            <span className="text-5xl font-extrabold">Vision</span>
          </h2>{" "}
          <p>
            To create an enlightened community driven by the belief in peaceful
            co existence in Kenya and beyond. As pioneers we aim to be the most
            trusted, pivotal and vibrant radio station that encourages people to
            see the world from a broader perspective. We genuinely aspire to
            engage our learned audience and positively impact our communities.
          </p>
          <h2 className="mt-4">
            <span className="text-red-600 font-serif text-3xl font-extrabold pr-3">
              Our
            </span>
            <span className="text-5xl font-extrabold">Mission</span>
          </h2>{" "}
          <p>
            To provide the best programmes and information to our listeners, a
            most profitable advertising platform to our clients and the most
            successful religious station in Kenya. To create and present the
            best and appealing content, local and international programs and
            news from reliable sources. To be a reliable source of information
            and entertainment within Islamic parameters while also enhancing the
            civic and cultural life of the people we serve.
          </p>
          <h2 className="mt-4">
            <span className="text-red-600 font-serif text-3xl font-extrabold pr-3">
              Target
            </span>
            <span className="text-5xl font-extrabold">Audience</span>
          </h2>{" "}
          <p>
            The station’s programming has been geared towards a family friendly
            audience with shows that educate, entertain and inform a Muslim and
            also a Non-Muslim audience that is looking for reliable and trusted
            information on Islam and Muslims in Kenya. The listenership spectrum
            includes and not limited to Women, Men, Children of all ages. The
            core of IQRA FM’s listeners is made up of males, aged 18-24 and 45+,
            lsm 8-11, living in the cities. 700k on a regular listenership. Our
            coverage reaches all kenyans notwithstanding the non-muslims, youth,
            peri-urban and urban peasants, the business community with
            particular emphasis on the muslim community and other listeners
            within our transmission area of service.
          </p>
          <h2 className="mt-4">
            <span className="text-red-600 font-serif text-3xl font-extrabold pr-3">
              Our
            </span>
            <span className="text-5xl font-extrabold">Objectives</span>
          </h2>{" "}
          <p>
            <p>
              OBJECTIVES The main objective of establishing IQRA radio was to
              give the ever-increasing Muslim population in Kenya a voice after
              year’s in oblivion. This was however extended to include other
              issues:
            </p>{" "}
            <p>
              i) To spread the message of Islam to non-Muslims across the
              country.{" "}
            </p>{" "}
            <p>
              ii) To provide a medium for Muslims to air their views and reclaim
              their position in contributing to the country’s national agenda.{" "}
            </p>{" "}
            <p>
              iii) To serve as a civic education tool to the largely
              semi-illiterate muslim population.
            </p>{" "}
            <p>
              iv) To be a credible, reliable and authoritative medium for news
              and information.
            </p>{" "}
            <p>
              v) To educate the public and Muslims in particular with a view of
              creating social harmony and understanding.
            </p>{" "}
            <p>
              vi) To initiate a new line of programming that will seek to
              eliminate vices that continue to pervert our social order and
              threaten security.
            </p>{" "}
            <p>
              vii) To imbibe and inculcate the professional values of balance
              and objectivity in news reportage and programming.
            </p>{" "}
            <p>
              viii) To be self sustaining and offer employment opportunities to
              hundreds of Muslims youth.
            </p>{" "}
            <p>
              ix) To foster Development in Dominant Muslim regions that have
              been marginalized and suffer under development since
              pre-independence days.{" "}
            </p>{" "}
            <p>
              x) To educate both Muslim and Non-Muslims on the correct version
              of the Abrahamic Religion that is Islam, Christianity and Judaism
              through its programme “DINI YA HAKI” aired twice a week. This
              programme has converted several non-muslims to Islam.
            </p>
          </p>{" "}
          <h2 className="mt-4">
            <span className="text-red-600 font-serif text-3xl font-extrabold pr-3">
              Our
            </span>
            <span className="text-5xl font-extrabold">Programmes</span>
          </h2>{" "}
          <p>
            <p className="font-semibold">
              Iqra FM broadcasts for 19 hours 15 Minutes a day; from 04:45am to
              12:00 Midnight. Seventy percent of this airtime has been dedicated
              to religious programmes that include :-{" "}
            </p>
            <p>- Holy Quran recitations</p>
            <p>- Quran Translations in English, Swahili, Somali and Urdu. </p>
            <p>- Talks by Prominent scholars from Kenya and abroad. </p>
            <p>- Question and Answer sessions on religious matters. </p>
            <p>
              - Panel discussions by prominent Muslim Ulaamas on Hadith and
              Fiqh.{" "}
            </p>
            <p>- Enlighting program on Teaching your self Arabic </p>
            <p>- Educative programs in Kikuyu Language.   </p>
            <p className="font-semibold">
              The remaining Thirty Percent of our airtime is dedicated to:-{" "}
            </p>
            <p>- Local and international news at frequent intervals, daily. </p>
            <p>
              - Talk Shows on Contemporary issues, political, cultural, social
              and economic issues, health and educational programmes.
            </p>
          </p>
          <h2 className="mt-4">
            <span className="text-red-600 font-serif text-3xl font-extrabold pr-3">
              Our
            </span>
            <span className="text-5xl font-extrabold">Staff</span>
          </h2>{" "}
          <p>
            We have 20 Staff Members on Permanent employment. We are privileged
            to have experienced, youthful and trained professionals in accounts,
            marketing, mass communication and other relevant fields. This
            provides a rich blend of complementary and enthusiastic personnel
            capable of meeting the specific interest of our target audience and
            business clients.
          </p>
          <h2 className="mt-4">
            <span className="text-red-600 font-serif text-3xl font-extrabold pr-3">
              Our
            </span>
            <span className="text-5xl font-extrabold">Achievements</span>
          </h2>{" "}
          <p>
            <p>
              Since inception, Iqra FM has been able to record quite a number of
              successes in the quest of its objectives. Under the banner “The
              Station With a Difference”, Iqra FM commands a respectable
              listenership of 2 Million Muslims in Nairobi and its environs. A
              significant number of Non–Muslims have also embraced our radio
              programme and Islamic teachings.{" "}
            </p>
            <p>
              We are happy to report and give credit to Allah (SWT) that through
              our programmes an estimated over 10,000 people have reverted to
              Islam through Iqra FM since its inception. Iqra FM has taken an
              influential position within the Kenyan population as a powerful
              voice and opinion shaper of the Muslim community.{" "}
            </p>
            <p>
              It has high recognition within government circles and through its
              campaigns the government has been forced to shelve some policy
              steps that would have adversely affected the Muslim community. A
              good example was the West initiated Suppression of Terrorism Bill
              that was shelved after we initiated a public debate that attracted
              even the support of non-Muslims.{" "}
            </p>
            <p className="mt-4">
              We have been greatly involved also by the government and it’s
              agencies through educative campaigns e.g.{" "}
            </p>
            <p>
              a) Independent Electoral and Boundaries Commission (I.E.B.C) where
              we conducted a voter education campaign for general elections even
              the defunct electoral body ECK over the previous years.{" "}
            </p>
            <p>
              b) URAIA Trust a Kenyan government agency that advocates for
              better governance.{" "}
            </p>
            <p>
              c) Peace Programs during the invasion of Kenya forces into
              Somalia.
            </p>
          </p>
          <h2 className="mt-4">
            <span className="text-red-600 font-serif text-3xl font-extrabold pr-3">
              Head quarters &
            </span>
            <span className="text-5xl font-extrabold">Transmission</span>
          </h2>{" "}
          <p>
            IQRA FM office is situated at{" "}
            <span className="font-semibold text-red-500">
              Al Huda Mosque South B, Nairobi, Kenya.{" "}
            </span>
            Our premises serve as our head quarters with all operational
            departments housed in the site including the media studio. We have a
            transmission site situated in Ngecha Area in Limuru that host a 5kw
            transmitter which provides transmission on a radius of 200
            Kilometers reaching Nairobi and it’s environs.
          </p>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-lg shadow-gray-300 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Reach out</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <FaYoutube size={35} className="pr-3" />
                <a href="https://youtube.com/@IqraFm95.0/" target="_blank">
                  YouTube
                </a>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <FaTiktok size={35} className="pr-3" />
                <a
                  href="https://www.tiktok.com/@iqrafm.95.0?_t=8hr9rQxiy18&_r=1/"
                  target="_blank"
                >
                  TikTok
                </a>
              </p>
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
                <MdEmail size={35} className="pr-3" />
                <a
                  href="mailto:contact@iqrafm.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email us
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
