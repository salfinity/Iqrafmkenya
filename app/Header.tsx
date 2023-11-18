"use client";

import NavlLinks from './NavLinks';
import { Bars3Icon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import React, { useState } from 'react'
import SearchBox from './SearchBox';
import DarkModeButton from './DarkModeButton';
import RadioWindow from './radio/RadioWindow';

function Header() { 
  const [subscribeVisible, setSubscribeVisible] = useState(false);

  const toggleSubscribe = () => {
    setSubscribeVisible(!subscribeVisible);
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
       dark:bg-slate-800'>
        Subscribe Now
      </button>

     {/* Subscribe button dropdown */}
     {/* Subscribe button dropdown */}
     {subscribeVisible && (
          <div
            className='absolute top-12 left-0 bg-white p-4 shadow-md rounded-md md:hidden'
            onClick={toggleSubscribe}
          >
            <button className='block bg-slate-900 text-white px-4 lg:px-8 ly-2 lg:py-4 rounded-full dark:bg-slate-800'>
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