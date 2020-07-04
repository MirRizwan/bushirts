import React from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import RelatedProducts from '../RelatedProducts/RelatedProducts';


const Details = props => {
    

    return(
        
        <div id="tt-pageContent">

	        <div className="container-indent">
                {/* { <h1> { props.match.params.id }</h1>} */}
                <div className="tt-mobile-product-slider visible-xs arrow-location-center slick-animated-show-js">
                    <div><img src="assets/images/product/product-01.jpg" alt="" /></div>
                    <div><img src="assets/images/product/product-01-02.jpg" alt="" /></div>
                    <div><img src="assets/images/product/product-01-03.jpg" alt="" /></div>
                    <div><img src="assets/images/product/product-01-04.jpg" alt="" /></div>
                    <div>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="http://www.youtube.com/embed/GhyKqj_P2E4" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div>
                        <div className="tt-video-block">
                            <Link to="#" className="link-video"></Link>
                            <video className="movie" src="video/video.mp4" poster="assets/video/video_img.jpg"></video>
                        </div>
                    </div>
                </div>
		
                <div className="container container-fluid-mobile">
                    <div className="row">
                        <div className="col-6 hidden-xs">
                            <div className="tt-product-vertical-layout">
                                <div className="tt-product-single-img">
                                    <div>
                                        <img className="zoom-product" src='/assets/images/product/product-01.jpg' data-zoom-image="assets/images/product/product-01.jpg" alt="" />
                                        <button className="tt-btn-zomm tt-top-right"><i className="icon-f-86"></i></button>
                                    </div>
                                </div>
                                <div className="tt-product-single-carousel-vertical">
                                    <ul id="smallGallery" className="tt-slick-button-vertical slick-animated-show-js">
                                        <li><Link className="zoomGalleryActive" to="#" data-image="/assets/images/product/product-01.jpg" data-zoom-image="/assets/images/product/product-01.jpg"><img src="/assets/images/product/product-01.jpg" alt="" /></Link></li>
                                        <li><Link to="#" data-image="/assets/images/product/product-01-02.jpg" data-zoom-image="/assets/images/product/product-01-02.jpg"><img src="/assets/images/product/product-01-02.jpg" alt="" /></Link></li>
                                        <li><Link to="#" data-image="/assets/images/product/product-01-03.jpg" data-zoom-image="/assets/images/product/product-01-03.jpg"><img src="/assets/images/product/product-01-03.jpg" alt="" /></Link></li>
                                        <li><Link to="#" data-image="/assets/images/product/product-01-04.jpg" data-zoom-image="/assets/images/product/product-01-04.jpg"><img src="/assets/images/product/product-01-04.jpg" alt="" /></Link></li>
                                        <li>
                                            <div className="video-link-product" data-toggle="modal" data-type="youtube" data-target="#modalVideoProduct" data-value="http://www.youtube.com/embed/GhyKqj_P2E4">
                                                <img src="assets/images/product/product-small-empty.png" alt="" />
                                                <div>
                                                    <i className="icon-f-32"></i>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="video-link-product" data-toggle="modal" data-type="video" data-target="#modalVideoProduct" data-value="video/video.mp4" data-poster="video/video_img.jpg">
                                                <img src="assets/images/product/product-small-empty.png" alt="" />
                                                <div>
                                                    <i className="icon-f-32"></i>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="tt-product-single-info">
                                <div className="tt-wrapper">
                                    <div className="tt-label">
                                        <div className="tt-label-new">New</div>
                                        <div className="tt-label-out-stock">Out Of Stock</div>
                                        <div className="tt-label tt-label-sale">Sale 40%</div>
                                        <div className="tt-label tt-label-our-fatured">Fatured</div>
                                    </div>
                                </div>
                                <div className="tt-add-info">
                                    <ul>
                                        <li><span>SKU:</span> 001</li>
                                        <li><span>Availability:</span> 40 in Stock</li>
                                    </ul>
                                </div>
                                <h1 className="tt-title">Cotton Blend Fleece Hoodie</h1>
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
                                <div className="tt-wrapper">
                                    <div className="tt-countdown_box_02">
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
                                <div className="tt-swatches-container">
                                    <div className="tt-wrapper">
                                        <div className="tt-title-options">TYPE:</div>
                                        <form className="form-default">
                                            <div className="form-group">
                                                <select className="form-control">
                                                    <option>Type 1</option>
                                                    <option>Type 2</option>
                                                    <option>Type 3</option>
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="tt-wrapper">
                                        <div className="tt-title-options">SIZE:</div>
                                        <ul className="tt-options-swatch options-large">
                                            <li><Link to="#">4</Link></li>
                                            <li className="active"><Link to="#">6</Link></li>
                                            <li><Link to="#">8</Link></li>
                                            <li><Link to="#">10</Link></li>
                                            <li><Link to="#">12</Link></li>
                                            <li><Link to="#">14</Link></li>
                                            <li><Link to="#">16</Link></li>
                                        </ul>
                                    </div>
                                    <div className="tt-wrapper product-information-buttons">
                                        <Link data-toggle="modal" data-target="#modalProductInfo" to="#">Size Guide</Link>
                                        <Link data-toggle="modal" data-target="#modalProductInfo-02" to="#">Shipping</Link>
                                    </div>
                                    <div className="tt-wrapper">
                                        <div className="tt-title-options">COLOR:</div>
                                        <ul className="tt-options-swatch options-large">
                                            <li><Link className="options-color tt-color-bg-09" to="#"></Link></li>
                                            <li className="active"><Link className="options-color tt-color-bg-10" to="#"></Link></li>
                                            <li><Link className="options-color tt-color-bg-11" to="#"></Link></li>
                                            <li><Link className="options-color tt-color-bg-12" to="#"></Link></li>
                                            <li><Link className="options-color tt-color-bg-13" to="#"></Link></li>
                                        </ul>
                                    </div>
                                    <div className="tt-wrapper">
                                        <div className="tt-title-options">TEXTURE:</div>
                                        <ul className="tt-options-swatch options-large">
                                            <li><Link className="options-color" to="#">
                                                <span className="swatch-img">
                                                    <img src="/assets/images/custom/texture-img-01.jpg" alt="" />
                                                </span>
                                                <span className="swatch-label color-black"></span>
                                            </Link></li>
                                            <li className="active"><Link className="options-color" to="#">
                                                <span className="swatch-img">
                                                    <img src="/assets/images/custom/texture-img-02.jpg" alt="" />
                                                </span>
                                                <span className="swatch-label color-black"></span>
                                            </Link></li>
                                            <li><Link className="options-color" to="#">
                                                <span className="swatch-img">
                                                    <img src="/assets/images/custom/texture-img-03.jpg" alt="" />
                                                </span>
                                                <span className="swatch-label color-black"></span>
                                            </Link></li>
                                            <li><Link className="options-color" to="#">
                                                <span className="swatch-img">
                                                    <img src="/assets/images/custom/texture-img-04.jpg" alt="" />
                                                </span>
                                                <span className="swatch-label color-black"></span>
                                            </Link></li>
                                            <li><Link className="options-color" to="#">
                                                <span className="swatch-img">
                                                    <img src="/assets/images/custom/texture-img-05.jpg" alt="" />
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
                                                <input type="text" value="1" size="5" />
                                                <span className="plus-btn"></span>
                                            </div>
                                        </div>
                                        <div className="col-item">
                                            <Link to="#" className="btn btn-lg"><i className="icon-f-39"></i>ADD TO CART</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="tt-wrapper">
                                    <ul className="tt-list-btn">
                                        <li><Link className="btn-link" to="#"><i className="icon-n-072"></i>ADD TO WISH LIST</Link></li>
                                        <li><Link className="btn-link" to="#"><i className="icon-n-08"></i>ADD TO COMPARE</Link></li>
                                    </ul>
                                </div>
                                <div className="tt-wrapper">
                                    <div className="tt-promo-brand">
                                        <img src="images/custom/tt-promo-brand-desctop.png" className="visible-lg visible-md visible-sm visible-xl" alt="" />
                                        <img src="images/custom/tt-promo-brand-mobile.png" className="visible-xs" alt="" />
                                    </div>
                                </div>
                                <div className="tt-wrapper">
                                    <div className="tt-add-info">
                                        <ul>
                                            <li><span>Vendor:</span> Polo</li>
                                            <li><span>Product Type:</span> T-Shirt</li>
                                            <li><span>Tag:</span> <Link to="#">T-Shirt</Link>, <Link to="#">Women</Link>, <Link to="#">Top</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tt-collapse-block">
                                    <div className="tt-item">
                                        <div className="tt-collapse-title">DESCRIPTION</div>
                                        <div className="tt-collapse-content">
                                            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                        </div>
                                    </div>
                                    <div className="tt-item">
                                        <div className="tt-collapse-title">ADDITIONAL INFORMATION</div>
                                        <div className="tt-collapse-content">
                                            <table className="tt-table-03">
                                                <tbody>
                                                    <tr>
                                                        <td>Color:</td>
                                                        <td>Blue, Purple, White</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Size:</td>
                                                        <td>20, 24</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Material:</td>
                                                        <td>100% Polyester</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="tt-item">
                                        <div className="tt-collapse-title">REVIEWS (3)</div>
                                        <div className="tt-collapse-content">
                                            <div className="tt-review-block">
                                                <div className="tt-row-custom-02">
                                                    <div className="col-item">
                                                        <h2 className="tt-title">
                                                            1 REVIEW FOR VARIABLE PRODUCT
                                                        </h2>
                                                    </div>
                                                    <div className="col-item">
                                                        <Link to="#">Write a review</Link>
                                                    </div>
                                                </div>
                                                <div className="tt-review-comments">
                                                    <div className="tt-item">
                                                        <div className="tt-avatar">
                                                            <Link to="#"><img src="images/product/single/review-comments-img-01.jpg" alt="" /></Link>
                                                        </div>
                                                        <div className="tt-content">
                                                            <div className="tt-rating">
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star-half"></i>
                                                                <i className="icon-star-empty"></i>
                                                            </div>
                                                            <div className="tt-comments-info">
                                                                <span className="username">by <span>ADRIAN</span></span>
                                                                <span className="time">on January 14, 2017</span>
                                                            </div>
                                                            <div className="tt-comments-title">Very Good!</div>
                                                            <p>
                                                                Ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="tt-item">
                                                        <div className="tt-avatar">
                                                            <Link to="#"><img src="images/product/single/review-comments-img-02.jpg" alt="" /></Link>
                                                        </div>
                                                        <div className="tt-content">
                                                            <div className="tt-rating">
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star-half"></i>
                                                                <i className="icon-star-empty"></i>
                                                            </div>
                                                            <div className="tt-comments-info">
                                                                <span className="username">by <span>JESICA</span></span>
                                                                <span className="time">on January 14, 2017</span>
                                                            </div>
                                                            <div className="tt-comments-title">Bad!</div>
                                                            <p>
                                                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="tt-item">
                                                        <div className="tt-avatar">
                                                            <Link to="#"></Link>
                                                        </div>
                                                        <div className="tt-content">
                                                            <div className="tt-rating">
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star-half"></i>
                                                                <i className="icon-star-empty"></i>
                                                            </div>
                                                            <div className="tt-comments-info">
                                                                <span className="username">by <span>ADAM</span></span>
                                                                <span className="time">on January 14, 2017</span>
                                                            </div>
                                                            <div className="tt-comments-title">Very Good!</div>
                                                            <p>
                                                                Diusmod tempor incididunt ut labore et dolore magna aliqua.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tt-review-form">
                                                    <div className="tt-message-info">
                                                        BE THE FIRST TO REVIEW <span>“BLOUSE WITH SHEER &AMP; SOLID PANELS”</span>
                                                    </div>
                                                    <p>Your email address will not be published. Required fields are marked *</p>
                                                    <div className="tt-rating-indicator">
                                                        <div className="tt-title">
                                                            YOUR RATING *
                                                        </div>
                                                        <div className="tt-rating">
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star-half"></i>
                                                            <i className="icon-star-empty"></i>
                                                        </div>
                                                    </div>
                                                    <form className="form-default">
                                                        <div className="form-group">
                                                            <label htmlFor="inputName" className="control-label">YOUR NAME *</label>
                                                            <input type="email" className="form-control" id="inputName" placeholder="Enter your name" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="inputEmail" className="control-label">COUPONE E-MAIL *</label>
                                                            <input type="password" className="form-control" id="inputEmail" placeholder="Enter your e-mail" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="textarea" className="control-label">YOUR REVIEW *</label>
                                                            <textarea className="form-control"  id="textarea" placeholder="Enter your review" rows="8"></textarea>
                                                        </div>
                                                        <div className="form-group">
                                                            <button type="submit" className="btn">SUBMIT</button>
                                                        </div>
                                                    </form>
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
            <div className="container-indent wrapper-social-icon">
                <div className="container">
                    <ul className="tt-social-icon justify-content-center">
                        <li><Link className="icon-g-64" to="http://www.facebook.com/"></Link></li>
                        <li><Link className="icon-h-58" to="http://www.facebook.com/"></Link></li>
                        <li><Link className="icon-g-66" to="http://www.twitter.com/"></Link></li>
                        <li><Link className="icon-g-67" to="http://www.google.com/"></Link></li>
                        <li><Link className="icon-g-70" to="https://instagram.com/"></Link></li>
                    </ul>
                </div>
            </div>
            <RelatedProducts />
</div>
   )
}


export default Details;
