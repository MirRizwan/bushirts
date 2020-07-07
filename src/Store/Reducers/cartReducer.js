const initialState = {
    cart: [
        {
            _id:'25',            
            title: 'Dupatta',
            color: 'Red',
            size: "L",
            qty: 1,
            price:50,
            imgUrl: "https://picsum.photos/280/350",
            category: 'dupatta'
        },
        {
            _id:'25',            
            title: 'Dupatta',
            color: 'Green',
            size: "M",
            qty: 1,
            price:50,
            imgUrl: "https://picsum.photos/280/350",
            category: 'dupatta'
        }
    ]
}

const cartReducer = (state = initialState, action) =>{
    switch(action.type){
        case "UPDATE_CART":{
            return { ...state}
        }

        default:
            return state;
    }
}

export default cartReducer;