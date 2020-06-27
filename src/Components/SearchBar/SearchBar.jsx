import React from 'react';
import {Link} from 'react-router-dom';

const SearchBar = (props) => {
	console.log("Search Bar Props",props);
    return(
        <div className="tt-desctop-parent-search tt-parent-box">
						<div className={props.toggleSearchClass()}>
							<button className="tt-dropdown-toggle" onClick={()=>props.toggleSearchBar()} data-tooltip="Search" data-tposition="bottom">
								<i className="icon-f-85"></i>
							</button>
							<div className="tt-dropdown-menu">
								<div className="container">
									<form>
										<div className="tt-col">
											<input type="text" readOnly className="tt-search-input" placeholder="Search Products..." />
											<button className="tt-btn-search" type="submit"></button>
										</div>
										<div className="tt-col">
											<button className="tt-btn-close icon-g-80" onClick={(e)=>{props.toggleSearchBar(); e.preventDefault();}} ></button>
										</div>
										<div className="tt-info-text">
											What are you Looking for?
										</div>
										<div className="search-results">
											<ul>
												<li>
										            <Link to="product.html">
										            	<div className="thumbnail"><img src="assets/images/loader.svg" data-src="assets/images/product/product-03.jpg" alt="" /></div>
										            	<div className="tt-description">
										            		<div className="tt-title">Flared Shift Bag</div>
										            		<div className="tt-price">
																<span className="new-price">$14</span>
																<span className="old-price">$24</span>
															</div>
										            	</div>
										            </Link>
										        </li>
										        <li>
										           <Link to="product.html">
										            	<div className="thumbnail"><img src="assets/images/loader.svg" data-src="assets/images/product/product-02.jpg" alt="" /></div>
										            	<div className="tt-description">
										            		<div className="tt-title">Flared Shift Bag</div>
										            		<div className="tt-price">
																$24
															</div>
										            	</div>
										            </Link>
										        </li>
										        <li>
										           <Link to="product.html">
										            	<div className="thumbnail"><img src="assets/images/loader.svg" data-src="assets/images/product/product-01.jpg" alt="" /></div>
										            	<div className="tt-description">
										            		<div className="tt-title">Flared Shift Bag</div>
										            		<div className="tt-price">
																$14
															</div>
										            	</div>
										            </Link>
										        </li>
										        <li>
										           <Link to="product.html">
										            	<div className="thumbnail"><img src="assets/images/loader.svg" data-src="assets/images/product/product-04.jpg" alt="" /></div>
										            	<div className="tt-description">
										            		<div className="tt-title">Flared Shift Bag</div>
										            		<div className="tt-price">
																$24
															</div>
										            	</div>
										            </Link>
										        </li>
										        <li>
										           <Link to="product.html">
										            	<div className="thumbnail"><img src="assets/images/loader.svg" data-src="assets/images/product/product-05.jpg" alt="" /></div>
										            	<div className="tt-description">
										            		<div className="tt-title">Flared Shift Bag</div>
										            		<div className="tt-price">
																$17
															</div>
										            	</div>
										            </Link>
										        </li>
										        <li>
										           <Link to="product.html">
										            	<div className="thumbnail"><img src="assets/images/loader.svg" data-src="assets/images/product/product-06.jpg" alt="" /></div>
										            	<div className="tt-description">
										            		<div className="tt-title">Flared Shift Bag</div>
										            		<div className="tt-price">
																$20
															</div>
										            	</div>
										            </Link>
										        </li>
											</ul>
											<button type="button" className="tt-view-all">View all products</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
    )
}

export default SearchBar;