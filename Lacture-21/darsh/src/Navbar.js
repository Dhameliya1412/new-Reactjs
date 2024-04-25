import React from 'react'
import {Link} from "react-router-dom" 


const Navbar = () => {
  return (
    <>

<ui style={{display:"flex", justifyContent:"space-around", margin:"30px", backgroundColor:"gray", color:"black", height:"50px",fontSize:"20px"}}>

<li><Link to="/">Home</Link></li>
<li><Link to="/About">About</Link></li>
<li><Link href="/Setting">Setting</Link></li>
<li><Link href="/Documen">Document</Link></li>
<li><Link href="/Help">Help</Link></li>

</ui>


      
    </>
  )
}

export default Navbar;
