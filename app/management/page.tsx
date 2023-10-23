import Link from 'next/link'
import React from 'react'
import { RiArrowGoBackFill } from 'react-icons/ri'

function page() {
  return (
   <div className="container items-center my-24 mx-auto md:px-6">
   <section className="mb-32 text-center">
   <h1 className='font-serif text-4xl text-center mt-3 mb-5'>
       <span className='underline decoration-6 
       decoration-orange-400'>MANAGE</span> MENT
        </h1>

     <div className="lg:gap-xl-12 grid gap-x-6 md:grid-cols-3 xl:grid-cols-4">
       <div className="mb-12">
         <img src="management/mosque.jpg"
           className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt=""  />

         <p className="mb-2 font-bold">John Doe</p>
         <p className="text-neutral-500 dark:text-neutral-300">President</p>
       </div>

       <div className="mb-12">
         <img src="management/mosque.jpg"
           className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt=""  />

         <p className="mb-2 font-bold">Lisa Ferrol</p>
         <p className="text-neutral-500 dark:text-neutral-300">Vice Presidendt</p>
       </div>

       <div className="mb-12">
         <img src="management/mosque.jpg"
           className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt=""  />
         <p className="mb-2 font-bold">Maria Smith</p>
         <p className="text-neutral-500 dark:text-neutral-300">
           Senior consultant
         </p>
       </div>
       <div className="mb-12">
         <img src="management/mosque.jpg"
           className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt=""  />
         <p className="mb-2 font-bold">Agatha Bevos</p>
         <p className="text-neutral-500 dark:text-neutral-300">Co-founder</p>
       </div>
       
       <div className="mb-12">
         <img src="management/mosque.jpg"
           className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="" />
         <p className="mb-2 font-bold">Avaya Hills</p>
         <p className="text-neutral-500 dark:text-neutral-300">Copywritter</p>
       </div>

       <div className="mb-12">
         <img src="management/mosque.jpg"
           className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt=""  />
         <p className="mb-2 font-bold">Thierry Fischer</p>
         <p className="text-neutral-500 dark:text-neutral-300">
           Senior consultant
         </p>
       </div>

       <div className="mb-12">
         <img src="management/mosque.jpg"
           className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt=""  />
         <p className="mb-2 font-bold">Aisling Sheldon</p>
         <p className="text-neutral-500 dark:text-neutral-300">
           Senior developer
         </p>
       </div>

       <div className="mb-12">
         <img src="management/mosque.jpg"
           className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt=""  />
         <p className="mb-2 font-bold">Ayat Black</p>
         <p className="text-neutral-500 dark:text-neutral-300">Web designer</p>
       </div>
     </div>
     <button className='border-4 dark:border-white border-black rounded-md px-4 py-2'>
        <Link href='/'>
          <p className='underline text-black dark:text-white cursor-pointer items-center flex pl-8 pr-8 gap-2'><RiArrowGoBackFill className='text-bold'/> Back</p>
        </Link>
        </button>
   </section>
 </div>
  )
}

export default page
