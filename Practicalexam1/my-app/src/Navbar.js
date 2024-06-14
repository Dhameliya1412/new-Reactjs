import React from 'react'
import {Link} from "react-router-dom" 


const Navbar = () => {
  return (
    <>


<ui className="shadow-2xl shadow-black ">
<div className=" bg-sky-950 h-20 w-full text-white" style={{display:"flex"}}>


<a className='mx-10  text-4xl text-sky-300' style={{display:"flex", paddingLeft:"60px", paddingTop:"20px"}}><Link to="/"> ::::|D|:::: </Link></a>
<a className='ml-96 mt-2 dark:hover:text-lg dark:hover:duration-300 dark:hover:underline' style={{ paddingLeft:"0px", paddingTop:"20px"}}><Link to="/">Home</Link></a>
<a className='ml-10 mt-2 dark:hover:text-lg dark:hover:duration-300 dark:hover:underline' style={{ paddingLeft:"0px", paddingTop:"20px"}}><Link to="/About">About</Link></a>
<a className='mx-10 mt-2 dark:hover:text-lg dark:hover:duration-300 dark:hover:underline' style={{ paddingLeft:"0px", paddingTop:"20px"}}><Link to="/Setting">Setting</Link></a>
<div className='mx-2 bg-sky-400 w-32 h-10 text-center mt-5 rounded-xl text-slate-950 font-bold pt-2 dark:hover:bg-sky-900 dark:hover:text-sky-400 duration-300'><Link href="/Button1">Log in</Link></div>
<div className='mx-5 bg-sky-400 w-32 h-10 text-center mt-5 rounded-xl text-slate-950 font-bold pt-2 dark:hover:bg-sky-900 dark:hover:text-sky-400 duration-300'><Link href="/Button1">Sing Out</Link></div>


</div>
</ui>


      
    </>
  )
}

export default Navbar;
