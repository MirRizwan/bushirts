import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './MiniCart.css';

const MiniCart = () => {
	const [ openCart, setOpenCart ] = useState(false);

	const toggleCart = () => {
		openCart === false ? setOpenCart(true) : setOpenCart(false);
	};

	const toggleCartClass = () => {
		let toggleCart = 'tt-dropdown-menu ';
		toggleCart += openCart === false ? 'toggleCartNone' : 'toggleCartBlock';
		return toggleCart;
	};

	return (
		<div className="tt-desctop-parent-cart tt-parent-box">
			<div className="tt-cart tt-dropdown-obj" data-tooltip="Cart" data-tposition="bottom">
				<button className="tt-dropdown-toggle" onClick={toggleCart}>
					<i className="icon-f-39" />
					<p>{openCart}</p>
					<span className="tt-badge-cart">3</span>
				</button>

				<div className={toggleCartClass()}>
					<div className="tt-mobile-add">
						<h6 className="tt-title">SHOPPING CART</h6>
						<button className="tt-close">Close</button>
					</div>
					<div className="tt-dropdown-inner">
						<div className="tt-cart-layout">
							{/* <!-- <Link to="empty-cart.html" className="tt-cart-empty">
                                <i className="icon-f-39"></i>
                                <p>No Products in the Cart</p>
                            </Link> --> */}
							<div className="tt-cart-content">
								<div className="tt-cart-list">
									<div className="tt-item">
										<Link to="product.html">
											<div className="tt-item-img">
												<img
													src="assets/images/product/product-01.jpg"
													alt=""
												/>
											</div>
											<div className="tt-item-descriptions">
												<h2 className="tt-title">Flared Shift Dress</h2>
												<ul className="tt-add-info">
													<li>Yellow, Material 2, Size 58,</li>
													<li>Vendor: Addidas</li>
												</ul>
												<div className="tt-quantity">1 X</div>{' '}
												<div className="tt-price">$12</div>
											</div>
										</Link>
										<div className="tt-item-close">
											<Link to="#" className="tt-btn-close" />
										</div>
									</div>
									<div className="tt-item">
										<Link to="product.html">
											<div className="tt-item-img">
												<img
													src="assets/images/product/product-02.jpg"
													alt=""
												/>
											</div>
											<div className="tt-item-descriptions">
												<h2 className="tt-title">Flared Shift Dress</h2>
												<ul className="tt-add-info">
													<li>Yellow, Material 2, Size 58,</li>
													<li>Vendor: Addidas</li>
												</ul>
												<div className="tt-quantity">1 X</div>{' '}
												<div className="tt-price">$18</div>
											</div>
										</Link>
										<div className="tt-item-close">
											<Link to="#" className="tt-btn-close" />
										</div>
									</div>
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
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MiniCart;
