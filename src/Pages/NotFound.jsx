import React from "react";
import { useLocation, Link } from "react-router-dom";

const NotFound = (props) => {
  let location = useLocation();

  return (
    <React.Fragment>
      <div className="tt-breadcrumb">
        <div className="container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>That Page Can’t Be Found</li>
          </ul>
        </div>
      </div>
      <div className="tt-offset-0 container-indent">
        <div className="tt-page404">
          <h1 className="tt-title" style={{ fontSize: "44px" }}>
            404
            <span style={{ fontSize: "0.6em", display: "block" }}>
              THAT PAGE CAN’T BE FOUND.
            </span>
          </h1>

          <p>
            It looks like nothing was found at this location{" "}
            <code>{location.pathname}</code>.
          </p>
          <Link to="/products" className="btn">
            GO TO HOME
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
