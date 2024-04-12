import React from "react";
import Style from '../components/Style.module.css';

 
function Lecture2() {
    return (
        <>
        <div class="bg-black h-5">

          <h4 style={{backgroundColor:"gray", color:"black", borderRedius:"20px" }}>this is the example of style</h4>
          <h4 className={Style.h4}> this is the example of style</h4>
          <h4> this is the example of style</h4> 

        </div>
        </>
    )
}

export default Lecture2; 