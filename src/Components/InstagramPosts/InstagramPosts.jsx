import React from 'react';
import {Link} from 'react-router-dom';

const InstagramPosts = () => {
    return(
        <div className="container-indent">
            <div className="container-fluid">
                <div className="tt-block-title">
                    <h2 className="tt-title"><Link target="_blank" to="https://www.instagram.com/wokieeshop/">@ FOLLOW</Link> US ON</h2>
                    <div className="tt-description">INSTAGRAM</div>
                </div>
                <div className="row">
                    <div id="instafeed" className="instafeed-fluid"
                        data-accesstoken="8626857013.dd09515.0fcd8351c65140d48f5a340693af1c3f"
                        data-clientid="dd095157744c4bd0a67181fc4906e5b6"
                        data-userid="8626857013"
                        data-limitimg="6">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstagramPosts;