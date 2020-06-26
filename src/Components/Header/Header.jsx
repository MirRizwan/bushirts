import React from 'react';
import {Link} from 'react-router-dom';

import TopMenu from '../TopMenu/TopMenu';
import MainNavigation from '../MainNavigation/MainNavigation';

const Header = () => {

	return(
        <header>


	<TopMenu />
	
	
		<MainNavigation />
	
	<div className="tt-mobile-header">
		<div className="container-fluid">
			<div className="tt-header-row">
				<div className="tt-mobile-parent-menu">
					<div className="tt-menu-toggle">
						<i className="icon-03"></i>
					</div>
				</div>
				
				<div className="tt-mobile-parent-search tt-parent-box"></div>
				
				
				<div className="tt-mobile-parent-cart tt-parent-box"></div>
			
			
				<div className="tt-mobile-parent-account tt-parent-box"></div>
			
				
				<div className="tt-mobile-parent-multi tt-parent-box"></div>
			
			</div>
		</div>
		<div className="container-fluid tt-top-line">
			<div className="row">
				<div className="tt-logo-container">
				
					<Link className="tt-logo tt-logo-alignment" to="index.html"><img src="assets/images/custom/logo.png" alt="" /></Link>
				
				</div>
			</div>
		</div>
	</div>
	
	<div className="tt-desktop-header">
		<div className="container">
			<div className="tt-header-holder">
				<div className="tt-obj-logo obj-aligment-center">
				
					<Link className="tt-logo tt-logo-alignment" to="index.html"><img src="assets/images/custom/logo.png" alt="" /></Link>
					
				</div>
				<div className="tt-obj-options obj-move-right tt-position-absolute">
					
					<div className="tt-desctop-parent-search tt-parent-box">
						<div className="tt-search tt-dropdown-obj">
							<button className="tt-dropdown-toggle" data-tooltip="Search" data-tposition="bottom">
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
											<button className="tt-btn-close icon-g-80"></button>
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
				
					<div className="tt-desctop-parent-cart tt-parent-box">
						<div className="tt-cart tt-dropdown-obj" data-tooltip="Cart" data-tposition="bottom">
							<button className="tt-dropdown-toggle">
								<i className="icon-f-39"></i>
								<span className="tt-badge-cart">3</span>
							</button>
							<div className="tt-dropdown-menu">
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
															<img src="assets/images/loader.svg" data-src="assets/images/product/product-01.jpg" alt="" />
														</div>
														<div className="tt-item-descriptions">
															<h2 className="tt-title">Flared Shift Dress</h2>
															<ul className="tt-add-info">
																<li>Yellow, Material 2, Size 58,</li>
																<li>Vendor: Addidas</li>
															</ul>
															<div className="tt-quantity">1 X</div> <div className="tt-price">$12</div>
														</div>
													</Link>
													<div className="tt-item-close">
														<Link to="#" className="tt-btn-close"></Link>
													</div>
												</div>
												<div className="tt-item">
													<Link to="product.html">
														<div className="tt-item-img">
															<img src="assets/images/loader.svg" data-src="assets/images/product/product-02.jpg" alt="" />
														</div>
														<div className="tt-item-descriptions">
															<h2 className="tt-title">Flared Shift Dress</h2>
															<ul className="tt-add-info">
																<li>Yellow, Material 2, Size 58,</li>
																<li>Vendor: Addidas</li>
															</ul>
															<div className="tt-quantity">1 X</div> <div className="tt-price">$18</div>
														</div>
													</Link>
													<div className="tt-item-close">
														<Link to="#" className="tt-btn-close"></Link>
													</div>
												</div>
											</div>
											<div className="tt-cart-total-row">
												<div className="tt-cart-total-title">SUBTOTAL:</div>
												<div className="tt-cart-total-price">$324</div>
											</div>
											<div className="tt-cart-btn">
												<div className="tt-item">
													<Link to="#" className="btn">PROCEED TO CHECKOUT</Link>
												</div>
												<div className="tt-item">
													<Link to="shopping_cart_02.html" className="btn-link-02 tt-hidden-mobile">View Cart</Link>
													<Link to="shopping_cart_02.html" className="btn btn-border tt-hidden-desctope">VIEW CART</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				
					<div className="tt-desctop-parent-account tt-parent-box">
						<div className="tt-account tt-dropdown-obj">
							<button className="tt-dropdown-toggle"  data-tooltip="My Account" data-tposition="bottom"><i className="icon-f-94"></i></button>
							<div className="tt-dropdown-menu">
								<div className="tt-mobile-add">
									<button className="tt-close">Close</button>
								</div>
								<div className="tt-dropdown-inner">
									<ul>
									    <li><Link to="login.html"><i className="icon-f-94"></i>Account</Link></li>
									    <li><Link to="wishlist.html"><i className="icon-n-072"></i>Wishlist</Link></li>
									    <li><Link to="compare.html"><i className="icon-n-08"></i>Compare</Link></li>
									    <li><Link to="page404.html"><i className="icon-f-68"></i>Check Out</Link></li>
									    <li><Link to="login.html"><i className="icon-f-76"></i>Sign In</Link></li>
									    <li><Link to="page404.html"><i className="icon-f-77"></i>Sign Out</Link></li>
									    <li><Link to="create-account.html"><i className="icon-f-94"></i>Register</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					
					<div className="tt-desctop-parent-multi tt-parent-box">
						<div className="tt-multi-obj tt-dropdown-obj">
							<button className="tt-dropdown-toggle" data-tooltip="Settings" data-tposition="bottom"><i className="icon-f-79"></i></button>
							<div className="tt-dropdown-menu">
								<div className="tt-mobile-add">
									<button className="tt-close">Close</button>
								</div>
								<div className="tt-dropdown-inner">
									<ul>
										<li className="active"><Link to="#">English</Link></li>
										<li><Link to="#">Deutsch</Link></li>
										<li><Link to="#">Español</Link></li>
										<li><Link to="#">Français</Link></li>
									</ul>
									<ul>
										<li className="active"><Link to="#"><i className="icon-h-59"></i>USD - US Dollar</Link></li>
										<li><Link to="#"><i className="icon-h-60"></i>EUR - Euro</Link></li>
										<li><Link to="#"><i className="icon-h-61"></i>GBP - British Pound Sterling</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					
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
									<li className="dropdown tt-megamenu-col-02 selected">
										<Link to="index.html">HOME</Link>
										<div className="dropdown-menu">
											<div className="row tt-col-list">
												<div className="col">
													<h6 className="tt-title-submenu"><Link to="index.html">HOME STYLES</Link></h6>
													<ul className="tt-megamenu-submenu">
														<li><Link to="index.html">Home — Example 1
															<img src="assets/images/loader.svg" data-src="assets/images/custom/tt-layout-img-01.png" alt="Example 1" />
															<span className="tt-badge tt-fatured">Popular</span>
														</Link></li>
														<li><Link to="index-02.html">Home — Example 2 <img  src="assets/images/loader.svg" data-src="assets/images/custom/tt-layout-img-02.png" alt="Example 2" /></Link></li>
														<li><Link to="index-03.html">Home — Example 3 <img  src="assets/images/loader.svg" data-src="assets/images/custom/tt-layout-img-03.png" alt="Example 3" /></Link></li>
														<li><Link to="index-04.html">Home — Example 4
															<img  src="assets/images/loader.svg" data-src="assets/images/custom/tt-layout-img-04.png" alt="Example 4" />
															<span className="tt-badge tt-fatured">Popular</span>
														</Link></li>
														<li><Link to="index-05.html">Home — Example 5 <img  src="assets/images/loader.svg" data-src="assets/images/custom/tt-layout-img-05.png" alt="Example 5" /></Link></li>
														<li><Link to="index-06.html">Home — Example 6 <img  src="assets/images/loader.svg" data-src="assets/images/custom/tt-layout-img-06.png" alt="Example 6" /></Link></li>
														<li><Link to="index-07.html">Home — Example 7 <img  src="assets/images/loader.svg" data-src="assets/images/custom/tt-layout-img-07.png" alt="Example 7" /></Link></li>
														<li><Link to="index-08.html">Home — Example 8 <img  src="assets/images/loader.svg" data-src="assets/images/custom/tt-layout-img-08.png" alt="Example 8" /></Link></li>
														<li><Link to="index-09.html">Home — Example 9 <img  src="assets/images/loader.svg" data-src="assets/images/custom/tt-layout-img-09.png" alt="Example 9" /></Link></li>
													</ul>
												</div>
												<div className="col">
													<h6 className="tt-title-submenu"><Link to="index.html">HOME STYLES</Link></h6>
													<ul className="tt-megamenu-submenu">
														<li><Link to="index-10.html">Home — Example 10 <img  src="assets/images/loader.svg" data-src="assets/images/custom/tt-layout-img-10.png" alt="Example 10" /></Link></li>
														<li><Link to="index-11.html">Home — Example 11 <img  src="assets/images/loader.svg" data-src="assets/images/custom/tt-layout-img-11.png" alt="Example 11" /></Link></li>
														<li><Link to="index-12.html">Home — Example 12 <img  src="assets/images/loader.svg" data-src="assets/images/custom/tt-layout-img-12.png" alt="Example 12" /></Link></li>
														<li><Link to="index-13.html">Home — Example 13 <img  src="assets/images/loader.svg" data-src="assets/images/custom/tt-layout-img-13.png" alt="Example 13" /></Link></li>
														<li><Link to="index-14.html">Home — Example 14 <img  src="assets/images/loader.svg" data-src="assets/images/custom/tt-layout-img-14.png" alt="Example 14" /></Link></li>
														<li><Link to="index-15.html">Home — Example 15 <img  src="assets/images/loader.svg" data-src="assets/images/custom/tt-layout-img-15.png" alt="Example 15" /></Link></li>
														<li><Link to="index-16.html">Home — Example 16
															<img  src="assets/images/loader.svg" data-src="assets/images/custom/tt-layout-img-16.png" alt="Example 16" />
															<span className="tt-badge tt-fatured">Popular</span>
														</Link></li>
														<li><Link to="index-17.html">Home — Example 17 <img  src="assets/images/loader.svg" data-src="assets/images/custom/tt-layout-img-17.png" alt="Example 17" /></Link></li>
														<li><Link to="index-18.html">Home — Example 18 <img  src="assets/images/loader.svg" data-src="assets/images/custom/tt-layout-img-18.png" alt="Example 18" /></Link></li>
													</ul>
												</div>
												<div className="col">
													<h6 className="tt-title-submenu"><Link to="index-skin-snowboards.html">
														<span>HOME SKINS</span>
														<span className="tt-badge tt-sale">HOT</span>
													</Link></h6>
													<ul className="tt-megamenu-submenu">
														<li><Link to="index-skin-snowboards.html">Snowboards Shop
															<img src="assets/images/loader.svg" data-src="assets/images/custom/tt-skins-img-01.png" alt="Snowboards Shop" />
															<span className="tt-badge tt-fatured">Popular</span>
														</Link></li>
														<li><Link to="index-skin-phones.html">Phones Shop
															<img  src="assets/images/loader.svg" data-src="assets/images/custom/tt-skins-img-02.png" alt="Phones Shop" />
															<span className="tt-badge tt-fatured">Popular</span>
														</Link></li>
														<li><Link to="index-skin-bikes.html">Bikes Shop
															<img  src="assets/images/loader.svg" data-src="assets/images/custom/tt-skins-img-03.png" alt="Bikes Shop" />
															<span className="tt-badge tt-fatured">Popular</span>
														</Link></li>
														<li><Link to="index-skin-lingerie.html">Lingerie Shop <img src="assets/images/loader.svg" data-src="assets/images/custom/tt-skins-img-04.png" alt="Lingerie Shop" /></Link></li>
														<li><Link to="index-skin-furniture.html">Furniture Shop <img src="assets/images/loader.svg" data-src="assets/images/custom/tt-skins-img-05.png" alt="Furniture Shop" /></Link></li>
														<li><Link to="index-skin-books.html">Books shop
															<img src="assets/images/loader.svg" data-src="assets/images/custom/tt-skins-img-06.png" alt="Books Shop" />
															<span className="tt-badge tt-new">New</span>
														</Link></li>
													</ul>
												</div>
											</div>
										</div>
									</li>
									<li className="dropdown megamenu">
										<Link to="listing-collection.html">SHOP</Link>
										<div className="dropdown-menu">
											<div className="row tt-col-list">
												<div className="col">
													<h6 className="tt-title-submenu"><Link to="listing-left-column.html">LISTING STYLES</Link></h6>
													<ul className="tt-megamenu-submenu">
														<li><Link to="listing-left-column.html">Listing With Left Sidebar</Link></li>
														<li><Link to="listing-right-column.html">Listing With Right Sidebar</Link></li>
														<li><Link to="listing-not-sidebar.html">Listing Not Sidebar</Link></li>
														<li><Link to="listing-not-sidebar-full-width.html">Listing Not Sidebar Full Width</Link></li>
														<li><Link to="listing-metro.html">Listing Metro</Link></li>
														<li><Link to="listing-left-column-with-block.html">Listing With Custom HTML Block</Link></li>
														<li><Link to="listing-collection.html">Listing Collection</Link></li>
														<li><Link to="lookbook.html">Look Book</Link></li>
													</ul>
												</div>
												<div className="col">
													<h6 className="tt-title-submenu"><Link to="product.html">PRODUCT PAGE STYLES</Link></h6>
													<ul className="tt-megamenu-submenu">
														<li><Link to="product.html">Product Example 1</Link></li>
														<li><Link to="product-02.html">Product Example 2</Link></li>
														<li><Link to="product-03.html">Product Example 3</Link></li>
														<li><Link to="product-04.html">Product Example 4</Link></li>
														<li><Link to="product-variable.html">Product Layout</Link></li>
														<li><Link to="product-three-columns.html">Three Columns</Link></li>
													</ul>
												</div>
												<div className="col">
													<h6 className="tt-title-submenu"><Link to="product-variable.html">PRODUCT PAGE TYPES</Link></h6>
													<ul className="tt-megamenu-submenu">
														<li><Link to="product.html">Standard Product</Link></li>
														<li><Link to="product-variable.html">Variable Product</Link></li>
														<li><Link to="product-04.html">Grouped Product</Link></li>
														<li><Link to="product-label-new.html">New Product</Link></li>
														<li><Link to="product-label-sale.html">Sale Product</Link></li>
														<li><Link to="product-label-out-of-stock.html">Out Of Stock Product</Link></li>
													</ul>
												</div>
												<div className="col">
													<h6 className="tt-title-submenu"><Link to="shopping_cart_02.html">OTHER PAGES</Link></h6>
													<ul className="tt-megamenu-submenu">
														<li><Link to="shopping_cart_02.html">Cart</Link></li>
														<li><Link to="shopping_cart_01.html">Cart With Right Col</Link></li>
														<li><Link to="account.html">Account</Link></li>
														<li><Link to="account_address.html">Account Address</Link></li>
														<li><Link to="account_address_fields.html">Account Address Fields</Link></li>
													</ul>
												</div>
											</div>
										</div>
									</li>
									<li className="dropdown tt-megamenu-col-01">
										<Link to="blog-listing-without-col.html">BLOG</Link>
										<div className="dropdown-menu">
											<div className="row tt-col-list">
												<div className="col">
													<h6 className="tt-title-submenu"><Link to="blog-listing-without-col.html">BLOG STYLES</Link></h6>
													<ul className="tt-megamenu-submenu">
														<li><Link to="blog-listing-without-col.html">Standard Without Sidebar</Link></li>
														<li><Link to="blog-listing-col-left.html">Standard With Left Sidebar</Link></li>
														<li><Link to="blog-listing-col-right.html">Standard With Right Sidebar</Link></li>
														<li><Link to="blog-masonry-col-2.html">Two Colums</Link></li>
														<li><Link to="blog-masonry-col-3.html">Three Colums</Link></li>
														<li><Link to="blog-masonry-col-3-filter.html">Three Colums With Filter</Link></li>
													</ul>
												</div>
												<div className="col">
													<h6 className="tt-title-submenu"><Link to="blog-single-post.html">POST TYPES</Link></h6>
													<ul className="tt-megamenu-submenu">
														<li><Link to="blog-single-post.html">Standard</Link></li>
														<li><Link to="blog-single-post-gallery.html">Gallery</Link></li>
														<li><Link to="blog-single-post-link.html">Link</Link></li>
														<li><Link to="blog-single-post-quote.html">Quote</Link></li>
														<li><Link to="blog-single-post-video.html">Video</Link></li>
														<li><Link to="blog-single-post-audio.html">Audio</Link></li>
													</ul>
												</div>
											</div>
										</div>
									</li>
									<li className="dropdown tt-megamenu-col-01">
										<Link to="portfolio-col-wide-four.html">PORTFOLIO</Link>
										<div className="dropdown-menu">
											<div className="row tt-col-list">
												<div className="col">
													<h6 className="tt-title-submenu"><Link to="portfolio-col-grid-two.html">BOXED GRID</Link></h6>
													<ul className="tt-megamenu-submenu">
														<li><Link to="portfolio-col-grid-two.html">Two Colums</Link></li>
														<li><Link to="portfolio-col-grid-three.html">Three Colums</Link></li>
														<li><Link to="portfolio-col-grid-four.html">Four Colums</Link></li>
														<li><Link to="portfolio-col-grid-four-without-filter.html">Four Colums Without Filter</Link></li>
													</ul>
												</div>
												<div className="col">
													<h6 className="tt-title-submenu"><Link to="portfolio-col-wide-three.html">BOXED WIDE</Link></h6>
													<ul className="tt-megamenu-submenu">
														<li><Link to="portfolio-col-wide-two.html">Two Colums</Link></li>
														<li><Link to="portfolio-col-wide-three.html">Three Colums</Link></li>
														<li><Link to="portfolio-col-wide-four.html">Four Colums</Link></li>
													</ul>
												</div>
											</div>
										</div>
									</li>
									<li className="dropdown tt-megamenu-col-01">
										<Link to="about.html">PAGES</Link>
										<div className="dropdown-menu">
											<div className="row tt-col-list">
												<div className="col">
													<h6 className="tt-title-submenu"><Link to="about.html">PAGES</Link></h6>
													<ul className="tt-megamenu-submenu">
														<li><Link to="about.html">About Example 1</Link>
															<ul>
																<li><Link to="about.html">Link Level 1</Link></li>
																<li>
																	<Link to="about.html">Link Level 1</Link>
																	<ul>
																		<li><Link to="about.html">Link Level 2</Link></li>
																		<li>
																			<Link to="about.html">Link Level 2</Link>
																			<ul>
																				<li><Link to="about.html">Link Level 3</Link></li>
																				<li><Link to="about.html">Link Level 3</Link></li>
																				<li><Link to="about.html">Link Level 3</Link></li>
																				<li>
																					<Link to="about.html">Link Level 3</Link>
																					<ul>
																						<li>
																							<Link to="about.html">Link Level 4</Link>
																							<ul>
																								<li><Link to="about.html">Link Level 5</Link></li>
																								<li><Link to="about.html">Link Level 5</Link></li>
																								<li><Link to="about.html">Link Level 5</Link></li>
																								<li><Link to="about.html">Link Level 5</Link></li>
																								<li><Link to="about.html">Link Level 5</Link></li>
																							</ul>
																						</li>
																						<li><Link to="about.html">Link Level 4</Link></li>
																					</ul>
																				</li>
																				<li><Link to="about.html">Link Level 3</Link></li>
																			</ul>
																		</li>
																		<li><Link to="about.html">Link Level 2</Link></li>
																		<li><Link to="about.html">Link Level 2</Link></li>
																	</ul>
																</li>
																<li><Link to="about.html">Link Level 1</Link></li>
																<li><Link to="about.html">Link Level 1</Link></li>
																<li><Link to="about.html">Link Level 1</Link></li>
															</ul>
														</li>
														<li><Link to="about-02.html">About Example 2</Link></li>
														<li><Link to="contact.html">Contacts Example 1</Link></li>
														<li><Link to="contact-02.html">Contacts Example 2</Link></li>
														<li><Link to="services.html">Services</Link></li>
														<li><Link to="faq.html">FAQ</Link></li>
														<li><Link to="coming-soon.html">Coming Soon</Link></li>
														<li><Link to="page404.html">Page 404</Link></li>
														<li><Link to="typography.html">Typography</Link></li>
														<li><Link to="gift-cart.html">Gift Cart</Link></li>
														<li>
															<Link to="compare.html">Compare</Link>
															<ul>
																<li><Link to="compare.html">Compare 01</Link></li>
																<li><Link to="compare-02.html">Compare 02</Link></li>
															</ul>
														</li>
														<li><Link to="wishlist.html">Wishlist</Link></li>
														<li>
															<Link to="account.html">Account</Link>
															<ul>
																<li><Link to="account.html">Account</Link></li>
																<li><Link to="account_address.html">Account Address</Link></li>
																<li><Link to="account_address_fields.html">Account Address Fields</Link></li>
															</ul>
														</li>
														<li>
															<Link to="empty-search.html">Empty</Link>
															<ul>
																<li><Link to="empty-cart.html">Empty Cart</Link></li>
																<li><Link to="empty-search.html">Empty Search</Link></li>
																<li><Link to="empty-wishlist.html">Empty Wishlist</Link></li>
															</ul>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</li>
									<li className="dropdown megamenu">
										<Link to="listing-left-column.html">WOMEN</Link>
										<div className="dropdown-menu">
											<div className="row">
												<div className="col-sm-8">
													<div className="row tt-col-list">
														<div className="col-sm-3">
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
																<li><Link to="#" target="_blank"><img src="assets/images/loader.svg" data-src="assets/images/custom/brand-img-01.png" alt="" /></Link></li>
																<li><Link to="#" target="_blank"><img src="assets/images/loader.svg" data-src="assets/images/custom/brand-img-02.png" alt="" /></Link></li>
																<li><Link to="#" target="_blank"><img src="assets/images/loader.svg" data-src="assets/images/custom/brand-img-03.png" alt="" /></Link></li>
																<li><Link to="#" target="_blank"><img src="assets/images/loader.svg" data-src="assets/images/custom/brand-img-04.png" alt=" " /></Link></li>
																<li><Link to="#" target="_blank"><img src="assets/images/loader.svg" data-src="assets/images/custom/brand-img-05.png" alt="" /></Link></li>
																<li><Link to="#" target="_blank"><img src="assets/images/loader.svg" data-src="assets/images/custom/brand-img-06.png" alt="" /></Link></li>
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
																<img src="assets/images/loader.svg" data-src="assets/images/custom/header-category-01.jpg" alt="" />
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
																<img src="assets/images/loader.svg" data-src="assets/images/custom/header-category-02.jpg" alt="" />
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
																<img src="assets/images/loader.svg" data-src="assets/images/custom/header-category-03.jpg" alt="" />
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
															<img src="assets/images/loader.svg" data-src="assets/images/custom/header-promo-03.jpg" alt="" />
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
									<li className="dropdown">
										<Link to="index-rtl.html">RTL</Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	
	<div className="tt-stuck-nav">
		<div className="container">
			<div className="tt-header-row ">
				<div className="tt-stuck-parent-menu"></div>
				<div className="tt-stuck-parent-search tt-parent-box"></div>
				<div className="tt-stuck-parent-cart tt-parent-box"></div>
				<div className="tt-stuck-parent-account tt-parent-box"></div>
				<div className="tt-stuck-parent-multi tt-parent-box"></div>
			</div>
		</div>
	</div>
</header>
    )
}

export default Header;
