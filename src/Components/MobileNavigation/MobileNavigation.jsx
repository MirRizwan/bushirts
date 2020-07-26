import React from "react";
import { Link } from "react-router-dom";

import "./MobileNavigation.css";

const MobileNavigation = () => {
  return (
    <React.Fragment>
      <nav className="panel-menu mobile-main-menu">
        <ul>
          <li>
            <Link to="/">New Arrivals</Link>
          </li>
          <li>
            <Link to="/products">Sale</Link>
          </li>
          <li>
            <Link to="blog-listing-without-col.html">BLOG</Link>
            <ul>
              <li>
                <Link to="blog-listing-without-col.html">BLOG STYLE</Link>
                <ul>
                  <li>
                    <Link to="blog-listing-without-col.html">
                      Standard Without Sidebar
                    </Link>
                  </li>
                  <li>
                    <Link to="blog-listing-col-left.html">
                      Standard With Left Sidebar
                    </Link>
                  </li>
                  <li>
                    <Link to="blog-listing-col-right.html">
                      Standard With Right Sidebar
                    </Link>
                  </li>
                  <li>
                    <Link to="blog-masonry-col-2.html">Two Colums</Link>
                  </li>
                  <li>
                    <Link to="blog-masonry-col-3.html">Three Colums</Link>
                  </li>
                  <li>
                    <Link to="blog-masonry-col-3-filter.html">
                      Three Colums With Filter
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="blog-single-post.html">POST TYPE</Link>
                <ul>
                  <li>
                    <Link to="blog-single-post.html">Standard</Link>
                  </li>
                  <li>
                    <Link to="blog-single-post-gallery.html">Gallery</Link>
                  </li>
                  <li>
                    <Link to="blog-single-post-link.html">Link</Link>
                  </li>
                  <li>
                    <Link to="blog-single-post-quote.html">Quote</Link>
                  </li>
                  <li>
                    <Link to="blog-single-post-video.html">Video</Link>
                  </li>
                  <li>
                    <Link to="blog-single-post-audio.html">Audio</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link to="portfolio-col-grid-four.html">PORTFOLIO</Link>
            <ul>
              <li>
                <Link to="portfolio-col-grid-four.html">BOXED GRID</Link>
                <ul>
                  <li>
                    <Link to="portfolio-col-grid-two.html">Two Colums</Link>
                  </li>
                  <li>
                    <Link to="portfolio-col-grid-three.html">Three Colums</Link>
                  </li>
                  <li>
                    <Link to="portfolio-col-grid-four.html">Four Colums</Link>
                  </li>
                  <li>
                    <Link to="portfolio-col-grid-four-without-filter.html">
                      Four Colums Without Filter
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="portfolio-col-wide-three.html">BOXED STYLES</Link>
                <ul>
                  <li>
                    <Link to="portfolio-col-wide-two.html">Two Colums</Link>
                  </li>
                  <li>
                    <Link to="portfolio-col-wide-three.html">Three Colums</Link>
                  </li>
                  <li>
                    <Link to="portfolio-col-wide-four.html">Four Colums</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link to="about.html">PAGES</Link>
            <ul>
              <li>
                <Link to="about.html">About Example 1</Link>
                <ul>
                  <li>
                    <Link to="about.html">Link Level 1</Link>
                  </li>
                  <li>
                    <Link to="about.html">Link Level 1</Link>
                    <ul>
                      <li>
                        <Link to="about.html">Link Level 2</Link>
                      </li>
                      <li>
                        <Link to="about.html">Link Level 2</Link>
                        <ul>
                          <li>
                            <Link to="about.html">Link Level 3</Link>
                          </li>
                          <li>
                            <Link to="about.html">Link Level 3</Link>
                          </li>
                          <li>
                            <Link to="about.html">Link Level 3</Link>
                          </li>
                          <li>
                            <Link to="about.html">Link Level 3</Link>
                            <ul>
                              <li>
                                <Link to="about.html">Link Level 4</Link>
                                <ul>
                                  <li>
                                    <Link to="about.html">Link Level 5</Link>
                                  </li>
                                  <li>
                                    <Link to="about.html">Link Level 5</Link>
                                  </li>
                                  <li>
                                    <Link to="about.html">Link Level 5</Link>
                                  </li>
                                  <li>
                                    <Link to="about.html">Link Level 5</Link>
                                  </li>
                                  <li>
                                    <Link to="about.html">Link Level 5</Link>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <Link to="about.html">Link Level 4</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="about.html">Link Level 3</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="about.html">Link Level 2</Link>
                      </li>
                      <li>
                        <Link to="about.html">Link Level 2</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="about.html">Link Level 1</Link>
                  </li>
                  <li>
                    <Link to="about.html">Link Level 1</Link>
                  </li>
                  <li>
                    <Link to="about.html">Link Level 1</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="about-02.html">About Example 2</Link>
              </li>
              <li>
                <Link to="contact.html">Contacts Example 1</Link>
              </li>
              <li>
                <Link to="contact-02.html">Contacts Example 2</Link>
              </li>
              <li>
                <Link to="services.html">Services</Link>
              </li>
              <li>
                <Link to="faq.html">FAQ</Link>
              </li>
              <li>
                <Link to="coming-soon.html">Coming Soon</Link>
              </li>
              <li>
                <Link to="page404.html">Page 404</Link>
              </li>
              <li>
                <Link to="typography.html">Typography</Link>
              </li>
              <li>
                <Link to="gift-cart.html">Gift Cart</Link>
              </li>
              <li>
                <Link to="compare.html">Compare</Link>
                <ul>
                  <li>
                    <Link to="compare.html">Compare 01</Link>
                  </li>
                  <li>
                    <Link to="compare-02.html">Compare 02</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="wishlist.html">Wishlist</Link>
              </li>
              <li>
                <Link to="empty-search.html">Empty</Link>
                <ul>
                  <li>
                    <Link to="empty-cart.html">Empty Cart</Link>
                  </li>
                  <li>
                    <Link to="empty-search.html">Empty Search</Link>
                  </li>
                  <li>
                    <Link to="empty-wishlist.html">Empty Wishlist</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link to="listing-left-column.html">WOMEN</Link>
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
            <Link to="listing-right-column.html">MEN</Link>
            <ul>
              <li>
                <Link to="listing-right-column.html">TOPS</Link>
                <ul>
                  <li>
                    <Link to="listing-right-column.html">
                      Blouses &amp; Shirts
                    </Link>
                  </li>
                  <li>
                    <Link to="listing-right-column.html">
                      Dresses <span className="tt-badge tt-new">New</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="listing-right-column.html">
                      Tops &amp; T-shirts
                    </Link>
                    <ul>
                      <li>
                        <Link to="listing-right-column.html">Link Level 1</Link>
                      </li>
                      <li>
                        <Link to="listing-right-column.html">Link Level 1</Link>
                        <ul>
                          <li>
                            <Link to="listing-right-column.html">
                              Link Level 2
                            </Link>
                          </li>
                          <li>
                            <Link to="listing-right-column.html">
                              Link Level 2
                            </Link>
                            <ul>
                              <li>
                                <Link to="listing-right-column.html">
                                  Link Level 3
                                </Link>
                              </li>
                              <li>
                                <Link to="listing-right-column.html">
                                  Link Level 3
                                </Link>
                              </li>
                              <li>
                                <Link to="listing-right-column.html">
                                  Link Level 3
                                </Link>
                              </li>
                              <li>
                                <Link to="listing-right-column.html">
                                  Link Level 3
                                </Link>
                                <ul>
                                  <li>
                                    <Link to="listing-right-column.html">
                                      Link Level 4
                                    </Link>
                                    <ul>
                                      <li>
                                        <Link to="listing-right-column.html">
                                          Link Level 5
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="listing-right-column.html">
                                          Link Level 5
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="listing-right-column.html">
                                          Link Level 5
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="listing-right-column.html">
                                          Link Level 5
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="listing-right-column.html">
                                          Link Level 5
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <Link to="listing-right-column.html">
                                      Link Level 4
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="listing-right-column.html">
                                      Link Level 4
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="listing-right-column.html">
                                      Link Level 4
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="listing-right-column.html">
                                      Link Level 4
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <Link to="listing-right-column.html">
                                  Link Level 3
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="listing-right-column.html">
                              Link Level 2
                            </Link>
                          </li>
                          <li>
                            <Link to="listing-right-column.html">
                              Link Level 2
                            </Link>
                          </li>
                          <li>
                            <Link to="listing-right-column.html">
                              Link Level 2
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="listing-right-column.html">Link Level 1</Link>
                      </li>
                      <li>
                        <Link to="listing-right-column.html">Link Level 1</Link>
                      </li>
                      <li>
                        <Link to="listing-right-column.html">Link Level 1</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="listing-right-column.html">Sleeveless Tops</Link>
                  </li>
                  <li>
                    <Link to="listing-right-column.html">Sweaters</Link>
                  </li>
                  <li>
                    <Link to="listing-right-column.html">Jackets</Link>
                  </li>
                  <li>
                    <Link to="listing-right-column.html">Outerwear</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="listing-right-column.html">BOTTOMS</Link>
                <ul>
                  <li>
                    <Link to="listing-right-column.html">
                      Trousers{" "}
                      <span className="tt-badge tt-fatured">Fatured</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="listing-right-column.html">Jeans</Link>
                  </li>
                  <li>
                    <Link to="listing-right-column.html">Leggings</Link>
                  </li>
                  <li>
                    <Link to="listing-right-column.html">
                      Jumpsuit &amp; shorts
                    </Link>
                  </li>
                  <li>
                    <Link to="listing-right-column.html">Skirts</Link>
                  </li>
                  <li>
                    <Link to="listing-right-column.html">Tights</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="listing-right-column.html">ACCESSORIES</Link>
                <ul>
                  <li>
                    <Link to="listing-right-column.html">Jewellery</Link>
                  </li>
                  <li>
                    <Link to="listing-right-column.html">Hats</Link>
                  </li>
                  <li>
                    <Link to="listing-right-column.html">
                      Scarves &amp; Snoods
                    </Link>
                  </li>
                  <li>
                    <Link to="listing-right-column.html">Belts</Link>
                  </li>
                  <li>
                    <Link to="listing-right-column.html">Bags</Link>
                  </li>
                  <li>
                    <Link to="listing-right-column.html">Shoes</Link>
                  </li>
                  <li>
                    <Link to="listing-right-column.html">
                      Sunglasses{" "}
                      <span className="tt-badge tt-sale">Sale 15%</span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link to="index-rtl.html">RTL</Link>
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

            <div className="tt-mobile-parent-search tt-parent-box"></div>
            <div className="tt-mobile-parent-cart tt-parent-box"></div>
            <div className="tt-mobile-parent-account tt-parent-box"></div>
            <div className="tt-mobile-parent-multi tt-parent-box"></div>
          </div>
        </div>
        <div className="container-fluid tt-top-line">
          <div className="row">
            <div className="tt-logo-container">
              <Link className="tt-logo tt-logo-alignment" to="index.html">
                <img src="assets/images/custom/logo.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MobileNavigation;
