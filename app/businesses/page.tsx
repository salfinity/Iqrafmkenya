import React from 'react';
import HeaderTop from './HeaderTop';
import HeaderMain from './HeaderMain';
import Navbarbiz from './Navbarbiz';
import Hero from './Hero';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import NewProducts from './NewProducts';
import Testimonials from './Testimonials';
import MobNavbar from './MobNavbar';

const BusinessPage: React.FC = () => {
  return (
    <div className="container">
       <h1 className='font-serif text-2xl md:text-4xl text-center mt-3 mb-6'>
       <span className='underline decoration-6 
       decoration-orange-400'>WELCOME TO</span> {" "}
        IQRA BIASHARA</h1>
      <HeaderTop />
      <HeaderMain />
      <Navbarbiz />
      <Hero />
      <NewProducts />
      <Testimonials />
      <MobNavbar />
    
    </div>
  );
};

export default BusinessPage;
