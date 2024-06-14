import React from 'react' 
 
import { Swiper, SwiperSlide } from 'swiper/react'; 
 
import 'swiper/css'; 
import 'swiper/css/pagination'; 
import 'swiper/css/navigation'; 
 
import { Autoplay, Pagination, } from 'swiper/modules'; 
 
function About() { 
    return ( 
        <div> 
            {/* <Categories/> */} 
            <div className='bg relative'> 
                <div className='text-start mx-10 space-y-3 py-11'> 
                    <p>Home ----About Us</p> 
                    <h1 className='text-4xl font-bold'>About Us</h1> 
                </div> 
            </div> 
            <div className='pt-20'> 
                <div className='flex justify-around relative '> 
                    <img src="https://ninico-nextjs.vercel.app/assets/img/banner/about-img-1.jpg" style={{width:"45%"}} /> 
                    <img src="https://ninico-nextjs.vercel.app/assets/img/banner/about-img-2.jpg" style={{width:"45%"}}/> 
                </div> 
                <div className='flex justify-center'> 
                    <img src="" className='absolute -mt-28' /> 
                </div> 
                <div className='text-start px-9 py-16'> 
                    <h1 className='text-sm text-gray-500'>About Us</h1> 
                    <h1 className='text-4xl font-bold'>About Our Story</h1> 
                </div> 
                <div className='flex justify-around'> 
                    <p className='text-start w-[33.5%] text-gray-500'>Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services without costly customization or add ons. Get orders to your customers in lots of ways by offering shipping, pickup, delivery, and even QR code ordering.</p> 
                    <p className='text-start w-[33.5%] text-gray-500'>Expand your reach and sell more using seamless integrations with Google, Instagram, Facebook, and more. Built- in SEO tools make it easy for shoppers to find your business on search engines. Get access to the entire suite of integrated Square solutions to help you run your business. Integration between Square Online and all Square point of sale systems makes inventory management easy. Subscribe to Square Marketing and easily send email promotions to your customers using the contact information</p> 
                    <div className='w-72'> 
                        <div className='flex'> 
                            <i className="fa-solid fa-check mt-1 mr-4 h-16 text-gray-500"></i> 
                            <p className='text-start'>Orders go right to your restaurant point of sale, KDS, and kitchen</p> 
                        </div> 
                        <div className='flex'> 
                            <i className="fa-solid fa-check mt-1 mr-4 h-16 text-gray-500"></i> 
                            <p className='text-start'>Provide in-person pickup, delivery by professional couriers</p> 
                        </div> 
                        <div className='flex'> 
                            <i className="fa-solid fa-check mt-1 mr-4 h-16 text-gray-500"></i> 
                            <p className='text-start'>Offer in-person diners self-serve, contactless ordering via QR codes.</p> 
                        </div> 
                    </div> 
                </div> 
            </div> 
            <div className='bg-stone-100 py-20 text-center'> 
                <h1 className='text-sm text-gray-500'>Team</h1> 
                <h1 className='text-4xl font-bold'>Meet With Team</h1> 
                <div className='pt-16'> 
                    <Swiper 
                        slidesPerView={1} 
                        spaceBetween={10} 
                        autoplay={{ 
                            delay: 2500, 
                            disableOnInteraction: false, 
                        }} 
                        breakpoints={{ 
                            567: { 
                                slidesPerView: 1, 
                                spaceBetween: 0, 
                            }, 
                            768: { 
                                slidesPerView: 3, 
                                spaceBetween: 30, 
                            }, 
                            992: { 
                                slidesPerView: 4, 
                                spaceBetween: 20, 
                            }, 
                            1200: { 
                                slidesPerView: 5, 
                                spaceBetween: 10, 
                            }, 
                        }} 
                        modules={[Autoplay]} 
                        className="mySwiper " 
                    > 
                        <SwiperSlide> 
                            <img src="" alt=""/> 
                            <div className='absolute bottom-0 mb-10 text-start ml-5'> 
                                <p className='text-white text-sm font-semibold'>Founder</p> 
                                <h3 className='text-white text-2xl font-bold'>Rosiliten H.Eline</h3> 
                            </div> 
                        </SwiperSlide> 
 
                        <SwiperSlide> 
                            <img src="" alt=""/> 
                            <div className='absolute bottom-0 mb-10 text-start ml-5'> 
                                <p className='text-white text-sm font-semibold'>CEO</p> 
                                <h3 className='text-white text-2xl font-bold'>Ukolilix X. Xilanorix</h3> 
                            </div> 
                        </SwiperSlide> 
 
                        <SwiperSlide> 
                            <img src="" alt=""/> 
                            <div className='absolute bottom-0 mb-10 text-start ml-5'> 
                                <p className='text-white text-sm font-semibold'>Designer</p> 
                                <h3 className='text-white text-2xl font-bold'>Alonso M. Miklonax</h3> 
                            </div> 
                        </SwiperSlide> 
 
                        <SwiperSlide> 
                            <img src="" alt=""/> 
                            <div className='absolute bottom-0 mb-10 text-start ml-5'> 
                                <p className='text-white text-sm font-semibold'>Developer</p> 
                                <h3 className='text-white text-2xl font-bold'>Miranda H. Halim</h3> 
                            </div> 
                        </SwiperSlide> 
 
                        <SwiperSlide> 
                            <img src="" alt=""/> 
                            <div className='absolute bottom-0 mb-10 text-start ml-5'> 
                                <p className='text-white text-sm font-semibold'>Founder</p> 
                                <h3 className='text-white text-2xl font-bold'>Rosiliten H.Eline</h3> 
                            </div> 
                        </SwiperSlide> 
 
                        <SwiperSlide> 
                            <img src="" alt=""/> 
                            <div className='absolute bottom-0 mb-10 text-start ml-5'> 
                                <p className='text-white text-sm font-semibold'>CEO</p> 
                                <h3 className='text-white text-2xl font-bold'>Ukolilix X. Xilanorix</h3> 
                            </div> 
                        </SwiperSlide> 
                    </Swiper> 
                </div> 
            </div> 
            <div className='py-20'> 
                <div className='flex justify-around items-center '> 
                    <img src="https://ninico-nextjs.vercel.app/assets/img/banner/about-banner-1.jpg" style={{ margin:"3%", width:"45%"}} /> 
                    <div className='text-start w-[41rem]'> 
                        <h1 className='text-sm text-gray-500'>Features #01</h1> 
                        <h1 className='text-4xl mt-1 font-bold'>Solutions that work together</h1> 
                        <p className='text-gray-500 mt-8'>Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.</p> 
                        <button className='mt-8 border px-8 py-3.5 text-lg rounded-md font-bold hover:bg-rose-600 hover:text-white duration-500'>Get In Touch</button> 
                    </div> 
                </div> 
                <div className='pt-20 flex justify-around items-center'> 
                    <div className='text-start w-[41rem] pl-9'> 
                        <h1 className='text-sm text-gray-500'>Features #02</h1> 
                        <h1 className='text-4xl mt-1 font-bold'>All kinds of payments securely</h1> 
                        <p className='text-gray-500 mt-8'>Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.</p> 
                        <button className='mt-8 border px-8 py-3.5 text-lg rounded-md font-bold hover:bg-rose-600 hover:text-white duration-500'>Contact With Us</button> 
                    </div> 
                    <img src="https://ninico-nextjs.vercel.app/assets/img/banner/about-banner-2.jpg" style={{ margin:"3%", width:"45%"}}  /> 
                </div> 
            </div> 
        </div> 
    ) 
} 
 
export default About