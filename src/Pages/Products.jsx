import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import ProductList from '../Components/ProductList';



const Products =(props)=>{
    console.log(props.products);

    return (
        <React.Fragment>
            <div className="tt-breadcrumb">
                <div className="container">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li>Products</li>
                    </ul>
                </div>
            </div>
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
