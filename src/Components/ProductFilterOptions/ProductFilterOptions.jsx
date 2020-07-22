import React from 'react';
import {Link} from 'react-router-dom';

const ProductFilterOptions = props =>{
    return(
        <div className="tt-filters-options">
                  <h1 className="tt-title">
                    ALL <span className="tt-title-total">({props.productsCount})</span>
                  </h1>
                  <div className="tt-btn-toggle">
                    <Link to="#">FILTER</Link>
                  </div>
                  <div className="tt-sort">
                    <select>
                      <option value="Default Sorting">Default Sorting</option>
                      <option value="Default Sorting">
                        Default Sorting 02
                      </option>
                      <option value="Default Sorting">
                        Default Sorting 03
                      </option>
                    </select>
                    <select>
                      <option value="Show">Show</option>
                      <option value="9">9</option>
                      <option value="16">16</option>
                      <option value="32">32</option>
                    </select>
                  </div>
                  <div className="tt-quantity">
                    <Link
                      to="#"
                      className="tt-col-one"
                      data-value="tt-col-one"
                    ></Link>
                    <Link
                      to="#"
                      className="tt-col-two"
                      data-value="tt-col-two"
                    ></Link>
                    <Link
                      to="#"
                      className="tt-col-three"
                      data-value="tt-col-three"
                    ></Link>
                    <Link
                      to="#"
                      className="tt-col-four"
                      data-value="tt-col-four"
                    ></Link>
                    <Link
                      to="#"
                      className="tt-col-six"
                      data-value="tt-col-six"
                    ></Link>
                  </div>
                </div>
    )
}

export default ProductFilterOptions;