import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Slider from "react-slick";
import { useState } from "react";

import { addCart } from "../../Store/Actions/cartAction";
import SideBar from "../SideBar/SideBar";
import ProductFilterOptions from "../ProductFilterOptions/ProductFilterOptions";

import "./ProductList.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

Modal.setAppElement("#modal");

const ProductList = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalProductId, setModalProductId] = useState(null);
  const [colorState, setColorState] = useState(null);
  const [sizeState, setSizeState] = useState(null);
  const [textureState, setTextureState] = useState(null);
  const [qtyState, setQtyState] = useState(1);

  const getProductId = (id) => {
    setModalProductId(id);
    setModalIsOpen(true);
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const setItemQtyPlusHandler = () => {
    let qty = qtyState + 1;
    if (qty > 5) {
      qty = 5;
    }
    setQtyState(qty);
  };
  const setItemQtyMinusHandler = () => {
    let qty = qtyState - 1;
    if (qty <= 0) {
      qty = 1;
    }
    setQtyState(qty);
  };
  const setItemOnChangeHandler = (c) => {
    let qtyvalue = parseInt(c.target.value, 10);
    if (qtyvalue > 5) {
      qtyvalue = 5;
    } else if (qtyvalue <= 0 || qtyvalue === "") {
      qtyvalue = 1;
    }
    setQtyState(qtyvalue);
  };

  const filteredProduct = props.products.filter(
    (singleProduct) => singleProduct._id === modalProductId
  );

  return (
    <React.Fragment>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            background: "rgba(0,0,0,0.5)",
            zIndex: "9999",
          },
          content: {
            position: "absolute",
            width: "70%",
            margin: "10px auto",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%,-50%)",
            border: "none",
            background: "transparent",
            overflow: "inherit",
            WebkitOverflowScrolling: "touch",
            borderRadius: 0,
            outline: "none",
            padding: "0px",
          },
        }}
      >
        <div className="modal-content ">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              onClick={() => setModalIsOpen(false)}
              ariaHidden="true"
            >
              <span className="icon icon-clear"></span>
            </button>
          </div>
          <div class="modal-body">
            {filteredProduct.map((productSingle) => (
              <div class="tt-modal-quickview desctope">
                <div class="row">
                  <div class="col-12 col-md-5 col-lg-6">
                    <div class="tt-mobile-product-slider">
                      <Slider {...settings}>
                        <div>
                          <img
                            alt=""
                            src={productSingle.imgUrl}
                            class="loading"
                            data-was-processed="true"
                          />
                        </div>
                        <div>
                          <img
                            alt=""
                            src={productSingle.imgUrl1}
                            class="loading"
                            data-was-processed="true"
                          />
                        </div>
                        <div>
                          <img
                            alt=""
                            src={productSingle.imgUrl2}
                            class="loading"
                            data-was-processed="true"
                          />
                        </div>
                      </Slider>
                    </div>
                  </div>
                  <div class="col-12 col-md-7 col-lg-6">
                    <div class="tt-product-single-info">
                      <div class="tt-add-info">
                        <ul>
                          <li>
                            <span>SKU:</span> {productSingle._id}
                          </li>
                          <li>
                            <span>Availability:</span> {productSingle.stock} in
                            Stock
                          </li>
                        </ul>
                      </div>
                      <h2 class="tt-title">{productSingle.title}</h2>
                      <div class="tt-price">
                        {productSingle.salePrice ? (
                          <React.Fragment>
                            <span className="new-price">
                              PKR {productSingle.salePrice}
                            </span>{" "}
                            &nbsp;
                            <span className="old-price">
                              PKR {productSingle.price}
                            </span>
                          </React.Fragment>
                        ) : (
                          <span className="new-price">
                            PKR {productSingle.price}
                          </span>
                        )}
                      </div>
                      <div class="tt-review">
                        <div class="tt-rating">
                          <i class="icon-star"></i>
                          <i class="icon-star"></i>
                          <i class="icon-star"></i>
                          <i class="icon-star-half"></i>
                          <i class="icon-star-empty"></i>
                        </div>
                        <a href="#">(1 Customer Review)</a>
                      </div>
                      <div class="tt-wrapper">{productSingle.description}</div>
                      <div class="tt-swatches-container">
                        {productSingle.size && (
                          <div className="tt-wrapper">
                            <div className="tt-title-options">SIZE:</div>
                            <ul className="tt-options-swatch options-large">
                              {productSingle.size.map((s) => (
                                <li key={s}>
                                  <Link
                                    to="#"
                                    name={s}
                                    onClick={(e) => {
                                      setSizeState(e.target.name);
                                    }}
                                  >
                                    {s}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {productSingle.color && (
                          <div className="tt-wrapper">
                            <div className="tt-title-options">COLOR:</div>
                            <ul className="tt-options-swatch options-large">
                              {productSingle.color.map((m) => (
                                <li key={m}>
                                  <Link
                                    className={`options-color tt-color-bg-${m}`}
                                    name={m}
                                    onClick={(e) => {
                                      setColorState(e.target.name);
                                    }}
                                    to="#"
                                  ></Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {productSingle.texture && (
                          <div className="tt-wrapper">
                            <div className="tt-title-options">TEXTURE:</div>
                            <ul className="tt-options-swatch options-large">
                              {productSingle.texture.map((t) => (
                                <li key={t}>
                                  <Link
                                    className="options-color"
                                    name={t}
                                    onClick={(e) => {
                                      setTextureState(e.target.name);
                                    }}
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
                      <div class="tt-wrapper">
                        <div class="tt-row-custom-01">
                          <div class="col-item">
                            <div class="tt-input-counter style-01">
                              <Link
                                className="minus-btn"
                                onClick={setItemQtyMinusHandler}
                                to="#"
                              ></Link>
                              <input
                                type="text"
                                value={qtyState}
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
                          <div class="col-item">
                            <a
                              href="javascript:;"
                              onClick={() =>
                                props.addCartp(
                                  productSingle,
                                  qtyState,
                                  sizeState,
                                  textureState,
                                  colorState
                                )
                              }
                              class="btn btn-lg"
                            >
                              <i class="icon-f-39"></i>ADD TO CART
                            </a>
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
      </Modal>
      <div id="tt-pageContent">
        <div className="container-indent">
          <div className="container">
            <div className="row">
              <SideBar />
              <div className="col-md-12 col-lg-9 col-xl-9">
                <div className="content-indent container-fluid-custom-mobile-padding-02">
                  <ProductFilterOptions productsCount={props.products.length} />
                  <div className="tt-product-listing row">
                    {props.products.map((prod) => (
                      <div
                        className="col-6 col-md-4 tt-col-item"
                        key={prod._id}
                      >
                        <div className="tt-product thumbprod-center">
                          <div className="tt-image-box">
                            <Link
                              to="#"
                              className="tt-btn-wishlist"
                              data-tooltip="Add to Wishlist"
                              data-tposition="left"
                            ></Link>

                            <Link to={`product/${prod._id}`}>
                              <span className="tt-img">
                                <img src={prod.imgUrl} alt="" />
                              </span>
                              <span className="tt-img-roll-over">
                                <img src={prod.imgUrl1} alt="" />
                              </span>

                              {prod.stock === 0 && (
                                <span className="tt-label-location">
                                  <span className="tt-label-our-stock">
                                    Out Of Stock
                                  </span>
                                </span>
                              )}
                              {prod.salePrice && (
                                <span className="tt-label-location">
                                  <span className="tt-label-sale">
                                    Sale 40%
                                  </span>
                                </span>
                              )}
                            </Link>
                            <div className="tt-countdown_box">
                              <div className="tt-countdown_inner">
                                <div
                                  className="tt-countdown"
                                  data-date="2018-12-08"
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
                          <div className="tt-description">
                            <h2 className="tt-title">
                              <Link to={`product/${prod._id}`}>
                                {prod.title}
                              </Link>
                            </h2>
                            <div className="tt-price">
                              {prod.salePrice ? (
                                <span>PKR {prod.salePrice}</span>
                              ) : (
                                <span>PKR {prod.price}</span>
                              )}
                            </div>
                            <div className="tt-row">
                              <div className="tt-rating">
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                              </div>
                            </div>

                            <div className="tt-option-block">
                              <ul className="tt-options-swatch">
                                {prod.color
                                  ? prod.color.map((c) => (
                                      <li key={c}>
                                        <Link
                                          className={`options-color tt-color-bg-${c}`}
                                          name={c}
                                          to="#"
                                          onClick={(e) => {
                                            console.log(e.target.name);
                                          }}
                                        ></Link>
                                      </li>
                                    ))
                                  : null}
                              </ul>
                            </div>
                            <div className="tt-product-inside-hover">
                              <div className="tt-row-btn">
                                <Link
                                  to="#"
                                  onClick={() => getProductId(prod._id)}
                                  className="tt-btn-addtocart thumbprod-button-bg"
                                  data-toggle="modal"
                                  data-target="#modalAddToCartProduct"
                                >
                                  QUICK VIEW
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center tt_product_showmore">
                    <Link to="#" className="btn btn-border">
                      LOAD MORE
                    </Link>
                    <div className="tt_item_all_js">
                      <Link to="#" className="btn btn-border01">
                        NO MORE ITEM TO SHOW
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.Products.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addCartp: (prod, qty, size, texture, color) =>
      dispatch(addCart(prod, qty, size, texture, color)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
