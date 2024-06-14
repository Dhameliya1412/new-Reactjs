import React from 'react'

function Welcome() {
  return (
<div className='bg-orange-100 '>
    <div className='flex bg-orange-100'>
        <div className='h-16 p-3 ml-5 font-bold'> Welcome to our international shop! Enjoy free shipping on orders $100 up. </div>
        <div className='font-bold p-3 ml-48'><i class="fa-regular fa-user"></i> Account </div>
        <div className='font-bold p-3 '><i class="fa-solid fa-plane-departure"></i> Track Your Order </div>
        <div className='font-bold p-1 pt-4 text-sm ml-4'><i class="fa-brands fa-facebook-f"></i> </div>
        <div className='font-bold p-1 pt-4 text-sm'><i class="fa-brands fa-twitter"></i> </div>
        <div className='font-bold p-1 pt-4 text-sm'><i class="fa-brands fa-pinterest"></i> </div>
        <div className='font-bold p-1 pt-4 text-sm'><i class="fa-brands fa-youtube"></i> </div>
        <div className='font-bold p-1 pt-4 text-sm'><i class="fa-brands fa-linkedin-in"></i> </div>


    </div>

<div className='text-red-700 font-bold font-mono text-lg ml-8 ' style={{marginTop:"-30px"}}>Shop Now <i class="fa-solid fa-arrow-right"></i></div>
<div className='text-red-700 font-bold font-mono text-lg ml-8 pb-1 ' style={{marginTop:"-26px"}}>________
</div>



</div>

  )
}

export default Welcome
