import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Trending = () =>{

    const settings = {
        dots: false,
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    
    return(
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
								<Link to="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left"></Link>
								<Link to="#" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left"></Link>
								<Link to="#" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left"></Link>
								<Link to="product.html">
									<span className="tt-img"><img src="assets/images/product/product-20.jpg" alt="" /></span>
									<span className="tt-img-roll-over"><img src="assets/images/product/product-20-02.jpg" alt="" /></span>
									<span className="tt-label-location">
										<span className="tt-label-new">New</span>
									</span>
								</Link>
							</div>
							<div className="tt-description">
								<div className="tt-row">
									<ul className="tt-add-info">
										<li><Link to="#">T-SHIRTS</Link></li>
									</ul>
									<div className="tt-rating">
										<i className="icon-star"></i>
										<i className="icon-star"></i>
										<i className="icon-star"></i>
										<i className="icon-star"></i>
										<i className="icon-star"></i>
									</div>
								</div>
								<h2 className="tt-title"><Link to="product.html">Flared Shift Dress</Link></h2>
								<div className="tt-price">
									<span className="new-price">$14</span>
									<span className="old-price">$24</span>
								</div>
								<div className="tt-option-block">
									<ul className="tt-options-swatch">
										<li><Link className="options-color tt-color-bg-01" to="#"></Link></li>
										<li><Link className="options-color tt-color-bg-02" to="#"></Link></li>
									</ul>
								</div>
								<div className="tt-product-inside-hover">
									<div className="tt-row-btn">
										<Link to="#" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</Link>
									</div>
									<div className="tt-row-btn">
										<Link to="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView"></Link>
										<Link to="#" className="tt-btn-wishlist"></Link>
										<Link to="#" className="tt-btn-compare"></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="tt-product thumbprod-center">
							<div className="tt-image-box">
								<Link to="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left"></Link>
								<Link to="#" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left"></Link>
								<Link to="#" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left"></Link>
								<Link to="product.html">
									<span className="tt-img"><img src="assets/images/product/product-18.jpg" alt="" /></span>
									<span className="tt-img-roll-over"><img src="assets/images/product/product-18-02.jpg" alt="" /></span>
								</Link>
							</div>
							<div className="tt-description">
								<div className="tt-row">
									<ul className="tt-add-info">
										<li><Link to="#">T-SHIRTS</Link></li>
									</ul>
									<div className="tt-rating">
										<i className="icon-star"></i>
										<i className="icon-star"></i>
										<i className="icon-star"></i>
										<i className="icon-star"></i>
										<i className="icon-star"></i>
									</div>
								</div>
								<h2 className="tt-title"><Link to="product.html">Flared Shift Dress</Link></h2>
								<div className="tt-price">
									$124
								</div>
								<div className="tt-product-inside-hover">
									<div className="tt-row-btn">
										<Link to="#" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</Link>
									</div>
									<div className="tt-row-btn">
										<Link to="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView"></Link>
										<Link to="#" className="tt-btn-wishlist"></Link>
										<Link to="#" className="tt-btn-compare"></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="tt-product thumbprod-center">
							<div className="tt-image-box">
								<Link to="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left"></Link>
								<Link to="#" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left"></Link>
								<Link to="#" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left"></Link>
								<Link to="product.html">
									<span className="tt-img"><img src="assets/images/product/product-46.jpg" alt="" /></span>
									<span className="tt-img-roll-over"><img src="assets/images/product/product-46-01.jpg" alt="" /></span>
								</Link>
							</div>
							<div className="tt-description">
								<div className="tt-row">
									<ul className="tt-add-info">
										<li><Link to="#">T-SHIRTS</Link></li>
									</ul>
								</div>
								<h2 className="tt-title"><Link to="product.html">Flared Shift Dress</Link></h2>
								<div className="tt-price">
									$12
								</div>
								<div className="tt-product-inside-hover">
									<div className="tt-row-btn">
										<Link to="#" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</Link>
									</div>
									<div className="tt-row-btn">
										<Link to="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView"></Link>
										<Link to="#" className="tt-btn-wishlist"></Link>
										<Link to="#" className="tt-btn-compare"></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="tt-product thumbprod-center">
							<div className="tt-image-box">
								<Link to="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left"></Link>
								<Link to="#" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left"></Link>
								<Link to="#" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left"></Link>
								<Link to="product.html">
									<span className="tt-img"><img src="assets/images/product/product-01.jpg" alt="" /></span>
									<span className="tt-img-roll-over"><img src="assets/images/product/product-01-02.jpg" alt="" /></span>
									<span className="tt-label-location">
										<span className="tt-label-sale">Sale 15%</span>
									</span>
								</Link>
							</div>
							<div className="tt-description">
								<div className="tt-row">
									<ul className="tt-add-info">
										<li><Link to="#">T-SHIRTS</Link></li>
									</ul>
									<div className="tt-rating">
										<i className="icon-star"></i>
										<i className="icon-star"></i>
										<i className="icon-star"></i>
										<i className="icon-star-half"></i>
										<i className="icon-star-empty"></i>
									</div>
								</div>
								<h2 className="tt-title"><Link to="product.html">Flared Shift Dress</Link></h2>
								<div className="tt-price">
									$78
								</div>
								<div className="tt-product-inside-hover">
									<div className="tt-row-btn">
										<Link to="#" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</Link>
									</div>
									<div className="tt-row-btn">
										<Link to="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView"></Link>
										<Link to="#" className="tt-btn-wishlist"></Link>
										<Link to="#" className="tt-btn-compare"></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="tt-product thumbprod-center">
							<div className="tt-image-box">
								<Link to="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left"></Link>
								<Link to="#" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left"></Link>
								<Link to="#" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left"></Link>
								<Link to="product.html">
									<span className="tt-img"><img src="assets/images/product/product-14.jpg" alt="" /></span>
									<span className="tt-img-roll-over"><img src="assets/images/product/product-14-02.jpg" alt="" /></span>
								</Link>
							</div>
							<div className="tt-description">
								<div className="tt-row">
									<ul className="tt-add-info">
										<li><Link to="#">T-SHIRTS</Link></li>
									</ul>
								</div>
								<h2 className="tt-title"><Link to="product.html">Flared Shift Dress</Link></h2>
								<div className="tt-price">
									$12
								</div>
								<div className="tt-product-inside-hover">
									<div className="tt-row-btn">
										<Link to="#" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</Link>
									</div>
									<div className="tt-row-btn">
										<Link to="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView"></Link>
										<Link to="#" className="tt-btn-wishlist"></Link>
										<Link to="#" className="tt-btn-compare"></Link>
									</div>
								</div>
							</div>
						</div>
					</div>

				</Slider>

			</div>
		</div>
    )
}

export default Trending;