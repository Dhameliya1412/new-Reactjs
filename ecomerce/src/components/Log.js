// import React from 'react'

// import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'


// import bgimg from '../asset/breadcrumb-01.jpg'

// import logbg from '../asset/login-bg.jpg'

// import logbg2 from '../asset/sign-bg.jpg'

// import { CiLock } from "react-icons/ci";
// import { FaRegUser } from "react-icons/fa";
// import { FaKey } from "react-icons/fa";
// // import { FaArrowRight } from "react-icons/fa";
// import { PiBagSimpleFill } from "react-icons/pi";
// import { MdOutlineEmail } from "react-icons/md";
// import { LuShoppingBag } from "react-icons/lu";


function Log() {
    // const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("")

    const getEmail = localStorage.getItem("Email");
    const getPw = localStorage.getItem("Password");

    function onSubmitFun(e) {
        e.preventDefault();  //interview
        if (!email && !pw) {
            alert("plz fill all field")
        } else {
            alert("succesfully register user")
            localStorage.setItem("Email", email);
            localStorage.setItem("password", pw)
            // navigate("/")
        }
    }

    function onSubmitLogin(e) {
        e.preventDefault();
        if (!email && !pw) {
            alert("plz fill all field")
        } else if (email !== getEmail && pw !== getPw) {
            alert("plz fill currect details")
        }
        else {
            alert("succesfully login user")
        }
    }
    return (

        <>
        <div className=''>
            <div className='img-main'>
                <div className='log-img relative'>
                    <img src="" alt="" className='h-52' />
                    <div className='log-overlay absolute top-5 px-20 mt-10'>
                        <span>
                            <a href="#">Home</a>
                        </span>
                        <i class="fa-solid fa-minus text-gray-400 ml-2"></i>
                        <span>
                            <a href="#" className='ml-2 text-gray-500'>Sign In</a>
                        </span>
                        <h2 className='text-3xl  font-semibold'>Sign In</h2>
                    </div>
                </div>
            </div>

        </div>

        <div className='main-card grid  grid-cols-2 gap-5 mx-10 '>

            {/* log card 1 */}
            
        <div className='main-card2 mt-5 flex log-card1 bg-gray-300 rounded-2xl bg-neutral-200 rounded-xl' onSubmit={onSubmitFun}>
            <div className=''>
            <div className='cart- '>
                <div className='main-img'>
                    <img src="https://ninico-nextjs.vercel.app/assets/img/banner/login-bg.jpg" alt="" className='rounded-t-lg'/>
                </div>
            </div>
            <div className='cart-text border-2'>
                <div className='px-20 flex'>
                    <div className='  w-10 h-10 rounded-lg flex items-center justify-center mt-5 bg-white '>
                         <a className='text-pink-600'/>
                    </div>
            {/* <CiLock  className='  w-5 h-5 mt-5  p-5  rounded-md'/> */}
            <div className='log-text pl-3'>
                <h3 className='text-2xl font-bold mt-5 '>Login Here</h3>
                <p className='text-gray-600  text-sm mt-3 '>Your personal data will be used to support your experience  <br /> 
                    throughout this website, 
                to manage access to your account.</p>
            </div>
                </div>
            <div className='input  mt-5 px-20'>
                <form action="#" className='relative border-2 border-gray-00 rounded-md'>
                    <span className='absolute pt-3 pl-2'>
                    
                    </span>
                    <input placeholder="Username / email address"  type="email" onChange={(e) => setEmail(e.target.value)}  className='w-[100%] h-14 rounded-lg pl-11 items-center'></input>
                </form>
            </div>

            <div className='input mt-5 px-20'>
                <form action="#" className='relative border-2 border-gray-00 rounded-md'>
                    <span className='absolute pt-4 pl-2'>
                
                    </span>
                    <input placeholder="Password" type="email" onChange={(e) => setEmail(e.target.value)}  className='w-[100%] h-14 rounded-lg pl-11 items-center'></input>
                </form>
            </div>
            <div className='flex items-center justify-between px-20'>
                <div className=' border-nonecd '> 
                   <input class="form-check-input" id="" type="checkbox"/>
                   <label class="form-check-label pl-3" for="">Remember me</label>
                </div>
                <div className=''>
                    <a href="#" className='underline font- text-stone-700'>Forget Password</a>
                </div>
            </div>
            <div className='cat-btn flex mt-2 justify-center'>
                <button className='log-button bg-red-700 mt-4 h-12 w-96 dark:hover:bg-red-800 dark:hover:text-white rounded-md'>
                    Login Now 
                    <i class="fa-solid fa-arrow-right ml-5"></i>
                    {/* <FaArrowRight /> */}
                </button>
            </div>
            </div>
            </div>
        </div>

               {/* log card 2 */}

               <div className='mt-5 flex log-card1 bg-neutral-200 rounded-xl'>
            <div className='' onSubmit={onSubmitFun}>
            <div className='cart- '>
                <div className='main-img'>
                    <img src="https://ninico-nextjs.vercel.app/assets/img/banner/sign-bg.jpg" alt="" className='rounded-t-lg'/>
                </div>
            </div>
            <div className='cart-text border-2'>
                <div className='px-20 flex'>
                    <div className='  w-10 h-10 rounded-lg flex items-center justify-center mt-5 bg-white '>
                    <a className='text-pink-600'/>
                    </div>
            {/* <CiLock  className='  w-5 h-5 mt-5  p-5  rounded-md'/> */}
            <div className='log-text pl-3'>
                <h3 className='text-2xl font-bold mt-5'>Sign Up</h3>
                <p className='text-gray-600 text-sm mt-3 '>Your personal data will be used to support your experience  <br />   
                    throughout this website, 
                to manage access to your account.</p>
            </div>
                </div>
            <div className='input  mt-5 px-20'>
                <form action="#" className='relative border-2 border-gray-00 rounded-md'>
                    <span className='absolute pt-3 pl-2 '>
                    </span>
                    <input placeholder="Email address" type="email"  onChange={(e) => setEmail(e.target.value)}  className='w-[100%] h-14 rounded-lg pl-11 items-center'></input>
                </form>
            </div>

            <div className='input mt-5 px-20'>
                <form action="#" className='relative border-2 border-gray-00 rounded-md'>
                    <span className='absolute pt-4 pl-2'>
                    </span>
                    <input placeholder="Password" type="email"  onChange={(e) => setEmail(e.target.value)}  className='w-[100%] h-14 rounded-lg pl-11 items-center'></input>
                </form>
            </div>
            <div className='flex items-center justify-between px-20'>
                {/* <div className=''> 
                   <input class="form-check-input rounded-none" id="flexCheckDefault" type="checkbox"/>
                   <label class="form-check-label pl-3" for="flexCheckDefault">Remember me</label>
                </div> */}
                <div className=''>
                    <a href="#" className='underline font-medium text-neutral-600'>Already Have Account?</a>
                </div>
            </div>
            <div className='cat-btn flex mt-2 justify-center '>
                <button className='log-button2 bg-orange-50 mt-4 mb-8 h-12 w-96 dark:hover:bg-slate-950 dark:hover:text-white rounded-md '>
                    Register Now 
                    <i class="fa-solid fa-arrow-right ml-5"></i>
                    {/* <FaArrowRight /> */}
                </button>
            </div>
            </div>
            </div>
        </div>

      
        </div>

        </>
    )
}

export default Log
