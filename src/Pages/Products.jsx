import React from 'react'
import {connect} from 'react-redux';
import ProductList from '../Components/ProductList';
import Breadcrumb from '../Components/Breadcrumb/Breadcrumb';


const Products =(props)=>{
    console.log(props.products);

    return (
        <React.Fragment>
            <Breadcrumb />
            <ProductList/>
        </React.Fragment>
    )

    

}
const mapStateToProps=(state)=>{

    return {
        products:state.products   
    }

}
export default connect(mapStateToProps,null)(Products);
