import React from 'react';
import { Link } from 'react-router-dom';

import Details from '../Components/Details/Details';



const ProductDetail = (props) => {
   
    return(
        <React.Fragment>
            <div className="tt-breadcrumb">
                <div className="container">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li>Products</li>
                    </ul>
                </div>
            </div>
            <Details productID={props.match.params.id} />
        </React.Fragment>
        
    )
}

export default ProductDetail;