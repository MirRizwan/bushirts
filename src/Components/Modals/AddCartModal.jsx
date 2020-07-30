import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

const AddCartModal = (props) => {
  const textCenter = {
    textAlign: "center",
  };
  return (
    <Modal
      isOpen={props.cartAddedModal}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => props.setCartAddedModal(false)}
      style={{
        overlay: {
          background: "rgba(0,0,0,0.6)",
          zIndex: "9999",
        },
        content: {
          position: "absolute",
          width: "50%",
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
          padding: "20px",
        },
      }}
    >
      <div className="modal-content ">
        <div className="modal-header">
          <button
            type="button"
            className="close"
            onClick={() => props.setCartAddedModal(false)}
            ariaHidden="true"
          >
            <span className="icon icon-clear"></span>
          </button>
        </div>
        <div className="modal-body">
          <div className="tt-modal-addtocart mobile">
            <div className="tt-modal-messages">
              <i className="icon-f-68"></i> Added to cart successfully!
            </div>
            <Link to="#" className="btn-link btn-close-popup">
              CONTINUE SHOPPING
            </Link>
            <Link to="shopping_cart_02.html" className="btn-link">
              VIEW CART
            </Link>
            <Link to="page404.html" className="btn-link">
              PROCEED TO CHECKOUT
            </Link>
          </div>
          <div className="tt-modal-addtocart desctope">
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="tt-modal-messages">
                  <i className="icon-f-68"></i> Added to cart successfully!
                </div>
                <div className="tt-modal-product" style={textCenter}>
                  <div className="tt-img">
                    <img
                      src="/assets/images/product/product-01.jpg"
                      data-src="images/product/product-01.jpg"
                      alt=""
                      className="loaded"
                      data-was-processed="true"
                    />
                  </div>
                  <h2 className="tt-title">
                    <Link href="product.html">Flared Shift Dress</Link>
                  </h2>
                  <div className="tt-qty">
                    QTY: <span>1</span>
                  </div>
                </div>
                <div className="tt-product-total" style={textCenter}>
                  <div className="tt-total">
                    PRICE: <span className="tt-price">$324</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <Link to="#" className="tt-cart-total">
                  There are 1 items in your cart
                  <div className="tt-total">
                    TOTAL: <span className="tt-price">$324</span>
                  </div>
                </Link>
                <Link to="#" className="btn btn-border btn-close-popup">
                  CONTINUE SHOPPING
                </Link>
                <Link href="shopping_cart_02.html" className="btn btn-border">
                  VIEW CART
                </Link>
                <Link to="#" className="btn">
                  PROCEED TO CHECKOUT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddCartModal;
