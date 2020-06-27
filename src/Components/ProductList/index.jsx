import React from "react";
import { connect } from "react-redux";

const ProductList = props => {
  console.log("Products listing", props);
  return (
    <div id="tt-pageContent">
      <div className="container-indent">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-3 col-xl-3 leftColumn aside">
              <div className="tt-btn-col-close">
                <a href="#">Close</a>
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
                      <a href="#">Shirts &amp; Tops</a>
                    </li>
                    <li>
                      <a href="#">XS</a>
                    </li>
                    <li>
                      <a href="#">White</a>
                    </li>
                  </ul>
                  <a href="#" className="btn-link-02">
                    Clear All
                  </a>
                </div>
              </div>
              <div className="tt-collapse open">
                <h3 className="tt-collapse-title">PRODUCT CATEGORIES</h3>
                <div className="tt-collapse-content">
                  <ul className="tt-list-row">
                    <li className="active">
                      <a href="#">Dresses</a>
                    </li>
                    <li>
                      <a href="#">Shirts &amp; Tops</a>
                    </li>
                    <li>
                      <a href="#">Polo Shirts</a>
                    </li>
                    <li>
                      <a href="#">Sweaters</a>
                    </li>
                    <li>
                      <a href="#">Blazers &amp; Vests</a>
                    </li>
                    <li>
                      <a href="#">Jackets &amp; Outerwear</a>
                    </li>
                    <li>
                      <a href="#">Activewear</a>
                    </li>
                    <li>
                      <a href="#">Pants</a>
                    </li>
                    <li>
                      <a href="#">Jumpsuits &amp; Shorts</a>
                    </li>
                    <li>
                      <a href="#">Jeans</a>
                    </li>
                    <li>
                      <a href="#">Skirts</a>
                    </li>
                    <li>
                      <a href="#">Swimwear</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tt-collapse open">
                <h3 className="tt-collapse-title">FILTER BY PRICE</h3>
                <div className="tt-collapse-content">
                  <ul className="tt-list-row">
                    <li className="active">
                      <a href="#">$0 — $50</a>
                    </li>
                    <li>
                      <a href="#">$50 — $100</a>
                    </li>
                    <li>
                      <a href="#">$100 — $150</a>
                    </li>
                    <li>
                      <a href="#">$150 — $200</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tt-collapse open">
                <h3 className="tt-collapse-title">FILTER BY SIZE</h3>
                <div className="tt-collapse-content">
                  <ul className="tt-options-swatch options-middle">
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li className="active">
                      <a href="#">6</a>
                    </li>
                    <li>
                      <a href="#">8</a>
                    </li>
                    <li>
                      <a href="#">10</a>
                    </li>
                    <li>
                      <a href="#">12</a>
                    </li>
                    <li>
                      <a href="#">14</a>
                    </li>
                    <li>
                      <a href="#">16</a>
                    </li>
                    <li>
                      <a href="#">18</a>
                    </li>
                    <li>
                      <a href="#">20</a>
                    </li>
                    <li>
                      <a href="#">22</a>
                    </li>
                    <li>
                      <a href="#">24</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tt-collapse open">
                <h3 className="tt-collapse-title">FILTER BY COLOR</h3>
                <div className="tt-collapse-content">
                  <ul className="tt-options-swatch options-middle">
                    <li>
                      <a
                        className="options-color tt-border tt-color-bg-08"
                        href="#"
                      ></a>
                    </li>
                    <li>
                      <a className="options-color tt-color-bg-09" href="#"></a>
                    </li>
                    <li className="active">
                      <a className="options-color tt-color-bg-10" href="#"></a>
                    </li>
                    <li>
                      <a className="options-color tt-color-bg-11" href="#"></a>
                    </li>
                    <li>
                      <a className="options-color tt-color-bg-12" href="#"></a>
                    </li>
                    <li>
                      <a className="options-color tt-color-bg-13" href="#"></a>
                    </li>
                    <li>
                      <a className="options-color tt-color-bg-14" href="#"></a>
                    </li>
                    <li>
                      <a className="options-color tt-color-bg-15" href="#"></a>
                    </li>
                    <li>
                      <a className="options-color tt-color-bg-16" href="#"></a>
                    </li>
                    <li>
                      <a className="options-color tt-color-bg-17" href="#"></a>
                    </li>
                    <li>
                      <a className="options-color tt-color-bg-18" href="#"></a>
                    </li>
                    <li>
                      <a className="options-color" href="#">
                        <span className="swatch-img">
                          <img src="images/custom/texture-img-01.jpg" alt="" />
                        </span>
                        <span className="swatch-label color-black"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tt-collapse open">
                <h3 className="tt-collapse-title">VENDOR</h3>
                <div className="tt-collapse-content">
                  <ul className="tt-list-row">
                    <li>
                      <a href="#">Levi's</a>
                    </li>
                    <li>
                      <a href="#">Gap</a>
                    </li>
                    <li>
                      <a href="#">Polo</a>
                    </li>
                    <li>
                      <a href="#">Lacoste</a>
                    </li>
                    <li>
                      <a href="#">Guess</a>
                    </li>
                  </ul>
                  <a href="#" className="btn-link-02">
                    + More
                  </a>
                </div>
              </div>
              <div className="tt-collapse open">
                <h3 className="tt-collapse-title">SALE PRODUCTS</h3>
                <div className="tt-collapse-content">
                  <div className="tt-aside">
                    <a className="tt-item" href="product.html">
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
                    </a>
                    <a className="tt-item" href="product.html">
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
                    </a>
                    <a className="tt-item" href="product.html">
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
                    </a>
                  </div>
                </div>
              </div>
              <div className="tt-collapse open">
                <h3 className="tt-collapse-title">TAGS</h3>
                <div className="tt-collapse-content">
                  <ul className="tt-list-inline">
                    <li>
                      <a href="#">Dresses</a>
                    </li>
                    <li>
                      <a href="#">Shirts &amp; Tops</a>
                    </li>
                    <li>
                      <a href="#">Polo Shirts</a>
                    </li>
                    <li>
                      <a href="#">Sweaters</a>
                    </li>
                    <li>
                      <a href="#">Blazers</a>
                    </li>
                    <li>
                      <a href="#">Vests</a>
                    </li>
                    <li>
                      <a href="#">Jackets</a>
                    </li>
                    <li>
                      <a href="#">Outerwear</a>
                    </li>
                    <li>
                      <a href="#">Activewear</a>
                    </li>
                    <li>
                      <a href="#">Pants</a>
                    </li>
                    <li>
                      <a href="#">Jumpsuits</a>
                    </li>
                    <li>
                      <a href="#">Shorts</a>
                    </li>
                    <li>
                      <a href="#">Jeans</a>
                    </li>
                    <li>
                      <a href="#">Skirts</a>
                    </li>
                    <li>
                      <a href="#">Swimwear</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tt-content-aside">
                <a href="listing-left-column.html" className="tt-promo-03">
                  <img src="images/custom/listing_promo_img_07.jpg" alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-12 col-lg-9 col-xl-9">
              <div className="content-indent container-fluid-custom-mobile-padding-02">
                <div className="tt-filters-options">
                  <h1 className="tt-title">
                    WOMEN <span className="tt-title-total">(69)</span>
                  </h1>
                  <div className="tt-btn-toggle">
                    <a href="#">FILTER</a>
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
                    <a
                      href="#"
                      className="tt-col-one"
                      data-value="tt-col-one"
                    ></a>
                    <a
                      href="#"
                      className="tt-col-two"
                      data-value="tt-col-two"
                    ></a>
                    <a
                      href="#"
                      className="tt-col-three"
                      data-value="tt-col-three"
                    ></a>
                    <a
                      href="#"
                      className="tt-col-four"
                      data-value="tt-col-four"
                    ></a>
                    <a
                      href="#"
                      className="tt-col-six"
                      data-value="tt-col-six"
                    ></a>
                  </div>
                </div>
                <div className="tt-product-listing row">
                  {props.products.map(prod => (
                    <div className="col-6 col-md-4 tt-col-item">
                      <div className="tt-product thumbprod-center">
                        <div className="tt-image-box">
                          <a
                            href="#"
                            className="tt-btn-quickview"
                            data-toggle="modal"
                            data-target="#ModalquickView"
                            data-tooltip="Quick View"
                            data-tposition="left"
                          ></a>
                          <a
                            href="#"
                            className="tt-btn-wishlist"
                            data-tooltip="Add to Wishlist"
                            data-tposition="left"
                          ></a>
                          <a
                            href="#"
                            className="tt-btn-compare"
                            data-tooltip="Add to Compare"
                            data-tposition="left"
                          ></a>
                          <a href="product.html">
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
                          </a>
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
                          <div className="tt-row">
                            <ul className="tt-add-info">
                              <li>
                                <a href="#">T-SHIRTS</a>
                              </li>
                            </ul>
                            <div className="tt-rating">
                              <i className="icon-star"></i>
                              <i className="icon-star"></i>
                              <i className="icon-star"></i>
                              <i className="icon-star"></i>
                              <i className="icon-star"></i>
                            </div>
                          </div>
                          <h2 className="tt-title">
                            <a href="product.html">{prod.title}</a>
                          </h2>
                          <div className="tt-price">${prod.price}</div>
                          <div className="tt-option-block">
                            <ul className="tt-options-swatch">
                              <li>
                                <a
                                  className="options-color tt-color-bg-03"
                                  href="#"
                                ></a>
                              </li>
                              <li>
                                <a
                                  className="options-color tt-color-bg-04"
                                  href="#"
                                ></a>
                              </li>
                              <li>
                                <a
                                  className="options-color tt-color-bg-05"
                                  href="#"
                                ></a>
                              </li>
                            </ul>
                          </div>
                          <div className="tt-product-inside-hover">
                            <div className="tt-row-btn">
                              <a
                                href="#"
                                className="tt-btn-addtocart thumbprod-button-bg"
                                data-toggle="modal"
                                data-target="#modalAddToCartProduct"
                              >
                                ADD TO CART
                              </a>
                            </div>
                            <div className="tt-row-btn">
                              <a
                                href="#"
                                className="tt-btn-quickview"
                                data-toggle="modal"
                                data-target="#ModalquickView"
                              ></a>
                              <a href="#" className="tt-btn-wishlist"></a>
                              <a href="#" className="tt-btn-compare"></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center tt_product_showmore">
                  <a href="#" className="btn btn-border">
                    LOAD MORE
                  </a>
                  <div className="tt_item_all_js">
                    <a href="#" className="btn btn-border01">
                      NO MORE ITEM TO SHOW
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
