
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from "react-router-dom" 

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Page1() {
  return (
    <div>


<div className="flex pr-6" style={{ display:"flex", borderRadius:"10px", marginTop:"10px", marginLeft:"230px"}}>


<div id="indicators-carousel " class="relative w-full h-full" data-carousel="static" style={{width:"600px", minWidth:"600px", width: "72%"}}>
<div class="relative h-56 rounded-lg md:h-80 "> 



<Swiper
  spaceBetween={30}
  centeredSlides={true}           
  autoplay={{
  delay:2000,
  disableOnInteraction: false,     
  }}
  pagination={{
    clickable: true,
  }}
  navigation={false}
  modules={[Autoplay, Pagination, Navigation]}
  className="mySwiper"
>
  <SwiperSlide> <div class=" duration-200 ease-in-out" data-carousel-item="active">
      <img src="https://ninico-nextjs.vercel.app/assets/img/slider/banner-1.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
  </div></SwiperSlide>


  <SwiperSlide> <div class=" duration-200 ease-in-out" data-carousel-item="active">
      <img src="https://ninico-nextjs.vercel.app/assets/img/slider/banner-2.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
  </div></SwiperSlide>


  <SwiperSlide>
  <div class=" duration-200 ease-in-out" data-carousel-item="active">
      <img src="https://ninico-nextjs.vercel.app/assets/img/slider/banner-3.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
  </div></SwiperSlide>
</Swiper>


</div>
<div class="grid-cols-6 absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2 ">
  <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
  <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
  <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
</div>
<button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
  <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
      <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
      </svg>
      <span class="sr-only">Previous</span>
  </span>
</button>
<button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
  <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
      <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
      </svg>
      <span class="sr-only">Next</span>
  </span>
</button>
</div>

<div className="h-">

<div className="flex items-center mx-0 ml-3 mt-0 h-22 ">
    <img src="https://ninico-nextjs.vercel.app/assets/img/slider/banner-slider-01.jpg" alt="Logo" className="h-1" style={{height:"170px", borderRadius:"10px"}}/>
  </div>

<div className="flex items-center mx-0 ml-3 mt-4">
    <img src="https://ninico-nextjs.vercel.app/assets/img/slider/banner-slider-02.jpg" alt="Logo" className="h-1" style={{height:"170px", borderRadius:"10px"}} />
  </div>
</div>

</div>
        
    </div>
  )
}

export default Page1;
