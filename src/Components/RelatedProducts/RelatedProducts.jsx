import React from 'react';
import Slider from 'react-slick';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const RelatedProducts = (props) => {
    const settings = {
		dots: false,
		arrows: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1
    };
    
    
    return(
        <div className="container-indent">
                <div className="container container-fluid-custom-mobile-padding">
                    <div className="tt-block-title text-left">
                        <h3 className="tt-title-small">RELATED PRODUCT</h3>
                    </div>


                    <Slider className="tt-carousel-products row arrow-location-right-top tt-alignment-img tt-layout-product-item slick-animated-show-js" {...settings} >

                        {
                            props.products.map((pr) => (
                                <div className="col-12" key={pr._id}>
                                    <div className="tt-product thumbprod-center">
                                        <div className="tt-image-box">
                                            <Link to="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView"	data-tooltip="Quick View" data-tposition="left"></Link>
                                            <Link to="#" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left"></Link>
                                            <Link to="#" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left"></Link>
                                            <Link to="product.html">
                                                <span className="tt-img"><img src={pr.imgUrl} alt="" /></span>
                                                <span className="tt-img-roll-over"><img src={pr.imgUrl} alt="" /></span>
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
                                            <h2 className="tt-title"><Link to="product.html">{pr.title}</Link></h2>
                                            <div className="tt-price">
                                                $8
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
                                )
                            )
                        }
                            
                    </Slider>

		</div>
	</div>
    )
}

const mapStateToProps = (state) =>{
    return{
        products: state.products
    }
}
export default connect(mapStateToProps, null)(RelatedProducts);