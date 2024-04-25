import React, { useRef, useState } from 'react';

function Heder2() {
  return (
    <div>
      

        {/* side-bar content  */}


    <div className="flex " style={{display:"flex", padding:"10px"}}>

<div className="flex flex-col w-56 h-full text-white my-5 " >
   
   
<button id className="flex items-center justify-center h-16 border-b border-gray-950 " >
    <h1 className="text-xl font-bold bg-red-700 " style={{height:"63px", width:"100%", textAlign:"center", padding:"12px", borderRadius:"10px 10px 0px 0px "}}> <i class="fa-solid fa-bars mr-2"></i> Categories</h1>
</button>


  <div className="flex flex-col flex-grow p-4 font-semibold dark:hover:bg-gray-100">
    
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
 </div>


  <div class="hidden md:block" >
        <div class="ml-4 mt-8 flex items-baseline  " style={{fontWeight:"600"}} >
         
    <div className="ml-16" style={{fontWeight:"700"}}>
      <select className="bg-white text-black rounded-md  py-2 hover:text-red-800">
        <option value="en" style={{border:"none"}}> Home</option>
        <option value="en">Wooden Home</option>
        <option value="fr">Fation Home</option>
        <option value="fr">Furniture Home</option>
        <option value="fr">cosmetic Home</option>
        <option value="fr">Food Grosery</option>
        <option value="fr"></option>
      </select>
    </div> 

    <div className="ml-0">
      <select className="bg-gray-00 text-black rounded-md py-2 hover:text-red-800" >
        <option value="en" style={{border:"none"}}> Shope</option>
        <option value="en">Shope 2</option>
        <option value="fr">Shope detail</option>
        <option value="fr">Shope detail 2</option>
        <option value="fr">Sing in</option>
        <option value="fr">Sing out</option>
        <option value="fr">Cart</option>
        <option value="fr">Location</option>
      </select>
    </div> 

    <div className="ml-0">
      <select className="bg-gray-00 text-black rounded-md py-2 hover:text-red-800" >
        <option value="en" style={{border:"none"}}> Page</option>
        <option value="en">Arbic</option>
        <option value="fr">spenish</option>
        <option value="fr">madarianh</option>
      </select>
    </div>

    <div className="ml-0">
      <select className="bg-gray-00 text-black rounded-md py-2 hover:text-red-800" >
        <option value="en"> Blog</option>
        <option value="fr">Blog Detail</option>
      </select>
    </div>

    <div className="ml-0">
      <select className="bg-gray-00 text-black rounded-md py-2 hover:text-red-800" >
        <option value="en" > Contact</option>
      </select>
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
