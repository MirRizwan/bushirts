import React from 'react';
import { Link } from 'react-router-dom';

const Newsletter = () => {
	return (
		<div className="tt-footer-default tt-color-scheme-02">
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-9">
						<div className="tt-newsletter-layout-01">
							<div className="tt-newsletter">
								<div className="tt-mobile-collapse">
									<h4 className="tt-collapse-title">BE IN TOUCH WITH US:</h4>
									<div className="tt-collapse-content">
										<form
											className="form-inline form-default"
											method="post"
											noValidate="novalidate"
											action="#"
										>
											<div className="form-group">
												<input
													type="text"
													name="email"
													className="form-control"
													placeholder="Enter your e-mail"
												/>
												<button type="submit" className="btn">
													JOIN US
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-auto">
						<ul className="tt-social-icon">
							<li>
								<Link className="icon-g-64" target="_blank" to="http://www.facebook.com/" />
							</li>
							<li>
								<Link className="icon-h-58" target="_blank" to="http://www.facebook.com/" />
							</li>
							<li>
								<Link className="icon-g-66" target="_blank" to="http://www.twitter.com/" />
							</li>
							<li>
								<Link className="icon-g-67" target="_blank" to="http://www.google.com/" />
							</li>
							<li>
								<Link className="icon-g-70" target="_blank" to="https://instagram.com/" />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};


export default Newsletter;