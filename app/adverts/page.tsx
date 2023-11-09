import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import qytImg from 'public/projects/qyt.jpg';
import KipsImg from 'public/projects/kips.jpg';
import BlankImg from 'public/projects/blue.jpg';
import salsabilImg from 'public/projects/sals.jpg'
import UnityImg from 'public/projects/unity.png'
import pembeltdImg from 'public/projects/pembeltd.jpg'
import AdvertItem from './AdvertItem';
import { RiArrowGoBackFill } from 'react-icons/ri';


function AdvertsPage() {

  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
      <h1 className='font-serif md:text-4xl text-2xl text-center mt-2 mb-5'>
       <span className='underline decoration-6 
       decoration-orange-400 '>ADVERTISE</span> 
        MENTS</h1>
         <div className='max-w-[1240px] m-auto w-full py-16'>
           <div className='grid md:grid-cols-2 gap-8'>
             <AdvertItem
               title='QYT Health Care'
               backgroundImg={qytImg.src}
               projectUrl='/qyt'
               tech='chech ups & medication'
             />
             <AdvertItem
               title='Salsabil Heights'
               backgroundImg={salsabilImg.src}
               projectUrl='/salsabil'
               tech='Female studets Hostels'
             />
             <AdvertItem
               title='Pembe flour millers'
               backgroundImg={pembeltdImg.src}
               projectUrl='/pembe'
               tech='Maize & wheat flour'
             />
             <AdvertItem
               title='Kips technical college'
               backgroundImg={KipsImg.src}
               projectUrl='/kips'
               tech='Kenya Institute of Professional Studies'
             />           
             <AdvertItem
               title='Unity Auto Garage'
               backgroundImg={UnityImg.src}
               projectUrl='/unity'
               tech='The friendly garage'
             />
             <AdvertItem
               title='ADD AN ADVERT'
               backgroundImg={BlankImg.src}
               projectUrl=''
               tech='Description'
   
             />
             <AdvertItem
               title='ADD AN ADVERT'
               backgroundImg={BlankImg.src}
               projectUrl=''
               tech='Description'
   
             />
             <AdvertItem
               title='ADD AN ADVERT'
               backgroundImg={BlankImg.src}
               projectUrl=''
               tech='Description'
   
             />
           </div>
         </div>
         <button className='border-4 dark:border-white border-black rounded-md px-4 py-2'>
            <Link href='/'>
              <p className='underline text-black dark:text-white cursor-pointer items-center flex pl-8 pr-8 gap-2'><RiArrowGoBackFill className='text-bold'/> Back</p>
            </Link>
            </button>
       </div>
  );
}

export default AdvertsPage;
