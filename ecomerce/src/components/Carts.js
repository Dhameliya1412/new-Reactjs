import React from 'react' 
import {REMOVE} from './redux/action'
import { useDispatch, useSelector } from 'react-redux';
 
function Carts() { 

const data = useSelector((state) =>state.cartreducer.carts)    

const dispatch = useDispatch();


const removecart = (id) => {
    dispatch(REMOVE(id))
}

    return ( 
        <div> 
           
            <div className='bg'> 

                <div className='text-lg mx-10 space-y-3 py-11 absolute mt-5' style={{marginLeft:"75%"}}> 
                    <p>Home----Carts</p> 
                    <h1 className='text-4xl font-bold'>carts</h1> 
                </div> 
            <img class="object-cover w-full h-60 py-3 rounded-3xl" src="https://www.mobilatillis.ro/image/cachewebp/catalog/design/req-off-1098x399.webp" alt="jkjkjkjk"/>
            </div> 
            <div className='px-5 pt-20'> 
                <table className="min-w-full"> 
                    <thead>
                        {data.map((item, ind) =>{
                            let {id} = item 
                            
return(
                        <tr> 
                            <th className="px-4 py-1.5 border text-center text-lg font-bold"><span>Images</span></th> 
                            <th className="px-4 py-1.5 border text-center text-lg font-bold">Courses</th> 
                            <th className="px-4 py-1.5 border text-center text-lg font-bold">Unit Price</th> 
                            <th className="px-4 py-1.5 border text-center text-lg font-bold">Quantity</th> 
                            <th className="px-4 py-1.5 border text-center text-lg font-bold">Total</th> 
                            <th className="px-4 py-1.5 border text-center text-lg font-bold">Add To Cart</th> 
                            <th className="px-4 py-1.5 border text-center text-lg font-bold" onClick={()=>removecart(id)}>Remove</th> 
                        </tr> 
)
                        })}
                    </thead> 
                </table> 
            </div> 
        </div> 
    ) 
} 
 
export default Carts;