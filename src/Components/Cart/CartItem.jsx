import React from "react";
import { Link } from "react-router-dom";

import "./Cart.css";

const CartItem = (props) => {
  return (
    <div className="tt-shopcart-table">
      <table>
        <tbody>
          {props.items.map((item) => (
            <tr key={item._id}>
              <td>
                <Link
                  to="#"
                  className="tt-btn-close"
                  onClick={() => props.removeItem(item)}
                ></Link>
              </td>
              <td>
                <div className="tt-product-img">
                  <img src={item.imgUrl} alt="" />
                </div>
              </td>
              <td>
                <h1 className="tt-title cartTitle">
                  <Link to="#">{item.title}</Link>
                </h1>
                <h1 className="tt-title">Color: {item.color}</h1>
                <h1 className="tt-title">Texture: {item.texture}</h1>
                <h1 className="tt-title">Size: {item.size}</h1>
                <ul className="tt-list-parameters">
                  <li>
                    <div className="tt-price">{item.unitPrice}</div>
                  </li>
                  <li>
                    <div className="detach-quantity-mobile"></div>
                  </li>
                  <li>
                    <div className="tt-price subtotal">{item.price}</div>
                  </li>
                </ul>
              </td>
              <td>
                <div className="tt-price">{item.unitPrice}</div>
              </td>
              <td>
                <div className="detach-quantity-desctope">
                  <div className="tt-input-counter style-01">
                    <span
                      className="minus-btn"
                      onClick={() => props.decrease(item)}
                    ></span>
                    <input type="text" value={item.qty} size="5" />
                    <span
                      className="plus-btn"
                      onClick={() => props.increase(item)}
                    ></span>
                  </div>
                </div>
              </td>
              <td>
                <div className="tt-price subtotal">{item.price}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="tt-shopcart-btn">
        <div className="col-left">
          <Link className="btn-link" href="/products">
            <i className="icon-e-19"></i>CONTINUE SHOPPING
          </Link>
        </div>
        <div className="col-right">
          <Link className="btn-link" href="#">
            <i className="icon-h-02"></i>CLEAR SHOPPING CART
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
