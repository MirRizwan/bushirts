import React from 'react';
import {Link} from 'react-router-dom';


const SocialBar = ()=>{
    return(
        <div className="container-indent wrapper-social-icon">
        <div className="container">
          <ul className="tt-social-icon justify-content-center">
            <li>
              <Link className="icon-g-64" to="http://www.facebook.com/"></Link>
            </li>
            <li>
              <Link className="icon-h-58" to="http://www.facebook.com/"></Link>
            </li>
            <li>
              <Link className="icon-g-66" to="http://www.twitter.com/"></Link>
            </li>
            <li>
              <Link className="icon-g-67" to="http://www.google.com/"></Link>
            </li>
            <li>
              <Link className="icon-g-70" to="https://instagram.com/"></Link>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default SocialBar;