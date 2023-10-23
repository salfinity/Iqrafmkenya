"use client"

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
 } from "@material-tailwind/react";
import Link from "next/link";
 import { ChangeEvent, useEffect, useState } from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
 
 function SchedulePage() {
 
   const [activeTab, setActiveTab] = useState(""); // Set initial active tab to "Monday"
   const [selectedDay, setSelectedDay] = useState(""); // Set initial selected day to "Monday"
 
   useEffect(() => {
     // Set the initial state for 'activeTab' and 'selectedDay' to "Monday" when the component mounts
     setActiveTab("");
     setSelectedDay("");
   }, []); // Empty dependency array ensures this effect runs only once, during component mount
 
  const data = [
   {
     label: "MONDAY",
     value: "Monday",
     desc: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Monday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Monday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Monday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Monday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Monday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Monday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
     </div> 
    ),
   },
   {
     label: "TUESDAY",
     value: "Tuesday",
     desc: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Tuesday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Tuesday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Tuesday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Tuesday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Tuesday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Tuesday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
     </div> 
    ),
   },
   {
     label: "WEDNESDAY",
     value: "Wednesday",
     desc: (
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Wednesday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Wednesday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Wednesday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Wednesday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Wednesday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Wednesday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
     </div> 
    ),
   },
   {
     label: "THURSDAY",
     value: "Thursday",
     desc: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Thursday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Thursday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Thursday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Thursday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Thursday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Thursday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
     </div> 
    ),
   },
   {
     label: "FRIDAY",
     value: "Friday",
     desc: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Friday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Friday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Friday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Friday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Friday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Friday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
     </div> 
    ),
   },
   {
    label: "SATURDAY",
    value: "Saturday",
    desc: (
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Saturday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Saturday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Saturday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Saturday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Saturday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Saturday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
     </div> 
   ),
  },
  {
   label: "SUNDAY",
   value: "Sunday",
   desc: (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Sunday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Sunday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Sunday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Sunday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Sunday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
      <div className="dark:text-white text-center w-full">
        <h1>Program Name</h1>
        <img src="management/mosque.jpg" className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px" alt="Program 3" />
        <p>Time: Sunday, 9:00 AM - 10:30 AM</p>
        <p>Host: Hosts names goes here...</p>
      </div>
     </div> 
  ),
 },
 ];
 
 
 const handleDayChange = (event:  ChangeEvent<HTMLSelectElement>) => {
   const selectedValue = event.target.value;
   setSelectedDay(event.target.value);
   setActiveTab(event.target.value); // Set the active tab based on the selected day
 };
 
   return ( 
    <div>
     <h1 className='font-serif text-2xl md:text-4xl text-center mt-3 mb-4'>
        <span className='underline decoration-6 
        decoration-orange-400'>WEEKLY</span> {" "} SCHEDULE</h1>
     <div className="mb-0 position-center">
         <label htmlFor="dayDropdown">  
         </label>
         <select
           id="dayDropdown"
           className="ml-36 p-rounded md:hidden"
           onChange={handleDayChange}
           value={selectedDay}
         >
           <option value="">Select</option>
           {data.map(({ label, value }) => (
             <option key={value} value={value}>
               {label}
             </option>
           ))}
         </select>
       </div>
 
       {/* Render the original tabs on medium screens */}
       <div className="hidden md:block">
        <Tabs value="html">
         <TabsHeader className="grid grid-cols-3 md:grid-cols-7 text-xs md:text-sm
           gap-2 pb-2 h-56 md:max-w-6xl mx-auto">
           {data.map(({ label, value }) => (
             <Tab key={value} value={value} onClick={()=> setActiveTab(value)}>
             <span className={`transform ${activeTab === value ? `scale-95 transition-transform 
            -orange-400 underline decoration-4 decoration-orange-400 underline-offset-6`:``} 
             hover:scale-95 transition-transform hover-orange-400 hover:underline
             decoration-orange-400 underline-offset-4 font-bold text-lg`}>{label}</span>
           </Tab>
           ))}
         </TabsHeader>
         <TabsBody className="mt-0">
           {data.map(({ value, desc }) => (
             <TabPanel key={value} value={value}>
               {desc}
             </TabPanel>
           ))}
           </TabsBody>
         </Tabs>
       </div>   
 
       {selectedDay && (
         <div>
           {data.map(({ value, desc }) => {
             if (value === selectedDay) {
               return (
                 <div key={value}>
                   {desc}
                 </div>
               );
             }
             return null;
           })}
         </div>
       )}
        <button className='border-4 ml-16 md:ml-96 mt-16 md:mt-4 md:mb-12  dark:border-white border-black rounded-md px-4 py-2'>
            <Link href='/'>
              <p className='text-bold text-black dark:text-white cursor-pointer items-center flex pl-4 pr-4 gap-2'><RiArrowGoBackFill className='text-bold'/> Back to Homepage</p>
            </Link>
            </button>
     </div>
   );
 }
 
 export default SchedulePage;