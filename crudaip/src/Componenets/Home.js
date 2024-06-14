import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export function TableOne() {
  const[data ,setData] = useState([]);

  const loaduser = async() => {
    const res = await axios.get("http://localhost:3000/posts")
    console.log(res.data ,"res");
    setData(res.data)
  }

  useEffect (() =>{
    loaduser();
  })

  const onDelete =(id) => {
  axios.delete(`http://localhost:3000/posts/${id}`)
.then( (Response) =>{
  loaduser();
})
.catch((error)=>{
  console.log(error,"error");
})
  }

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4 bg-slate-300">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Students</h2>
          </div>
          <div>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
             <Link to ="/create">Add new Student</Link>
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>First Name</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Last Name
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                       Age
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        City
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Action
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {data.map((person) => (
                      <tr key={person.id}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm  text-gray-900">{person.firstname}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{person.lastname}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                           {person.age}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {person.city}
                        </td>
                        <td className="whitespace-nowrap ps-6 py-4 text-sm font-medium">
                       
                          <Link to={`/edit/${person.id}`}> 
                          <button>
                            Edit
                          </button>  
                          </Link>
                     
                        
                        </td>
                        <td    className="whitespace-nowrap py-4 text-sm font-medium">
                          <button onClick={() => onDelete(person.id)} >
                           Delete
                          </button>
                         
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="mt-5 flex items-center" style={{marginLeft:"37%"}}>
  <a
    href="#"
    class="mx-1 cursor-not-allowed text-sm font-semibold text-gray-900"
  >
    ← Previous
  </a>
  <a
    href="#"
    class="mx-1 flex items-center rounded-md border border-gray-900 px-3 py-1 text-gray-900 hover:scale-105 bg-gray-400"
  >
    1
  </a>
  <a
    href="#"
    class="mx-1 flex items-center rounded-md border border-gray-900 px-3 py-1 text-gray-900 hover:scale-105"
  >
    2
  </a>
  <a
    href="#"
    class="mx-1 flex items-center rounded-md border border-gray-900 px-3 py-1 text-gray-900 hover:scale-105"
  >
    3
  </a>
  <a
    href="#"
    class="mx-1 flex items-center rounded-md border border-gray-900 px-3 py-1 text-gray-900 hover:scale-105"
  >
    4
  </a>
  <a href="#" class="mx-2 text-sm font-semibold text-gray-900">
    Next →
  </a>
</div>


    </>
  )
}
