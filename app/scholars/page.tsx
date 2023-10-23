import Link from 'next/link'
import React from 'react'
import { RiArrowGoBackFill } from 'react-icons/ri'

function ScholarsPage() {
  return (
   <div className="container my-24 mx-auto md:px-6">
   <section className="mb-32 text-center">
   <h1 className='font-serif text-2xl md:text-4xl text-center mt-3 mb-10'>
       <span className='underline decoration-6 
       decoration-orange-400'>ESTEEMED</span> {" "}
        SHEIKHS</h1>
     <div className="lg:gap-xl-12 grid gap-x-6 md:grid-cols-3 xl:grid-cols-4">
       <div className="mb-12">
         <img src="sheikhs/sudais.jpg"
           className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt=""  />
         <p className="mb-2 font-bold">Sheikh Abdurrahman Sudais</p>
         <p className="text-neutral-500 dark:text-neutral-300">Imam Makka Al-Mukarram</p>
       </div>

       <div className="mb-12">
         <img src="sheikhs/shuraim.jpeg"
           className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt=""  />
         <p className="mb-2 font-bold">Sheikh Saud Al-Shuraim</p>
         <p className="text-neutral-500 dark:text-neutral-300">Imam Makka Al-Mukarram</p>
       </div>

       <div className="mb-12">
         <img src="sheikhs/ajmi.jpg"
           className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt=""  />
         <p className="mb-2 font-bold">Ahmad bin Ali Al-Ajmi</p>
         <p className="text-neutral-500 dark:text-neutral-300">Imam Madinah Al-Munawwar</p>
       </div>


       <div className="mb-12">
         <img src="sheikhs/basit.jpeg"
           className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt=""  />
         <p className="mb-2 font-bold">Abdul Basit 'Abd us-Samad</p>
         <p className="text-neutral-500 dark:text-neutral-300">Quran reciter</p>
       </div>


       <div className="mb-12">
         <img src="sheikhs/maher.jpeg"
           className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt=""  />
         <p className="mb-2 font-bold">Maher Al-Muaiqly</p>
         <p className="text-neutral-500 dark:text-neutral-300">
         Imam Makka Al-Mukarram
         </p>
       </div>

       <div className="mb-12">
         <img src="sheikhs/sufi.jpg"
           className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt=""  />
         <p className="mb-2 font-bold">Sheikh Abdirrashid Ali Sufi</p>
         <p className="text-neutral-500 dark:text-neutral-300">Quran Reciter</p>
       </div>

       <div className="mb-12">
         <img src="sheikhs/uthmanmaalim.jpeg"
           className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt=""  />
         <p className="mb-2 font-bold">Sheikh Uthmaan Maalim</p>
         <p className="text-neutral-500 dark:text-neutral-300">Swahili Darsa/sermons</p>
       </div>

       <div className="mb-12">
         <img src="sheikhs/mselem.jpg"
           className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt=""  />
         <p className="mb-2 font-bold">Sheikh Mselem Bin Ali</p>
         <p className="text-neutral-500 dark:text-neutral-300">
           Swahili Darsa/Sermons
         </p>
       </div>

       <div className="mb-12">
         <img src="sheikhs/islam.jpeg"
           className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt=""  />
         <p className="mb-2 font-bold">Duktur Islam Muhammad</p>
         <p className="text-neutral-500 dark:text-neutral-300">Swahili sermons</p>
       </div>

       <div className="mb-12">
         <img src="sheikhs/aweis.jpg"
           className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt=""  />
         <p className="mb-2 font-bold">Duktur Mbarak Aweis</p>
         <p className="text-neutral-500 dark:text-neutral-300">Swahili Darsa/Sermons</p>
       </div>

       <div className="mb-12">
         <img src="sheikhs/omar.jpg"
           className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt=""  />
         <p className="mb-2 font-bold">sheikh omar suleiman</p>
         <p className="text-neutral-500 dark:text-neutral-300">English Sermons</p>
       </div>

       <div className="mb-12">
         <img src="sheikhs/anwar.jpg"
           className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="" />
         <p className="mb-2 font-bold">Anwar-Al-Awliki</p>
         <p className="text-neutral-500 dark:text-neutral-300">English sermons</p>
       </div>

       <div className="mb-12">
         <img src="sheikhs/khan.jpg"
           className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="" />
         <p className="mb-2 font-bold">Sheikh Nouman Ali Khan</p>
         <p className="text-neutral-500 dark:text-neutral-300">English sermons</p>
       </div>

       <div className="mb-12">
         <img src="sheikhs/kombo.jpg"
           className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt=""  />
         <p className="mb-2 font-bold">Sheikh Habib Ali Kombo </p>
         <p className="text-neutral-500 dark:text-neutral-300">
           Tafsiri ya Qur-an
         </p>
       </div>

       <div className="mb-12">
         <img src="sheikhs/lethome.jpeg"
           className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt=""  />
         <p className="mb-2 font-bold">Sheikh Ibrahim Lethome</p>
         <p className="text-neutral-500 dark:text-neutral-300">
           Islamic law Education
         </p>
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

export default ScholarsPage
