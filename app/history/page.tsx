import Image from 'next/image';
import React from 'react';
import impressImg from 'public/management/impress.jpg';
import { RiRadioButtonFill, RiArrowGoBackFill } from 'react-icons/ri';
import { BiLogoFacebookSquare } from 'react-icons/bi';
import { ImLocation } from 'react-icons/im';
import { IoIosCall } from 'react-icons/io';
import { FaInstagramSquare, FaWhatsappSquare} from 'react-icons/fa';
import Link from 'next/link';
import { AiFillTwitterSquare } from 'react-icons/ai';

function HistoryPage () {
  return (
    <div className='max-w-6xl'>
     <h1 className='font-serif text-2xl md:text-4xl text-center mb-5 mt-3'>
         <span className='underline decoration-6 
         decoration-orange-300'>COMPANY</span> {" "}
          HISTORY</h1>
      <div className='max-w-6xl h-[50vh] relative'>
         <div className='absolute top-0 left-0 max-w-6xl h-[50vh] bg-black/70 z-10' />
        <Image
          className='rounded-lg'
          layout='fill'
          objectFit='cover'
          src={impressImg}
          alt='/'
        />
        <div className='font-serif absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2 font-extrabold text-4xl'>IQRA FM</h2>
          <h3>The station with a Difference</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='font-serif col-span-4'>
          <p>OUR STORY</p>
          <h2><span className='text-red-600 font-serif text-5xl font-extrabold pr-3'>Since</span><span className='text-5xl font-extrabold'>1970</span></h2>
          <p className="mb-3 text-gray-900 dark:text-gray-300">
          Qays ibn al-Mullawah fell in love with Layla al-Aamiriya. He soon began composing poems about his 
          love for her, mentioning her name often. His obsessive effort to woo the girl caused some locals to 
          call him "Majnun." When he asked for her hand in marriage, her father refused because it would be a 
          scandal for Layla to marry someone considered mentally unbalanced. Soon after, Layla was forcibly married 
          to another noble and rich merchant belonging to the Thaqif tribe in Ta'if. He was described as a handsome
          man with reddish complexion whose name was Ward Althaqafi. The Arabs called him Ward, meaning "rose" in Arabic.
          </p>
          <p className="mb-3 text-gray-900 dark:text-gray-300">
          When Majnun heard of her marriage, he fled the tribal camp and began wandering the surrounding desert. 
          His family eventually gave up hope for his return and left food for him in the wilderness. He could sometimes
          be seen reciting poetry to himself or writing in the sand with a stick.
          </p>
          <p className="mb-3 text-gray-900 dark:text-gray-300">
          Layla is generally depicted as having moved to a place in Northern Arabia with her husband, where she became 
          ill and eventually died. In some versions, Layla dies of heartbreak from not being able to see her beloved. 
          Majnun was later found dead in the wilderness in 688 AD, near Layla's grave. He had carved three verses of poetry 
          on a rock near the grave, which are the last three verses attributed to him.
          </p>
          <p className="mb-3 text-gray-900 dark:text-gray-300">
          Many other minor incidents happened between his madness and his death. Most of his recorded poetry was composed before his 
          descent into madness.
          </p>
          <p className="mb-3 text-gray-900 dark:text-gray-300">
          I pass by this town, the town of Layla
          And I kiss this wall and that wall
          Its not Love of the town that has enraptured my heart
          But of the One who dwells within this town
          </p>
          <p className="mb-3 text-gray-900 dark:text-gray-300">
          It is a tragic story of undying love much like the later Romeo and Juliet. This type of love 
          is known as "virgin love" because the lovers never marry or consummate their passion. Other famous virgin 
          love stories set in Arabia are the stories of Qays and Lubna, Kuthair and Azza, Marwa and Al Majnoun Al 
          Faransi, and Antara and Abla. This literary motif is common throughout the world, notably in the Muslim 
          literature of South Asia, such as Urdu ghazals.
          </p>
          
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-300 rounded-xl py-4'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>Reach out</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center'>
                  <FaInstagramSquare size={35} className='pr-3' /> 
                  <a href="https://www.instagram.com/your_instagram_username/" target="_blank">Instagram</a>
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <AiFillTwitterSquare size={35} className='pr-3' /> 
                  <a href="https://twitter.com/iqrafm?lang=en" target="_blank">WhatsApp</a>
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <BiLogoFacebookSquare size={40} className='pr-3' /> 
                  <a href="https://www.facebook.com/IdhaaIliotofauti/" target="_blank">Facebook</a>
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <ImLocation size={35} className='pr-3' /> 
                  <a href="https://goo.gl/maps/bh9qoWpYvqq5w3oz5/" target="_blank">Location-kenya</a>
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <IoIosCall size={35} className='pr-3' /> 
                  <a href="tel:+254727444454">Call</a>
                </p>
              </div>
            </div>
          </div>
       <button className='border-4 dark:border-white border-black rounded-md px-4 py-2'>
        <Link href='/'>
          <p className='underline text-black dark:text-white cursor-pointer items-center flex pl-16 gap-2'><RiArrowGoBackFill className='text-bold'/> Back</p>
        </Link>
        </button>
      </div>
    </div>
  );
};

export default HistoryPage;
