import React from 'react';

import TopMenu from '../TopMenu/TopMenu';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import DesktopNavigation from '../DesktopNavigation/DesktopNavigation';

const Header = () => {

	return(
        <header>
			<TopMenu />
			<MobileNavigation />
			<DesktopNavigation />
	
	
			<div className="tt-stuck-nav">
				<div className="container">
					<div className="tt-header-row ">
						<div className="tt-stuck-parent-menu"></div>
						<div className="tt-stuck-parent-search tt-parent-box"></div>
						<div className="tt-stuck-parent-cart tt-parent-box"></div>
						<div className="tt-stuck-parent-account tt-parent-box"></div>
						<div className="tt-stuck-parent-multi tt-parent-box"></div>
					</div>
				</div>
			</div>
		</header>
    )
}

export default Header;
