import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "react-modal";

import { useState } from "react";

import { addCart } from "../../Store/Actions/cartAction";
import SideBar from "../SideBar/SideBar";
import ProductFilterOptions from "../ProductFilterOptions/ProductFilterOptions";

import "./ProductList.css";

import QuickView from "../Modals/QuickView";
import ProductListItem from "./ProductListItem";

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
      <QuickView
        product={filteredProduct}
        modalIsOpen={modalIsOpen}
        qtyState={qtyState}
        setModalIsOpen={setModalIsOpen}
        colorState={colorState}
        setColorState={setColorState}
        sizeState={sizeState}
        setSizeState={setSizeState}
        setTextureState={setTextureState}
        setItemQtyMinusHandler={setItemQtyMinusHandler}
        setItemOnChangeHandler={setItemOnChangeHandler}
        setItemQtyPlusHandler={setItemQtyPlusHandler}
        addCartp={props.addCartp}
      />
      <div id="tt-pageContent">
        <div className="container-indent">
          <div className="container-fluid-custom container-fluid-custom-mobile-padding">
            <div className="row">
              <SideBar />
              <div className="col-md-12">
                <div className="content-indent">
                  <ProductFilterOptions productsCount={props.products.length} />
                  <ProductListItem
                    products={props.products}
                    getProductId={getProductId}
                  />
                </div>
                <div className="text-center tt_product_showmore">
                  <Link to="#" className="btn btn-border">
                    LOAD MORE
                  </Link>
                  <div className="tt_item_all_js is-visibility">
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

      {/* 

      <div id="tt-pageContent">
        <div className="container-indent">
          <div className="container">
            <div className="row">
              <SideBar />
              <div className="col-md-12 col-lg-9 col-xl-3">
                <div className="content-indent container-fluid-custom-mobile-padding-02">
                  <ProductFilterOptions productsCount={props.products.length} />
                  <div className="tt-product-listing row">
                    
                  
                  {
                    props.products.map((prod) => (
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
      </div> */}
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
