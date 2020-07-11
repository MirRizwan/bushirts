import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import Slider from "react-slick";
// import {addCart} from '../../Store/Actions/cartAction';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { connect } from "react-redux";
import RelatedProducts from "../RelatedProducts/RelatedProducts";

const Details = props => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  //cart state
  const [cartItem, setCartItem] = useState({
    _id: null,
    title: null,
    color: null,
    size: null,
    inStock: null,
    qty: null,
    imgUrl: null,
    price: null,
    texture: null
  });

  //Product Variation states
  const [itemTexture, setItemTexture] = useState(null);
  const [itemColor, setItemColor] = useState(null);
  const [itemSize, setItemSize] = useState(null);
  const [itemQty, setItemQty] = useState(1);

  const setItemTextureHandler = t => {
    setItemTexture(t.target.name);
  };

  const setItemColorHandler = e => {
    setItemColor(e.target.name);
  };

  const setItemSizeHandler = s => {
    setItemSize(s.target.name);
  };

  const setItemQtyPlusHandler = () => {
    let qty = itemQty + 1;
    if (qty > 5) {
      qty = 5;
    }
    setItemQty(qty);
    console.log("Set Item plus Qty Handler", qty);
  };
  const setItemQtyMinusHandler = () => {
    let qty = itemQty - 1;
    if (qty <= 0) {
      qty = 1;
    }
    setItemQty(qty);
    console.log("Set Item minus Qty Handler", qty);
  };
  const setItemOnChangeHandler = c => {
    //   let itemqty=...itemQty;
    let qtyvalue = c.target.value;
    if (qtyvalue > 5 ) {
      qtyvalue = 5;
    } else if ( qtyvalue <= 0 || qtyvalue === '') {
        console.log("else if agya");
        qtyvalue = 1;
      
    }
    console.log("Set Item Qty Handler", qtyvalue);
    setItemQty(qtyvalue);
  };

  const setCartItemHandler = product => {
    console.log("SetCartItem Handler", product);

    setCartItem({
        _id: product._id,
        title: product.title,
        color: itemColor,
        size: itemSize,
        qty: itemQty,
        imgUrl: product.imgUrl,
        price: product.salePrice? product.salePrice:product.price,
        texture: itemTexture
        
    });

    setTimeout(function(){
        props.addCartp(cartItem);
    },6000);

  };

  let _topSlider = [],
    _bottomSlider = [];

  useEffect(() => {
    setNav1(_topSlider);
    setNav2(_bottomSlider);
  }, [_bottomSlider, _topSlider]);

  // console.log("nav1",nav1);
  // console.log("nav2",nav2);

  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true
  };

  const settings2 = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const filteredProduct = props.products.filter(
    singleProduct => singleProduct._id === props.productID
  );
  // console.log("filteredProduct",filteredProduct);

  if (filteredProduct.length === 0) {
    return <Redirect to="/not-found" />;
    // console.log("May agya");
  }
  if (filteredProduct[0].inStock < 1) {
    return <Redirect to="/not-found" />;
  }
  // const mvaluereturn=filteredProduct.map(mvalue=> mvalue.title);
  // console.log("filteredProduct",mvaluereturn) ;

  return (
    <div id="tt-pageContent">
      <div className="container-indent">
        <div className="tt-mobile-product-slider visible-xs arrow-location-center slick-animated-show-js">
          <div>
            <img src="assets/images/product/product-01.jpg" alt="" />
          </div>
          <div>
            <img src="assets/images/product/product-01-02.jpg" alt="" />
          </div>
          <div>
            <img src="assets/images/product/product-01-03.jpg" alt="" />
          </div>
          <div>
            <img src="assets/images/product/product-01-04.jpg" alt="" />
          </div>
          <div>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src="http://www.youtube.com/embed/GhyKqj_P2E4"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div>
            <div className="tt-video-block">
              <Link to="#" className="link-video"></Link>
              <video
                className="movie"
                src="video/video.mp4"
                poster="assets/video/video_img.jpg"
              ></video>
            </div>
          </div>
        </div>

        <div className="container container-fluid-mobile">
          {filteredProduct.map(mvalue => (
            <div className="row">
              <div className="col-6 hidden-xs">
                <div className="tt-product-vertical-layout">
                  <div className="tt-product-single-img">
                    <Slider
                      asNavFor={nav2}
                      ref={slider => {
                        _topSlider = slider;
                      }}
                      {...settings2}
                    >
                      <div>
                        <div>
                          <img src="/assets/images/product/product-01.jpg" />
                          <button className="tt-btn-zomm tt-top-right">
                            <i className="icon-f-86"></i>
                          </button>
                        </div>
                      </div>
                      <div>
                        <div>
                          <img src="/assets/images/product/product-01.jpg" />
                          <button className="tt-btn-zomm tt-top-right">
                            <i className="icon-f-86"></i>
                          </button>
                        </div>
                      </div>
                      <div>
                        <div>
                          <img src="/assets/images/product/product-01.jpg" />
                          <button className="tt-btn-zomm tt-top-right">
                            <i className="icon-f-86"></i>
                          </button>
                        </div>
                      </div>
                      <div>
                        <div>
                          <img src="/assets/images/product/product-01.jpg" />{" "}
                          <button className="tt-btn-zomm tt-top-right">
                            <i className="icon-f-86"></i>
                          </button>
                        </div>
                      </div>
                      <div>
                        <div>
                          <img src="/assets/images/product/product-01.jpg" />
                          <button className="tt-btn-zomm tt-top-right">
                            <i className="icon-f-86"></i>
                          </button>
                        </div>
                      </div>
                      <div>
                        <div>
                          <img src="/assets/images/product/product-01.jpg" />
                          <button className="tt-btn-zomm tt-top-right">
                            <i className="icon-f-86"></i>
                          </button>
                        </div>
                      </div>
                    </Slider>
                  </div>
                  <div className="tt-product-single-carousel-vertical">
                    <Slider
                      asNavFor={nav1}
                      ref={slider => {
                        _bottomSlider = slider;
                      }}
                      id="smallGallery"
                      className="tt-slick-button-vertical slick-animated-show-js"
                      {...settings}
                    >
                      <li>
                        <Link
                          className="zoomGalleryActive"
                          to="#"
                          data-image="/assets/images/product/product-01.jpg"
                          data-zoom-image="/assets/images/product/product-01.jpg"
                        >
                          <img
                            src="/assets/images/product/product-01.jpg"
                            alt=""
                          />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-image="/assets/images/product/product-01-02.jpg"
                          data-zoom-image="/assets/images/product/product-01-02.jpg"
                        >
                          <img
                            src="/assets/images/product/product-01-02.jpg"
                            alt=""
                          />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-image="/assets/images/product/product-01-03.jpg"
                          data-zoom-image="/assets/images/product/product-01-03.jpg"
                        >
                          <img
                            src="/assets/images/product/product-01-03.jpg"
                            alt=""
                          />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-image="/assets/images/product/product-01-04.jpg"
                          data-zoom-image="/assets/images/product/product-01-04.jpg"
                        >
                          <img
                            src="/assets/images/product/product-01-04.jpg"
                            alt=""
                          />
                        </Link>
                      </li>
                      <li>
                        <div
                          className="video-link-product"
                          data-toggle="modal"
                          data-type="youtube"
                          data-target="#modalVideoProduct"
                          data-value="http://www.youtube.com/embed/GhyKqj_P2E4"
                        >
                          <img
                            src="assets/images/product/product-small-empty.png"
                            alt=""
                          />
                          <div>
                            <i className="icon-f-32"></i>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="video-link-product"
                          data-toggle="modal"
                          data-type="video"
                          data-target="#modalVideoProduct"
                          data-value="video/video.mp4"
                          data-poster="video/video_img.jpg"
                        >
                          <img
                            src="assets/images/product/product-small-empty.png"
                            alt=""
                          />
                          <div>
                            <i className="icon-f-32"></i>
                          </div>
                        </div>
                      </li>
                    </Slider>
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
                      <div className="tt-label tt-label-our-fatured">
                        Fatured
                      </div>
                    </div>
                  </div>
                  <div className="tt-add-info">
                    <ul>
                      <li>
                        <span>SKU:</span> 001
                      </li>
                      <li>
                        <span>Availability:</span> {mvalue.stock} in Stock
                      </li>
                    </ul>
                  </div>
                  <h1 className="tt-title">{mvalue.title}</h1>
                  <div className="tt-price">
                    <span className="new-price">PKR {mvalue.price}</span> &nbsp;
                    {mvalue.salePrice ? (
                      <span className="old-price">PKR {mvalue.price}</span>
                    ) : null}
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
                    Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </div>
                  <div className="tt-wrapper">
                    <div className="tt-countdown_box_02">
                      <div className="tt-countdown_inner">
                        <div
                          className="tt-countdown"
                          data-date="2018-11-01"
                          data-year="Yrs"
                          data-month="Mths"
                          data-week="Wk"
                          data-day="Day"
                          data-hour="Hrs"
                          data-minute="Min"
                          data-second="Sec"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="tt-swatches-container">
                    {mvalue.size && (
                      <div className="tt-wrapper">
                        <div className="tt-title-options">SIZE:</div>
                        <ul className="tt-options-swatch options-large">
                          {mvalue.size.map(s => (
                            <li>
                              <Link
                                to="#"
                                onClick={setItemSizeHandler}
                                name={s}
                              >
                                {s}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="tt-wrapper product-information-buttons">
                      <Link
                        data-toggle="modal"
                        data-target="#modalProductInfo"
                        to="#"
                      >
                        Size Guide
                      </Link>
                      <Link
                        data-toggle="modal"
                        data-target="#modalProductInfo-02"
                        to="#"
                      >
                        Shipping
                      </Link>
                    </div>
                    {mvalue.color && (
                      <div className="tt-wrapper">
                        <div className="tt-title-options">
                          COLOR:{itemColor}
                        </div>
                        <ul className="tt-options-swatch options-large">
                          {mvalue.color.map(m => (
                            <li>
                              <Link
                                className={`options-color tt-color-bg-${m}`}
                                name={m}
                                onClick={setItemColorHandler}
                                to="#"
                              ></Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {mvalue.texture && (
                      <div className="tt-wrapper">
                        <div className="tt-title-options">TEXTURE:</div>
                        <ul className="tt-options-swatch options-large">
                          {mvalue.texture.map(t => (
                            <li>
                              <Link
                                className="options-color"
                                name={t}
                                onClick={setItemTextureHandler}
                                to="#"
                              >
                                <span className="swatch-img">
                                  <img
                                    src={`/assets/images/custom/texture-img-${t}.jpg`}
                                    alt=""
                                  />
                                </span>
                                <span className="swatch-label color-black"></span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="tt-wrapper">
                    <div className="tt-row-custom-01">
                      <div className="col-item">
                        <div className="tt-input-counter style-01">
                          <span
                            className="minus-btn"
                            onClick={setItemQtyMinusHandler}
                          ></span>
                          <input
                            type="number"
                            value={itemQty}
                            min="0"
                            max="5"
                            onChange={setItemOnChangeHandler}
                            size="1"
                          />
                          <span
                            className="plus-btn"
                            onClick={setItemQtyPlusHandler}
                          ></span>
                        </div>
                      </div>
                      <div className="col-item">
                        <Link
                          onClick={() => setCartItemHandler(mvalue)}
                          className="btn btn-lg"
                        >
                          <i className="icon-f-39"></i>ADD TO CART
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="tt-wrapper">
                    <ul className="tt-list-btn">
                      <li>
                        <Link className="btn-link" to="#">
                          <i className="icon-n-072"></i>ADD TO WISH LIST
                        </Link>
                      </li>
                      <li>
                        <Link className="btn-link" to="#">
                          <i className="icon-n-08"></i>ADD TO COMPARE
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="tt-wrapper">
                    <div className="tt-promo-brand">
                      <img
                        src="images/custom/tt-promo-brand-desctop.png"
                        className="visible-lg visible-md visible-sm visible-xl"
                        alt=""
                      />
                      <img
                        src="images/custom/tt-promo-brand-mobile.png"
                        className="visible-xs"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="tt-wrapper">
                    <div className="tt-add-info">
                      <ul>
                        <li>
                          <span>Vendor:</span> Polo
                        </li>
                        <li>
                          <span>Product Type:</span> T-Shirt
                        </li>
                        <li>
                          <span>Tag:</span> <Link to="#">T-Shirt</Link>,{" "}
                          <Link to="#">Women</Link>, <Link to="#">Top</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="tt-collapse-block">
                    <div className="tt-item">
                      <div className="tt-collapse-title">DESCRIPTION</div>
                      <div className="tt-collapse-content">
                        Lorem ipsum dolor sit amet conse ctetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum.
                      </div>
                    </div>
                    <div className="tt-item">
                      <div className="tt-collapse-title">
                        ADDITIONAL INFORMATION
                      </div>
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
                                <Link to="#">
                                  <img
                                    src="images/product/single/review-comments-img-01.jpg"
                                    alt=""
                                  />
                                </Link>
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
                                  <span className="username">
                                    by <span>ADRIAN</span>
                                  </span>
                                  <span className="time">
                                    on January 14, 2017
                                  </span>
                                </div>
                                <div className="tt-comments-title">
                                  Very Good!
                                </div>
                                <p>
                                  Ctetur adipisicing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim.
                                </p>
                              </div>
                            </div>
                            <div className="tt-item">
                              <div className="tt-avatar">
                                <Link to="#">
                                  <img
                                    src="images/product/single/review-comments-img-02.jpg"
                                    alt=""
                                  />
                                </Link>
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
                                  <span className="username">
                                    by <span>JESICA</span>
                                  </span>
                                  <span className="time">
                                    on January 14, 2017
                                  </span>
                                </div>
                                <div className="tt-comments-title">Bad!</div>
                                <p>
                                  Sed do eiusmod tempor incididunt ut labore et
                                  dolore magna aliqua.
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
                                  <span className="username">
                                    by <span>ADAM</span>
                                  </span>
                                  <span className="time">
                                    on January 14, 2017
                                  </span>
                                </div>
                                <div className="tt-comments-title">
                                  Very Good!
                                </div>
                                <p>
                                  Diusmod tempor incididunt ut labore et dolore
                                  magna aliqua.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="tt-review-form">
                            <div className="tt-message-info">
                              BE THE FIRST TO REVIEW{" "}
                              <span>
                                “BLOUSE WITH SHEER &AMP; SOLID PANELS”
                              </span>
                            </div>
                            <p>
                              Your email address will not be published. Required
                              fields are marked *
                            </p>
                            <div className="tt-rating-indicator">
                              <div className="tt-title">YOUR RATING *</div>
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
                                <label
                                  htmlFor="inputName"
                                  className="control-label"
                                >
                                  YOUR NAME *
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="inputName"
                                  placeholder="Enter your name"
                                />
                              </div>
                              <div className="form-group">
                                <label
                                  htmlFor="inputEmail"
                                  className="control-label"
                                >
                                  COUPONE E-MAIL *
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="inputEmail"
                                  placeholder="Enter your e-mail"
                                />
                              </div>
                              <div className="form-group">
                                <label
                                  htmlFor="textarea"
                                  className="control-label"
                                >
                                  YOUR REVIEW *
                                </label>
                                <textarea
                                  className="form-control"
                                  id="textarea"
                                  placeholder="Enter your review"
                                  rows="8"
                                ></textarea>
                              </div>
                              <div className="form-group">
                                <button type="submit" className="btn">
                                  SUBMIT
                                </button>
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
          ))}
        </div>
      </div>
      <div className="container-indent wrapper-social-icon">
        <div className="container">
          <ul className="tt-social-icon justify-content-center">
            <li>
              <Link className="icon-g-64" to="http://www.facebook.com/"></Link>
            </li>
            <li>
              <Link className="icon-h-58" to="http://www.facebook.com/"></Link>
            </li>
            <li>
              <Link className="icon-g-66" to="http://www.twitter.com/"></Link>
            </li>
            <li>
              <Link className="icon-g-67" to="http://www.google.com/"></Link>
            </li>
            <li>
              <Link className="icon-g-70" to="https://instagram.com/"></Link>
            </li>
          </ul>
        </div>
      </div>
      <RelatedProducts />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.Products.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCartp: cartItem1 => dispatch({ type: "UPDATE_CART", payload: cartItem1 })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
