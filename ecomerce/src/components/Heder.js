import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/navigation';                 
import './style.css';
import {Link} from "react-router-dom";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useSelector } from 'react-redux';

const NavBar = () => { 

  const data = useSelector((state)=> state.cartreducer.carts )
  
  const data2 = useSelector((state)=> state.widhlistreducer.wish )

  return (
    
    <nav className="bg-gray-100 py-6 px-8 tp-md-lg-header  ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center mx-5">
          <img src="https://ninico-nextjs.vercel.app/assets/img/logo/logo.png" alt="Logo" className="h-7" />
        </div>

        {/* Search Box */}
        <div className="flex-1 ml-12">
          <input type="text" placeholder="Search Products..."
            className="w-full bg-gray-200 text-white rounded-md px-4 py-3"/>
        </div>

        {/* Language Select */}
        <div className="ml-4">
          
         <select className="bg-gray-200 text-black rounded-md px-4 py-3">            
            <option value="en">English</option>
            <option value="en">Arbic</option>
            <option value="fr">spenish</option>
            <option value="fr">madarianh</option>
          </select>
        </div>

        {/* USD Select */}
        <div className="ml-0">
          <select className="bg-gray-200 text-black rounded-md px-4 py-3 mx-5">
            <option value="en">USD</option>
            <option value="en">YEAN</option>
            <option value="fr">EURO</option>
          </select>
        </div>

        {/* Shopping, User, Like Icons */}
        <div className="flex items-center space-x-8 ml-10 text-xl  ">

          <a className="h-18 mx-0"> <Link to="/List"> <i class="fa-solid fa-cart-shopping"></i></Link> <span class="inline-flex items-center rounded-md bg-red-700 px-1 py-0 text-xs font-medium text-red-100 ring-1 ring-inset ring-red-100/10" style={{borderRadius:"30px"}}>{data.length}</span> </a>
          <a className="h-18 mx-5"> <i class="fa-regular fa-user"></i> </a>
          <a className="h-18 mx-5"> <Link to="/List"> <i class="fa-regular fa-heart"></i></Link>  <span class="inline-flex items-center rounded-md bg-red-700 px-1 py-0 text-xs font-medium text-red-100 ring-1 ring-inset ring-red-100/10" style={{borderRadius:"30px"}}>{data2.length}</span></a>
          
        </div>
      </div>
{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

</nav>
    
  );
};

export default NavBar;