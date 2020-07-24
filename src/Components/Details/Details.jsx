import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import Slider from "react-slick";
import { connect } from "react-redux";
import Modal from 'react-modal';

import RelatedProducts from "../RelatedProducts/RelatedProducts";
import SocialBar from "../SocialBar/SocialBar";
import { addCart } from '../../Store/Actions/cartAction';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Details.css';


const Details = props => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);


  const [sizeGuide, setSizeGuide] = useState(false);
  let _topSlider = [],
    _bottomSlider = [];

  useEffect(() => {
    setNav1(_topSlider);
    setNav2(_bottomSlider);
  }, [_bottomSlider, _topSlider]);

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

  //cart state
  const [cartItem, setCartItem] = useState({
    _id: null,
    title: null,
    color: null,
    size: null,
    qty: 1,
    imgUrl: null,
    price: null,
    texture: null
  });

  //Product Variation states

  const setItemQtyPlusHandler = () => {
    let qty = cartItem.qty + 1;
    if (qty > 5) {
      qty = 5;
    }
    setCartItem({ ...cartItem, qty })
  };
  const setItemQtyMinusHandler = () => {
    let qty = cartItem.qty - 1;
    if (qty <= 0) {
      qty = 1;
    }
    setCartItem({ ...cartItem, qty })
  };
  const setItemOnChangeHandler = c => {
    let qtyvalue = parseInt(c.target.value, 10);
    if (qtyvalue > 5) {
      qtyvalue = 5;
    } else if (qtyvalue <= 0 || qtyvalue === '') {
      qtyvalue = 1;
    }
    setCartItem({ ...cartItem, qty: qtyvalue })

  };

  const filteredProduct = props.products.filter(singleProduct => singleProduct._id === props.productID);

  useEffect(() => {
    setCartItem({
      _id: filteredProduct[0]._id,
      title: filteredProduct[0].title,
      imgUrl: filteredProduct[0].imgUrl,
      price: filteredProduct[0].price,
      unitPrice: filteredProduct[0].price,
      qty: 1
    });
  }, []);

  if (filteredProduct.length === 0) {
    return <Redirect to="/not-found" />;
  }

  Modal.setAppElement('#modal');

  return (
    <React.Fragment>
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
          </div>

          <div className="container container-fluid-mobile">
            {filteredProduct.map(mvalue => (
              <div className="row" key={mvalue._id}>
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

                          <img src={mvalue.imgUrl} alt="" />
                          <button className="tt-btn-zomm tt-top-right">
                            <i className="icon-f-86"></i>
                          </button>

                        </div>
                        <div>

                          <img src={mvalue.imgUrl1} alt="" />
                          <button className="tt-btn-zomm tt-top-right">
                            <i className="icon-f-86"></i>
                          </button>

                        </div>
                        <div>

                          <img src={mvalue.imgUrl2} alt="" />
                          <button className="tt-btn-zomm tt-top-right">
                            <i className="icon-f-86"></i>
                          </button>

                        </div>
                        <div>

                          <img src={mvalue.imgUrl3} alt="" />
                          <button className="tt-btn-zomm tt-top-right">
                            <i className="icon-f-86"></i>
                          </button>

                        </div>
                        <div>

                          <img src={mvalue.imgUrl4} alt="" />
                          <button className="tt-btn-zomm tt-top-right">
                            <i className="icon-f-86"></i>
                          </button>

                        </div>
                        <div>

                          <img src={mvalue.imgUrl5} alt="" />
                          <button className="tt-btn-zomm tt-top-right">
                            <i className="icon-f-86"></i>
                          </button>

                        </div>
                        <div>

                          <img src={mvalue.imgUrl6} alt="" />
                          <button className="tt-btn-zomm tt-top-right">
                            <i className="icon-f-86"></i>
                          </button>

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
                            // className="zoomGalleryActive"
                            to="#"
                            data-image={mvalue.imgUrl}
                            data-zoom-image={mvalue.imgUrl}
                          >
                            <img
                              src={mvalue.imgUrl}
                              alt=""
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            data-image={mvalue.imgUrl1}
                            data-zoom-image={mvalue.imgUrl1}
                          >
                            <img
                              src={mvalue.imgUrl1}
                              alt=""
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            data-image={mvalue.imgUrl3}
                            data-zoom-image={mvalue.imgUrl3}
                          >
                            <img
                              src={mvalue.imgUrl3}
                              alt=""
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            data-image={mvalue.imgUrl4}
                            data-zoom-image={mvalue.imgUrl4}
                          >
                            <img
                              src={mvalue.imgUrl4}
                              alt=""
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            data-image={mvalue.imgUrl5}
                            data-zoom-image={mvalue.imgUrl5}
                          >
                            <img
                              src={mvalue.imgUrl5}
                              alt=""
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            data-image={mvalue.imgUrl6}
                            data-zoom-image={mvalue.imgUrl6}
                          >
                            <img
                              src={mvalue.imgUrl6}
                              alt=""
                            />
                          </Link>
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

                      {
                        mvalue.salePrice ? (
                          <React.Fragment>
                            <span className="sale-price">PKR {mvalue.salePrice}</span>
                            <span className="old-price">PKR {mvalue.price}</span>
                          </React.Fragment>

                        ) : <span className="sale-price">PKR {mvalue.price}</span>
                      }
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
                              <li key={s}>
                                <Link
                                  to="#"
                                  name={s}
                                  onClick={e => { setCartItem({ ...cartItem, size: e.target.name }) }}
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
                          onClick={() => setSizeGuide(true)}
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
                            COLOR:
                        </div>
                          <ul className="tt-options-swatch options-large">
                            {mvalue.color.map(m => (
                              <li key={m}>
                                <Link
                                  className={`options-color tt-color-bg-${m}`}
                                  name={m}
                                  onClick={(e) => { setCartItem({ ...cartItem, color: e.target.name }) }}
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
                              <li key={t}>
                                <Link
                                  className="options-color"
                                  name={t}
                                  onClick={(e) => { setCartItem({ ...cartItem, texture: e.target.name }) }}
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
                            <Link
                              className="minus-btn"
                              onClick={setItemQtyMinusHandler}
                              to="#"
                            ></Link>
                            <input
                              type="text"
                              value={cartItem.qty}
                              onChange={setItemOnChangeHandler}
                              size="1"
                            />
                            <Link
                              className="plus-btn"
                              onClick={setItemQtyPlusHandler}
                              to="#"
                            ></Link>
                          </div>
                        </div>
                        <div className="col-item">
                          <Link
                            onClick={() => props.addCartp(cartItem)}
                            className="btn btn-lg"
                            to="#"
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
                      </ul>
                    </div>
                    <div className="tt-wrapper">
                      <div className="tt-promo-brand">
                        <img
                          src="/assets/images/custom/tt-promo-brand-desctop.png"
                          className="visible-lg visible-md visible-sm visible-xl"
                          alt=""
                        />
                        <img
                          src="/assets/images/custom/tt-promo-brand-mobile.png"
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
        <SocialBar />
        <RelatedProducts />
      </div>


      <Modal isOpen={sizeGuide} shouldCloseOnOverlayClick={true} onRequestClose={() => setSizeGuide(false)} style={
        {
          overlay: {
            background: "rgba(0,0,0,0.5)",
            zIndex: "9999",
          },
          content: {
            position: 'absolute',
            width: '70%',
            margin: '10px auto',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%,-50%)',
            border: 'none',
            background: 'transparent',
            overflow: 'inherit',
            WebkitOverflowScrolling: 'touch',
            borderRadius: 0,
            outline: 'none',
            padding: '20px'
          }
        }
      }>
        <div className="modal-content ">
          <div className="modal-header">
            <button type="button" className="close" onClick={() => setSizeGuide(false)} ariaHidden="true"><span className="icon icon-clear"></span></button>
          </div>
          <div className="modal-body">
            <div className="tt-layout-product-info">
              <h6 className="tt-title">SIZE GUIDE</h6>
              <p>This is an approximate conversion table to help you find your size.</p>
              <div className="tt-table-responsive-md">
                <table className="tt-table-modal-info">
                  <thead>
                    <tr>
                      <th width="20%">Italian</th>
                      <th width="20%">Pakistan</th>
                      <th width="20%">German</th>
                      <th width="20%">UK</th>
                      <th width="20%">US</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>34</td>
                      <td>30</td>
                      <td>28</td>
                      <td>4</td>
                      <td>00</td>

                    </tr>
                    <tr>
                      <td>36</td>
                      <td>32</td>
                      <td>30</td>
                      <td>6</td>
                      <td>0</td>

                    </tr>
                    <tr>
                      <td>38</td>
                      <td>34</td>
                      <td>32</td>
                      <td>8</td>
                      <td>2</td>

                    </tr>
                    <tr>
                      <td>40</td>
                      <td>36</td>
                      <td>34</td>
                      <td>10</td>
                      <td>4</td>

                    </tr>
                    <tr>
                      <td>42</td>
                      <td>38</td>
                      <td>36</td>
                      <td>12</td>
                      <td>6</td>

                    </tr>
                    <tr>
                      <td>44</td>
                      <td>40</td>
                      <td>38</td>
                      <td>14</td>
                      <td>8</td>

                    </tr>
                    <tr>
                      <td>46</td>
                      <td>42</td>
                      <td>40</td>
                      <td>16</td>
                      <td>10</td>

                    </tr>
                    <tr>
                      <td>48</td>
                      <td>44</td>
                      <td>42</td>
                      <td>18</td>
                      <td>12</td>

                    </tr>
                    <tr>
                      <td>50</td>
                      <td>46</td>
                      <td>44</td>
                      <td>20</td>
                      <td>14</td>

                    </tr>
                    <tr>
                      <td>52</td>
                      <td>48</td>
                      <td>46</td>
                      <td>22</td>
                      <td>16</td>

                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>


      </Modal>

    </React.Fragment>
  );
};



const mapStateToProps = state => {
  return {
    products: state.Products.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCartp: prod => dispatch(addCart(prod))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
