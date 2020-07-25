import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './SideBar.css';

const SideBar = props => {
  const categoryArray = [];

  props.products.map((s) => (
    s.category.map((l) => (
      categoryArray.push(l)
    ))

  ))

  const categorySingle = categoryArray.filter((v, i, a) => a.indexOf(v) === i);
  return (
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

            {categorySingle.map((l) => (
              <li >
                <Link to={`/category/${l}`}>{l.replace(/-/g," ")}</Link>
              </li>
            ))
            }
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
                <h6 className="tt-title">new Item</h6>
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

          </ul>
        </div>
      </div>
      <div className="tt-content-aside">
        <Link to="listing-left-column.html" className="tt-promo-03">
          <img src="/assets/images/custom/listing_promo_img_07.jpg" alt="" />
        </Link>
      </div>
    </div>
  )

}

const mapStateToProps = state => {
  return {
    products: state.Products.products
  };
};

export default connect(
  mapStateToProps, null
)(SideBar);
