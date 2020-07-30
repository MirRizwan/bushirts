import React from "react";
import { Link } from "react-router-dom";

import "./MobileNavigation.css";

const MobileNavigation = () => {
  return (
    <React.Fragment>
      <nav className="panel-menu mobile-main-menu" style={{ display: "block" }}>
        <ul>
          <li>
            <Link to="/products">EID Collection</Link>
          </li>
          <li>
            <Link to="/products">New In</Link>
          </li>
          <li>
            <Link to="/products">CATALOGUE</Link>
            <ul>
              <li>
                <Link to="listing-left-column.html">TOPS</Link>
                <ul>
                  <li>
                    <Link to="listing-left-column.html">
                      Blouses &amp; Shirts
                    </Link>
                  </li>
                  <li>
                    <Link to="listing-left-column.html">
                      Dresses <span className="tt-badge tt-new">New</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="listing-left-column.html">
                      Tops &amp; T-shirts
                    </Link>
                    <ul>
                      <li>
                        <Link to="listing-left-column.html">Link Level 1</Link>
                      </li>
                      <li>
                        <Link to="listing-left-column.html">Link Level 1</Link>
                        <ul>
                          <li>
                            <Link to="listing-left-column.html">
                              Link Level 2
                            </Link>
                          </li>
                          <li>
                            <Link to="listing-left-column.html">
                              Link Level 2
                            </Link>
                            <ul>
                              <li>
                                <Link to="listing-left-column.html">
                                  Link Level 3
                                </Link>
                              </li>
                              <li>
                                <Link to="listing-left-column.html">
                                  Link Level 3
                                </Link>
                              </li>
                              <li>
                                <Link to="listing-left-column.html">
                                  Link Level 3
                                </Link>
                              </li>
                              <li>
                                <Link to="listing-left-column.html">
                                  Link Level 3
                                </Link>
                                <ul>
                                  <li>
                                    <Link to="listing-left-column.html">
                                      Link Level 4
                                    </Link>
                                    <ul>
                                      <li>
                                        <Link to="listing-left-column.html">
                                          Link Level 5
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="listing-left-column.html">
                                          Link Level 5
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="listing-left-column.html">
                                          Link Level 5
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="listing-left-column.html">
                                          Link Level 5
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="listing-left-column.html">
                                          Link Level 5
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <Link to="listing-left-column.html">
                                      Link Level 4
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="listing-left-column.html">
                                      Link Level 4
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="listing-left-column.html">
                                      Link Level 4
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="listing-left-column.html">
                                      Link Level 4
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <Link to="listing-left-column.html">
                                  Link Level 3
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="listing-left-column.html">
                              Link Level 2
                            </Link>
                          </li>
                          <li>
                            <Link to="listing-left-column.html">
                              Link Level 2
                            </Link>
                          </li>
                          <li>
                            <Link to="listing-left-column.html">
                              Link Level 2
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="listing-left-column.html">Link Level 1</Link>
                      </li>
                      <li>
                        <Link to="listing-left-column.html">Link Level 1</Link>
                      </li>
                      <li>
                        <Link to="listing-left-column.html">Link Level 1</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="listing-left-column.html">Sleeveless Tops</Link>
                  </li>
                  <li>
                    <Link to="listing-left-column.html">Sweaters</Link>
                  </li>
                  <li>
                    <Link to="listing-left-column.html">Jackets</Link>
                  </li>
                  <li>
                    <Link to="listing-left-column.html">Outerwear</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="listing-left-column.html">BOTTOMS</Link>
                <ul>
                  <li>
                    <Link to="listing-left-column.html">
                      Trousers{" "}
                      <span className="tt-badge tt-fatured">Fatured</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="listing-left-column.html">Jeans</Link>
                  </li>
                  <li>
                    <Link to="listing-left-column.html">Leggings</Link>
                  </li>
                  <li>
                    <Link to="listing-left-column.html">
                      Jumpsuit &amp; Shorts
                    </Link>
                  </li>
                  <li>
                    <Link to="listing-left-column.html">Skirts</Link>
                  </li>
                  <li>
                    <Link to="listing-left-column.html">Tights</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="listing-left-column.html">ACCESSORIES</Link>
                <ul>
                  <li>
                    <Link to="listing-left-column.html">Jewellery</Link>
                  </li>
                  <li>
                    <Link to="listing-left-column.html">Hats</Link>
                  </li>
                  <li>
                    <Link to="listing-left-column.html">
                      Scarves &amp; Snoods
                    </Link>
                  </li>
                  <li>
                    <Link to="listing-left-column.html">Belts</Link>
                  </li>
                  <li>
                    <Link to="listing-left-column.html">Bags</Link>
                  </li>
                  <li>
                    <Link to="listing-left-column.html">Shoes</Link>
                  </li>
                  <li>
                    <Link to="listing-left-column.html">
                      Sunglasses{" "}
                      <span className="tt-badge tt-sale">Sale 15%</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="listing-left-column.html">SPECIALS</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/products">FOOTWEAR</Link>
          </li>
        </ul>
        <div className="mm-navbtn-names">
          <div className="mm-closebtn">Close</div>
          <div className="mm-backbtn">Back</div>
        </div>
      </nav>

      <div className="tt-mobile-header">
        <div className="container-fluid">
          <div className="tt-header-row">
            <div className="tt-mobile-parent-menu">
              <div className="tt-menu-toggle">
                <i className="icon-03"></i>
              </div>
            </div>

            <div className="tt-mobile-parent-search tt-parent-box">
              <div className="tt-search tt-dropdown-obj">
                <button
                  className="tt-dropdown-toggle"
                  data-tooltip="Search"
                  data-tposition="bottom"
                >
                  <i className="icon-f-85"></i>
                </button>
                <div className="tt-dropdown-menu">
                  <div className="container">
                    <form>
                      <div className="tt-col">
                        <input
                          type="text"
                          className="tt-search-input"
                          placeholder="Search Products..."
                        />{" "}
                        <button
                          className="tt-btn-search"
                          type="submit"
                        ></button>
                      </div>
                      <div className="tt-col">
                        <button className="tt-btn-close icon-g-80"></button>
                      </div>
                      <div className="tt-info-text">
                        What are you Looking for?
                      </div>
                      <div className="search-results"></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="tt-mobile-parent-cart tt-parent-box"></div>
            <div className="tt-mobile-parent-account tt-parent-box"></div>
            <div className="tt-mobile-parent-multi tt-parent-box"></div>
          </div>
        </div>
        <div className="container-fluid tt-top-line">
          <div className="row">
            <div className="tt-logo-container">
              <Link className="tt-logo tt-logo-alignment" to="index.html">
                <img src="/assets/images/custom/logo.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MobileNavigation;
