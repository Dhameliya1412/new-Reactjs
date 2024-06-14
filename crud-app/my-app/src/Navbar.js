import React from 'react'
import {Link} from "react-router-dom" 

const Navbar = () => {
  return (
    <>

<ui className="shadow-2xl shadow-black ">
<div className=" bg-gray-950 h-20 w-full text-white" style={{display:"flex"}}>

<a className='mx-5  text-4xl text-gray-300' style={{display:"flex", paddingLeft:"60px", paddingTop:"20px"}}><Link to="/"> Navbar</Link></a>
<a className='ml-10 mt-2 dark:hover:text-lg dark:hover:duration-300 dark:hover:underline' style={{ paddingLeft:"0px", paddingTop:"20px"}}><Link to="/">Home</Link></a>
<a className='ml-10 mt-2 dark:hover:text-lg dark:hover:duration-300 dark:hover:underline' style={{ paddingLeft:"0px", paddingTop:"20px"}}><Link to="/About">About</Link></a>
<a className='mx-10 mt-2 dark:hover:text-lg dark:hover:duration-300 dark:hover:underline' style={{ paddingLeft:"0px", paddingTop:"20px"}}><Link to="/Setting">Setting</Link></a>
<div className='ml-96 mx-2 bg-gray-100 w-32 h-10 text-center mt-5 rounded-xl text-slate-950 font-bold pt-2 dark:hover:bg-gray-600 dark:hover:text-gray-100 duration-300'><Link to="/Login">Sing in</Link></div>
<div className='mx-5 bg-gray-100 w-32 h-10 text-center mt-5 rounded-xl text-slate-950 font-bold pt-2 dark:hover:bg-gray-600 dark:hover:text-gray-100 duration-300'><Link to="/Logout">Register</Link></div>

</div>
</ui>
    </>
  )
}

export default Navbar;
