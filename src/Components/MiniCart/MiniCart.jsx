import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import './MiniCart.css';

const MiniCart = (props) => {
   
	return (
		<div className="tt-desctop-parent-cart tt-parent-box">
			<div className="tt-cart tt-dropdown-obj" data-tooltip="Cart" data-tposition="bottom">
				<button className="tt-dropdown-toggle" onClick={()=> props.toggleCart() }>
					<i className="icon-f-39" />
	{ props.Cart.length === 0 ? null : <span className="tt-badge-cart">{props.Cart.length}</span>}
					
				</button>

				<div className={props.toggleCartClass()}>
					<div className="tt-mobile-add">
						<h6 className="tt-title">SHOPPING CART</h6>
						<button className="tt-close">Close</button>
					</div>
					<div className="tt-dropdown-inner">
						<div className="tt-cart-layout">

						{ props.Cart.length === 0 ? <Link to="empty-cart.html" className="tt-cart-empty">
                                <i className="icon-f-39"></i>
                                <p>No Products in the Cart</p>
							</Link> : 
							<div className="tt-cart-content">
								<div className="tt-cart-list">

								{
									props.Cart.map(c => (
										<div className="tt-item">
										<Link to="product.html">
											<div className="tt-item-img">
												<img
													src="/assets/images/product/product-01.jpg"
													alt=""
												/>
											</div>
											<div className="tt-item-descriptions">
									<h2 className="tt-title">{ c.title }</h2>
												<ul className="tt-add-info">
									<li>Color: <strong>{ c.color }</strong></li>
									<li>Size: <strong>{c.size}</strong> </li>
													
												</ul>
									<div className="tt-quantity">1 X </div>{' '}
									<div className="tt-price">PKR {c.price}</div>
											</div>
										</Link>
										<div className="tt-item-close">
											<Link to="#" className="tt-btn-close" />
										</div>
									</div>
									))
								}


									

									
									
								</div>
								<div className="tt-cart-total-row">
									<div className="tt-cart-total-title">SUBTOTAL:</div>
									<div className="tt-cart-total-price">$324</div>
								</div>
								<div className="tt-cart-btn">
									<div className="tt-item">
										<Link to="#" className="btn">
											PROCEED TO CHECKOUT
										</Link>
									</div>
									<div className="tt-item">
										<Link to="shopping_cart_02.html" className="btn-link-02 tt-hidden-mobile">
											View Cart
										</Link>
										<Link to="shopping_cart_02.html" className="btn btn-border tt-hidden-desctope">
											VIEW CART
										</Link>
									</div>
								</div>
							</div>
								}


							
							






						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return{
		Cart: state.Cart.cart
	}
}
export default connect(mapStateToProps, null)(MiniCart);
