import React from 'react';
import {Link} from 'react-router-dom';


const HomeOffersPanel = () => {
    return(
        <div className="nomargin container-indent">
			<div className="container-fluid-custom">
				<div className="row">
					<div className="col-sm-12 col-md-6">
						<Link to="listing-left-column.html" className="tt-promo-box tt-one-child hover-type-2">
							{/* <img src="assets/images/promo/index05-promo-img-01.jpg" alt="" /> */}
							<img src="assets/images/promo/index05-promo-img-01.jpg" alt="" />
							<div className="tt-description">
								<div className="tt-description-wrapper">
									<div className="tt-background"></div>
									<div className="tt-title-small">WOMEN</div>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-sm-12 col-md-6">
						<Link to="listing-left-column.html" className="tt-promo-box tt-one-child hover-type-2">
							{/* <img src="assets/images/promo/index05-promo-img-02.jpg" alt="" /> */}
							<img src="assets/images/promo/index05-promo-img-02.jpg" alt="" />
							<div className="tt-description">
								<div className="tt-description-wrapper">
									<div className="tt-background"></div>
									<div className="tt-title-small">MEN</div>
								</div>
							</div>
						</Link>
						<Link to="listing-left-column.html" className="tt-promo-box tt-one-child hover-type-2">
							{/* <img src="assets/images/promo/index05-promo-img-03.jpg" alt="" /> */}
							<img src="assets/images/promo/index05-promo-img-03.jpg" alt="" />
							<div className="tt-description">
								<div className="tt-description-wrapper">
									<div className="tt-background"></div>
									<div className="tt-title-small">SHOES</div>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
    )
}

export default HomeOffersPanel;