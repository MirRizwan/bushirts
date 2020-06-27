import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import HomeSlider from '../Components/HomeSlider/HomeSlider';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import HomeOffersPanel from '../Components/HomeOffersPanel/HomeOffersPanel';
import Trending from '../Components/Trending/Trending';
import Specials from '../Components/Specials/Specials';
import ShortServices from '../Components/ShortServices/ShortServices';
import InstagramPosts from '../Components/InstagramPosts/InstagramPosts';


class Home extends Component {
	render() {


		return (
			<React.Fragment>
				{/* <div id="loader-wrapper">
                <div id="loader">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div> */}
				
				<Header />

				<div id="tt-pageContent">
					<HomeSlider />
					<HomeOffersPanel />
					<Trending />
					<div className="container-indent">
						<div className="container-fluid">
							<div className="row tt-layout-promo-box">
								<div className="col-md-6">
									<Link to="listing-left-column.html" className="tt-promo-box tt-one-child">
										<img src="assets/images/promo/index05-promo-img-04.jpg" alt="" />
										<div className="tt-description">
											<div className="tt-description-wrapper">
												<div className="tt-background"></div>
												<div className="tt-title-small">NEW IN:</div>
												<div className="tt-title-large">CLOTHING</div>
											</div>
										</div>
									</Link>
								</div>
								<div className="col-md-6">
									<Link to="listing-left-column.html" className="tt-promo-box tt-one-child">
										<img src="assets/images/promo/index05-promo-img-05.jpg" alt="" />
										<div className="tt-description">
											<div className="tt-description-wrapper">
												<div className="tt-background"></div>
												<div className="tt-title-small">CLEARANCE SALES</div>
												<div className="tt-title-large">GET UP TO <span className="tt-base-color">20% OFF</span></div>
											</div>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>


					<Specials />
					<div className="container-indent">
						<div className="container-fluid-custom">
							<div className="row tt-layout-promo-box">
								<div className="col-sm-6 col-md-4">
									<Link to="listing-left-column.html" className="tt-promo-box">
										<img src="assets/images/promo/index05-promo-img-07.jpg" alt="" />
										<div className="tt-description">
											<div className="tt-description-wrapper">
												<div className="tt-background"></div>
												<div className="tt-title-small">FALL-WINTER CLEARANCE SALES</div>
												<div className="tt-title-large">GET UP TO <span className="tt-base-color">50% OFF</span></div>
											</div>
										</div>
									</Link>
								</div>
								<div className="col-sm-6 col-md-4">
									<Link to="listing-left-column.html" className="tt-promo-box">
										<img src="assets/images/promo/index05-promo-img-08.jpg" alt="" />
										<div className="tt-description">
											<div className="tt-description-wrapper">
												<div className="tt-background"></div>
												<div className="tt-title-small">SUMMER <span className="tt-base-color">2018</span></div>
												<div className="tt-title-large">NEW ARRIVALS</div>
											</div>
										</div>
									</Link>
								</div>
								<div className="col-sm-6 col-md-4">
									<Link to="listing-left-column.html" className="tt-promo-box">
										{/* <img src="assets/images/promo/index05-promo-img-06.jpg" alt="" /> */}
										<img src="assets/images/promo/index05-promo-img-06.jpg" alt="" />
										<div className="tt-description">
											<div className="tt-background"></div>
											<div className="tt-description-wrapper">
												<div className="tt-background"></div>
												<div className="tt-title-small">NEW COLLECTION</div>
												<div className="tt-title-large"><span className="tt-base-color">HANDBAGS</span></div>
											</div>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="container-indent">
						<div className="container">
							<div className="row">
								<div className="col-sm-6 col-md-4">
									<h6 className="tt-title-sub">NEW PRODUCTS</h6>
									<div className="tt-layout-vertical-listing">
										<div className="tt-item">
											<div className="tt-layout-vertical">
												<div className="tt-img">
													<Link to="listing-collection.html">
														<span className="tt-img-default"><img src="assets/images/product/product-18.jpg" alt="" /></span>
														<span className="tt-img-roll-over"><img src="assets/images/product/product-18-02.jpg" data-src="" alt="" /></span>
													</Link>
												</div>
												<div className="tt-description">
													<ul className="tt-add-info">
														<li><Link to="#">T-SHIRTS</Link></li>
													</ul>
													<h6 className="tt-title"><Link to="#">Flared Shift Dress</Link></h6>
													<div className="tt-price">
														$24
									</div>
													<div className="tt-option-block">
														<ul className="tt-options-swatch">
															<li><Link className="options-color tt-color-bg-01" to="#"></Link></li>
															<li><Link className="options-color tt-color-bg-02" to="#"></Link></li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div className="tt-item">
											<div className="tt-layout-vertical">
												<div className="tt-img">
													<Link to="listing-collection.html">
														<span className="tt-img-default"><img src="assets/images/product/product-19.jpg" alt="" /></span>
														<span className="tt-img-roll-over"><img src="assets/images/product/product-19-02.jpg" alt="" /></span>
													</Link>
												</div>
												<div className="tt-description">
													<ul className="tt-add-info">
														<li><Link to="#">T-SHIRTS</Link></li>
													</ul>
													<h6 className="tt-title"><Link to="#">Flared Shift Dress</Link></h6>
													<div className="tt-price">
														$84
									</div>
												</div>
											</div>
										</div>
										<div className="tt-item">
											<div className="tt-layout-vertical">
												<div className="tt-img">
													<Link to="listing-collection.html">
														<span className="tt-img-default"><img src="assets/images/product/product-20.jpg" alt="" /></span>
														<span className="tt-img-roll-over"><img src="assets/images/product/product-20-01.jpg" alt="" /></span>
													</Link>
												</div>
												<div className="tt-description">
													<ul className="tt-add-info">
														<li><Link to="#">T-SHIRTS</Link></li>
													</ul>
													<h6 className="tt-title"><Link to="#">Flared Shift Dress</Link></h6>
													<div className="tt-price">
														$78
									</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="divider visible-xs"></div>
								<div className="col-sm-6 col-md-4">
									<h6 className="tt-title-sub">SPECIAL PRODUCTS</h6>
									<div className="tt-layout-vertical-listing">
										<div className="tt-item">
											<div className="tt-layout-vertical">
												<div className="tt-img">
													<Link to="listing-collection.html">
														<span className="tt-img-default"><img src="assets/images/product/product-22.jpg" alt="" /></span>
														<span className="tt-img-roll-over"><img src="assets/images/product/product-22-02.jpg" alt="" /></span>
													</Link>
												</div>
												<div className="tt-description">
													<ul className="tt-add-info">
														<li><Link to="#">T-SHIRTS</Link></li>
													</ul>
													<h6 className="tt-title"><Link to="#">Flared Shift Dress</Link></h6>
													<div className="tt-price">
														<span className="new-price">$14</span>
														<span className="old-price">$24</span>
													</div>
												</div>
											</div>
										</div>
										<div className="tt-item">
											<div className="tt-layout-vertical">
												<div className="tt-img">
													<Link to="listing-collection.html">
														<span className="tt-img-default"><img src="assets/images/product/product-23.jpg" alt="" /></span>
														<span className="tt-img-roll-over"><img src="assets/images/product/product-23-02.jpg" alt="" /></span>
													</Link>
												</div>
												<div className="tt-description">
													<ul className="tt-add-info">
														<li><Link to="#">T-SHIRTS</Link></li>
													</ul>
													<h6 className="tt-title"><Link to="#">Flared Shift Dress</Link></h6>
													<div className="tt-price">
														<span className="new-price">$14</span>
														<span className="old-price">$24</span>
													</div>
													<div className="tt-option-block">
														<ul className="tt-options-swatch">
															<li><Link className="options-color tt-color-bg-03" to="#"></Link></li>
															<li><Link className="options-color tt-color-bg-04" to="#"></Link></li>
															<li><Link className="options-color tt-color-bg-05" to="#"></Link></li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div className="tt-item">
											<div className="tt-layout-vertical">
												<div className="tt-img">
													<Link to="listing-collection.html">
														<span className="tt-img-default"><img src="assets/images/product/product-21.jpg" alt="" /></span>
														<span className="tt-img-roll-over"><img src="assets/images/product/product-21-02.jpg" alt="" /></span>
													</Link>
												</div>
												<div className="tt-description">
													<ul className="tt-add-info">
														<li><Link to="#">T-SHIRTS</Link></li>
													</ul>
													<h6 className="tt-title"><Link to="#">Flared Shift Dress</Link></h6>
													<div className="tt-price">
														<span className="new-price">$34</span>
														<span className="old-price">$74</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="divider visible-sm visible-xs"></div>
								<div className="col-sm-6 col-md-4">
									<h6 className="tt-title-sub">FEATURED PRODUCTS</h6>
									<div className="tt-layout-vertical-listing">
										<div className="tt-item">
											<div className="tt-layout-vertical">
												<div className="tt-img">
													<Link to="listing-collection.html">
														<span className="tt-img-default"><img src="assets/images/product/product-16.jpg" alt="" /></span>
														<span className="tt-img-roll-over"><img src="assets/images/product/product-16-02.jpg" alt="" /></span>
													</Link>
												</div>
												<div className="tt-description">
													<div className="tt-rating">
														<i className="icon-star"></i>
														<i className="icon-star"></i>
														<i className="icon-star"></i>
														<i className="icon-star"></i>
														<i className="icon-star"></i>
													</div>
													<ul className="tt-add-info">
														<li><Link to="#">T-SHIRTS</Link></li>
													</ul>
													<h6 className="tt-title"><Link to="#">Flared Shift Dress</Link></h6>
													<div className="tt-price">
														$24
									</div>
												</div>
											</div>
										</div>
										<div className="tt-item">
											<div className="tt-layout-vertical">
												<div className="tt-img">
													<Link to="listing-collection.html">
														<span className="tt-img-default"><img src="assets/images/product/product-12.jpg" alt="" /></span>
														<span className="tt-img-roll-over"><img src="assets/images/product/product-12-01.jpg" alt="" /></span>
													</Link>
												</div>
												<div className="tt-description">
													<div className="tt-rating">
														<i className="icon-star"></i>
														<i className="icon-star"></i>
														<i className="icon-star"></i>
														<i className="icon-star"></i>
														<i className="icon-star"></i>
													</div>
													<ul className="tt-add-info">
														<li><Link to="#">T-SHIRTS</Link></li>
													</ul>
													<h6 className="tt-title"><Link to="#">Flared Shift Dress</Link></h6>
													<div className="tt-price">
														$178
									</div>
												</div>
											</div>
										</div>
										<div className="tt-item">
											<div className="tt-layout-vertical">
												<div className="tt-img">
													<Link to="listing-collection.html">
														<span className="tt-img-default"><img src="assets/images/product/product-13.jpg" alt="" /></span>
														<span className="tt-img-roll-over"><img src="assets/images/product/product-13-02.jpg" alt="" /></span>
													</Link>
												</div>
												<div className="tt-description">
													<div className="tt-rating">
														<i className="icon-star"></i>
														<i className="icon-star"></i>
														<i className="icon-star"></i>
														<i className="icon-star"></i>
														<i className="icon-star"></i>
													</div>
													<ul className="tt-add-info">
														<li><Link to="#">T-SHIRTS</Link></li>
													</ul>
													<h6 className="tt-title"><Link to="#">Flared Shift Dress</Link></h6>
													<div className="tt-price">
														$54
									</div>
													<div className="tt-option-block">
														<ul className="tt-options-swatch">
															<li><Link className="options-color tt-color-bg-01" to="#"></Link></li>
															<li><Link className="options-color tt-color-bg-02" to="#"></Link></li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<InstagramPosts />


					<ShortServices />
				</div>
				<Footer />
				<Link to="#" className="tt-back-to-top">BACK TO TOP</Link>

				<div className="modal  fade" id="modalAddToCartProduct" tabIndex="-1" role="dialog" aria-label="myModalLabel" aria-hidden="true">
					<div className="modal-dialog">
						<div className="modal-content ">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal" aria-hidden="true"><span className="icon icon-clear"></span></button>
							</div>
							<div className="modal-body">
								<div className="tt-modal-addtocart mobile">
									<div className="tt-modal-messages">
										<i className="icon-f-68"></i> Added to cart successfully!
									</div>
									<Link to="#" className="btn-link btn-close-popup">CONTINUE SHOPPING</Link>
									<Link to="shopping_cart_02.html" className="btn-link">VIEW CART</Link>
									<Link to="page404.html" className="btn-link">PROCEED TO CHECKOUT</Link>
								</div>
								<div className="tt-modal-addtocart desctope">
									<div className="row">
										<div className="col-12 col-lg-6">
											<div className="tt-modal-messages">
												<i className="icon-f-68"></i> Added to cart successfully!
											</div>
											<div className="tt-modal-product">
												<div className="tt-img">
													<img src="assets/images/product/product-01.jpg" alt="" />
												</div>
												<h2 className="tt-title"><Link to="product.html">Flared Shift Dress</Link></h2>
												<div className="tt-qty">
													QTY: <span>1</span>
												</div>
											</div>
											<div className="tt-product-total">
												<div className="tt-total">
													TOTAL: <span className="tt-price">$324</span>
												</div>
											</div>
										</div>
										<div className="col-12 col-lg-6">
											<Link to="#" className="tt-cart-total">
												There are 1 items in your cart
												<div className="tt-total">
													TOTAL: <span className="tt-price">$324</span>
												</div>
											</Link>
											<Link to="#" className="btn btn-border btn-close-popup">CONTINUE SHOPPING</Link>
											<Link to="shopping_cart_02.html" className="btn btn-border">VIEW CART</Link>
											<Link to="#" className="btn">PROCEED TO CHECKOUT</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="modal  fade" id="ModalquickView" tabIndex="-1" role="dialog" aria-label="myModalLabel" aria-hidden="true">
					<div className="modal-dialog modal-lg">
						<div className="modal-content ">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal" aria-hidden="true"><span className="icon icon-clear"></span></button>
							</div>
							<div className="modal-body">
								<div className="tt-modal-quickview desctope">
									<div className="row">
										<div className="col-12 col-md-5 col-lg-6">
											<div className="tt-mobile-product-slider arrow-location-center">
												<div><img src="assets/images/product/product-01.jpg" alt="" /></div>
												<div><img src="assets/images/product/product-01-02.jpg" alt="" /></div>
												<div><img src="assets/images/product/product-01-03.jpg" alt="" /></div>
												<div><img src="assets/images/product/product-01-04.jpg" alt="" /></div>
												<div>
													<div className="tt-video-block">
														<Link to="#" className="link-video"></Link>
														<video className="movie" src="video/video.mp4" poster="video/video_img.jpg"></video>
													</div>
												</div>
											</div>
										</div>
										<div className="col-12 col-md-7 col-lg-6">
											<div className="tt-product-single-info">
												<div className="tt-add-info">
													<ul>
														<li><span>SKU:</span> 001</li>
														<li><span>Availability:</span> 40 in Stock</li>
													</ul>
												</div>
												<h2 className="tt-title">Cotton Blend Fleece Hoodie</h2>
												<div className="tt-price">
													<span className="new-price">$29</span>
													<span className="old-price"></span>
												</div>
												<div className="tt-review">
													<div className="tt-rating">
														<i className="icon-star"></i>
														<i className="icon-star"></i>
														<i className="icon-star"></i>
														<i className="icon-star-half"></i>
														<i className="icon-star-empty"></i>
													</div>
													<Link to="#">(1 Customer Review)</Link>
												</div>
												<div className="tt-wrapper">
													Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
								</div>
												<div className="tt-swatches-container">
													<div className="tt-wrapper">
														<div className="tt-title-options">SIZE</div>
														<form className="form-default">
															<div className="form-group">
																<select className="form-control">
																	<option>21</option>
																	<option>25</option>
																	<option>36</option>
																</select>
															</div>
														</form>
													</div>
													<div className="tt-wrapper">
														<div className="tt-title-options">COLOR</div>
														<form className="form-default">
															<div className="form-group">
																<select className="form-control">
																	<option>Red</option>
																	<option>Green</option>
																	<option>Brown</option>
																</select>
															</div>
														</form>
													</div>
													<div className="tt-wrapper">
														<div className="tt-title-options">TEXTURE:</div>
														<ul className="tt-options-swatch options-large">
															<li><Link className="options-color" to="#">
																<span className="swatch-img">
																	<img src="assets/images/custom/texture-img-01.jpg" alt="" />
																</span>
																<span className="swatch-label color-black"></span>
															</Link></li>
															<li className="active"><Link className="options-color" to="#">
																<span className="swatch-img">
																	<img src="assets/images/custom/texture-img-02.jpg" alt="" />
																</span>
																<span className="swatch-label color-black"></span>
															</Link></li>
															<li><Link className="options-color" to="#">
																<span className="swatch-img">
																	<img src="assets/images/custom/texture-img-03.jpg" alt="" />
																</span>
																<span className="swatch-label color-black"></span>
															</Link></li>
															<li><Link className="options-color" to="#">
																<span className="swatch-img">
																	<img src="assets/images/custom/texture-img-04.jpg" alt="" />
																</span>
																<span className="swatch-label color-black"></span>
															</Link></li>
															<li><Link className="options-color" to="#">
																<span className="swatch-img">
																	<img src="assets/images/custom/texture-img-05.jpg" alt="" />
																</span>
																<span className="swatch-label color-black"></span>
															</Link></li>
														</ul>
													</div>
												</div>
												<div className="tt-wrapper">
													<div className="tt-row-custom-01">
														<div className="col-item">
															<div className="tt-input-counter style-01">
																<span className="minus-btn"></span>
																<input type="text" readOnly value="1" size="5" />
																<span className="plus-btn"></span>
															</div>
														</div>
														<div className="col-item">
															<Link to="#" className="btn btn-lg"><i className="icon-f-39"></i>ADD TO CART</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</React.Fragment>
		)
	}
}

export default Home;