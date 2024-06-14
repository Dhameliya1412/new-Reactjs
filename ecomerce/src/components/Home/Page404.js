import React from 'react'

function Page404() {
  return (
    <div>
      <div className='mt-10 bg-slate-200' >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREmNxtYizwqUDvccZnsXvfZ8rpXopRaadK39b0lycwYgGX8Frx" alt="Movie" style={{width:"900px"}}/>
      </div>

      <div className="error image text-slate-400" style={{ fontSize:"280px", textAlign:"center"}}>
         <i class="fa-solid fa-circle-exclamation"></i>
      </div>

    <div class="flex flex-col items-center pb-1"> 
        <span class="font-bold  dark:text-gray-900 text-5xl"> 404. Page not found</span>
        <span class="text-lg  dark:text-gray-500 font-mono mt-5 px-72 text-center">Sorry, we couldn’t find the page you where looking for. We suggest that you return to homepage.</span>  
    </div>

    <button className="bg-red-600 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-5 mb-10 " style={{ marginLeft:"45%" }}>
       Back to Home
    </button>

    </div>
  )
}

export default Page404;

