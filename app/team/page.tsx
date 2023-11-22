import Image from "next/image";
import Link from 'next/link';
import React from 'react'
import { RiArrowGoBackFill } from 'react-icons/ri';

function TeamPage() {
  const imageWidth = 220; // Set a reasonable width for your images
  const imageHeight = 200;   
  
  return (
        <div className="container mt-3 mx-auto md:px-6">
         <section className="mb-32 text-center">
         <h1 className='font-serif text-2xl md:text-4xl text-center mt-3 mb-10'>
          <span className='underline decoration-6 
          decoration-orange-400'>MEET</span> {" "}
           THE {" "} TEAM </h1>

           <div className="lg:gap-xl-12 grid gap-x-6 md:grid-cols-3 xl:grid-cols-4">
             <div className="mb-12">
               <Image layout="fixed"
          width={imageWidth}
          height={imageHeight}
         
            objectFit="cover" src="/team/madina.jpg"
                 className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt=""  />
               <p className="mb-2 font-bold">Madina Idd Juma</p>
               <p className="text-neutral-500 dark:text-neutral-300">Presenter</p>
             </div>

             <div className="mb-12">
               <Image layout="fixed"
          width={imageWidth}
          height={imageHeight}
         
            objectFit="cover" src="/team/nur.png"
                 className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt=""  />
               <p className="mb-2 font-bold">Nur Saiid Thwalib</p>
               <p className="text-neutral-500 dark:text-neutral-300">Presenter</p>
             </div>

             <div className="mb-12">
               <Image layout="fixed"
          width={imageWidth}
          height={imageHeight}
         
            objectFit="cover" src="/team/galoro.jpeg"
                 className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt=""  />
               <p className="mb-2 font-bold">Samira Galoro</p>
               <p className="text-neutral-500 dark:text-neutral-300">
                 Presenter
               </p>
             </div>
             <div className="mb-12">
               <Image layout="fixed"
          width={imageWidth}
          height={imageHeight}
         
            objectFit="cover" src="/team/fahamu.jpg"
                 className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt=""  />
               <p className="mb-2 font-bold">Daktari Fahamu Kazungu</p>
               <p className="text-neutral-500 dark:text-neutral-300">Presenter</p>
             </div>

             <div className="mb-12">
               <Image layout="fixed"
          width={imageWidth}
          height={imageHeight}
         
            objectFit="cover" src="/team/shuaib.jpeg"
                 className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt=""  />
               <p className="mb-2 font-bold">Shuaib Ali</p>
               <p className="text-neutral-500 dark:text-neutral-300">
                 Presenter
               </p>
             </div>

             <div className="mb-12">
               <Image layout="fixed"
          width={imageWidth}
          height={imageHeight}
         
            objectFit="cover" src="/team/ramlah.png"
                 className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt=""  />
               <p className="mb-2 font-bold">Ramla Abdi</p>
               <p className="text-neutral-500 dark:text-neutral-300">Presenter</p>
             </div>

             <div className="mb-12">
               <Image layout="fixed"
          width={imageWidth}
          height={imageHeight}
         
            objectFit="cover" src="/team/salim.jpg"
                 className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt=""  />
               <p className="mb-2 font-bold">Ali Salim</p>
               <p className="text-neutral-500 dark:text-neutral-300">Sports Presenter</p>
             </div>

             
             <div className="mb-12">
               <Image layout="fixed"
          width={imageWidth}
          height={imageHeight}
         
            objectFit="cover" src="/team/abubakar.png"
                 className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="" />
               <p className="mb-2 font-bold">Abubakar Juma</p>
               <p className="text-neutral-500 dark:text-neutral-300"> Business Presenter</p>
             </div>

             <div className="mb-12">
               <Image layout="fixed"
          width={imageWidth}
          height={imageHeight}
         
            objectFit="cover" src="/management/mosque.jpg"
                 className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt=""  />
               <p className="mb-2 font-bold">MashaAllah</p>
               <p className="text-neutral-500 dark:text-neutral-300">
                 Presenter
               </p>
             </div>

             <div className="mb-12">
               <Image layout="fixed"
          width={imageWidth}
          height={imageHeight}
         
            objectFit="cover" src="/management/mosque.jpg"
                 className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="" />
               <p className="mb-2 font-bold">MashaAllah</p>
               <p className="text-neutral-500 dark:text-neutral-300">Presenter</p>
             </div>


             <div className="mb-12">
               <Image layout="fixed"
          width={imageWidth}
          height={imageHeight}
         
            objectFit="cover" src="/management/mosque.jpg"
                 className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt=""  />
               <p className="mb-2 font-bold">MashaAllah</p>
               <p className="text-neutral-500 dark:text-neutral-300">
                 Senior developer
               </p>
             </div>

             <div className="mb-12">
               <Image layout="fixed"
          width={imageWidth}
          height={imageHeight}
         
            objectFit="cover" src="/management/mosque.jpg"
                 className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt=""  />
               <p className="mb-2 font-bold">MashaAllah</p>
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

export default TeamPage;
