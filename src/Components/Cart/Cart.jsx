import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CartItem from "./CartItem";

const Cart = (props) => {
  if (props.cart.length === 0) {
    return (
      <React.Fragment>
        <div className="tt-breadcrumb">
          <div className="container">
            <ul>
              <li>
                <Link to="index.html">Home</Link>
              </li>
              <li>Shopping Cart</li>
            </ul>
          </div>
        </div>

        <div className="tt-offset-0 container-indent">
          <div className="tt-page404">
            <h1 className="tt-title">No Products in the Cart</h1>

            <Link to="/products" className="btn">
              CONTINUE SHOPPING
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <div className="tt-breadcrumb">
        <div className="container">
          <ul>
            <li>
              <Link to="index.html">Home</Link>
            </li>
            <li>Shopping Cart</li>
          </ul>
        </div>
      </div>
      <div id="tt-pageContent">
        <div className="container-indent">
          <div className="container">
            <h1 className="tt-title-subpages noborder">YOUR SHOPPING CART</h1>
            <div className="row">
              <div className="col-sm-12 col-xl-8">
                <CartItem
                  items={props.cart}
                  removeItem={props.removeItem}
                  increase={props.increaseItemQty}
                  decrease={props.decreaseItemQty}
                />
              </div>
              <div className="col-sm-12 col-xl-4">
                <div className="tt-shopcart-wrapper">
                  <div className="tt-shopcart-box">
                    <h4 className="tt-title">ESTIMATE SHIPPING AND TAX</h4>
                    <p>Enter your destination to get a shipping estimate.</p>
                    <form className="form-default">
                      <div className="form-group">
                        <label htmlFor="address_country">
                          COUNTRY <sup>*</sup>
                        </label>
                        <select id="address_country" className="form-control">
                          <option>Austria</option>
                          <option>Belgium</option>
                          <option>Cyprus</option>
                          <option>Croatia</option>
                          <option>Czech Republic</option>
                          <option>Denmark</option>
                          <option>Finland</option>
                          <option>France</option>
                          <option>Germany</option>
                          <option>Greece</option>
                          <option>Hungary</option>
                          <option>Ireland</option>
                          <option>France</option>
                          <option>Italy</option>
                          <option>Luxembourg</option>
                          <option>Netherlands</option>
                          <option>Poland</option>
                          <option>Portugal</option>
                          <option>Slovakia</option>
                          <option>Slovenia</option>
                          <option>Spain</option>
                          <option>United Kingdom</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="address_province">
                          STATE/PROVINCE <sup>*</sup>
                        </label>
                        <select id="address_province" className="form-control">
                          <option>State/Province</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="address_zip">
                          ZIP/POSTAL CODE <sup>*</sup>
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="address_zip"
                          placeholder="Zip/Postal Code"
                        />
                      </div>
                      <Link to="#" className="btn btn-border">
                        CALCULATE SHIPPING
                      </Link>
                      <p>
                        There is one shipping rate available for Alabama,
                        Tanzania, United Republic Of.
                      </p>
                      <ul className="tt-list-dot list-dot-large">
                        <li>
                          <Link to="#">International Shipping at $20.00</Link>
                        </li>
                      </ul>
                    </form>
                  </div>
                  <div className="tt-shopcart-box">
                    <h4 className="tt-title">NOTE</h4>
                    <p>Add special instructions for your order...</p>
                    <form className="form-default">
                      <textarea className="form-control" rows="7"></textarea>
                    </form>
                  </div>
                  <div className="tt-shopcart-box tt-boredr-large">
                    <table className="tt-shopcart-table01">
                      <tbody>
                        <tr>
                          <th>SUBTOTAL</th>
                          <td>$324</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th>GRAND TOTAL</th>
                          <td>PKR {props.totalAmount}</td>
                        </tr>
                      </tfoot>
                    </table>
                    <Link to="#" className="btn btn-lg">
                      <span className="icon icon-check_circle"></span>PROCEED TO
                      CHECKOUT
                    </Link>
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
    cart: state.Cart.cart,
    totalAmount: state.Cart.totalAmount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (item) => dispatch({ type: "REMOVE_CART", payload: item }),
    increaseItemQty: (item) => dispatch({ type: "INCREASE", payload: item }),
    decreaseItemQty: (item) => dispatch({ type: "DECREASE", payload: item }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
