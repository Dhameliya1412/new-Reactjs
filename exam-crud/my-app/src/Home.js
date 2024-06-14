import React, { useEffect, useState } from 'react' 
 
 function Home() { 
  const [data,setdata]=useState([]); 
 
   
  return ( 
    <> 
    {/* <Navbar/> */} 
      <section className="mx-auto w-full max-w-7xl px-4 py-4"> 
        <div className="mt-6 flex flex-col"> 
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"> 
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"> 
              <div className="overflow-hidden border border-gray-200 md:rounded-lg"> 
                <table className="min-w-full divide-y divide-gray-200"> 
                  <thead className="bg-gray-50"> 
                    <tr className="divide-x divide-gray-200"> 
                      <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-500" > 
                        <span>Full Name</span> 
                      </th> 
                      <th 
                        scope="col" 
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-500" 
                      > 
                        Last Name 
                      </th> 
                      <th 
                        scope="col" 
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500" 
                      > 
                        Age 
                      </th> 
 
                      <th 
                        scope="col" 
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500" 
                      > 
                        City 
                      </th> 
                      <th scope="col" className="relative px-4 py-3.5"> 
                        <span className="sr-only">Edit</span> 
                      </th> 
                    </tr> 
                  </thead> 
                  <tbody className="divide-y divide-gray-200 bg-white"> 
                    {data.map((person) => ( 
                      <tr key={person.name} className="divide-x divide-gray-200"> 
                        <td className="whitespace-nowrap px-4 py-4"> 
                          <div className="flex items-center"> 
                            <div className="h-10 w-10 flex-shrink-0"> 
                              <img 
                                className="h-10 w-10 rounded-full object-cover" 
                                src={person.image} 
                                alt="" 
                              /> 
                            </div> 
                            <div className="ml-4"> 
                              <div className="text-sm font-medium text-gray-900">{person.name}</div> 
                              <div className="text-sm text-gray-500"> {person.email} </div> 
                            </div> 
                          </div> 
                        </td> 
                        <td className="whitespace-nowrap px-12 py-4"> 
                          <div className="text-sm text-gray-900">{person.title}</div> 
                          <div className="text-sm text-gray-500">{person.department}</div> 
                        </td> 
                        <td className="whitespace-nowrap px-4 py-4"> 
                          <span className="inline-flex rounded-full  bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800"> 
                            Active 
                          </span> 
                        </td> 
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500"> 
                          {person.role} 
                        </td> 
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium"> 
                          <a href="#" className="text-gray-500 hover:text-indigo-600"> 
                            Edit 
                          </a> 
                        </td> 
                      </tr> 
                    ))} 
                  </tbody> 
                </table> 
              </div> 
            </div> 
          </div> 
        </div> 
        <div className="mt-4 w-full border-gray-300"> 
          <div className="mt-2 flex items-center justify-end"> 
            <div className="space-x-2"> 
              <button type="button" className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" > &larr; Previous 
              </button> 
              <button type="button" className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" >Next &rarr; 
              </button> 
            </div> 
          </div> 
        </div> 
      </section> 
    </> 

  ) 
} 
export default Home 

