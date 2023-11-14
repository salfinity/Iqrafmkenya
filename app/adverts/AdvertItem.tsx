"use client"

import Image from 'next/image';
import Link from 'next/link';

interface AdvertItemProps {
  title: string;
  backgroundImg: string;
  tech: string;
  projectUrl: string;
}

const AdvertItem: React.FC<AdvertItemProps> = ({ title, backgroundImg, tech, projectUrl }) => {
  return (
<div className='relative flex items-center justify-center h-auto w-full shadow-sm shadow-gray-400 rounded-xl cursor-pointer overflow-hidden group 
         md:hover:bg-gradient-to-r from-orange-700 to-orange-400'>
  <Image className='rounded-xl' src={backgroundImg} alt='/' width={600} height={400} />
  <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-700 to-orange-400 opacity-0 group-hover:opacity-70 transition-opacity'>
  </div>
  <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 group-hover:block'>
    <h3 className='text-2xl font-bold text-white tracking-wider text-center'>{title}</h3>
    <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
    <Link href={projectUrl}>
      <p className='text-center py-3 rounded-lg bg-white text-gray-900 font-bold text-lg cursor-pointer'>More Info</p>
    </Link>
  </div>
</div>
  
  );
};

export default AdvertItem;
