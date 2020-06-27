import React, { Component } from 'react'
import {connect} from 'react-redux';
import ProductList from '../Components/ProductList';


const Products =(props)=>{
    console.log(props.products);

    return (
        <div>
            <ProductList/>
            {
                // props.products.map(p=><h1>{p.title}</h1>)
                
             }
             
        </div>
    )

    

}
const mapStateToProps=(state)=>{

    return {
        products:state.products   
    }

}
export default connect(mapStateToProps,null)(Products);
