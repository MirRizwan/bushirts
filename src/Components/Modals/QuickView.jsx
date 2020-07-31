import React from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const QuickView = (props) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Modal
      isOpen={props.modalIsOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => props.setModalIsOpen(false)}
      style={{
        overlay: {
          background: "rgba(0,0,0,0.6)",
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
            onClick={() => props.setModalIsOpen(false)}
            aria-hidden="true"
          >
            <span className="icon icon-clear"></span>
          </button>
        </div>
        <div class="modal-body">
          {props.product.map((productSingle) => (
            <div class="tt-modal-quickview desctope" key={productSingle._id}>
              <div class="row">
                <div class="col-12 col-md-5 col-lg-6">
                  <div class="tt-mobile-product-slider">
                    <Slider {...settings}>
                      <div>
                        <img
                          alt=""
                          src={productSingle.imgUrl}
                          className="loading"
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
                                    props.setSizeState(e.target.name);
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
                                    props.setColorState(e.target.name);
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
                                    props.setTextureState(e.target.name);
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
                              onClick={props.setItemQtyMinusHandler}
                              to="#"
                            ></Link>
                            <input
                              type="text"
                              value={props.qtyState}
                              onChange={props.setItemOnChangeHandler}
                              size="1"
                            />
                            <Link
                              className="plus-btn"
                              onClick={props.setItemQtyPlusHandler}
                              to="#"
                            ></Link>
                          </div>
                        </div>
                        <div class="col-item">
                          <Link
                            to="#"
                            onClick={() =>
                              props.addCartp(
                                productSingle,
                                props.qtyState,
                                props.sizeState,
                                props.textureState,
                                props.colorState
                              )
                            }
                            class="btn btn-lg"
                          >
                            <i class="icon-f-39"></i>ADD TO CART
                          </Link>
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
  );
};

export default QuickView;
