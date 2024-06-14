import React, { Component } from 'react'
import {Link} from "react-router-dom" 


export default class Page2 extends Component {
  render() {
    return (
      <div>
        <div className="flex space-x-6 ml-28 mt-32" >
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



      </div>
    )
  }
}
