"use client"

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from "react-icons/bs";

function Footer() {
  const router = useRouter();
  

  const handleClick = () => {
    router.push('/team'); 
  };
  const handleManClick = () => {
    router.push('/management'); 
  };
  const handleScholarsClick = () => {
    router.push('/scholars'); 
  };
  const handleAdvertClick = () => {
    router.push('/adverts'); 
  };
  const handleHistoryClick = () => {
    router.push('/history'); 
  };
  const handleBusinessClick = () => {
    router.push('/businesses'); 
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
           src='/team/iqra.jpg'
           alt=""
         />
 
       <p
         className="mt-4 max-w-sm md:max-w-md text-center leading-relaxed text-gray-500 dark:text-white  mr-auto"
       >
        Kilimani Rd, off ElgeyoMarakwet Rd near Adams Arcade
        | P.O.Box 21186-00505, Nairobi |Tel 3861555 
        | Fax 3861543 www.iqra.co.ke 
        | Copyright All rights reserved
       </p>

        <iframe 
         className='items-center mt-4 md:mt-0 ml-14 md:ml-auto'
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3988.774978092707!2d36.831182774614796!3d-1.310339798677215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1692916984222!5m2!1sen!2ske" 
          width="250" 
          height="150" 
          loading="lazy" 
          >
          </iframe>
       </div> 
     </div>
 
     <div className="mt-16 grid gap-16 border-t border-gray-100 pt-16  md:grid-cols-4 lg:grid-cols-6">
      <div className="grid grid-cols-2 md:grid-cols-4"> 
       <div className="text-center grid sm:text-left">
         <p className="text-lg font-medium text-gray-900 dark:text-orange-400">About Us</p>
          <ul className="mt-8 space-y-4 text-sm">
           <li>
             <a className="text-gray-700 transition dark:text-white hover:text-gray-700/75 cursor-pointer" 
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
 
       <div className="text-center grid sm:text-left">
         <p className="text-lg font-medium dark:text-orange-400 text-gray-900">Our Services</p>
 
         <ul className="mt-8 space-y-4 text-sm">
           <li>
             <a className="text-gray-700 dark:text-white transition hover:text-gray-700/75" href="">
              News
             </a>
           </li>
 
           <li>
             <a className="text-gray-700 dark:text-white transition hover:text-gray-700/75" href="https://twitter.com/iqrafm?lang=en" target="_blank">
             islamic education
             </a>
           </li>

           <li>
             <a className="text-gray-700 cursor-pointer dark:text-white transition hover:text-gray-700/75" 
              onClick={handleAdvertClick}
             >
               Advertisements
             </a>
           </li>

           <li>
             <a className="text-gray-700 dark:text-white transition hover:text-gray-700/75" href="https://twitter.com/iqrafm?lang=en" target="_blank">
              Announcements
             </a>
           </li>
  
           <li>
             <a className="text-gray-700 dark:text-white transition hover:text-gray-700/75" href="/">
               Donations
             </a>
           </li>
 
           
         </ul>
       </div>
 
       <div className="text-center grid sm:text-left">
         <p className="text-lg font-medium text-gray-900 dark:text-orange-400">Resources</p>
 
         <ul className="mt-8 space-y-4 text-sm">
           
         <li>
              <a
                className="text-gray-700 cursor-pointer transition dark:text-white hover:text-gray-700/75"  
              >
                Weekly schedule
              </a>
            </li>
 
           <li>
             <a className="text-gray-700 dark:text-white transition hover:text-gray-700/75" href="https://twitter.com/iqrafm?lang=en" target="_blank">
               Quotes
             </a>
           </li>
 
          
 
           <li>
             <a className="text-gray-700 dark:text-white transition cursor-pointer hover:text-gray-700/75" 
               onClick={handleBusinessClick}
             >
               Iqra Biashara
             </a>
           </li>

         </ul>
       </div>
 
       <div className="text-center grid sm:text-left">
         <p className="text-lg font-medium dark:text-orange-400 text-gray-900">Helpful Links</p>
 
         <ul className="mt-8 space-y-4 text-sm">
           <li>
             <a className="text-gray-700 dark:text-white transition hover:text-gray-700/75" href="">
               FAQs
             </a>
           </li>
 
           <li>
             <a className="text-gray-700 dark:text-white transition hover:text-gray-700/75" href="">
               Support
             </a>
           </li>
 
           <li>
             <a
               className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
               href="sms:+254727444454">
               <span
                 className="text-gray-700 dark:text-white transition group-hover:text-gray-700/75"
               >
                 Live Chat
               </span>
 
               <span className="relative flex h-2 w-2">
                 <span
                   className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"
                 ></span>
                 <span
                   className="relative inline-flex h-2 w-2 rounded-full bg-red-500"
                 ></span>
               </span>
             </a>
           </li>
         </ul>
       </div>
       </div>
       <div className="text-center md:text-left items-center col-span-4  md:col-span-4 lg:col-span-2">
         <p className="text-lg font-medium dark:text-orange-400 text-gray-900">Stay in Touch</p>
 
         <div className="mx-auto mt-4 max-w-md sm:ms-0">
           <p
             className="leading-relaxed dark:text-white text-gray-700 ltr:sm:text-left rtl:sm:text-right"
           >
            IQRA FM, The station with a difference. We love you for the sake
             of Allah Subhanahu Wataalah.
           </p>
 
           <form action="https://getform.io/f/acf85c8f-60e6-46f0-bbc7-33461ad39d07" method="POST" className="mt-4">
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
     
     <div
       className="mt-16 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between"
     >
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
       </ul>
     </div>
   </div>
  );
}

export default Footer;

