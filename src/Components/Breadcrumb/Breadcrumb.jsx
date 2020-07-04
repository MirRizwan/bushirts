import React from 'react';
import {Link} from 'react-router-dom';


const Breadcrumb = props => {
    return(
        <div className="tt-breadcrumb">
            <div className="container">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>Products</li>
                </ul>
            </div>
        </div>
    )
}

export default Breadcrumb;