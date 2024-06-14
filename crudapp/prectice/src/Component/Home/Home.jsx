import React, { useEffect } from 'react' 
import { useState } from 'react'; 
// import Navbar from "../Navbar/Navbar" 
import axios from "axios"; 
import {Link} from 'react-router-dom' 
 
 function Home() { 
  const [data,setpeople]=useState([]); 
 
  const loadUser = async()=>{  
    const res = await axios.get("http://localhost:3002/people") 
    console.log(res.data,"res"); 
    setpeople(res.data) 
    console.log(res,"===") 
  }  
  useEffect(()=>{ 
    loadUser() 
  },[]) 
 
  const Ondelete = (id) =>{ 
    axios.delete(`http://localhost:3002/people/${id}`) 
    .then((res)=>{ 
      console.log(res,"res"); 
      loadUser(); 
    }) 
    .catch((error)=>{ 
      console.log(error,"error"); 
    }) 
  } 
 
  // pagination 
  const [page,setpage] = useState(1); 
  const [itemsPerPage,setItemsPerPage] = useState(2); 
  const dataPerPage = itemsPerPage; 
  const totalItems = data.length; 
  const totalPages = Math.ceil(totalItems / dataPerPage); 
 
  // pagination handlers 
  const handlePrevious = () =>{ 
    setpage(prevPage => Math.max(prevPage - 1,1)); 
  } 
 
  const handleNext = () =>{  
    setpage(prevPage => Math.min(prevPage+1,totalPages)) 
   } 
 
   const handlePageClick = (pageNumber) => { 
    setpage(pageNumber); 
  }; 
 
   const handleItemsPerPageChange =(event) => { 
    const value = parseInt(event.target.value); 
    setItemsPerPage(value); 
    setpage(1); 
   } 
 
   const indexOfLastItem = page * itemsPerPage; 
   const indexOfFirstItem = indexOfLastItem - itemsPerPage; 
   const currentData = data.slice(indexOfFirstItem,indexOfLastItem) 
  return ( 
    <> 
    {/* <Navbar/> */} 
      <section className="mx-auto w-full max-w-7xl px-4 py-4 bg-slate-200 pb-96"> 
      <div> 
         


            <form class="flex items-center max-w-2xl mx-auto "> 

      <button type="button" 
              className="rounded-lg bg-green-600 w-52 mr-3 px-2 py-2 border-2 border-green-600 text-sm font-semibold  text-black hover:bg-green-600 shadow-gray-600 shadow-lg" > 
              <Link to='/add'>Add new Student</Link> 
            </button> 

    <label for="voice-search" class="sr-only  ">Search</label>
    <div class="relative w-full shadow-gray-600 shadow-lg rounded-2xl">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"/>
            </svg>
        </div>
        <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required />
        <button type="button" class="absolute inset-y-0 end-0 flex items-center pe-3">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"/>
            </svg>
        </button>
    </div>
    <button type="submit" class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-gray-600 shadow-lg">
        <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>Search
    </button>

</form>
          </div> 
        <div className="mt-12 flex flex-col "> 
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"> 
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"> 
              <div className="overflow-hidden border-gray-200 md:rounded-lg shadow-gray-400 shadow-lg mb-10"> 
                <table className="min-w-full divide-y-4 divide-slate-400"> 
                  <thead className="bg-gray-50"> 
                    <tr className="divide-x divide-gray-900 bg-slate-800"> 
                      <th 
                        scope="col" 
                        className="px-4 py-3.5 text-left text-sm font-bold text-gray-300  " 
                      > 
                        <span>Full Name </span> 
                      </th> 
                      <th 
                        scope="col" 
                        className="px-12 py-3.5 text-left text-sm font-bold text-gray-300" 
                      > 
                        Last Name 
                      </th> 
                      <th 
                        scope="col" 
                        className="px-4 py-3.5 text-left text-sm font-bold text-gray-300" 
                      > 
                        Age 
                      </th> 
                      <th 
                        scope="col" 
                        className="px-4 py-3.5 text-left text-sm font-bold text-gray-300" 
                      > 
                        City 
                      </th> 
                      <th scope="col" className="relative px-4 py-3.5 "> 
                        <span className="sr-only">Edit</span> 
                      </th>  
                    </tr>                 
                  </thead> 
                  <tbody className="divide-y divide-gray-200 bg-white"> 
                    {currentData.map((value, index) => ( 
                      <tr key={value.id} className="divide-x divide-gray-200"> 
                        <td className="whitespace-nowrap px-4 py-4"><div className="flex items-center"> 
                            <div className="h-10 w-10 flex-shrink-0 flex"> 
                              <img 
                                className="h-10 w-10 rounded-full object-cover" 
                                src="https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg" 
                                alt="" 
                              /> 
                              <div className='mt-2 text-slate-500 '>
                                {indexOfFirstItem + index + 1} 
                              </div>
                            </div>                             
                            <div className="ml-4"> 
                              <div className="text-sm font-medium text-gray-900">{value.firstname}</div> 
                              {/* <div className="text-sm text-gray-500">{person.email}</div> */} 
                            </div> 
                          </div> 
                        </td> 
                        <td className="whitespace-nowrap px-12 py-4"> 
                          <div className="text-sm text-gray-900">{value.lastname}</div> 
                          {/* <div className="text-sm text-gray-500">{person.department}</div> */} 
                        </td> 
                        <td className="whitespace-nowrap px-4 py-4"> 
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs p-2 font-semibold leading-5 text-green-800 "> 
                            {value.age} 
                          </span> 
                        </td> 
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500"> 
                          {value.city} 
                        </td> 
                        <td className="whitespace-nowrap px-4 space-x-2 py-4 text-right text-sm font-medium"> 
                          <button> 
                          <Link to={`/editpage/${value.id}`}className="text-gray-900 px-3 py-2 bg-sky-300 rounded-lg border-2 border-sky-300 shadow-gray-500 shadow-md"> 
                            Edit 
                          </Link> 
                          </button> 
                          <button > 
                          <a onClick={()=>Ondelete(value.id)} href="#" className="text-black bg-red-600 rounded-lg px-3 py-2 border-2 border-red-600 shadow-gray-500 shadow-md" > 
                            Delete  
                          </a> 
                          </button> 
                        </td> 
                      </tr> 
                    ))} 
                  </tbody> 
                </table>     
              </div> 
            </div> 
          </div> 
                    {/* Pagination */} 
                    <div className="flex my-4 mx-4" style={{marginLeft:"38%"}}> 
            <button onClick={handlePrevious} disabled={page === 1} className="flex items-center rounded-md bg-slate-800 px-4 py-2 text-sm font-medium text-gray-100 hover:bg-slate-600 mr-2 shadow-gray-600 shadow-lg">Previous</button> 
            {Array.from({ length: totalPages }, (_, index) => ( 
              <button key={index + 1} onClick={() => handlePageClick(index + 1)} className={`inline-flex items-center rounded-md bg-slate-800 px-4 py-2 text-sm font-medium text-gray-100 hover:bg-slate-600 mr-2 shadow-gray-600 shadow-lg ${page === index + 1 ? 'active-link' : ''}`}>{index + 1}</button> 
            ))} 
            <button onClick={handleNext} className="inline-flex items-center rounded-md bg-slate-800 px-4 py-2 text-sm font-medium hover:bg-slate-600 text-gray-100 shadow-gray-600 shadow-lg">Next</button> 
 
          </div> 
        </div> 
      </section> 
    </> 
  ) 
} 
export default Home