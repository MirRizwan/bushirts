import React from 'react';

const Cart = props => {
    return(
        <React.Fragment>
            <div className="tt-breadcrumb">
	<div className="container">
		<ul>
			<li><a href="index.html">Home</a></li>
			<li>Shopping Cart</li>
		</ul>
	</div>
</div>
<div id="tt-pageContent">
	<div className="container-indent">
		<div className="container">
			<h1 className="tt-title-subpages noborder">SHOPPING CART</h1>
			<div className="row">
				<div className="col-sm-12 col-xl-8">
					<div className="tt-shopcart-table">
						<table>
							<tbody>
								<tr>
									<td>
										<a href="#" className="tt-btn-close"></a>
									</td>
									<td>
										<div className="tt-product-img">
											<img src="/assets/images/product/product-01.jpg" alt="" />
										</div>
									</td>
									<td>
										<h2 className="tt-title">
											<a href="#">Flared Shift Dress</a>
										</h2>
										<ul className="tt-list-parameters">
											<li>
												<div className="tt-price">
													$124
												</div>
											</li>
											<li>
												<div className="detach-quantity-mobile"></div>
											</li>
											<li>
												<div className="tt-price subtotal">
													$124
												</div>
											</li>
										</ul>
									</td>
									<td>
										<div className="tt-price">
											$124
										</div>
									</td>
									<td>
										<div className="detach-quantity-desctope">
											<div className="tt-input-counter style-01">
												<span className="minus-btn"></span>
												<input type="text" value="1" size="5" />
												<span className="plus-btn"></span>
											</div>
										</div>
									</td>
									<td>
										<div className="tt-price subtotal">
											$124
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<a href="#" className="tt-btn-close"></a>
									</td>
									<td>
										<div className="tt-product-img">
											<img src="/assets/images/product/product-02.jpg" alt="" />
										</div>
									</td>
									<td>
										<h2 className="tt-title">
											<a href="#">Flared Shift Dress</a>
										</h2>
										<ul className="tt-list-parameters">
											<li>
												<div className="tt-price">
													$12
												</div>
											</li>
											<li>
												<div className="detach-quantity-mobile"></div>
											</li>
											<li>
												<div className="tt-price subtotal">
													$12
												</div>
											</li>
										</ul>
									</td>
									<td>
										<div className="tt-price">
											$12
										</div>
									</td>
									<td>
										<div className="detach-quantity-desctope">
											<div className="tt-input-counter style-01">
												<span className="minus-btn"></span>
												<input type="text" value="1" size="5" />
												<span className="plus-btn"></span>
											</div>
										</div>
									</td>
									<td>
										<div className="tt-price subtotal">
											$12
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<a href="#" className="tt-btn-close"></a>
									</td>
									<td>
										<div className="tt-product-img">
											<img src="/assets/images/product/product-03.jpg"  alt="" />
										</div>
									</td>
									<td>
										<h2 className="tt-title">
											<a href="#">Flared Shift Dress</a>
										</h2>
										<ul className="tt-list-parameters">
											<li>
												<div className="tt-price">
													$317
												</div>
											</li>
											<li>
												<div className="detach-quantity-mobile"></div>
											</li>
											<li>
												<div className="tt-price subtotal">
													$317
												</div>
											</li>
										</ul>
									</td>
									<td>
										<div className="tt-price">
											$317
										</div>
									</td>
									<td>
										<div className="detach-quantity-desctope">
											<div className="tt-input-counter style-01">
												<span className="minus-btn"></span>
												<input type="text" value="1" size="5" />
												<span className="plus-btn"></span>
											</div>
										</div>
									</td>
									<td>
										<div className="tt-price subtotal">
											$317
										</div>
									</td>
								</tr>
							</tbody>
						</table>
						<div className="tt-shopcart-btn">
							<div className="col-left">
								<a className="btn-link" href="#"><i className="icon-e-19"></i>CONTINUE SHOPPING</a>
							</div>
							<div className="col-right">
								<a className="btn-link" href="#"><i className="icon-h-02"></i>CLEAR SHOPPING CART</a>
								<a className="btn-link" href="#"><i className="icon-h-48"></i>UPDATE CART</a>
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
								<a href="#" className="btn btn-border">CALCULATE SHIPPING</a>
								<p>
									There is one shipping rate available for Alabama, Tanzania, United Republic Of.
								</p>
								<ul className="tt-list-dot list-dot-large">
									<li><a href="#">International Shipping at $20.00</a></li>
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
							<a href="#" className="btn btn-lg"><span className="icon icon-check_circle"></span>PROCEED TO CHECKOUT</a>
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

export default Cart;