import { act } from "react-dom/test-utils";

const initialState = {
    totalAmount: 0,
    cart: []
}

const cartReducer = (state = initialState, action) =>{
    switch(action.type){
        case "ADD_CART":{
            
            const data = action.payload;

            const existingProduct = state.cart.filter( e => e._id === data._id);

            if(existingProduct.length > 0){
                const WO = state.cart.filter( e => e._id !== data._id);
                const updatedItem = {
                    ...existingProduct[0],
                    qty: existingProduct[0].qty + data.qty
                };
                return {
                    cart: [...WO, updatedItem]
                }
            }
            
            return {cart:[...state.cart, data]}     
        }

        default:
            return state;
    }
}

export default cartReducer;