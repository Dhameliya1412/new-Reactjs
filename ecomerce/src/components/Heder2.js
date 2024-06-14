import React, { useRef, useState } from 'react';
import {Link} from "react-router-dom" 
import './Heder2.css'

                                                         
function Heder2() {
  return (
    <div>
      
        {/* side-bar content  */}

<div className="flex " style={{display:"flex", padding:"0px", marginTop:"-20px"}}>

{/* <div className="flex flex-col w-56 h-full text-white my-5 pl-5 " >

   <button id className="flex items-center justify-center h-16 border-b border-gray-950 " >
    <h1 className="text-xl font-bold bg-red-700 " style={{height:"63px", width:"100%", textAlign:"center", padding:"12px", borderRadius:"10px 10px 0px 0px "}}> <i class="fa-solid fa-bars mr-2"></i> Categories</h1>
</button>

 <div className="flex flex-col flex-grow p-4 font-semibold dark:hover:bg-gray-100 ">
    
    <a href="#" className="text-gray-900 hover:text-red-800 mb-5"> <i class="fa-regular fa-user text-red-700 mr-2" ></i> Candles</a>
    <a href="#" className="text-gray-900 hover:text-red-800 mb-5"> <i class="fa-brands fa-pagelines text-red-700 mr-2"></i> Handmade</a>
    <a href="#" className="text-gray-900 hover:text-red-800 mb-5"> <i class="fa-solid fa-shoe-prints text-red-700 mr-1"></i> Ginft Steps</a>
    <a href="#" className="text-gray-900 hover:text-red-800 mb-5"> <i class="fa-regular fa-face-smile text-red-700 mr-2"></i> Plastic Gift</a>
    <a href="#" className="text-gray-900 hover:text-red-800 mb-5"> <i class="fa-regular fa-futbol text-red-700 mr-2"></i> Handy Cream</a>
    <a href="#" className="text-gray-900 hover:text-red-800 mb-5"> <i class="fa-regular fa-chess-king text-red-700 mr-2"></i> Cosmatic</a>
    <a href="#" className="text-gray-900 hover:text-red-800 mb-5"> <i class="fa-solid fa-gift text-red-700 mr-2"></i> Silk Accessories</a>
    <a href="#" className="text-gray-950 hover:text-red-800 mb-4"> Value of The Day</a>
    <a href="#" className="text-gray-950 hover:text-red-800 mb-4"> Top 100 products</a>
    <a href="#" className="text-gray-950 hover:text-red-800 mb-4"> New Arrivels</a>
  </div>
 </div> */}




 <div className="ml-10 mt-6 " style={{fontWeight:"500"}}>
  <div class="dropdown ">
  <button id className="flex items-center justify-center h-16 border-b border-gray-950 " >
    <h1 className="text-xl font-bold bg-red-700 " style={{height:"63px", width:"190px", textAlign:"center",color:"white", padding:"18px", borderRadius:"10px 10px 0px 0px "}}> <i class="fa-solid fa-bars mr-2"></i> Categories</h1>
</button>

<div class="dropdown-content "  style={{lineHeight:"15px", width:"190px"}}>
<a href="#" className="text-gray-900 hover:text-red-800 "> <i class="fa-regular fa-user text-red-700 mr-2" ></i> Candles</a>
    <a href="#" className="text-gray-900 hover:text-red-800 "> <i class="fa-brands fa-pagelines text-red-700 mr-2"></i> Handmade</a>
    <a href="#" className="text-gray-900 hover:text-red-800 "> <i class="fa-solid fa-shoe-prints text-red-700 mr-1"></i> Ginft Steps</a>
    <a href="#" className="text-gray-900 hover:text-red-800 "> <i class="fa-regular fa-face-smile text-red-700 mr-2"></i> Plastic Gift</a>
    <a href="#" className="text-gray-900 hover:text-red-800 "> <i class="fa-regular fa-futbol text-red-700 mr-2"></i> Handy Cream</a>
    <a href="#" className="text-gray-900 hover:text-red-800 "> <i class="fa-regular fa-chess-king text-red-700 mr-2"></i> Cosmatic</a>
    <a href="#" className="text-gray-900 hover:text-red-800 "> <i class="fa-solid fa-gift text-red-700 mr-2"></i> Silk Accessories</a>
    <a href="#" className="text-gray-950 hover:text-red-800 "> Value of The Day</a>
    <a href="#" className="text-gray-950 hover:text-red-800 "> Top 100 products</a>
    <a href="#" className="text-gray-950 hover:text-red-800 "> New Arrivels</a>
</div>
</div>
</div> 





  <div class="hidden md:block " style={{textAlign:"center="}} > 
        <div class=" mt-8 flex items-baseline " style={{fontWeight:"600"}} >
         
    <div className="ml-6 " style={{fontWeight:"700"}}>
      <div class="dropdown">
  <button class="dropbtn">Home</button>
  <div class="dropdown-content"  style={{lineHeight:"15px", textAlign:"center"}}>
  <a href="#"> <Link to="/">Wooden Home</Link></a>
  <a href="#">Fation Home</a>
  <a href="#">Furniture Home</a>
  <a href="#">Cosmatic Home</a>
  <a href="#">Food Grosery</a>
  </div>
</div>
    </div> 
    {/* <Link to="/error">Wooden Home</Link> */}
                    
    <div className="ml-6 " style={{fontWeight:"700"}}>
  <div class="dropdown">
<button class="dropbtn">Shope</button>
<div class="dropdown-content ">
<a href="#"> <Link to="/Page2">Shope details</Link></a>
<a href="#">Shope location</a>
<a href="#"><Link to="/Carts">Carts</Link></a>
<a href="#"> <Link to="/Log">Sing in</Link></a>
<a href="#">Cheack Out</a>
<a href="#">Whish List</a>
<a href="#"> product Track</a>
</div>
</div>
</div> 

<div className="ml-6 " style={{fontWeight:"700"}}>
  <div class="dropdown">
<button class="dropbtn">Page</button>
<div class="dropdown-content ">

<div className='d flex' style={{fontWeight:"600"}}>

<div className='pl-12' >
<a href="#">Page layout</a>
<a href="#">Shope Filter V1</a>
<a href="#">Shope Filter V2</a>
<a href="#">Shope Slidebar</a>
<a href="#">Shope Right Slidebar</a>
<a href="#"> Shope List View</a>
</div>

<div className='pl-12'>
<a href="#">Page Layout</a>
<a href="#"> <Link to="/About">About</Link></a>
<a href="#">Cart</a>
<a href="#">Checkout</a>
<a href="#"> <Link to="/Log">Sing In </Link></a>
<a href="#"> <Link to="/Log">Sign Out</Link></a>
</div>

<div className='px-12'>
<a href="#">Page Type</a>
<a href="#">Product Track</a>
<a href="#">Wishlist</a>
<a href="#"> <Link to="/Page404">Error/404</Link></a>
<a href="#">Coming Soon</a>
</div>

</div>

</div>
</div>
</div> 

<div className="ml-6 " style={{fontWeight:"700"}}>
  <div class="dropdown">
<button class="dropbtn">Blog</button>
<div class="dropdown-content ">
<a href="#">Blog</a>
<a href="#">Blog details</a>
</div>
</div>
</div> 

<div className="ml-6 " style={{fontWeight:"700"}}>
  <div class="dropdown">
<button class="dropbtn"> <Link to="/Contact">Contact</Link></button>
<div class="dropdown-content ">

</div>
</div>
</div> 



    <div className="flex space-x-6 ml-24" >
    <a className="h-18 mx-0"> <i class="fa-solid fa-phone" style={{color:"darkred"}}></i> 908.408.501.89 </a> 
    <a className="h-18 mx-0" > <i class="fa-solid fa-location-dot" style={{color:"darkred"}}></i> Find store </a>
</div>

  </div>
   
  </div>
</div>


    </div>
  )
}

export default Heder2;
