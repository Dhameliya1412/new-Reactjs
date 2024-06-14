import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {

  return (
    <div className='pb-12 bg-slate-200'>
      <div class="relative w-full h-14 bg-gray-800 shadow-gray-600 shadow-lg">
  <div class="mx-auto flex max-w-7xl items-center justify-between px-0 py-2 lg:px-8">
    <div class="inline-flex items-center">
      <span class="font-bold text-2xl text-gray-50">Navbar</span>
    </div>
    <div class="hidden lg:block">
      <ul class="inline-flex space-x-8 ">
        <li>
          <Link
            to="/"
            class="text-lg font-simbold  text-white "
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/Login"
            class="text-lg font-simbold text-white"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/Register"
            class="text-lg font-simbold text-white"
          >
            Register
          </Link>
        </li>
        {/* <li>
          <Link
            to="/edit"
            class="text-lg font-simbold  text-black hover:text-white"
          >
            Edit
          </Link>
        </li> */}
        <li>
          <Link
            to="/Credit"
            class="text-lg font-simbold text-white"
          >
            Credit
          </Link>
        </li>
      </ul>
    </div>
    <div class="hidden lg:block">
      {/* <button
        type="button"
        class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
       Open
      </button> */}
    </div>
  </div>
</div>
    </div>
  )
}

export default Navbar