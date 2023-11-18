"use client";

import NavlLinks from './NavLinks';
import { Bars3Icon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import React, { useState } from 'react'
import SearchBox from './SearchBox';
import DarkModeButton from './DarkModeButton';
import RadioWindow from './radio/RadioWindow';
import Modal from '@/components/Modal';


function Header() { 
  const [subscribeVisible, setSubscribeVisible] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false); 
  
  const toggleSubscribe = () => {
    setSubscribeVisible(!subscribeVisible);
  };
  
  const handleButtonClick = () => {
    setModalOpen(!isModalOpen);
  };
  

  return (
   <header>
    <div className='grid grid-cols-3 p-10 items-center'>
     <Bars3Icon className='h-8 w-8 cursor-pointer' onClick={toggleSubscribe}/>
     <Link href="/" prefetch={false}>
      <h1 className='font-serif text-xl md:text-4xl text-center'>
       <span className='underline decoration-6 
       decoration-orange-400'>IQRA-</span> 
        FM</h1>
     </Link>

     <div className='flex items-center justify-end
     space-x-2'>
      {/* DarkModeButton */}
      <DarkModeButton />
      <button className='hidden md:inline bg-slate-900 
      text-white px-4 lg:px-8 ly-2 lg:py-4 rounded-full
       dark:bg-slate-800'
       onClick={handleButtonClick}>
        Subscribe Now
      </button>
      <Modal isOpen={isModalOpen} onClose={handleButtonClick}>
        <div className="my-4">
         <h3 className='text-black font-bold'>IQRABIASHARA SELLERS</h3>
          <p className="text-sm text-black">
          To join Iqrabiashara as a seller, please get in touch with us at 0712345678. 
          Kindly provide detailed information about your business, including its location 
          (online, shop-based, or home-based), the products or services you offer, and any other 
          relevant details. Please note that a registration fee of 1000 Kenyan Shillings is required 
          to become a seller. Once you have completed the registration process and submitted the necessary information, 
          we will feature your products on our platform, making it easy for potential buyers to discover 
          and explore what you have to offer.
          </p>
          {/* Add more content as needed */}
        </div>
      </Modal>

     {/* Subscribe button dropdown */}
     {/* Subscribe button dropdown */}
     {subscribeVisible && (
          <div
            className='absolute z-10 top-12 mt-6 left-0 bg-zinc-500 dark:bg-slate-400 p-2 shadow-md rounded-xl md:hidden'
            onClick={toggleSubscribe}
          >
            <button className='block bg-slate-900 text-white px-4 lg:px-8 ly-2 lg:py-4 rounded-full dark:bg-slate-800'
            onClick={handleButtonClick}>
              Subscribe Now
            </button>
          </div>
        )}
     </div>
    </div>
    {/* Radio frequency window */}
    <RadioWindow />

    {/* navigation links */}
    
    <h1 className='font-serif text-xl md:text-4xl text-center mt-6'>
       <span className='underline decoration-6 
       decoration-orange-400'>CHECK OUT</span> {" "}
        NEWS</h1>
    <NavlLinks />

    {/* searchBox */}
    <SearchBox />
    </header>
  );
}

export default Header;