import React from 'react';

import Details from '../Components/Details/Details';
import Breadcrumb from '../Components/Breadcrumb/Breadcrumb';


const ProductDetail = (props) => {
    // console.log("product detail props",props.match.params.id);
    return(
        <React.Fragment>
            <Breadcrumb />
            <Details productID={props.match.params.id} />
        </React.Fragment>
        
    )
}

export default ProductDetail;