import React from 'react';
import {Link} from 'react-router-dom';

import './UserOptions.css';

const UserOptions = (props) => {
    return(
        <div className="tt-desctop-parent-account tt-parent-box">
            <div className="tt-account tt-dropdown-obj">
                <button className="tt-dropdown-toggle" onClick={()=>props.toggleAccountBar()} data-tooltip="My Account" data-tposition="bottom"><i className="icon-f-94"></i></button>
                <div className={props.toggleAccountBarClass()}>
                    <div className="tt-mobile-add">
                        <button className="tt-close">Close</button>
                    </div>
                    <div className="tt-dropdown-inner">
                        <ul>
                            <li><Link to="login.html"><i className="icon-f-94"></i>Account</Link></li>
                            <li><Link to="wishlist.html"><i className="icon-n-072"></i>Wishlist</Link></li>
                            <li><Link to="compare.html"><i className="icon-n-08"></i>Compare</Link></li>
                            <li><Link to="page404.html"><i className="icon-f-68"></i>Check Out</Link></li>
                            <li><Link to="login.html"><i className="icon-f-76"></i>Sign In</Link></li>
                            <li><Link to="page404.html"><i className="icon-f-77"></i>Sign Out</Link></li>
                            <li><Link to="create-account.html"><i className="icon-f-94"></i>Register</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserOptions;