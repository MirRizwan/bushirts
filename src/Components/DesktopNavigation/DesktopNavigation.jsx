import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import MiniCart from '../MiniCart/MiniCart';
import UserOptions from '../UserOptions/UserOptions';
import './DesktopNavigation.css';

const DesktopNavigation = () =>{


	//mini cart state 
	const [ openCart, setOpenCart ] = useState(false);
	const [ openSearch, setSearchOpen ] = useState(false);
	const [ openAccountBar, setAccountBar ] = useState(false);

	const toggleCart = () => {
		openCart === false ? setOpenCart(true) : setOpenCart(false);
	};

	const toggleCartClass = () => {
		let toggleCart = 'tt-dropdown-menu ';
		toggleCart += openCart === false ? 'toggleCartNone' : 'toggleCartBlock';
		return toggleCart;
	};

	//mini cart state end
	//Search Bar toggle

	const toggleSearchBar = (n) => {
		openSearch === false ? setSearchOpen(true) : setSearchOpen(false);
		console.log("N value",n);
	};

	const toggleSearchClass = () => {
		let toggleSearch = 'tt-search tt-dropdown-obj ';
		toggleSearch += openSearch === false ? '' : 'active';
		return toggleSearch;
	};

	//User account  toggle start

	const toggleAccountBar = () => {
		openAccountBar === false ? setAccountBar(true) : setAccountBar(false);
		//console.log("N value",n);
	};

	const toggleAccountBarClass = () => {
		let toggleAccountBar = 'tt-dropdown-menu ';
		toggleAccountBar += openAccountBar === false ? 'toggleUserNone' : 'toggleUserBlock';
		return toggleAccountBar;
	};

	//User account  toggle end




	return(
        <div className="tt-desktop-header">
		<div className="container">
			<div className="tt-header-holder">
				<div className="tt-obj-logo obj-aligment-center">
				
					<Link className="tt-logo tt-logo-alignment" to="/">
						<img src="/assets/images/custom/logo.png" alt="" />
					</Link>
					
				</div>
				<div className="tt-obj-options obj-move-right tt-position-absolute">
					
					<SearchBar toggleSearchBar={toggleSearchBar} toggleSearchClass={toggleSearchClass}     />
					<MiniCart   toggleCart={toggleCart} toggleCartClass={toggleCartClass} />
					<UserOptions toggleAccountBar={toggleAccountBar} toggleAccountBarClass={toggleAccountBarClass} />

				</div>

			</div>
		</div>
		<div className="container">
			<div className="tt-header-holder">
				<div className="tt-obj-menu obj-aligment-center">
					
					<div className="tt-desctop-parent-menu tt-parent-box">
						<div className="tt-desctop-menu tt-menu-small">
							<nav>
								<ul>
									<li className="dropdown selected">
										<Link to="/products">New Arrivals</Link>
									</li>
									<li className="dropdown">
										<Link to="listing-collection.html">Sale</Link>
									</li>
									<li className="dropdown">
										<Link to="blog-listing-without-col.html">Catalogue</Link>
									</li>
									
									<li className="dropdown megamenu">
										<Link to="listing-left-column.html">WOMEN</Link>
										<div className="dropdown-menu">
											<div className="row">
												<div className="col-sm-8">
													<div className="row tt-col-list">
														<div className="scol-sm-3">
															<Link className="tt-title-submenu" to="listing-left-column.html">
																TOPS
															</Link>
															<ul className="tt-megamenu-submenu">
																<li><Link to="listing-left-column.html">Blouses &amp; Shirts</Link></li>
																<li><Link to="listing-left-column.html">Dresses <span className="tt-badge tt-new">New</span></Link></li>
																<li>
																	<Link to="listing-left-column.html">Tops &amp; T-shirts</Link>
																	<ul>
																		<li><Link to="listing-left-column.html">Link Level 1</Link></li>
																		<li>
																			<Link to="listing-left-column.html">Link Level 1</Link>
																			<ul>
																				<li><Link to="listing-left-column.html">Link Level 2</Link></li>
																				<li>
																					<Link to="listing-left-column.html">Link Level 2</Link>
																					<ul>
																						<li><Link to="listing-left-column.html">Link Level 3</Link></li>
																						<li><Link to="listing-left-column.html">Link Level 3</Link></li>
																						<li><Link to="listing-left-column.html">Link Level 3</Link></li>
																						<li>
																							<Link to="listing-left-column.html">Link Level 3</Link>
																							<ul>
																								<li>
																									<Link to="listing-left-column.html">Link Level 4</Link>
																									<ul>
																										<li><Link to="listing-left-column.html">Link Level 5</Link></li>
																										<li><Link to="listing-left-column.html">Link Level 5</Link></li>
																										<li><Link to="listing-left-column.html">Link Level 5</Link></li>
																										<li><Link to="listing-left-column.html">Link Level 5</Link></li>
																										<li><Link to="listing-left-column.html">Link Level 5</Link></li>
																									</ul>
																								</li>
																								<li><Link to="listing-left-column.html">Link Level 4</Link></li>
																							</ul>
																						</li>
																						<li><Link to="listing-left-column.html">Link Level 3</Link></li>
																					</ul>
																				</li>
																				<li><Link to="listing-left-column.html">Link Level 2</Link></li>
																				<li><Link to="listing-left-column.html">Link Level 2</Link></li>
																			</ul>
																		</li>
																		<li><Link to="listing-left-column.html">Link Level 1</Link></li>
																		<li><Link to="listing-left-column.html">Link Level 1</Link></li>
																		<li><Link to="listing-left-column.html">Link Level 1</Link></li>
																	</ul>
																</li>
																<li><Link to="listing-left-column.html">Sleeveless Tops</Link></li>
																<li><Link to="listing-left-column.html">Sweaters</Link></li>
																<li><Link to="listing-left-column.html">Jackets</Link></li>
																<li><Link to="listing-left-column.html">Outerwear</Link></li>
															</ul>
														</div>
														<div className="col-sm-3">
															<Link className="tt-title-submenu" to="listing-left-column.html">
																BOTTOMS
															</Link>
															<ul className="tt-megamenu-submenu">
																<li><Link to="listing-left-column.html">Trousers <span className="tt-badge tt-fatured">Fatured</span></Link></li>
																<li>
																	<Link to="listing-left-column.html">Jeans</Link>
																</li>
																<li><Link to="listing-left-column.html">Leggings</Link></li>
																<li><Link to="listing-left-column.html">Jumpsuit &amp; Shorts</Link></li>
																<li><Link to="listing-left-column.html">Skirts</Link></li>
																<li><Link to="listing-left-column.html">Tights</Link></li>
															</ul>
														</div>
														<div className="col-sm-3">
															<Link className="tt-title-submenu" to="listing-left-column.html">
																ACCESSORIES
															</Link>
															<ul className="tt-megamenu-submenu">
																<li><Link to="listing-left-column.html">Jewellery</Link></li>
																<li><Link to="listing-left-column.html">Hats</Link></li>
																<li><Link to="listing-left-column.html">Scarves &amp; Snoods</Link></li>
																<li><Link to="listing-left-column.html">Belts</Link></li>
																<li><Link to="listing-left-column.html">Bags</Link></li>
																<li><Link to="listing-left-column.html">Shoes <span className="tt-badge tt-sale">Sale 15%</span></Link></li>
																<li><Link to="listing-left-column.html">Sunglasses</Link></li>
															</ul>
														</div>
														<div className="col-sm-3">
															<Link className="tt-title-submenu" to="listing-left-column.html">
																TOP BRANDS
															</Link>
															<ul className="tt-listing-01">
																<li><Link to="#" target="_blank"><img src="assets/images/custom/brand-img-01.png" alt="" /></Link></li>
																<li><Link to="#" target="_blank"><img src="assets/images/custom/brand-img-02.png" alt="" /></Link></li>
																<li><Link to="#" target="_blank"><img src="assets/images/custom/brand-img-03.png" alt="" /></Link></li>
																<li><Link to="#" target="_blank"><img src="assets/images/custom/brand-img-04.png" alt=" " /></Link></li>
																<li><Link to="#" target="_blank"><img src="assets/images/custom/brand-img-05.png" alt="" /></Link></li>
																<li><Link to="#" target="_blank"><img src="assets/images/custom/brand-img-06.png" alt="" /></Link></li>
															</ul>
														</div>
													</div>
												</div>
												<div className="col-sm-4">
													<Link to="listing-left-column.html" className="tt-title-submenu">SPECIALS</Link>
													<div className="tt-menu-slider header-menu-product arrow-location-03 row">
														<div className="col-2">
															<div className="tt-product thumbprod-center">
																<Link to="product.html">
																	<div className="tt-image-box">
																		<span className="tt-img"><img src="assets/images/product/product-01.jpg" alt="" /></span>
																		<span className="tt-img-roll-over"><img src="assets/images/product/product-01-02.jpg" alt="" /></span>
																	</div>
																	<div className="tt-description">
																		<h2 className="tt-title">Flared Shift Dress</h2>
																		<div className="tt-price">
																			<span className="new-price">$14</span>
																			<span className="old-price">$24</span>
																		</div>
																		<div className="tt-product-inside-hover">
																			<div className="tt-btn-addtocart" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</div>
																			<div className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView"></div>
																		</div>
																	</div>
																</Link>
															</div>
														</div>
														<div className="col-2">
															<div className="tt-product thumbprod-center">
																<Link to="product.html">
																	<div className="tt-image-box">
																		<span className="tt-img"><img src="assets/images/product/product-02.jpg" alt="" /></span>
																		<span className="tt-img-roll-over"><img src="assets/images/product/product-02-02.jpg" alt="" /></span>
																	</div>
																	<div className="tt-description">
																		<h2 className="tt-title">Flared Shift Dress</h2>
																		<div className="tt-price">
																			$17
																		</div>
																		<div className="tt-product-inside-hover">
																			<div className="tt-btn-addtocart" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</div>
																			<div className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView"></div>
																		</div>
																	</div>
																</Link>
															</div>
														</div>
														<div className="col-2">
															<div className="tt-product thumbprod-center">
																<Link to="product.html">
																	<div className="tt-image-box">
																		<span className="tt-img"><img src="assets/images/product/product-04.jpg" alt="" /></span>
																		<span className="tt-img-roll-over"><img src="assets/images/product/product-04-01.jpg" alt="" /></span>
																	</div>
																	<div className="tt-description">
																		<h2 className="tt-title">Flared Shift Dress</h2>
																		<div className="tt-price">
																			$14
																		</div>
																		<div className="tt-product-inside-hover">
																			<div className="tt-btn-addtocart" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</div>
																			<div className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView"></div>
																		</div>
																	</div>
																</Link>
															</div>
														</div>
														<div className="col-2">
															<div className="tt-product thumbprod-center">
																<Link to="product.html">
																	<div className="tt-image-box">
																		<span className="tt-img"><img src="assets/images/product/product-05.jpg" alt="" /></span>
																		<span className="tt-img-roll-over"><img src="assets/images/product/product-05-02.jpg" alt="" /></span>
																	</div>
																	<div className="tt-description">
																		<h2 className="tt-title">Flared Shift Dress</h2>
																		<div className="tt-price">
																			<span className="new-price">$14</span>
																			<span className="old-price">$24</span>
																		</div>
																		<div className="tt-product-inside-hover">
																			<div className="tt-btn-addtocart" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</div>
																			<div className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView"></div>
																		</div>
																	</div>
																</Link>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-sm-6">
													<Link to="listing-left-column.html" className="tt-promo-02">
														<img src="assets/images/custom/header-promo-01.jpg" alt="" />
														<div className="tt-description tt-point-h-l">
															<div className="tt-description-wrapper">
																<div className="tt-title-small">SUMMER <span className="tt-base-color">2018</span></div>
																<div className="tt-title-large">NEW ARRIVALS</div>
															</div>
														</div>
													</Link>
												</div>
												<div className="col-sm-6">
													<Link to="listing-left-column.html" className="tt-promo-02">
														<img src="assets/images/custom/header-promo-02.jpg" alt="" />
														<div className="tt-description tt-point-h-l">
															<div className="tt-description-wrapper">
																<div className="tt-title-small"><span className="tt-white-color">CLEARANCE SALES</span></div>
																<div className="tt-title-large"><span className="tt-white-color">GET UP TO 20% OFF</span></div>
															</div>
														</div>
													</Link>
												</div>
											</div>
										</div>
									</li>
									<li className="dropdown megamenu">
										<Link to="listing-right-column.html">MEN</Link>
										<div className="dropdown-menu">
											<div className="row">
												<div className="col-sm-9">
													<div className="row tt-col-list">
														<div className="col-sm-4">
															<Link to="listing-right-column.html" className="tt-title-submenu">
																TOPS
																<img src="assets/images/custom/header-category-01.jpg" alt="" />
															</Link>
															<ul className="tt-megamenu-submenu">
																<li><Link to="listing-right-column.html">Shirts</Link></li>
																<li><Link to="listing-right-column.html">Sweaters  <span className="tt-badge tt-new">New</span></Link></li>
																<li>
																	<Link to="listing-right-column.html">Tops &amp; T-shirts</Link>
																	<ul>
																		<li><Link to="listing-right-column.html">Link Level 1</Link></li>
																		<li>
																			<Link to="listing-right-column.html">Link Level 1</Link>
																			<ul>
																				<li><Link to="listing-right-column.html">Link Level 2</Link></li>
																				<li>
																					<Link to="listing-right-column.html">Link Level 2</Link>
																					<ul>
																						<li><Link to="listing-right-column.html">Link Level 3</Link></li>
																						<li><Link to="listing-right-column.html">Link Level 3</Link></li>
																						<li><Link to="listing-right-column.html">Link Level 3</Link></li>
																						<li>
																							<Link to="listing-right-column.html">Link Level 3</Link>
																							<ul>
																								<li>
																									<Link to="listing-right-column.html">Link Level 4</Link>
																									<ul>
																										<li><Link to="listing-right-column.html">Link Level 5</Link></li>
																										<li><Link to="listing-right-column.html">Link Level 5</Link></li>
																										<li><Link to="listing-right-column.html">Link Level 5</Link></li>
																										<li><Link to="listing-right-column.html">Link Level 5</Link></li>
																										<li><Link to="listing-right-column.html">Link Level 5</Link></li>
																									</ul>
																								</li>
																								<li><Link to="listing-right-column.html">Link Level 4</Link></li>
																								<li><Link to="listing-right-column.html">Link Level 4</Link></li>
																								<li><Link to="listing-right-column.html">Link Level 4</Link></li>
																								<li><Link to="listing-right-column.html">Link Level 4</Link></li>
																							</ul>
																						</li>
																						<li><Link to="listing-right-column.html">Link Level 3</Link></li>
																					</ul>
																				</li>
																				<li><Link to="listing-right-column.html">Link Level 2</Link></li>
																				<li><Link to="listing-right-column.html">Link Level 2</Link></li>
																				<li><Link to="listing-right-column.html">Link Level 2</Link></li>
																			</ul>
																		</li>
																		<li><Link to="listing-right-column.html">Link Level 1</Link></li>
																		<li><Link to="listing-right-column.html">Link Level 1</Link></li>
																		<li><Link to="listing-right-column.html">Link Level 1</Link></li>
																	</ul>
																</li>
																<li><Link to="listing-right-column.html">Sleeveless Tops</Link></li>
																<li><Link to="listing-right-column.html">Jackets</Link></li>
																<li><Link to="listing-right-column.html">Outerwear</Link></li>
															</ul>
														</div>
														<div className="col-sm-4">
															<Link className="tt-title-submenu" to="listing-right-column.html">
																BOTTOMS
																<img src="assets/images/custom/header-category-02.jpg" alt="" />
															</Link>
															<ul className="tt-megamenu-submenu">
																<li><Link to="listing-right-column.html">Trousers <span className="tt-badge tt-fatured">Fatured</span></Link></li>
																<li><Link to="listing-right-column.html">Jeans</Link></li>
																<li><Link to="listing-right-column.html">Jumpsuit &amp; Shorts</Link></li>
																<li><Link to="listing-right-column.html">Skirts</Link></li>
																<li><Link to="listing-right-column.html">Tights</Link></li>
															</ul>
														</div>
														<div className="col-sm-4">
															<Link className="tt-title-submenu" to="listing-right-column.html">
																ACCESSORIES
																<img src="assets/images/custom/header-category-03.jpg" alt="" />
															</Link>
															<ul className="tt-megamenu-submenu">
																<li><Link to="listing-right-column.html">Hats</Link></li>
																<li><Link to="listing-right-column.html">Scarves &amp; Snoods</Link></li>
																<li><Link to="listing-right-column.html">Belts</Link></li>
																<li><Link to="listing-right-column.html">Bags</Link></li>
																<li><Link to="listing-right-column.html">Shoes</Link></li>
																<li><Link to="listing-right-column.html">Sunglasses <span className="tt-badge tt-sale">Sale 15%</span></Link></li>
															</ul>
														</div>
													</div>
												</div>
												<div className="col-sm-3">
													<div className="tt-offset-7">
														<Link to="listing-left-column.html" className="tt-promo-02">
															<img src="assets/images/custom/header-promo-03.jpg" alt="" />
															<div className="tt-description tt-point-h-l tt-point-v-t">
																<div className="tt-description-wrapper">
																	<div className="tt-title-small tt-white-color">SALE</div>
																	<div className="tt-title-xlarge tt-white-color">70% OFF</div>
																	<p className="tt-white-color">Free shipping on all US order or order above $99</p>
																	<span className="btn-underline tt-obj-bottom tt-white-color">SHOP NOW!</span>
																</div>
															</div>
														</Link>
													</div>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}

export default DesktopNavigation;