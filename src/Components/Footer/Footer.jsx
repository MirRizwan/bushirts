import React from 'react';
import {Link} from 'react-router-dom';
import Newsletter from '../Newsletter/Newsletter';

const Footer = () => {
    return(
        <footer>
			<Newsletter />



	<div className="tt-footer-col tt-color-scheme-01">
		<div className="container">
			<div className="row">
				<div className="col-md-6 col-lg-2 col-xl-3">
					<div className="tt-mobile-collapse">
						<h4 className="tt-collapse-title">
							CATEGORIES
						</h4>
						<div className="tt-collapse-content">
							<ul className="tt-list">
								<li><Link to="listing-collection.html">Women</Link></li>
								<li><Link to="listing-collection.html">Men</Link></li>
								<li><Link to="listing-collection.html">Accessories</Link></li>
								<li><Link to="listing-collection.html">Shoes</Link></li>
								<li><Link to="listing-collection.html">New Arrivals</Link></li>
								<li><Link to="listing-collection.html">Clearence</Link></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-6 col-lg-2 col-xl-3">
					<div className="tt-mobile-collapse">
						<h4 className="tt-collapse-title">
							MY ACCOUNT
						</h4>
						<div className="tt-collapse-content">
							<ul className="tt-list">
								<li><Link to="account_order.html">Orders</Link></li>
								<li><Link to="page404.html">Compare</Link></li>
								<li><Link to="page404.html">Wishlist</Link></li>
								<li><Link to="login.html">Log In</Link></li>
								<li><Link to="create-account.html">Register</Link></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-6 col-lg-4 col-xl-3">
					<div className="tt-mobile-collapse">
						<h4 className="tt-collapse-title">
							CONTACTS
						</h4>
						<div className="tt-collapse-content">
							<address>
								<p><span>Address:</span> 2548 Broaddus Maple Court Avenue, Madisonville KY 4783, United States of America</p>
								<p><span>Phone:</span> +777 2345 7885;  +777 2345 7886</p>
								<p><span>Hours:</span> 7 Days a week from 10 am to 6 pm</p>
								<p><span>E-mail:</span> <Link to="mailto:info@mydomain.com">info@mydomain.com</Link></p>
							</address>
						</div>
					</div>
				</div>
				<div className="col-md-6 col-lg-4 col-xl-3">
					<div className="tt-newsletter">
						<div className="tt-mobile-collapse">
							<h4 className="tt-collapse-title">
								NEWSLETTER SIGNUP
							</h4>
							<div className="tt-collapse-content">
								<p>
									Sign up for our e-mail and be the first who know our special offers! Furthermore, we will give a 15% discount on the next order after you sign up.
								</p>
								<form id="newsletterform" className="form-inline form-default" method="post" noValidate="noValidate" action="#">
									<div className="form-group">
										<input type="text" readOnly name="email" className="form-control" placeholder="Enter your e-mail" />
										<button type="submit" className="btn">JOIN US</button>
									</div>
								</form>
							</div>
						</div>
					</div>
					<ul className="tt-social-icon">
						<li><Link className="icon-g-64" target="_blank" to="http://www.facebook.com/"></Link></li>
						<li><Link className="icon-h-58" target="_blank" to="http://www.facebook.com/"></Link></li>
						<li><Link className="icon-g-66" target="_blank" to="http://www.twitter.com/"></Link></li>
						<li><Link className="icon-g-67" target="_blank" to="http://www.google.com/"></Link></li>
						<li><Link className="icon-g-70" target="_blank" to="https://instagram.com/"></Link></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div className="tt-footer-custom">
		<div className="container">
			<div className="tt-row">
				<div className="tt-col-left">
					<div className="tt-col-item tt-logo-col">
						
						<Link className="tt-logo tt-logo-alignment" to="index.html">
							<img src="assets/images/custom/logo.png" alt="" />
						</Link>
						
					</div>
					<div className="tt-col-item">
					
						<div className="tt-box-copyright">
							&copy; Wokiee 2018. All Rights Reserved
						</div>
						
					</div>
				</div>
				<div className="tt-col-right">
					<div className="tt-col-item">
					
						<ul className="tt-payment-list">
							<li><Link to="page404.html"><span className="icon-Stripe"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span><span className="path9"></span><span className="path10"></span><span className="path11"></span><span className="path12"></span>
			                </span></Link></li>
							<li><Link to="page404.html"> <span className="icon-paypal-2">
			                <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span>
			                </span></Link></li>
							<li><Link to="page404.html"><span className="icon-visa">
			                <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span>
			                </span></Link></li>
							<li><Link to="page404.html"><span className="icon-mastercard">
			                <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span><span className="path9"></span><span className="path10"></span><span className="path11"></span><span className="path12"></span><span className="path13"></span>
			                </span></Link></li>
							<li><Link to="page404.html"><span className="icon-discover">
			                <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span><span className="path9"></span><span className="path10"></span><span className="path11"></span><span className="path12"></span><span className="path13"></span><span className="path14"></span><span className="path15"></span><span className="path16"></span>
			                </span></Link></li>
							<li><Link to="page404.html"><span className="icon-american-express">
			                <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span><span className="path9"></span><span className="path10"></span><span className="path11"></span>
			                </span></Link></li>
						</ul>
					
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>
    )
}
export default Footer;