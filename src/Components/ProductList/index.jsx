import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';

const ProductList = props => {
  console.log("Products listing", props);
  return (
    <React.Fragment>
      
      <div id="tt-pageContent">
      <div className="container-indent">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-3 col-xl-3 leftColumn aside">
              <div className="tt-btn-col-close">
                <Link to="#">Close</Link>
              </div>
              <div className="tt-collapse open tt-filter-detach-option">
                <div className="tt-collapse-content">
                  <div className="filters-mobile">
                    <div className="filters-row-select"></div>
                  </div>
                </div>
              </div>
              <div className="tt-collapse open ">
                <h3 className="tt-collapse-title">SORT BY</h3>
                <div className="tt-collapse-content">
                  <ul className="tt-filter-list">
                    <li className="active">
                      <Link to="#">Shirts &amp; Tops</Link>
                    </li>
                    <li>
                      <Link to="#">XS</Link>
                    </li>
                    <li>
                      <Link to="#">White</Link>
                    </li>
                  </ul>
                  <Link to="#" className="btn-link-02">
                    Clear All
                  </Link>
                </div>
              </div>
              <div className="tt-collapse open">
                <h3 className="tt-collapse-title">PRODUCT CATEGORIES</h3>
                <div className="tt-collapse-content">
                  <ul className="tt-list-row">
                    <li className="active">
                      <Link to="#">Dresses</Link>
                    </li>
                    <li>
                      <Link to="#">Shirts &amp; Tops</Link>
                    </li>
                    <li>
                      <Link to="#">Polo Shirts</Link>
                    </li>
                    <li>
                      <Link to="#">Sweaters</Link>
                    </li>
                    <li>
                      <Link to="#">Blazers &amp; Vests</Link>
                    </li>
                    <li>
                      <Link to="#">Jackets &amp; Outerwear</Link>
                    </li>
                    <li>
                      <Link to="#">Activewear</Link>
                    </li>
                    <li>
                      <Link to="#">Pants</Link>
                    </li>
                    <li>
                      <Link to="#">Jumpsuits &amp; Shorts</Link>
                    </li>
                    <li>
                      <Link to="#">Jeans</Link>
                    </li>
                    <li>
                      <Link to="#">Skirts</Link>
                    </li>
                    <li>
                      <Link to="#">Swimwear</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tt-collapse open">
                <h3 className="tt-collapse-title">FILTER BY PRICE</h3>
                <div className="tt-collapse-content">
                  <ul className="tt-list-row">
                    <li className="active">
                      <Link to="#">$0 — $50</Link>
                    </li>
                    <li>
                      <Link to="#">$50 — $100</Link>
                    </li>
                    <li>
                      <Link to="#">$100 — $150</Link>
                    </li>
                    <li>
                      <Link to="#">$150 — $200</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tt-collapse open">
                <h3 className="tt-collapse-title">FILTER BY SIZE</h3>
                <div className="tt-collapse-content">
                  <ul className="tt-options-swatch options-middle">
                    <li>
                      <Link to="#">4</Link>
                    </li>
                    <li className="active">
                      <Link to="#">6</Link>
                    </li>
                    <li>
                      <Link to="#">8</Link>
                    </li>
                    <li>
                      <Link to="#">10</Link>
                    </li>
                    <li>
                      <Link to="#">12</Link>
                    </li>
                    <li>
                      <Link to="#">14</Link>
                    </li>
                    <li>
                      <Link to="#">16</Link>
                    </li>
                    <li>
                      <Link to="#">18</Link>
                    </li>
                    <li>
                      <Link to="#">20</Link>
                    </li>
                    <li>
                      <Link to="#">22</Link>
                    </li>
                    <li>
                      <Link to="#">24</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tt-collapse open">
                <h3 className="tt-collapse-title">FILTER BY COLOR</h3>
                <div className="tt-collapse-content">
                  <ul className="tt-options-swatch options-middle">
                    <li>
                      <Link
                        className="options-color tt-border tt-color-bg-08"
                        to="#"
                      ></Link>
                    </li>
                    <li>
                      <Link className="options-color tt-color-bg-09" to="#"></Link>
                    </li>
                    <li className="active">
                      <Link className="options-color tt-color-bg-10" to="#"></Link>
                    </li>
                    <li>
                      <Link className="options-color tt-color-bg-11" to="#"></Link>
                    </li>
                    <li>
                      <Link className="options-color tt-color-bg-12" to="#"></Link>
                    </li>
                    <li>
                      <Link className="options-color tt-color-bg-13" to="#"></Link>
                    </li>
                    <li>
                      <Link className="options-color tt-color-bg-14" to="#"></Link>
                    </li>
                    <li>
                      <Link className="options-color tt-color-bg-15" to="#"></Link>
                    </li>
                    <li>
                      <Link className="options-color tt-color-bg-16" to="#"></Link>
                    </li>
                    <li>
                      <Link className="options-color tt-color-bg-17" to="#"></Link>
                    </li>
                    <li>
                      <Link className="options-color tt-color-bg-18" to="#"></Link>
                    </li>
                    <li>
                      <Link className="options-color" to="#">
                        <span className="swatch-img">
                          <img src="images/custom/texture-img-01.jpg" alt="" />
                        </span>
                        <span className="swatch-label color-black"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tt-collapse open">
                <h3 className="tt-collapse-title">VENDOR</h3>
                <div className="tt-collapse-content">
                  <ul className="tt-list-row">
                    <li>
                      <Link to="#">Levi's</Link>
                    </li>
                    <li>
                      <Link to="#">Gap</Link>
                    </li>
                    <li>
                      <Link to="#">Polo</Link>
                    </li>
                    <li>
                      <Link to="#">Lacoste</Link>
                    </li>
                    <li>
                      <Link to="#">Guess</Link>
                    </li>
                  </ul>
                  <Link to="#" className="btn-link-02">
                    + More
                  </Link>
                </div>
              </div>
              <div className="tt-collapse open">
                <h3 className="tt-collapse-title">SALE PRODUCTS</h3>
                <div className="tt-collapse-content">
                  <div className="tt-aside">
                    <Link className="tt-item" to="/products">
                      <div className="tt-img">
                        <span className="tt-img-default">
                          <img
                            src="assets/images/product/product-01.jpg"
                            alt=""
                          />
                        </span>
                        <span className="tt-img-roll-over">
                          <img
                            src="assets/images/product/product-01-02.jpg"
                            alt=""
                          />
                        </span>
                      </div>
                      <div className="tt-content">
                        <h6 className="tt-title"></h6>
                        <div className="tt-price">
                          <span className="sale-price">$14</span>
                          <span className="old-price">$24</span>
                        </div>
                      </div>
                    </Link>
                    <Link className="tt-item" to="product.html">
                      <div className="tt-img">
                        <span className="tt-img-default">
                          <img
                            src="assets/images/product/product-02.jpg"
                            alt=""
                          />
                        </span>
                        <span className="tt-img-roll-over">
                          <img
                            src="assets/images/product/product-02-02.jpg"
                            alt=""
                          />
                        </span>
                      </div>
                      <div className="tt-content">
                        <h6 className="tt-title">Flared Shift Dress</h6>
                        <div className="tt-price">
                          <span className="sale-price">$14</span>
                          <span className="old-price">$24</span>
                        </div>
                      </div>
                    </Link>
                    <Link className="tt-item" to="product.html">
                      <div className="tt-img">
                        <span className="tt-img-default">
                          <img
                            src="assets/images/product/product-03.jpg"
                            alt=""
                          />
                        </span>
                        <span className="tt-img-roll-over">
                          <img
                            src="assets/images/product/product-03-02.jpg"
                            alt=""
                          />
                        </span>
                      </div>
                      <div className="tt-content">
                        <h6 className="tt-title">Flared Shift Dress</h6>
                        <div className="tt-price">
                          <span className="sale-price">$14</span>
                          <span className="old-price">$24</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tt-collapse open">
                <h3 className="tt-collapse-title">TAGS</h3>
                <div className="tt-collapse-content">
                  <ul className="tt-list-inline">
                    <li>
                      <Link to="#">Dresses</Link>
                    </li>
                    <li>
                      <Link to="#">Shirts &amp; Tops</Link>
                    </li>
                    <li>
                      <Link to="#">Polo Shirts</Link>
                    </li>
                    <li>
                      <Link to="#">Sweaters</Link>
                    </li>
                    <li>
                      <Link to="#">Blazers</Link>
                    </li>
                    <li>
                      <Link to="#">Vests</Link>
                    </li>
                    <li>
                      <Link to="#">Jackets</Link>
                    </li>
                    <li>
                      <Link to="#">Outerwear</Link>
                    </li>
                    <li>
                      <Link to="#">Activewear</Link>
                    </li>
                    <li>
                      <Link to="#">Pants</Link>
                    </li>
                    <li>
                      <Link to="#">Jumpsuits</Link>
                    </li>
                    <li>
                      <Link to="#">Shorts</Link>
                    </li>
                    <li>
                      <Link to="#">Jeans</Link>
                    </li>
                    <li>
                      <Link to="#">Skirts</Link>
                    </li>
                    <li>
                      <Link to="#">Swimwear</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tt-content-aside">
                <Link to="listing-left-column.html" className="tt-promo-03">
                  <img src="images/custom/listing_promo_img_07.jpg" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-md-12 col-lg-9 col-xl-9">
              <div className="content-indent container-fluid-custom-mobile-padding-02">
                <div className="tt-filters-options">
                  <h1 className="tt-title">
                    WOMEN <span className="tt-title-total">(69)</span>
                  </h1>
                  <div className="tt-btn-toggle">
                    <Link to="#">FILTER</Link>
                  </div>
                  <div className="tt-sort">
                    <select>
                      <option value="Default Sorting">Default Sorting</option>
                      <option value="Default Sorting">
                        Default Sorting 02
                      </option>
                      <option value="Default Sorting">
                        Default Sorting 03
                      </option>
                    </select>
                    <select>
                      <option value="Show">Show</option>
                      <option value="9">9</option>
                      <option value="16">16</option>
                      <option value="32">32</option>
                    </select>
                  </div>
                  <div className="tt-quantity">
                    <Link
                      to="#"
                      className="tt-col-one"
                      data-value="tt-col-one"
                    ></Link>
                    <Link
                      to="#"
                      className="tt-col-two"
                      data-value="tt-col-two"
                    ></Link>
                    <Link
                      to="#"
                      className="tt-col-three"
                      data-value="tt-col-three"
                    ></Link>
                    <Link
                      to="#"
                      className="tt-col-four"
                      data-value="tt-col-four"
                    ></Link>
                    <Link
                      to="#"
                      className="tt-col-six"
                      data-value="tt-col-six"
                    ></Link>
                  </div>
                </div>
                <div className="tt-product-listing row">
                  {props.products.map(prod => (
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
                                src="assets/images/product/product-45.jpg"
                                alt=""
                              />
                            </span>
                            <span className="tt-img-roll-over">
                              <img
                                src="assets/images/product/product-45-01.jpg"
                                alt=""
                              />
                            </span>
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
                            {/* <ul className="tt-add-info">
                              <li>
                                <Link to="#">T-SHIRTS</Link>
                              </li>
                            </ul> */}
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
                            <div className="tt-row-btn">
                              <Link
                                to="#"
                                className="tt-btn-quickview"
                                data-toggle="modal"
                                data-target="#ModalquickView"
                              ></Link>
                              <Link to="#" className="tt-btn-wishlist"></Link>
                              <Link to="#" className="tt-btn-compare"></Link>
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
    products: state.products
  };
};

export default connect(
  mapStateToProps,
  null
)(ProductList);
