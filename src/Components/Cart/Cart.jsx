import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';



const Cart = props => {
	if(props.cart.length === 0){
		return (
			<div style={ {textAlign:"center"} }>
				<h3>No Products in the Cart</h3>
				<Link className="btn-link" to="/products"><i className="icon-e-19"></i>CONTINUE SHOPPING</Link>
			</div>
		)
	}
    return(
        <React.Fragment>
            <div className="tt-breadcrumb">
	<div className="container">
		<ul>
			<li><Link to="index.html">Home</Link></li>
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
					<div className="tt-shopcart-table">
						<table>
							<tbody>
								{
									props.cart.map( item =>(
										<tr key={item._id}>
									<td>
										<Link to="#" className="tt-btn-close"></Link>
									</td>
									<td>
										<div className="tt-product-img">
											<img src={item.imgUrl} alt="" />
										</div>
									</td>
									<td>
										<h2 className="tt-title">
											<Link to="#">{item.title}</Link>
										</h2>
										<ul className="tt-list-parameters">
											<li>
												<div className="tt-price">
													{item.unitPrice}
												</div>
											</li>
											<li>
												<div className="detach-quantity-mobile"></div>
											</li>
											<li>
												<div className="tt-price subtotal">
													{item.price}
												</div>
											</li>
										</ul>
									</td>
									<td>
										<div className="tt-price">
										{item.unitPrice}
										</div>
									</td>
									<td>
										<div className="detach-quantity-desctope">
											<div className="tt-input-counter style-01">
												<span className="minus-btn"></span>
												<input type="text" value={item.qty} size="5" />
												<span className="plus-btn"></span>
											</div>
										</div>
									</td>
									<td>
										<div className="tt-price subtotal">
										{item.price}
										</div>
									</td>
								</tr>
									))
								}
								
							</tbody>
						</table>
						<div className="tt-shopcart-btn">
							<div className="col-left">
								<Link className="btn-link" href="/products"><i className="icon-e-19"></i>CONTINUE SHOPPING</Link>
							</div>
							<div className="col-right">
								<Link className="btn-link" href="#"><i className="icon-h-02"></i>CLEAR SHOPPING CART</Link>
								<Link className="btn-link" href="#"><i className="icon-h-48"></i>UPDATE CART</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="col-sm-12 col-xl-4">
					<div className="tt-shopcart-wrapper">
						<div className="tt-shopcart-box">
							<h4 className="tt-title">
								ESTIMATE SHIPPING AND TAX
							</h4>
							<p>Enter your destination to get a shipping estimate.</p>
							<form className="form-default">
								<div className="form-group">
									<label htmlFor="address_country">COUNTRY <sup>*</sup></label>
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
									<label hrmlFor="address_province">STATE/PROVINCE <sup>*</sup></label>
									<select id="address_province" className="form-control">
										<option>State/Province</option>
									</select>
								</div>
								<div className="form-group">
									<label for="address_zip">ZIP/POSTAL CODE <sup>*</sup></label>
									<input type="text" name="name" className="form-control" id="address_zip" placeholder="Zip/Postal Code" />
								</div>
								<Link to="#" className="btn btn-border">CALCULATE SHIPPING</Link>
								<p>
									There is one shipping rate available for Alabama, Tanzania, United Republic Of.
								</p>
								<ul className="tt-list-dot list-dot-large">
									<li><Link to="#">International Shipping at $20.00</Link></li>
								</ul>
							</form>
						</div>
						<div className="tt-shopcart-box">
							<h4 className="tt-title">
								NOTE
							</h4>
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
										<td>$324</td>
									</tr>
								</tfoot>
							</table>
							<Link to="#" className="btn btn-lg"><span className="icon icon-check_circle"></span>PROCEED TO CHECKOUT</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
        </React.Fragment>
    )
}


const mapStateToProps = state => {
	return{
		cart : state.Cart.cart
	}
}

export default connect(mapStateToProps, null)(Cart);