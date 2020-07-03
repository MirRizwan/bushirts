import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { connect } from 'react-redux';
import ProducsList from '../ProductList/';

const Trending = (props) => {
	const settings = {
		dots: false,
		arrows: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1
	};

			
	const trending = props.products.filter(fr => fr.trending === true  );
	

	return (
		<div className="container-indent">
			<div className="container container-fluid-custom-mobile-padding">
				<div className="tt-block-title">
					<h1 className="tt-title">TRENDING</h1>
					<div className="tt-description">TOP VIEW IN THIS WEEK</div>
				</div>
				
				<Slider
					className="tt-carousel-products row arrow-location-tab arrow-location-tab01 tt-alignment-img tt-layout-product-item slick-animated-show-js"
					{...settings}
				>

					{
						

						trending.map((pr) => (
							<div className="col-lg-12" key={pr._id}>
							<div className="tt-product thumbprod-center">
								<div className="tt-image-box">
									<Link
										to="#"
										className="tt-btn-quickview"
										data-toggle="modal"
										data-target="#ModalquickView"
										data-tooltip="Quick View"
										data-tposition="left"
									/>
									<Link
										to="#"
										className="tt-btn-wishlist"
										data-tooltip="Add to Wishlist"
										data-tposition="left"
									/>
									<Link
										to="#"
										className="tt-btn-compare"
										data-tooltip="Add to Compare"
										data-tposition="left"
									/>
									<Link to="product.html">
										<span className="tt-img">
											<img src={pr.imgUrl} alt="" />
										</span>
										<span className="tt-img-roll-over">
											<img src={pr.imgUrl} alt="" />
										</span>
										<span className="tt-label-location">
											<span className="tt-label-new">New</span>
										</span>
									</Link>
								</div>
								<div className="tt-description">
									<div className="tt-row">
										<ul className="tt-add-info">
											<li>
						<Link to="#">{pr.title}</Link>
											</li>
										</ul>
										<div className="tt-rating">
											<i className="icon-star" />
											<i className="icon-star" />
											<i className="icon-star" />
											<i className="icon-star" />
											<i className="icon-star" />
										</div>
									</div>
									<h2 className="tt-title">
										<Link to="product.html">Flared Shift Dress</Link>
									</h2>
									<div className="tt-price">
										<span className="new-price">$14</span>
										<span className="old-price">$24</span>
									</div>
									<div className="tt-option-block">
										<ul className="tt-options-swatch">
											<li>
												<Link className="options-color tt-color-bg-01" to="#" />
											</li>
											<li>
												<Link className="options-color tt-color-bg-02" to="#" />
											</li>
										</ul>
									</div>
									<div className="tt-product-inside-hover">
										<div className="tt-row-btn">
											<Link
												to="#"
												className="tt-btn-addtocart thumbprod-button-bg"
												data-toggle="modal"
												data-target="#modalAddToCartProduct"
											>
												ADD TO CART
											</Link>
										</div>
										<div className="tt-row-btn">
											<Link
												to="#"
												className="tt-btn-quickview"
												data-toggle="modal"
												data-target="#ModalquickView"
											/>
											<Link to="#" className="tt-btn-wishlist" />
											<Link to="#" className="tt-btn-compare" />
										</div>
									</div>
								</div>
							</div>
						</div>
						)  )
					}
					
				</Slider>
			</div>
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		products: state.products
	};
};

export default connect(mapStateToProps, null)(Trending);
