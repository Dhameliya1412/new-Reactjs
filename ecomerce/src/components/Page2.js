import React, { Component } from 'react';
import {Link} from "react-router-dom" 
import './Page2.css'
import Shope from './Shope';

export default class Page2 extends Component {
  render() {
    return (
      <div>
        <div className="flex space-x-6 ml-28 mt-24" >
        <a className="h-18 mx-0 text text-4xl font-medium" > Top</a>
        <a className="h-18 mx-0 text text-4xl text-red-700 font-extralight " >Categories</a>
        </div>

<div className="w-full grid-rows-4" style={{display:"flex", justifyContent:"space-between"}}>

{/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
{/* box-1 */}

<div class="w-52 h-64 mt-5 bg-white shadow dark:bg-gray-100 ">
    <div class="flex justify-end px-4 pt-4 w-20 ml-28 ">
      
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block bg-white text-red-600 font-bold dark:hover:text-zinc-50 dark:hover:bg-red-700 focus:ring-4 dark:hover:animation duration-500 focus:outline-none focus:ring-gray-200 rounded-2xl text-sm p-1.5 h-11  w-11" type="button">20</button>
      
    </div>
    <div class="flex flex-col items-center pb-10"> 
        <i class="fa-solid fa-chair bg-slate-200 h-32 w-32 pt-10 " style={{borderRadius:"100px", fontSize:"50px", textAlign:"center", }}></i>
        <span class="text-lg  dark:text-gray-900">Drift Wood</span>
        <span class="text-lg  dark:text-gray-900">Table Decore</span>
        
    </div>
</div>
{/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
{/* box-2 */}

<div class="w-52 h-64 mt-5 bg-white shadow dark:bg-gray-100 ">
    <div class="flex justify-end px-4 pt-4 w-20 ml-28 ">
      
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block bg-white text-red-600 font-bold dark:hover:text-zinc-50 dark:hover:bg-red-700 focus:ring-4 dark:hover:animation duration-500 focus:outline-none focus:ring-gray-200 rounded-2xl text-sm p-1.5 h-11  w-11" type="button">12</button>
      
    </div>
    <div class="flex flex-col items-center pb-10">
        <i class="fa-solid fa-parachute-box bg-slate-200 h-32 w-32 pt-10 " style={{borderRadius:"100px", fontSize:"50px", textAlign:"center", }}></i>
        <span class="text-lg  dark:text-gray-900">Floor Driftwood</span>
        <span class="text-lg  dark:text-gray-900">Sculpture</span>
        
    </div>
</div>
{/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
{/* box-3 */}

<div class="w-52 h-64 mt-5 bg-white shadow dark:bg-gray-100 ">
    <div class="flex justify-end px-4 pt-4 w-20 ml-28 ">
      
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block bg-white text-red-600 font-bold dark:hover:text-zinc-50 dark:hover:bg-red-700 focus:ring-4 dark:hover:animation duration-500 focus:outline-none focus:ring-gray-200 rounded-2xl text-sm p-1.5 h-11  w-11" type="button">03</button>
      
    </div>
    <div class="flex flex-col items-center pb-10">
        <i class="fa-solid fa-seedling bg-slate-200 h-32 w-32 pt-10 " style={{borderRadius:"100px", fontSize:"50px", textAlign:"center", }}></i>
        <span class="text-lg  dark:text-gray-900">Drift Wood</span>
        <span class="text-lg  dark:text-gray-900">Christmas Tree</span>
        
    </div>
</div>
{/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
{/* box-4 */}

<div class="w-52 h-64 mt-5 bg-white shadow dark:bg-gray-100 ">
    <div class="flex justify-end px-4 pt-4 w-20 ml-28 ">
      
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block bg-white text-red-600 font-bold dark:hover:text-zinc-50 dark:hover:bg-red-700 focus:ring-4 dark:hover:animation duration-500 focus:outline-none focus:ring-gray-200 rounded-2xl text-sm p-1.5 h-11  w-11" type="button">9</button>
      
    </div>
    <div class="flex flex-col items-center pb-10">
        <i class="fa-solid fa-plant-wilt bg-slate-200 h-32 w-32 pt-10 " style={{borderRadius:"100px", fontSize:"50px", textAlign:"center", }}></i>
        <span class="text-lg  dark:text-gray-900">Wooden</span>
        <span class="text-lg  dark:text-gray-900">Bluetooth Speaker</span>
        
    </div>
</div>
{/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
{/* box-5*/}

<div class="w-52 h-64 mt-5 bg-white shadow dark:bg-gray-100 ">
    <div class="flex justify-end px-4 pt-4 w-20 ml-28 ">
      
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block bg-white text-red-600 font-bold dark:hover:text-zinc-50 dark:hover:bg-red-700 focus:ring-4 dark:hover:animation duration-500 focus:outline-none focus:ring-gray-200 rounded-2xl text-sm p-1.5 h-11  w-11" type="button">10</button>
      
    </div>
    <div class="flex flex-col items-center pb-10">
        <i class="fa-solid fa-feather bg-slate-200 h-32 w-32 pt-10 " style={{borderRadius:"100px", fontSize:"50px", textAlign:"center", }}></i>
        <span class="text-lg  dark:text-gray-900">Receivers</span>
        <span class="text-lg  dark:text-gray-900"> Amplifiers</span>
        
    </div>
</div>
{/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
{/* box-6*/}

<div class="w-56 h-64 mt-5 bg-white shadow dark:bg-gray-100 ">
    <div class="flex justify-end px-4 pt-4 w-20 ml-28 ">
      
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block bg-white text-red-600 font-bold dark:hover:text-zinc-50 dark:hover:bg-red-700  dark:hover:animation duration-500 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-2xl text-sm p-1.5 h-11  w-11" type="button">05</button>
      
    </div>
    <div class="flex flex-col items-center pb-10">
        <i class="fa-solid fa-chair bg-slate-200 h-32 w-32 pt-10 " style={{borderRadius:"100px", fontSize:"50px", textAlign:"center", }}></i>
        <span class="text-lg  dark:text-gray-900">Appetizer</span>
        <span class="text-lg  dark:text-gray-900">Plate Set</span>
        
    </div>
</div>
</div>


{/* <div className="flex ">
    
<div className="flex space-x-6 ml-28 mt-10" >
        <a className="h-18 mx-0 text text-4xl font-medium" >Popular</a>
        <a className="h-18 mx-0 text text-4xl text-red-700 font-extralight " >Products</a>
        </div>
        
<nav class="bg-gray-100 dark:bg-white" >
    <div class="max-w-screen-96 px-20 py-3 mx-auto mt-10 ml-96 ">
        <div class="flex items-center">
            <ul class="flex flex-row font-bold mt-0 space-x-10 rtl:space-x-reverse text-sm ">
                <li>
                    <a href="#" class="text-gray-900 dark:text-black hover:underline" aria-current="page">All</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-black hover:underline">Populor</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-black hover:underline">On Side</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-red-800 hover:underline">Best Reted</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

</div> */}

{/*==================================================================================================================================================================================== */}
{/* 
<div className="card" style={{display:"flex", justifyContent:"space-evenly"}}>

<a href="#" class="flex flex-col items-center mt-6 bg-white border border-gray-200 rounded-lg shadow md:max-w-64 dark:hover:shadow-xl dark:hover: dark:hover:p-3 dark:hover:rounded-3xlxl dark:hover:animation duration-300
 hover:bg-gray-100  dark:bg-gray-200 dark:hover:bg-gray-100">
    <img class=" object-cover w-full rounded-t-lg h-96 md:h-auto md:w-full md:rounded-none md:rounded-s-lg" src="https://ninico-nextjs.vercel.app/assets/img/product/product-2.jpg" alt="jkjkjkjk"/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <p class="mb-3 font-normal text-neutral-500 dark:text-gray-600">Georgie Olson</p>
        <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">$60.00</h5>
    </div>
</a>


<a href="#" class="flex flex-col items-center mt-6 bg-white border border-gray-200 rounded-lg shadow md:max-w-64 hover:bg-gray-100  dark:bg-gray-200 dark:hover:bg-gray-100 dark:hover:p-3 dark:hover:rounded-3xlxl dark:hover:animation duration-300">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-full md:rounded-none md:rounded-s-lg" src="https://ninico-nextjs.vercel.app/assets/img/product/product-4.jpg" alt="jkjkjkjk"/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <p class="mb-3 font-normal text-neutral-500 dark:text-gray-600">Georgie Olson</p>
        <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">$60.00</h5>
    </div>
</a>


<a href="#" class="flex flex-col items-center mt-6 bg-white border border-gray-200 rounded-lg shadow md:max-w-64 hover:bg-gray-100  dark:bg-gray-200 dark:hover:bg-gray-100 dark:hover:p-3 dark:hover:rounded-3xlxl dark:hover:animation duration-300">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-full md:rounded-none md:rounded-s-lg" src="https://ninico-nextjs.vercel.app/assets/img/product/product-6.jpg" alt="jkjkjkjk"/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <p class="mb-3 font-normal text-neutral-500 dark:text-gray-600">Georgie Olson</p>
        <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">$60.00</h5>
    </div>
</a>


<a href="#" class="flex flex-col items-center mt-6 bg-white border border-gray-200 rounded-lg shadow md:max-w-64 hover:bg-gray-100  dark:bg-gray-200 dark:hover:bg-gray-100 dark:hover:p-3 dark:hover:rounded-3xlxl dark:hover:animation duration-300 ">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-full md:rounded-none md:rounded-s-lg" src="https://ninico-nextjs.vercel.app/assets/img/product/product-8.jpg" alt="jkjkjkjk"/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <p class="mb-3 font-normal text-neutral-500 dark:text-gray-600">Georgie Olson</p>
        <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">$60.00</h5>
    </div>
</a>


</div> */}


{/* 2 line ------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}



{/* <div className="card" style={{display:"flex", justifyContent:"space-evenly"}}>

<a href="#" class="flex flex-col items-center mt-6 bg-white border border-gray-200 rounded-lg shadow md:max-w-64 dark:hover:p-3 dark:hover:rounded-3xlxl dark:hover:animation duration-300
 hover:bg-gray-100  dark:bg-gray-200 dark:hover:bg-gray-100 ">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-full md:rounded-none md:rounded-s-lg " src="https://ninico-nextjs.vercel.app/assets/img/product/product-10.jpg" alt="jkjkjkjk"/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <p class="mb-3 font-normal text-neutral-500 dark:text-gray-600">Georgie Olson</p>
        <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">$60.00</h5>
    </div>
</a>
<a href="#" class="flex flex-col items-center mt-6 bg-white border border-gray-200 rounded-lg shadow md:max-w-64 hover:bg-gray-100  dark:bg-gray-200 dark:hover:bg-gray-100 dark:hover:p-3 dark:hover:rounded-3xlxl dark:hover:animation duration-300">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-full md:rounded-none md:rounded-s-lg" src="https://ninico-nextjs.vercel.app/assets/img/product/product-12.jpg" alt="jkjkjkjk"/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <p class="mb-3 font-normal text-neutral-500 dark:text-gray-600">Georgie Olson</p>
        <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">$60.00</h5>
    </div>
</a>
<a href="#" class="flex flex-col items-center mt-6 bg-white border border-gray-200 rounded-lg shadow md:max-w-64 hover:bg-gray-100  dark:bg-gray-200 dark:hover:bg-gray-100 dark:hover:p-3 dark:hover:rounded-3xlxl dark:hover:animation duration-300">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-full md:rounded-none md:rounded-s-lg" src="https://ninico-nextjs.vercel.app/assets/img/product/product-14.jpg" alt="jkjkjkjk"/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <p class="mb-3 font-normal text-neutral-500 dark:text-gray-600">Georgie Olson</p>
        <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">$60.00</h5>
    </div>
</a>
<a href="#" class="flex flex-col items-center mt-6 bg-white border border-gray-200 rounded-lg shadow md:max-w-64 hover:bg-gray-100  dark:bg-gray-200 dark:hover:bg-gray-100 dark:hover:p-3 dark:hover:rounded-3xlxl dark:hover:animation duration-300">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-full md:rounded-none md:rounded-s-lg" src="https://ninico-nextjs.vercel.app/assets/img/product/product-16.jpg" alt="jkjkjkjk"/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <p class="mb-3 font-normal text-neutral-500 dark:text-gray-600">Georgie Olson</p>
        <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">$60.00</h5>
    </div>
</a>

</div> */}



{/* 
<div className="card" style={{display:"flex", justifyContent:"space-evenly"}}>

<a href="#" class="flex flex-col items-center mt-6 bg-white border border-gray-200 rounded-lg shadow md:max-w-64 dark:hover:p-3 dark:hover:rounded-3xlxl dark:hover:animation duration-300
 hover:bg-gray-100  dark:bg-gray-200 dark:hover:bg-gray-100">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-full md:rounded-none md:rounded-s-lg" src="https://ninico-nextjs.vercel.app/assets/img/product/product-18.jpg" alt="jkjkjkjk"/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <p class="mb-3 font-normal text-neutral-500 dark:text-gray-600">Georgie Olson</p>
        <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">$60.00</h5>
    </div>
</a>
<a href="#" class="flex flex-col items-center mt-6 bg-white border border-gray-200 rounded-lg shadow md:max-w-64 hover:bg-gray-100  dark:bg-gray-200 dark:hover:bg-gray-100 dark:hover:p-3 dark:hover:rounded-3xlxl dark:hover:animation duration-300">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-full md:rounded-none md:rounded-s-lg" src="https://ninico-nextjs.vercel.app/assets/img/product/product-20.jpg" alt="jkjkjkjk"/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <p class="mb-3 font-normal text-neutral-500 dark:text-gray-600">Georgie Olson</p>
        <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">$60.00</h5>
    </div>
</a>


</div> */}



</div>
      
    )
  }
}
