import { INCREASE_VALUE } from "../Action/Action";

const initial_state = {
    carts : [],
    Wishlist:[]
}

export const cartreducer = (state=initial_state , action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return{
                ...state,
                carts:[...state.carts,action.payload]
            }
            case "REMOVE_TO_CART":
                const data = state.carts.filter((el)=>el.id !== action.payload);
                console.log(data,"=====");
            return{
                ...state,
                carts:data
            }

            case "INCREASE_CART_VALUE":{
                let updatedCartList = state.cartList.map(item =>{
                    if(item.id === action.payload.id){
                        return{
                            ...item,
                            quantity: item.quantity + 1
                        };
                    }
                    return item;
                })
                return{
                    ...state,
                    cartList : updatedCartList
                };
            }
    
            
            default:
            return state;
    }
}


export const wishlistreducer = (state=initial_state , action) => {
    switch(action.type){
            
            case "ADD_TO_WISHLIST":
            return{
                ...state,
                Wishlist : [...state.Wishlist, action.payload]
            }

            case "REMOVE_TO_WISHLIST":
            const wishlists = state.Wishlist = state.Wishlist.filter((el)=>el.id !== action.payload);
            // console.log(data , "=====")
            return{
                ...state,
                Wishlist : wishlists,
            }

            default:
                return state;
    }
}

// export const = increasecart (state=initial_state , action) => {
//     switch(action.type){
            
        // case "INCREASE_CART_VALUE":{
        //     let updatedCartList = state.cartList.map(item =>{
        //         if(item.id === action.payload.id){
        //             return{
        //                 ...item,
        //                 quantity: item.quantity + 1
        //             };
        //         }
        //         return item;
        //     })
        //     return{
        //         ...state,
        //         cartList : updatedCartList
        //     };
        // }



        
//     }
// }