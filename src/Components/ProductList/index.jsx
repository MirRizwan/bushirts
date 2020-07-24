import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import Modal from 'react-modal';
import SideBar from "../SideBar/SideBar";
import ProductFilterOptions from "../ProductFilterOptions/ProductFilterOptions";
import { useState } from "react";

Modal.setAppElement('#modal');


const ProductList = props => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <React.Fragment>
      <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={true} onRequestClose={()=>setModalIsOpen(false)} style={
        {
          overlay:{
            background:"rgba(0,0,0,0.1)",
            zIndex:"9999"
          }
        }
      }>
        <h1>Mir</h1>
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
                  { props.products.map(prod => (
                    <div className="col-6 col-md-4 tt-col-item" key={prod._id}>
                      <div className="tt-product thumbprod-center">
                        <div className="tt-image-box">
                          <Link
                            to="#"
                            className="tt-btn-quickview"
                            data-toggle="modal"
                            data-target="#ModalquickView"
                            data-tooltip="Quick View"
                            data-tposition="left"
                            onClick={()=>setModalIsOpen(true)}
                          ></Link>
                          <Link
                            to="#"
                            className="tt-btn-wishlist"
                            data-tooltip="Add to Wishlist"
                            data-tposition="left"
                          ></Link>
                          <Link
                            to="#"
                            className="tt-btn-compare"
                            data-tooltip="Add to Compare"
                            data-tposition="left"
                          ></Link>
                          <Link to={`product/${prod._id}`}>
                            <span className="tt-img">
                              <img
                                src={prod.imgUrl}
                                alt=""
                              />
                            </span>
                            <span className="tt-img-roll-over">
                              <img
                                src={prod.imgUrl1}
                                alt=""
                              />
                            </span>
                            {
                              prod.inStock === false && (
                                <span className="tt-label-location">
                                  <span className="tt-label-our-stock">Out Of Stock</span>
                                </span>
                              )
                            }
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
                            <Link to={`product/${prod._id}`}>{prod.title}</Link>
                          </h2>
                          <div className="tt-price">${prod.price}</div>
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
                              <li>
                                <Link
                                  className="options-color tt-color-bg-03"
                                  to="#"
                                ></Link>
                              </li>
                              <li>
                                <Link
                                  className="options-color tt-color-bg-04"
                                  to="#"
                                ></Link>
                              </li>
                              <li>
                                <Link
                                  className="options-color tt-color-bg-05"
                                  to="#"
                                ></Link>
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

const mapStateToProps = state => {
  return {
    products: state.Products.products
  };
};

export default connect(
  mapStateToProps,
  null
)(ProductList);
