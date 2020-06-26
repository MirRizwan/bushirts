import React from 'react';
import {Link} from 'react-router-dom';

const TopMenu = () =>{
    return(
        <div className="tt-color-scheme-01">
            <div className="container">
                <div className="tt-header-row tt-top-row">
                    <div className="tt-col-left">
                        <div className="tt-box-info">
                            <ul>
                                <li>
                                    <i className="icon-f-93"></i>
                                    <Link to="tel:+923453321108">+92 345 3321108</Link>;
                                    <Link to="tel:+923322958951">+92 332 2958951</Link></li>
                                <li><i className="icon-f-92"></i>7 DAYS A WEEK FROM 10 AM TO 6 PM </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tt-col-right ml-auto">
                        <ul className="tt-social-icon">
                            <li><Link className="icon-g-64" target="_blank" to="http://www.facebook.com/"></Link></li>
                            <li><Link className="icon-h-58" target="_blank" to="http://www.twitter.com/"></Link></li>
                            <li><Link className="icon-g-66" target="_blank" to="http://www.google.com/"></Link></li>
                            <li><Link className="icon-g-67" target="_blank" to="http://www.instagram.com/"></Link></li>
                            <li><Link className="icon-g-70" target="_blank" to="#"></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopMenu;