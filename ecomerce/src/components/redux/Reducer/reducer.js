const initial_state = {
    carts: [],
    wish : [],
}

export const cartreducer = (state = initial_state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                carts: [...state.carts, action.payload]
            }
            // action.payload's id is that we click on remove button id 
        case "REMOVE_FROM_CART":
            state.carts = state.carts.filter((item) => item.value.id !== action.payload);
            return {
                ...state,
                carts: [...state.carts],
            };
        default:
            return state;
    }
}



export const widhlistreducer = (state = initial_state , action) => {
    switch(action.type){
        case "WISH_LIST":
            return{
                ...state,
                wish : [...state.wish , action.payload]
            }
        // case ""
        default: 
            return state;
    }
}

