const initialState = {
    
    products: [{
            _id:'01',
            special:true,
            title: 'Designer Kurta',
            color: ['green', 'red'],
            size: ['S', 'M', 'L'],
            inStock: false,
            stock: 20,
            imgUrl: "https://picsum.photos/280/350",
            price:2000,
            salePrice:1500,
            texture:["01","02","03","04","05"],
            category: ['women','kurta', 'sale']            
        },
        {
            _id:'02',            
            special:true,
            title: 'Designer Shalwar',
            size: ['S', 'M', 'L'],
            inStock: true,
            stock: 20,
            imgUrl: "https://picsum.photos/280/350",
            price:600,
            salePrice:450,
            texture:["01","02","03","04","05"],
            category: ['women','shalwar', 'sale']
        },
        {
            _id:'03',
            trending:true,            
            title: 'Dupatta',
            color: ['green', 'red'],
            size: ['S', 'M', 'L'],
            inStock: true,
            stock: 20,
            imgUrl: "https://picsum.photos/280/350",
            price:250,
            texture:["01","02","03","04","05"],
            category: ['women','dupatta', 'sale']
        },
        {
            _id:'04',
            trending:true,            
            title: 'Mens Kurta',
            color: ['navyblue', 'green', 'blue', 'white'],
            size: ['S','L'],
            imgUrl: "https://picsum.photos/280/350",
            inStock: true,
            stock: 50,
            price:950,
            texture:["01","02","03","04","05"],
            category: ['men','kurta']
        },
        {
            _id:'05',
            special:true,            
            title: 'Lilan Dupatta',
            color: ['green', 'red'],
            size: ['S', 'M', 'L'],
            inStock: true,
            stock: 20,
            imgUrl: "https://picsum.photos/280/350",
            price:350,
            salePrice:200,
            texture:["01","02","03","04","05"],
            category: ['women','dupatta']
        },
        {
            _id:'06',
            trending:true,            
            title: 'Mens Shalwar Kameez',
            color: ['offwhite', 'white', 'blue'],
            size: ['S', 'M', 'L'],
            inStock: true,
            stock: 20,
            price:500,
            imgUrl: "https://picsum.photos/280/350",
            texture:["01","02","03","04","05"],
            category: ['men']
        },
        {
            _id:'07',            
            title: 'Dupatta',
            color: ['green', 'red'],
            size: ['S', 'M', 'L'],
            inStock: true,
            stock: 10,
            price:300,
            imgUrl: "https://picsum.photos/280/350",
            texture:["01","02","03","04","05"],
            category: ['women','dupatta', 'sale']
        },
        {
            _id:'08',
            trending:true,            
            title: 'Embroidered Dupatta',
            imgUrl: "https://picsum.photos/280/350",
            color: ['green', 'red', 'blue', 'purple'],
            size: ['S', 'M', 'L'],
            inStock: true,
            stock: 20,
            price:400,
            salePrice: 700,
            texture:["01","02","03","04","05"],
            category: ['women','dupatta', 'sale']
        },
        {
            _id:'09',            
            title: 'Dupatta',
            imgUrl: "https://picsum.photos/280/350",
            color: ['green', 'red', 'blue', 'purple'],
            size: ['S', 'M', 'L'],
            inStock: true,
            stock: 20,
            imgUrl: "https://picsum.photos/280/350",
            price:50,
            texture:["01","02","03","04","05"],
            category: ['women','dupatta', 'sale']
        },
        {
            _id:'10',            
            title: 'Basic Dupatta',
            color: ['green', 'red', 'blue', 'purple'],
            size: ['S', 'M', 'L'],
            inStock: true,
            stock: 30,
            price:200,
            salePrice: 300,
            imgUrl: "https://picsum.photos/280/350",
            texture:["01","02","03","04","05"],
            category: ['women','dupatta', 'sale']
        },
        {
            _id:'11',            
            title: 'Embellished Essential Dupatta',
            color: ['green', 'red', 'blue', 'purple'],
            size: ['S', 'M', 'L'],
            inStock: true,
            stock: 20,
            price:550,
            imgUrl: "https://picsum.photos/280/350",
            texture:["01","02","03","04","05"],
            category: ['women','dupatta', 'sale']
        },
        {
            _id:'12',            
            title: 'Tank Tops',
            color: ['green', 'red', 'blue', 'purple'],
            size: ['S', 'M', 'L'],
            inStock: true,
            stock: 20,
            price:450,
            imgUrl: "https://picsum.photos/280/350",
            texture:["01","02","03","04","05"],
            category: ['women','tank tops']
        },
        {
            _id:'13',            
            title: 'Stole',
            color: ['green', 'red', 'blue', 'purple'],
            size: ['S', 'M', 'L'],
            inStock: true,
            stock: 220,
            price:350,
            salePrice: 420,
            imgUrl: "https://picsum.photos/280/350",
            texture:["01","02","03","04","05"],
            category: ['women','stole']
        },
        {
            _id:'14',            
            title: 'Embellished Essential',
            color: ['green', 'red', 'blue', 'purple'],
            size: ['S', 'M', 'L'],
            inStock: true,
            stock: 20,
            price:250,
            imgUrl: "https://picsum.photos/280/350",
            texture:["01","02","03","04","05"],
            category: ['women','stole']
        },
        {
            _id:'15',            
            title: 'Embroidered Stole',
            color: ['green', 'red', 'blue', 'purple'],
            size: ['S', 'M', 'L'],
            inStock: true,
            stock: 20,
            price:50,
            salePrice:300,
            imgUrl: "https://picsum.photos/280/350",
            texture:["01","02","03","04","05"],
            category: ['women','stole']
        },
        {
            _id:'16',            
            title: 'Shirt Shalwar Dupatta',
            color: ['green', 'red', 'blue', 'purple'],
            size: ['S', 'M', 'L'],
            inStock: true,
            stock: 20,
            price:12000,
            imgUrl: "https://picsum.photos/280/350",
            texture:["01","02","03","04","05"],
            category: ['women','dupatta','unstitched']
        },
        {
            _id:'17',            
            title: 'Shirt Shalwar Dupatta',
            color: ['green', 'red', 'blue', 'purple'],
            size: ['S', 'M', 'L'],
            inStock: true,
            stock: 20,
            price:15000,
            imgUrl: "https://picsum.photos/280/350",
            texture:["01","02","03","04","05"],
            category: ['women','unstitched']
        },
        {
            _id:'18',            
            title: 'Shirt Shalwar',
            color: ['green', 'red', 'blue', 'purple'],
            size: ['S', 'M', 'L'],
            inStock: true,
            stock: 20,
            price:9000,
            imgUrl: "https://picsum.photos/280/350",
            texture:["01","02","03","04","05"],
            category: ['women','unstitched']
        },
        {
            _id:'19',            
            title: 'Shirt Shalwar',
            color: ['green', 'red', 'blue', 'purple'],
            size: ['S', 'M', 'L'],
            inStock: true,
            stock: 230,
            price:4500,
            salePrice:3000,
            texture:["01","02","03","04","05"],
            category: ['women','unstitched']
        },
        {
            _id:'20',            
            title: 'Printed Kameez, Printed Dupatta',
            color: ['green', 'red', 'blue', 'purple'],
            size: ['S', 'M', 'L'],
            inStock: true,
            special:true,
            stock: 50,
            price:900,
            salePrice:700,
            imgUrl: "https://picsum.photos/280/350",
            texture:["01","02","03","04","05"],
            category: ['women','unstitched']
        },
        {
            _id:'21',            
            title: 'Embellished Kurta',
            color: ['green', 'red', 'blue', 'purple'],
            size: ['S', 'M', 'L'],
            inStock: true,
            trending:true,
            stock: 20,
            price:50,
            salePrice:70,
            imgUrl: "https://picsum.photos/280/350",
            texture:["01","02","03","04","05"],
            category: ['women','dupatta', 'ready-to-wear']
        },
        {
            _id:'22',            
            title: 'Dupatta',
            color: ['green', 'red', 'blue','ready-to-wear'],
            size: ['S', 'M', 'L'],
            inStock: true,
            stock: 20,
            price:560,
            texture:["01","02","03","04","05"],
            category: ['women','dupatta', 'ready-to-wear']
        },
        {
            _id:'23',            
            title: 'Kurta With Pants',
            color: ['green', 'red', 'blue', 'purple'],
            size: ['S', 'M', 'L'],
            inStock: true,
            stock: 20,
            price:50,
            imgUrl: "https://picsum.photos/280/350",
            texture:["01","02","03","04","05"],
            category: ['women','dupatta', 'sale']
        },
        {
            _id:'24',            
            title: 'Embellished Suits',
            color: ['green', 'red'],
            size: ['S', 'M', 'L'],
            inStock: true,
            stock: 20,
            price:50,
            texture:["01","02","03","04","05"],
            category: ['women','dupatta', 'sale']
        },
        {
            _id:'25',            
            title: 'Dupatta',
            color: ['green', 'red'],
            size: ['S', 'M', 'L'],
            inStock: true,
            trending:true,
            stock: 20,
            price:50,
            imgUrl: "https://picsum.photos/280/350",
            texture:["01","02","03","04","05"],
            category: ['women','dupatta', 'sale']
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