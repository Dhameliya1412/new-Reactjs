import React from 'react'

function Add1() {
  return (
    <div>
      <section> 
      <div className="pt-10"> 
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md"> 
          <h2 className="text-3xl font-bold leading-tight text-blue-700 sm:text-4xl">Add Student</h2> 
          <form action="#" onSubmit={onSubmitStudent} method="POST" className="mt-8"> 
            <div className="space-y-5 text-start"> 
              <div> 
                <label htmlFor="name" className="text-base font-medium text-blue-700 text-start"> 
                  First Name 
                </label> 
                <div className="mt-2"> 
                  <input className="flex h-10 w-full rounded-md border border-blue-700 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" type="text" placeholder="First Name" id="name" name='firstname' onChange={(e) => setStudent({ ...student, firstname: e.target.value })}></input> 
                </div> 
              </div>                    
              <div> 
                <label htmlFor="name" className="text-base font-medium text-blue-700"> 
                  Last Name 
                </label> 
                <div className="mt-2"> 
                  <input className="flex h-10 w-full rounded-md border border-blue-700 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" type="text" placeholder="Last Name" id="name" name='lastname' onChange={(e) => setStudent({ ...student, lastname: e.target.value })}></input> 
                </div> 
              </div> 
              <div> 
                <div> 
                  <label htmlFor="age" className="text-base font-medium text-blue-700"> 
                    Age 
                  </label> 
                </div> 
                <div className="mt-2"> 
                  <input className="flex h-10 w-full rounded-md border border-blue-700 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" type="number" placeholder="Age" id="age" name='age' onChange={(e) => setStudent({ ...student, age: e.target.value })}></input> 
                </div> 
              </div> 
              <div> 
                <label htmlFor="name" className="text-base font-medium text-blue-700"> 
                  City 
                </label> 
                <div className="mt-2"> 
                  <input className="flex h-10 w-full rounded-md border border-blue-700 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" type="text" placeholder="City" id="city" name='city' onChange={(e) => setStudent({ ...student, city: e.target.value })}></input> 
                </div> 
              </div> 
              <div> 
                <button type="submit" className="inline-flex w-full items-center justify-center rounded-md bg-blue-700 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-gray-100 hover:text-blue-700 hover:duration-500 hover:shadow-lg hover:shadow-blue-500/50"> 
                  Add Student 
                </button> 
              </div> 
            </div> 
          </form> 
        </div> 
      </div> 
    </section>
    </div>
  )
}

export default Add1
