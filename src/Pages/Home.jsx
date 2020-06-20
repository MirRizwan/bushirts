import React, { Component } from 'react';
import Slider from "react-slick";

import HomeSlider from '../Components/HomeSlider/HomeSlider';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Home extends Component {
	render() {

		var settings = {
			dots: false,
			arrows:true,
			infinite: true,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 1
		};



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
					<div className="nomargin container-indent">
						<div className="container-fluid-custom">
							<div className="row">
								<div className="col-sm-12 col-md-6">
									<a href="listing-left-column.html" className="tt-promo-box tt-one-child hover-type-2">
										{/* <img src="assets/images/promo/index05-promo-img-01.jpg" alt="" /> */}
										<img src="assets/images/promo/index05-promo-img-01.jpg" alt="" />
										<div className="tt-description">
											<div className="tt-description-wrapper">
												<div className="tt-background"></div>
												<div className="tt-title-small">WOMEN</div>
											</div>
										</div>
									</a>
								</div>
								<div className="col-sm-12 col-md-6">
									<a href="listing-left-column.html" className="tt-promo-box tt-one-child hover-type-2">
										{/* <img src="assets/images/promo/index05-promo-img-02.jpg" alt="" /> */}
										<img src="assets/images/promo/index05-promo-img-02.jpg" alt="" />
										<div className="tt-description">
											<div className="tt-description-wrapper">
												<div className="tt-background"></div>
												<div className="tt-title-small">MEN</div>
											</div>
										</div>
									</a>
									<a href="listing-left-column.html" className="tt-promo-box tt-one-child hover-type-2">
										{/* <img src="assets/images/promo/index05-promo-img-03.jpg" alt="" /> */}
										<img src="assets/images/promo/index05-promo-img-03.jpg" alt="" />
										<div className="tt-description">
											<div className="tt-description-wrapper">
												<div className="tt-background"></div>
												<div className="tt-title-small">SHOES</div>
											</div>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="container-indent">
						<div className="container container-fluid-custom-mobile-padding">
							<div className="tt-block-title">
								<h1 className="tt-title">TRENDING</h1>
								<div className="tt-description">TOP VIEW IN THIS WEEK</div>
							</div>

							<Slider className="tt-carousel-products row arrow-location-tab arrow-location-tab01 tt-alignment-img tt-layout-product-item slick-animated-show-js" {...settings}>
								<div className="col-lg-12">
									<div className="tt-product thumbprod-center">
										<div className="tt-image-box">
											<a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left"></a>
											<a href="#" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left"></a>
											<a href="#" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left"></a>
											<a href="product.html">
												<span className="tt-img"><img src="assets/images/product/product-20.jpg" alt="" /></span>
												<span className="tt-img-roll-over"><img src="assets/images/product/product-20-02.jpg" alt="" /></span>
												<span className="tt-label-location">
													<span className="tt-label-new">New</span>
												</span>
											</a>
										</div>
										<div className="tt-description">
											<div className="tt-row">
												<ul className="tt-add-info">
													<li><a href="#">T-SHIRTS</a></li>
												</ul>
												<div className="tt-rating">
													<i className="icon-star"></i>
													<i className="icon-star"></i>
													<i className="icon-star"></i>
													<i className="icon-star"></i>
													<i className="icon-star"></i>
												</div>
											</div>
											<h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
											<div className="tt-price">
												<span className="new-price">$14</span>
												<span className="old-price">$24</span>
											</div>
											<div className="tt-option-block">
												<ul className="tt-options-swatch">
													<li><a className="options-color tt-color-bg-01" href="#"></a></li>
													<li><a className="options-color tt-color-bg-02" href="#"></a></li>
												</ul>
											</div>
											<div className="tt-product-inside-hover">
												<div className="tt-row-btn">
													<a href="#" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
												</div>
												<div className="tt-row-btn">
													<a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView"></a>
													<a href="#" className="tt-btn-wishlist"></a>
													<a href="#" className="tt-btn-compare"></a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="tt-product thumbprod-center">
										<div className="tt-image-box">
											<a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left"></a>
											<a href="#" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left"></a>
											<a href="#" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left"></a>
											<a href="product.html">
												<span className="tt-img"><img src="assets/images/product/product-18.jpg" alt="" /></span>
												<span className="tt-img-roll-over"><img src="assets/images/product/product-18-02.jpg" alt="" /></span>
											</a>
										</div>
										<div className="tt-description">
											<div className="tt-row">
												<ul className="tt-add-info">
													<li><a href="#">T-SHIRTS</a></li>
												</ul>
												<div className="tt-rating">
													<i className="icon-star"></i>
													<i className="icon-star"></i>
													<i className="icon-star"></i>
													<i className="icon-star"></i>
													<i className="icon-star"></i>
												</div>
											</div>
											<h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
											<div className="tt-price">
												$124
							</div>
											<div className="tt-product-inside-hover">
												<div className="tt-row-btn">
													<a href="#" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
												</div>
												<div className="tt-row-btn">
													<a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView"></a>
													<a href="#" className="tt-btn-wishlist"></a>
													<a href="#" className="tt-btn-compare"></a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="tt-product thumbprod-center">
										<div className="tt-image-box">
											<a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left"></a>
											<a href="#" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left"></a>
											<a href="#" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left"></a>
											<a href="product.html">
												<span className="tt-img"><img src="assets/images/product/product-46.jpg" alt="" /></span>
												<span className="tt-img-roll-over"><img src="assets/images/product/product-46-01.jpg" alt="" /></span>
											</a>
										</div>
										<div className="tt-description">
											<div className="tt-row">
												<ul className="tt-add-info">
													<li><a href="#">T-SHIRTS</a></li>
												</ul>
											</div>
											<h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
											<div className="tt-price">
												$12
							</div>
											<div className="tt-product-inside-hover">
												<div className="tt-row-btn">
													<a href="#" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
												</div>
												<div className="tt-row-btn">
													<a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView"></a>
													<a href="#" className="tt-btn-wishlist"></a>
													<a href="#" className="tt-btn-compare"></a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="tt-product thumbprod-center">
										<div className="tt-image-box">
											<a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left"></a>
											<a href="#" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left"></a>
											<a href="#" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left"></a>
											<a href="product.html">
												<span className="tt-img"><img src="assets/images/product/product-01.jpg" alt="" /></span>
												<span className="tt-img-roll-over"><img src="assets/images/product/product-01-02.jpg" alt="" /></span>
												<span className="tt-label-location">
													<span className="tt-label-sale">Sale 15%</span>
												</span>
											</a>
										</div>
										<div className="tt-description">
											<div className="tt-row">
												<ul className="tt-add-info">
													<li><a href="#">T-SHIRTS</a></li>
												</ul>
												<div className="tt-rating">
													<i className="icon-star"></i>
													<i className="icon-star"></i>
													<i className="icon-star"></i>
													<i className="icon-star-half"></i>
													<i className="icon-star-empty"></i>
												</div>
											</div>
											<h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
											<div className="tt-price">
												$78
							</div>
											<div className="tt-product-inside-hover">
												<div className="tt-row-btn">
													<a href="#" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
												</div>
												<div className="tt-row-btn">
													<a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView"></a>
													<a href="#" className="tt-btn-wishlist"></a>
													<a href="#" className="tt-btn-compare"></a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="tt-product thumbprod-center">
										<div className="tt-image-box">
											<a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left"></a>
											<a href="#" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left"></a>
											<a href="#" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left"></a>
											<a href="product.html">
												<span className="tt-img"><img src="assets/images/product/product-14.jpg" alt="" /></span>
												<span className="tt-img-roll-over"><img src="assets/images/product/product-14-02.jpg" alt="" /></span>
											</a>
										</div>
										<div className="tt-description">
											<div className="tt-row">
												<ul className="tt-add-info">
													<li><a href="#">T-SHIRTS</a></li>
												</ul>
											</div>
											<h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
											<div className="tt-price">
												$12
							</div>
											<div className="tt-product-inside-hover">
												<div className="tt-row-btn">
													<a href="#" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
												</div>
												<div className="tt-row-btn">
													<a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView"></a>
													<a href="#" className="tt-btn-wishlist"></a>
													<a href="#" className="tt-btn-compare"></a>
												</div>
											</div>
										</div>
									</div>
								</div>

							</Slider>

						</div>
					</div>
					<div className="container-indent">
						<div className="container-fluid">
							<div className="row tt-layout-promo-box">
								<div className="col-md-6">
									<a href="listing-left-column.html" className="tt-promo-box tt-one-child">
										<img src="assets/images/promo/index05-promo-img-04.jpg" alt="" />
										<div className="tt-description">
											<div className="tt-description-wrapper">
												<div className="tt-background"></div>
												<div className="tt-title-small">NEW IN:</div>
												<div className="tt-title-large">CLOTHING</div>
											</div>
										</div>
									</a>
								</div>
								<div className="col-md-6">
									<a href="listing-left-column.html" className="tt-promo-box tt-one-child">
										<img src="assets/images/promo/index05-promo-img-05.jpg" alt="" />
										<div className="tt-description">
											<div className="tt-description-wrapper">
												<div className="tt-background"></div>
												<div className="tt-title-small">CLEARANCE SALES</div>
												<div className="tt-title-large">GET UP TO <span className="tt-base-color">20% OFF</span></div>
											</div>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="container-indent">
						<div className="container container-fluid-custom-mobile-padding">
							<div className="tt-block-title">
								<h2 className="tt-title">SPECIALS</h2>
								<div className="tt-description">IN THIS WEEK</div>
							</div>
							<Slider className="tt-carousel-products row arrow-location-tab arrow-location-tab01 tt-alignment-img tt-layout-product-item slick-animated-show-js" data-item='3' {...settings}>
							<div className="col-lg-12">
									<div className="tt-product thumbprod-center">
										<div className="tt-image-box">
											<a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left"></a>
											<a href="#" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left"></a>
											<a href="#" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left"></a>
											<a href="product.html">
												<span className="tt-img"><img src="assets/images/product/product-25.jpg" alt="" /></span>
												<span className="tt-img-roll-over"><img src="assets/images/product/product-25-01.jpg" alt="" /></span>
												<span className="tt-label-location">
													<span className="tt-label-sale">Sale 15%</span>
												</span>
											</a>
											<div className="tt-countdown_box">
												<div className="tt-countdown_inner">
													<div className="tt-countdown"
														data-date="2018-11-01"
														data-year="Yrs"
														data-month="Mths"
														data-week="Wk"
														data-day="Day"
														data-hour="Hrs"
														data-minute="Min"
														data-second="Sec"></div>
												</div>
											</div>
										</div>
										<div className="tt-description">
											<div className="tt-row">
												<ul className="tt-add-info">
													<li><a href="#">T-SHIRTS</a></li>
												</ul>
												<div className="tt-rating">
													<i className="icon-star"></i>
													<i className="icon-star"></i>
													<i className="icon-star"></i>
													<i className="icon-star"></i>
													<i className="icon-star"></i>
												</div>
											</div>
											<h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
											<div className="tt-price">
												<span className="new-price">$14</span>
												<span className="old-price">$24</span>
											</div>
											<div className="tt-product-inside-hover">
												<div className="tt-row-btn">
													<a href="#" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
												</div>
												<div className="tt-row-btn">
													<a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView"></a>
													<a href="#" className="tt-btn-wishlist"></a>
													<a href="#" className="tt-btn-compare"></a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="tt-product thumbprod-center">
										<div className="tt-image-box">
											<a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left"></a>
											<a href="#" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left"></a>
											<a href="#" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left"></a>
											<a href="product.html">
												<span className="tt-img"><img src="assets/images/product/product-26.jpg" alt="" /></span>
												<span className="tt-img-roll-over"><img src="assets/images/product/product-26-02.jpg" alt="" /></span>
												<span className="tt-label-location">
													<span className="tt-label-sale">Sale 15%</span>
												</span>
											</a>
											<div className="tt-countdown_box">
												<div className="tt-countdown_inner">
													<div className="tt-countdown"
														data-date="2018-12-08"
														data-year="Yrs"
														data-month="Mths"
														data-week="Wk"
														data-day="Day"
														data-hour="Hrs"
														data-minute="Min"
														data-second="Sec"></div>
												</div>
											</div>
										</div>
										<div className="tt-description">
											<div className="tt-row">
												<ul className="tt-add-info">
													<li><a href="#">T-SHIRTS</a></li>
												</ul>
												<div className="tt-rating">
													<i className="icon-star"></i>
													<i className="icon-star"></i>
													<i className="icon-star"></i>
													<i className="icon-star"></i>
													<i className="icon-star"></i>
												</div>
											</div>
											<h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
											<div className="tt-price">
												<span className="new-price">$14</span>
												<span className="old-price">$24</span>
											</div>
											<div className="tt-product-inside-hover">
												<div className="tt-row-btn">
													<a href="#" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
												</div>
												<div className="tt-row-btn">
													<a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView"></a>
													<a href="#" className="tt-btn-wishlist"></a>
													<a href="#" className="tt-btn-compare"></a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="tt-product thumbprod-center">
										<div className="tt-image-box">
											<a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left"></a>
											<a href="#" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left"></a>
											<a href="#" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left"></a>
											<a href="product.html">
												<span className="tt-img"><img src="assets/images/product/product-21.jpg" alt="" /></span>
												<span className="tt-img-roll-over"><img src="assets/images/product/product-21-02.jpg" alt="" /></span>
												<span className="tt-label-location">
													<span className="tt-label-sale">Sale 15%</span>
												</span>
											</a>
											<div className="tt-countdown_box">
												<div className="tt-countdown_inner">
													<div className="tt-countdown"
														data-date="2018-11-08"
														data-year="Yrs"
														data-month="Mths"
														data-week="Wk"
														data-day="Day"
														data-hour="Hrs"
														data-minute="Min"
														data-second="Sec"></div>
												</div>
											</div>
										</div>
										<div className="tt-description">
											<div className="tt-row">
												<ul className="tt-add-info">
													<li><a href="#">T-SHIRTS</a></li>
												</ul>
												<div className="tt-rating">
													<i className="icon-star"></i>
													<i className="icon-star"></i>
													<i className="icon-star"></i>
													<i className="icon-star"></i>
													<i className="icon-star"></i>
												</div>
											</div>
											<h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
											<div className="tt-price">
												<span className="new-price">$14</span>
												<span className="old-price">$24</span>
											</div>
											<div className="tt-product-inside-hover">
												<div className="tt-row-btn">
													<a href="#" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
												</div>
												<div className="tt-row-btn">
													<a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView"></a>
													<a href="#" className="tt-btn-wishlist"></a>
													<a href="#" className="tt-btn-compare"></a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="tt-product thumbprod-center">
										<div className="tt-image-box">
											<a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left"></a>
											<a href="#" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left"></a>
											<a href="#" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left"></a>
											<a href="product.html">
												<span className="tt-img"><img src="assets/images/product/product-24.jpg" alt="" /></span>
												<span className="tt-img-roll-over"><img src="assets/images/product/product-24-01.jpg" alt="" /></span>
												<span className="tt-label-location">
													<span className="tt-label-sale">Sale 15%</span>
												</span>
											</a>
											<div className="tt-countdown_box">
												<div className="tt-countdown_inner">
													<div className="tt-countdown"
														data-date="2018-10-08"
														data-year="Yrs"
														data-month="Mths"
														data-week="Wk"
														data-day="Day"
														data-hour="Hrs"
														data-minute="Min"
														data-second="Sec"></div>
												</div>
											</div>
										</div>
										<div className="tt-description">
											<div className="tt-row">
												<ul className="tt-add-info">
													<li><a href="#">T-SHIRTS</a></li>
												</ul>
												<div className="tt-rating">
													<i className="icon-star"></i>
													<i className="icon-star"></i>
													<i className="icon-star"></i>
													<i className="icon-star"></i>
													<i className="icon-star"></i>
												</div>
											</div>
											<h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
											<div className="tt-price">
												<span className="new-price">$14</span>
												<span className="old-price">$24</span>
											</div>
											<div className="tt-product-inside-hover">
												<div className="tt-row-btn">
													<a href="#" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
												</div>
												<div className="tt-row-btn">
													<a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView"></a>
													<a href="#" className="tt-btn-wishlist"></a>
													<a href="#" className="tt-btn-compare"></a>
												</div>
											</div>
										</div>
									</div>
								</div>
							
							</Slider>

								
								
						</div>
					</div>
					<div className="container-indent">
						<div className="container-fluid-custom">
							<div className="row tt-layout-promo-box">
								<div className="col-sm-6 col-md-4">
									<a href="listing-left-column.html" className="tt-promo-box">
										<img src="assets/images/promo/index05-promo-img-07.jpg" alt="" />
										<div className="tt-description">
											<div className="tt-description-wrapper">
												<div className="tt-background"></div>
												<div className="tt-title-small">FALL-WINTER CLEARANCE SALES</div>
												<div className="tt-title-large">GET UP TO <span className="tt-base-color">50% OFF</span></div>
											</div>
										</div>
									</a>
								</div>
								<div className="col-sm-6 col-md-4">
									<a href="listing-left-column.html" className="tt-promo-box">
										<img src="assets/images/promo/index05-promo-img-08.jpg" alt="" />
										<div className="tt-description">
											<div className="tt-description-wrapper">
												<div className="tt-background"></div>
												<div className="tt-title-small">SUMMER <span className="tt-base-color">2018</span></div>
												<div className="tt-title-large">NEW ARRIVALS</div>
											</div>
										</div>
									</a>
								</div>
								<div className="col-sm-6 col-md-4">
									<a href="listing-left-column.html" className="tt-promo-box">
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
									</a>
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
													<a href="listing-collection.html">
														<span className="tt-img-default"><img src="assets/images/product/product-18.jpg" alt="" /></span>
														<span className="tt-img-roll-over"><img src="assets/images/product/product-18-02.jpg" data-src="" alt="" /></span>
													</a>
												</div>
												<div className="tt-description">
													<ul className="tt-add-info">
														<li><a href="#">T-SHIRTS</a></li>
													</ul>
													<h6 className="tt-title"><a href="#">Flared Shift Dress</a></h6>
													<div className="tt-price">
														$24
									</div>
													<div className="tt-option-block">
														<ul className="tt-options-swatch">
															<li><a className="options-color tt-color-bg-01" href="#"></a></li>
															<li><a className="options-color tt-color-bg-02" href="#"></a></li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div className="tt-item">
											<div className="tt-layout-vertical">
												<div className="tt-img">
													<a href="listing-collection.html">
														<span className="tt-img-default"><img src="assets/images/product/product-19.jpg" alt="" /></span>
														<span className="tt-img-roll-over"><img src="assets/images/product/product-19-02.jpg" alt="" /></span>
													</a>
												</div>
												<div className="tt-description">
													<ul className="tt-add-info">
														<li><a href="#">T-SHIRTS</a></li>
													</ul>
													<h6 className="tt-title"><a href="#">Flared Shift Dress</a></h6>
													<div className="tt-price">
														$84
									</div>
												</div>
											</div>
										</div>
										<div className="tt-item">
											<div className="tt-layout-vertical">
												<div className="tt-img">
													<a href="listing-collection.html">
														<span className="tt-img-default"><img src="assets/images/product/product-20.jpg" alt="" /></span>
														<span className="tt-img-roll-over"><img src="assets/images/product/product-20-01.jpg" alt="" /></span>
													</a>
												</div>
												<div className="tt-description">
													<ul className="tt-add-info">
														<li><a href="#">T-SHIRTS</a></li>
													</ul>
													<h6 className="tt-title"><a href="#">Flared Shift Dress</a></h6>
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
													<a href="listing-collection.html">
														<span className="tt-img-default"><img src="assets/images/product/product-22.jpg" alt="" /></span>
														<span className="tt-img-roll-over"><img src="assets/images/product/product-22-02.jpg" alt="" /></span>
													</a>
												</div>
												<div className="tt-description">
													<ul className="tt-add-info">
														<li><a href="#">T-SHIRTS</a></li>
													</ul>
													<h6 className="tt-title"><a href="#">Flared Shift Dress</a></h6>
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
													<a href="listing-collection.html">
														<span className="tt-img-default"><img src="assets/images/product/product-23.jpg" alt="" /></span>
														<span className="tt-img-roll-over"><img src="assets/images/product/product-23-02.jpg" alt="" /></span>
													</a>
												</div>
												<div className="tt-description">
													<ul className="tt-add-info">
														<li><a href="#">T-SHIRTS</a></li>
													</ul>
													<h6 className="tt-title"><a href="#">Flared Shift Dress</a></h6>
													<div className="tt-price">
														<span className="new-price">$14</span>
														<span className="old-price">$24</span>
													</div>
													<div className="tt-option-block">
														<ul className="tt-options-swatch">
															<li><a className="options-color tt-color-bg-03" href="#"></a></li>
															<li><a className="options-color tt-color-bg-04" href="#"></a></li>
															<li><a className="options-color tt-color-bg-05" href="#"></a></li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div className="tt-item">
											<div className="tt-layout-vertical">
												<div className="tt-img">
													<a href="listing-collection.html">
														<span className="tt-img-default"><img src="assets/images/product/product-21.jpg" alt="" /></span>
														<span className="tt-img-roll-over"><img src="assets/images/product/product-21-02.jpg" alt="" /></span>
													</a>
												</div>
												<div className="tt-description">
													<ul className="tt-add-info">
														<li><a href="#">T-SHIRTS</a></li>
													</ul>
													<h6 className="tt-title"><a href="#">Flared Shift Dress</a></h6>
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
													<a href="listing-collection.html">
														<span className="tt-img-default"><img src="assets/images/product/product-16.jpg" alt="" /></span>
														<span className="tt-img-roll-over"><img src="assets/images/product/product-16-02.jpg" alt="" /></span>
													</a>
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
														<li><a href="#">T-SHIRTS</a></li>
													</ul>
													<h6 className="tt-title"><a href="#">Flared Shift Dress</a></h6>
													<div className="tt-price">
														$24
									</div>
												</div>
											</div>
										</div>
										<div className="tt-item">
											<div className="tt-layout-vertical">
												<div className="tt-img">
													<a href="listing-collection.html">
														<span className="tt-img-default"><img src="assets/images/product/product-12.jpg" alt="" /></span>
														<span className="tt-img-roll-over"><img src="assets/images/product/product-12-01.jpg" alt="" /></span>
													</a>
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
														<li><a href="#">T-SHIRTS</a></li>
													</ul>
													<h6 className="tt-title"><a href="#">Flared Shift Dress</a></h6>
													<div className="tt-price">
														$178
									</div>
												</div>
											</div>
										</div>
										<div className="tt-item">
											<div className="tt-layout-vertical">
												<div className="tt-img">
													<a href="listing-collection.html">
														<span className="tt-img-default"><img src="assets/images/product/product-13.jpg" alt="" /></span>
														<span className="tt-img-roll-over"><img src="assets/images/product/product-13-02.jpg" alt="" /></span>
													</a>
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
														<li><a href="#">T-SHIRTS</a></li>
													</ul>
													<h6 className="tt-title"><a href="#">Flared Shift Dress</a></h6>
													<div className="tt-price">
														$54
									</div>
													<div className="tt-option-block">
														<ul className="tt-options-swatch">
															<li><a className="options-color tt-color-bg-01" href="#"></a></li>
															<li><a className="options-color tt-color-bg-02" href="#"></a></li>
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
					<div className="container-indent">
						<div className="container-fluid">
							<div className="tt-block-title">
								<h2 className="tt-title"><a target="_blank" href="https://www.instagram.com/wokieeshop/">@ FOLLOW</a> US ON</h2>
								<div className="tt-description">INSTAGRAM</div>
							</div>
							<div className="row">
								<div id="instafeed" className="instafeed-fluid"
									data-accesstoken="8626857013.dd09515.0fcd8351c65140d48f5a340693af1c3f"
									data-clientid="dd095157744c4bd0a67181fc4906e5b6"
									data-userid="8626857013"
									data-limitimg="6">
								</div>
							</div>
						</div>
					</div>
					<div className="container-indent">
						<div className="container">
							<div className="row tt-services-listing tt-services-listing-aligment">
								<div className="col-xs-12 col-md-6 col-lg-4">
									<a href="#" className="tt-services-block">
										<div className="tt-col-icon">
											<i className="icon-f-48"></i>
										</div>
										<div className="tt-col-description">
											<h4 className="tt-title">FREE SHIPPING</h4>
											<p>Free shipping on all US order or order above $99</p>
										</div>
									</a>
								</div>
								<div className="col-xs-12 col-md-6 col-lg-4">
									<a href="#" className="tt-services-block">
										<div className="tt-col-icon">
											<i className="icon-f-35"></i>
										</div>
										<div className="tt-col-description">
											<h4 className="tt-title">SUPPORT 24/7</h4>
											<p>Contact us 24 hours a day, 7 days a week</p>
										</div>
									</a>
								</div>
								<div className="col-xs-12 col-md-6 col-lg-4">
									<a href="#" className="tt-services-block">
										<div className="tt-col-icon">
											<i className="icon-e-09"></i>
										</div>
										<div className="tt-col-description">
											<h4 className="tt-title">30 DAYS RETURN</h4>
											<p>Simply return it within 24 days for an exchange.</p>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
				<a href="#" className="tt-back-to-top">BACK TO TOP</a>

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
									<a href="#" className="btn-link btn-close-popup">CONTINUE SHOPPING</a>
									<a href="shopping_cart_02.html" className="btn-link">VIEW CART</a>
									<a href="page404.html" className="btn-link">PROCEED TO CHECKOUT</a>
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
												<h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
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
											<a href="#" className="tt-cart-total">
												There are 1 items in your cart
								<div className="tt-total">
													TOTAL: <span className="tt-price">$324</span>
												</div>
											</a>
											<a href="#" className="btn btn-border btn-close-popup">CONTINUE SHOPPING</a>
											<a href="shopping_cart_02.html" className="btn btn-border">VIEW CART</a>
											<a href="#" className="btn">PROCEED TO CHECKOUT</a>
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
														<a href="#" className="link-video"></a>
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
													<a href="#">(1 Customer Review)</a>
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
															<li><a className="options-color" href="#">
																<span className="swatch-img">
																	<img src="assets/images/custom/texture-img-01.jpg" alt="" />
																</span>
																<span className="swatch-label color-black"></span>
															</a></li>
															<li className="active"><a className="options-color" href="#">
																<span className="swatch-img">
																	<img src="assets/images/custom/texture-img-02.jpg" alt="" />
																</span>
																<span className="swatch-label color-black"></span>
															</a></li>
															<li><a className="options-color" href="#">
																<span className="swatch-img">
																	<img src="assets/images/custom/texture-img-03.jpg" alt="" />
																</span>
																<span className="swatch-label color-black"></span>
															</a></li>
															<li><a className="options-color" href="#">
																<span className="swatch-img">
																	<img src="assets/images/custom/texture-img-04.jpg" alt="" />
																</span>
																<span className="swatch-label color-black"></span>
															</a></li>
															<li><a className="options-color" href="#">
																<span className="swatch-img">
																	<img src="assets/images/custom/texture-img-05.jpg" alt="" />
																</span>
																<span className="swatch-label color-black"></span>
															</a></li>
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
															<a href="#" className="btn btn-lg"><i className="icon-f-39"></i>ADD TO CART</a>
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