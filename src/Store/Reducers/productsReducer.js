const initialState = {
    products: [{
            _id:'01',
            trending: true,
            title: 'Designer Kurta',
            color: ['green', 'red', 'blue', 'purple'],
            size: ['S', 'M', 'L'],
            inStock: true,
            qty: 20,
            price:120,
            saleprice:70,
            category: ['kurta', 'sale']
        },
        {
            _id:'02',            
            special:true,
            title: 'Designer Shalwar',
            size: ['S', 'M', 'L'],
            inStock: true,
            qty: 20,
            price:200,
            saleprice:150,
            category: ['shalwar', 'sale']
        },
        {
            _id:'03',            
            title: 'Dupatta',
            color: ['green', 'red', 'blue', 'purple'],
            size: ['S', 'M', 'L'],
            inStock: true,
            qty: 20,
            price:50,
            category: ['dupatta', 'sale']
        }
    ]
}



const productsReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }

}

export default productsReducer;