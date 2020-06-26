import React from 'react';
import {Link} from 'react-router-dom';

const ShortServices = () =>{
    return(
        <div className="container-indent">
						<div className="container">
							<div className="row tt-services-listing tt-services-listing-aligment">
								<div className="col-xs-12 col-md-6 col-lg-4">
									<Link className="tt-services-block">
										<div className="tt-col-icon">
											<i className="icon-f-48"></i>
										</div>
										<div className="tt-col-description">
											<h4 className="tt-title">FREE SHIPPING</h4>
											<p>Free shipping on all US order or order above $99</p>
										</div>
									</Link>
								</div>
								<div className="col-xs-12 col-md-6 col-lg-4">
									<Link className="tt-services-block">
										<div className="tt-col-icon">
											<i className="icon-f-35"></i>
										</div>
										<div className="tt-col-description">
											<h4 className="tt-title">SUPPORT 24/7</h4>
											<p>Contact us 24 hours a day, 7 days a week</p>
										</div>
									</Link>
								</div>
								<div className="col-xs-12 col-md-6 col-lg-4">
									<Link className="tt-services-block">
										<div className="tt-col-icon">
											<i className="icon-e-09"></i>
										</div>
										<div className="tt-col-description">
											<h4 className="tt-title">30 DAYS RETURN</h4>
											<p>Simply return it within 24 days for an exchange.</p>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
    )
}

export default ShortServices;
