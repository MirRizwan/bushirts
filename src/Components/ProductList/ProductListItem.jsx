import React from "react";
import { Link } from "react-router-dom";

const ProductListItem = (props) => {
  return (
    <div className="tt-product-listing row">
      {props.products.map((prod) => (
        <div className="col-6 col-md-4 col-lg-3 col-xl-3 tt-col-item">
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
                  <img src={prod.imgUrl} alt={prod.title} />
                </span>
                <span className="tt-img-roll-over">
                  <img src={prod.imgUrl1} alt={prod.title} />
                </span>
                {prod.stock === 0 && (
                  <span className="tt-label-location">
                    <span className="tt-label-our-stock">Out Of Stock</span>
                  </span>
                )}
                {prod.salePrice && (
                  <span className="tt-label-location">
                    <span className="tt-label-sale">Sale 40%</span>
                  </span>
                )}
              </Link>
            </div>
            <div className="tt-description">
              <h2 className="tt-title">
                <Link to={`product/${prod._id}`}>{prod.title}</Link>
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
                  <i className="icon-star-half"></i>
                  <i className="icon-star-empty"></i>
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
                    onClick={() => props.getProductId(prod._id)}
                    className="tt-btn-addtocart thumbprod-button-bg tt-btn-quickview"
                    data-toggle="modal"
                    data-target="#modalAddToCartProduct"
                  >
                    QUICK VIEW
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
  );
};

export default ProductListItem;
