import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Specials = (props) => {
	const settings = {
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1
	};

	const specials = props.products.filter(f => f.special === true);
	
	return (
		<div className="container-indent">
			<div className="container container-fluid-custom-mobile-padding">
				<div className="tt-block-title">
					<h2 className="tt-title">SPECIALS</h2>
					<div className="tt-description">IN THIS WEEK</div>
				</div>
				<Slider
					className="tt-carousel-products row arrow-location-tab arrow-location-tab01 tt-alignment-img tt-layout-product-item slick-animated-show-js"
					data-item="3"
					{...settings}
				>

					{
						specials.map( sp => (
							<div className="col-2 col-md-4 col-lg-4 slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide10" key={sp._id}>
					<div className="tt-product thumbprod-center">
						<div className="tt-image-box">
							<Link to="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left" tabindex="0"></Link>

							<Link to="#" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left" tabindex="0"></Link>

							<Link to="#" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left" tabindex="0"></Link>

							<Link href="product.html" tabindex="0">
								<span className="tt-img">
									<img src="assets/images/product/product-25.jpg" alt="" className="loaded" data-was-processed="true" /></span>
								<span className="tt-img-roll-over"><img src="assets/images/product/product-25-01.jpg" alt="" className="loaded" data-was-processed="true" /></span>
								<span className="tt-label-location">
									<span className="tt-label-sale">Sale 15%</span>
								</span>
							</Link>
							<div className="tt-countdown_box">
								<div className="tt-countdown_inner">
									<div className="tt-countdown" data-date="2018-11-01" data-year="Yrs" data-month="Mths" data-week="Wk" data-day="Day" data-hour="Hrs" data-minute="Min" data-second="Sec"><span className="countdown-row"><span className="countdown-section"><span className="countdown-amount">0</span><span className="countdown-period">Day</span></span><span className="countdown-section"><span className="countdown-amount">0</span><span className="countdown-period">Hrs</span></span><span className="countdown-section"><span className="countdown-amount">0</span><span className="countdown-period">Min</span></span><span className="countdown-section"><span className="countdown-amount">0</span><span className="countdown-period">Sec</span></span></span></div>
								</div>
							</div>
						</div>
						<div className="tt-description">
							<div className="tt-row">
								<ul className="tt-add-info">
						<li><Link to="#" tabindex="0">{ sp.title}</Link></li>
								</ul>
								<div className="tt-rating">
									<i className="icon-star"></i>
									<i className="icon-star"></i>
									<i className="icon-star"></i>
									<i className="icon-star"></i>
									<i className="icon-star"></i>
								</div>
							</div>
							<h2 className="tt-title"><Link href="product.html" tabindex="0">Flared Shift Dress</Link></h2>
							<div className="tt-price">
								<span className="new-price">$14</span>
								<span className="old-price">$24</span>
							</div>
							<div className="tt-product-inside-hover">
								<div className="tt-row-btn">
									<Link to="#" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct" tabindex="0">ADD TO CART</Link>
								</div>
								<div className="tt-row-btn">
									<Link to="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" tabindex="0"></Link>
									<Link to="#" className="tt-btn-wishlist" tabindex="0"></Link>
									<Link to="#" className="tt-btn-compare" tabindex="0"></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
						))
					}

					
				


				</Slider>
			</div>
		</div>
	);
};

const mapStateToProps = (state) =>{
	return{
		products: state.Products.products
	}
}
export default connect(mapStateToProps,null)(Specials);
