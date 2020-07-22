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
                const updatedQty = existingProduct[0].qty + data.qty;
                const updatedItem = {
                    ...existingProduct[0],
                    qty: updatedQty,
                    price:existingProduct[0].price + (data.price * data.qty)
                };
                return {
                    totalAmount:state.totalAmount + (data.price * data.qty),
                    cart: [...WO, updatedItem]
                }
            }
            
            const updatedItem = {
                ...data,
                price: data.price * data.qty 
            }
            return {
                totalAmount:state.totalAmount + updatedItem.price,
                cart:[...state.cart, updatedItem]
            }     
        }

        case "REMOVE_CART":{
            const deletingData = action.payload;
            const cartItem = [...state.cart];
            const updatedItem = cartItem.filter(c=> c._id !== deletingData._id);
            return{
                totalAmount:state.totalAmount - deletingData.price,
                cart: updatedItem
            }
        }


        default:
            return state;
    }
}

export default cartReducer;