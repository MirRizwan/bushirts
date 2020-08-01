import React from "react";
import { Link } from "react-router-dom";

import "./MobileNavigation.css";
import { useState } from "react";

const MobileNavigation = () => {
  const [openCart, setOpenCart] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const openCartHandler = () => {
    setOpenCart("active");
  };
  const openMenuHandler = () => {
    openMenu === false ? setOpenMenu(true) : setOpenMenu(false);
  };

  return (
    <React.Fragment>
      {/*mmitemopen*/}
      <nav
        className={`panel-menu mobile-main-menu ${
          openMenu === true ? "mmitemopen" : ""
        }`}
      >
        <div className="mmpanels">
          <div className="mmpanel mmopened mmcurrent" id="mm0">
            <ul>
              <li className="mm-close-parent">
                <Link
                  to="#close"
                  data-target="#close"
                  className="mm-close"
                  onClick={() => setOpenMenu(false)}
                >
                  Close
                </Link>
              </li>
              <li>
                <Link to="#mm1" data-target="#mm1" className="mm-next-level">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="#mm5" data-target="#mm5" className="mm-next-level">
                  SHOP
                </Link>
              </li>
              <li>
                <Link to="#mm10" data-target="#mm10" className="mm-next-level">
                  BLOG
                </Link>
              </li>
              <li>
                <Link to="#mm13" data-target="#mm13" className="mm-next-level">
                  PORTFOLIO
                </Link>
              </li>
              <li>
                <Link to="#mm16" data-target="#mm16" className="mm-next-level">
                  PAGES
                </Link>
              </li>
              <li>
                <Link to="#mm24" data-target="#mm24" className="mm-next-level">
                  WOMEN
                </Link>
              </li>
              <li>
                <Link to="#mm33" data-target="#mm33" className="mm-next-level">
                  MEN
                </Link>
              </li>
              <li>
                <Link to="index-rtl.html">RTL</Link>
              </li>
            </ul>
          </div>
          <div className="mmpanel mmhidden" id="mm1">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link to="index.html" className="mm-original-link">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="#mm2" data-target="#mm2" className="mm-next-level">
                  HOME STYLES
                </Link>
              </li>
              <li>
                <Link to="#mm3" data-target="#mm3" className="mm-next-level">
                  HOME STYLES
                </Link>
              </li>
              <li>
                <Link to="#mm4" data-target="#mm4" className="mm-next-level">
                  HOME SKINS <span className="tt-badge tt-sale">HOT</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mmpanel mmhidden" id="mm2">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link to="index.html" className="mm-original-link">
                  HOME STYLES
                </Link>
              </li>
              <li>
                <Link to="index.html">
                  Home — Example 1{" "}
                  <span className="tt-badge tt-fatured">Popular</span>
                </Link>
              </li>
              <li>
                <Link to="index-02.html">Home — Example 2</Link>
              </li>
              <li>
                <Link to="index-03.html">Home — Example 3</Link>
              </li>
              <li>
                <Link to="index-04.html">
                  Home — Example 4{" "}
                  <span className="tt-badge tt-fatured">Popular</span>
                </Link>
              </li>
              <li>
                <Link to="index-05.html">Home — Example 5</Link>
              </li>
              <li>
                <Link to="index-06.html">Home — Example 6</Link>
              </li>
              <li>
                <Link to="index-07.html">Home — Example 7</Link>
              </li>
              <li>
                <Link to="index-08.html">Home — Example 8</Link>
              </li>
              <li>
                <Link to="index-09.html">Home — Example 9</Link>
              </li>
            </ul>
          </div>
          <div className="mmpanel mmhidden" id="mm3">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link to="index.html" className="mm-original-link">
                  HOME STYLES
                </Link>
              </li>
              <li>
                <Link to="index-10.html">Home — Example 10</Link>
              </li>
              <li>
                <Link to="index-11.html">Home — Example 11</Link>
              </li>
              <li>
                <Link to="index-12.html">Home — Example 12</Link>
              </li>
              <li>
                <Link to="index-13.html">Home — Example 13</Link>
              </li>
              <li>
                <Link to="index-14.html">Home — Example 14</Link>
              </li>
              <li>
                <Link to="index-15.html">Home — Example 15</Link>
              </li>
              <li>
                <Link to="index-16.html">
                  Home — Example 16{" "}
                  <span className="tt-badge tt-fatured">Popular</span>
                </Link>
              </li>
              <li>
                <Link to="index-17.html">Home — Example 17</Link>
              </li>
              <li>
                <Link to="index-18.html">Home — Example 18</Link>
              </li>
            </ul>
          </div>
          <div className="mmpanel mmhidden" id="mm4">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link to="index.html" className="mm-original-link">
                  HOME SKINS <span className="tt-badge tt-sale">HOT</span>
                </Link>
              </li>
              <li>
                <Link to="index-skin-snowboards.html">
                  Snowboards Shop{" "}
                  <span className="tt-badge tt-fatured">Popular</span>
                </Link>
              </li>
              <li>
                <Link to="index-skin-phones.html">
                  Phones Shop{" "}
                  <span className="tt-badge tt-fatured">Popular</span>
                </Link>
              </li>
              <li>
                <Link to="index-skin-bikes.html">
                  Bikes Shop{" "}
                  <span className="tt-badge tt-fatured">Popular</span>
                </Link>
              </li>
              <li>
                <Link to="index-skin-lingerie.html">Lingerie Shop</Link>
              </li>
              <li>
                <Link to="index-skin-furniture.html">Furniture Shop</Link>
              </li>
              <li>
                <Link to="index-skin-books.html">
                  Books Shop <span className="tt-badge tt-new">New</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mmpanel mmhidden" id="mm5">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link
                  to="listing-left-column.html"
                  className="mm-original-link"
                >
                  SHOP
                </Link>
              </li>
              <li>
                <Link to="#mm6" data-target="#mm6" className="mm-next-level">
                  LISTING STYLES
                </Link>
              </li>
              <li>
                <Link to="#mm7" data-target="#mm7" className="mm-next-level">
                  PRODUCT PAGE STYLES
                </Link>
              </li>
              <li>
                <Link to="#mm8" data-target="#mm8" className="mm-next-level">
                  PRODUCT PAGE TYPES
                </Link>
              </li>
              <li>
                <Link to="#mm9" data-target="#mm9" className="mm-next-level">
                  OTHER PAGES
                </Link>
              </li>
            </ul>
          </div>
          <div className="mmpanel mmhidden" id="mm6">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link
                  to="listing-left-column.html"
                  className="mm-original-link"
                >
                  LISTING STYLES
                </Link>
              </li>
              <li>
                <Link to="listing-left-column.html">
                  Listing With Left Sidebar
                </Link>
              </li>
              <li>
                <Link to="listing-right-column.html">
                  Listing With Right Sidebar
                </Link>
              </li>
              <li>
                <Link to="listing-not-sidebar.html">Listing Not Sidebar</Link>
              </li>
              <li>
                <Link to="listing-not-sidebar-full-width.html">
                  Listing Not Sidebar Full Width
                </Link>
              </li>
              <li>
                <Link to="listing-metro.html">Listing Metro</Link>
              </li>
              <li>
                <Link to="listing-left-column-with-block.html">
                  Listing With Custom HTML Block
                </Link>
              </li>
              <li>
                <Link to="listing-collection.html">Listing Collection</Link>
              </li>
              <li>
                <Link to="lookbook.html">Look Book</Link>
              </li>
            </ul>
          </div>
          <div className="mmpanel mmhidden" id="mm7">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link to="product.html" className="mm-original-link">
                  PRODUCT PAGE STYLES
                </Link>
              </li>
              <li>
                <Link to="product.html">Product Example 1</Link>
              </li>
              <li>
                <Link to="product-02.html">Product Example 2</Link>
              </li>
              <li>
                <Link to="product-03.html">Product Example 3</Link>
              </li>
              <li>
                <Link to="product-04.html">Product Example 4</Link>
              </li>
              <li>
                <Link to="product-variable.html">Product Layout</Link>
              </li>
              <li>
                <Link to="product-three-columns.html">Three Columns</Link>
              </li>
            </ul>
          </div>
          <div className="mmpanel mmhidden" id="mm8">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link to="product-variable.html" className="mm-original-link">
                  PRODUCT PAGE TYPES
                </Link>
              </li>
              <li>
                <Link to="product.html">Standard Product</Link>
              </li>
              <li>
                <Link to="product-variable.html">Variable Product</Link>
              </li>
              <li>
                <Link to="product-04.html">Grouped Product</Link>
              </li>
              <li>
                <Link to="product-label-new.html">New Product</Link>
              </li>
              <li>
                <Link to="product-label-sale.html">Sale Product</Link>
              </li>
              <li>
                <Link to="product-label-out-of-stock.html">
                  Out Of Stock Product
                </Link>
              </li>
            </ul>
          </div>
          <div className="mmpanel mmhidden" id="mm9">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link to="shopping_cart_02.html" className="mm-original-link">
                  OTHER PAGES
                </Link>
              </li>
              <li>
                <Link to="shopping_cart_02.html">Cart</Link>
              </li>
              <li>
                <Link to="shopping_cart_01.html">Cart With Right Col</Link>
              </li>
              <li>
                <Link to="account.html">Account</Link>
              </li>
              <li>
                <Link to="account_address.html">Account Address</Link>
              </li>
              <li>
                <Link to="account_address_fields.html">
                  Account Address Fields
                </Link>
              </li>
            </ul>
          </div>
          <div className="mmpanel mmhidden" id="mm10">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link
                  to="blog-listing-without-col.html"
                  className="mm-original-link"
                >
                  BLOG
                </Link>
              </li>
              <li>
                <Link to="#mm11" data-target="#mm11" className="mm-next-level">
                  BLOG STYLE
                </Link>
              </li>
              <li>
                <Link to="#mm12" data-target="#mm12" className="mm-next-level">
                  POST TYPE
                </Link>
              </li>
            </ul>
          </div>
          <div className="mmpanel mmhidden" id="mm11">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link
                  to="blog-listing-without-col.html"
                  className="mm-original-link"
                >
                  BLOG STYLE
                </Link>
              </li>
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
          </div>
          <div className="mmpanel mmhidden" id="mm12">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link to="blog-single-post.html" className="mm-original-link">
                  POST TYPE
                </Link>
              </li>
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
          </div>
          <div className="mmpanel mmhidden" id="mm13">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link
                  to="portfolio-col-grid-four.html"
                  className="mm-original-link"
                >
                  PORTFOLIO
                </Link>
              </li>
              <li>
                <Link to="#mm14" data-target="#mm14" className="mm-next-level">
                  BOXED GRID
                </Link>
              </li>
              <li>
                <Link to="#mm15" data-target="#mm15" className="mm-next-level">
                  BOXED STYLES
                </Link>
              </li>
            </ul>
          </div>
          <div className="mmpanel mmhidden" id="mm14">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link
                  to="portfolio-col-grid-four.html"
                  className="mm-original-link"
                >
                  BOXED GRID
                </Link>
              </li>
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
          </div>
          <div className="mmpanel mmhidden" id="mm15">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link
                  to="portfolio-col-wide-three.html"
                  className="mm-original-link"
                >
                  BOXED STYLES
                </Link>
              </li>
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
          </div>
          <div className="mmpanel mmhidden" id="mm16">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link to="about.html" className="mm-original-link">
                  PAGES
                </Link>
              </li>
              <li>
                <Link to="#mm17" data-target="#mm17" className="mm-next-level">
                  About Example 1
                </Link>
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
                <Link to="#mm22" data-target="#mm22" className="mm-next-level">
                  Compare
                </Link>
              </li>
              <li>
                <Link to="wishlist.html">Wishlist</Link>
              </li>
              <li>
                <Link to="#mm23" data-target="#mm23" className="mm-next-level">
                  Empty
                </Link>
              </li>
            </ul>
          </div>
          <div className="mmpanel mmhidden" id="mm17">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link to="about.html" className="mm-original-link">
                  About Example 1
                </Link>
              </li>
              <li>
                <Link to="about.html">Link Level 1</Link>
              </li>
              <li>
                <Link to="#mm18" data-target="#mm18" className="mm-next-level">
                  Link Level 1
                </Link>
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
          </div>
          <div className="mmpanel mmhidden" id="mm18">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link to="about.html" className="mm-original-link">
                  Link Level 1
                </Link>
              </li>
              <li>
                <Link to="about.html">Link Level 2</Link>
              </li>
              <li>
                <Link to="#mm19" data-target="#mm19" className="mm-next-level">
                  Link Level 2
                </Link>
              </li>
              <li>
                <Link to="about.html">Link Level 2</Link>
              </li>
              <li>
                <Link to="about.html">Link Level 2</Link>
              </li>
            </ul>
          </div>
          <div className="mmpanel mmhidden" id="mm19">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link to="about.html" className="mm-original-link">
                  Link Level 2
                </Link>
              </li>
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
                <Link to="#mm20" data-target="#mm20" className="mm-next-level">
                  Link Level 3
                </Link>
              </li>
              <li>
                <Link to="about.html">Link Level 3</Link>
              </li>
            </ul>
          </div>
          <div className="mmpanel mmhidden" id="mm20">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link to="about.html" className="mm-original-link">
                  Link Level 3
                </Link>
              </li>
              <li>
                <Link to="#mm21" data-target="#mm21" className="mm-next-level">
                  Link Level 4
                </Link>
              </li>
              <li>
                <Link to="about.html">Link Level 4</Link>
              </li>
            </ul>
          </div>
          <div className="mmpanel mmhidden" id="mm21">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link to="about.html" className="mm-original-link">
                  Link Level 4
                </Link>
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
              <li>
                <Link to="about.html">Link Level 5</Link>
              </li>
            </ul>
          </div>
          <div className="mmpanel mmhidden" id="mm22">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link to="compare.html" className="mm-original-link">
                  Compare
                </Link>
              </li>
              <li>
                <Link to="compare.html">Compare 01</Link>
              </li>
              <li>
                <Link to="compare-02.html">Compare 02</Link>
              </li>
            </ul>
          </div>
          <div className="mmpanel mmhidden" id="mm23">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link to="empty-search.html" className="mm-original-link">
                  Empty
                </Link>
              </li>
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
          </div>
          <div className="mmpanel mmhidden" id="mm24">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link
                  to="listing-left-column.html"
                  className="mm-original-link"
                >
                  WOMEN
                </Link>
              </li>
              <li>
                <Link to="#mm25" data-target="#mm25" className="mm-next-level">
                  TOPS
                </Link>
              </li>
              <li>
                <Link to="#mm31" data-target="#mm31" className="mm-next-level">
                  BOTTOMS
                </Link>
              </li>
              <li>
                <Link to="#mm32" data-target="#mm32" className="mm-next-level">
                  ACCESSORIES
                </Link>
              </li>
              <li>
                <Link to="listing-left-column.html">SPECIALS</Link>
              </li>
            </ul>
          </div>
          <div className="mmpanel mmhidden" id="mm25">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link
                  to="listing-left-column.html"
                  className="mm-original-link"
                >
                  TOPS
                </Link>
              </li>
              <li>
                <Link to="listing-left-column.html">Blouses &amp; Shirts</Link>
              </li>
              <li>
                <Link to="listing-left-column.html">
                  Dresses <span className="tt-badge tt-new">New</span>
                </Link>
              </li>
              <li>
                <Link to="#mm26" data-target="#mm26" className="mm-next-level">
                  Tops &amp; T-shirts
                </Link>
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
          </div>
          <div className="mmpanel mmhidden" id="mm26">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link
                  to="listing-left-column.html"
                  className="mm-original-link"
                >
                  Tops &amp; T-shirts
                </Link>
              </li>
              <li>
                <Link to="listing-left-column.html">Link Level 1</Link>
              </li>
              <li>
                <Link to="#mm27" data-target="#mm27" className="mm-next-level">
                  Link Level 1
                </Link>
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
          </div>
          <div className="mmpanel mmhidden" id="mm27">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link
                  to="listing-left-column.html"
                  className="mm-original-link"
                >
                  Link Level 1
                </Link>
              </li>
              <li>
                <Link to="listing-left-column.html">Link Level 2</Link>
              </li>
              <li>
                <Link to="#mm28" data-target="#mm28" className="mm-next-level">
                  Link Level 2
                </Link>
              </li>
              <li>
                <Link to="listing-left-column.html">Link Level 2</Link>
              </li>
              <li>
                <Link to="listing-left-column.html">Link Level 2</Link>
              </li>
              <li>
                <Link to="listing-left-column.html">Link Level 2</Link>
              </li>
            </ul>
          </div>
          <div className="mmpanel mmhidden" id="mm28">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link
                  to="listing-left-column.html"
                  className="mm-original-link"
                >
                  Link Level 2
                </Link>
              </li>
              <li>
                <Link to="listing-left-column.html">Link Level 3</Link>
              </li>
              <li>
                <Link to="listing-left-column.html">Link Level 3</Link>
              </li>
              <li>
                <Link to="listing-left-column.html">Link Level 3</Link>
              </li>
              <li>
                <Link to="#mm29" data-target="#mm29" className="mm-next-level">
                  Link Level 3
                </Link>
              </li>
              <li>
                <Link to="listing-left-column.html">Link Level 3</Link>
              </li>
            </ul>
          </div>
          <div className="mmpanel mmhidden" id="mm29">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link
                  to="listing-left-column.html"
                  className="mm-original-link"
                >
                  Link Level 3
                </Link>
              </li>
              <li>
                <Link to="#mm30" data-target="#mm30" className="mm-next-level">
                  Link Level 4
                </Link>
              </li>
              <li>
                <Link to="listing-left-column.html">Link Level 4</Link>
              </li>
              <li>
                <Link to="listing-left-column.html">Link Level 4</Link>
              </li>
              <li>
                <Link to="listing-left-column.html">Link Level 4</Link>
              </li>
              <li>
                <Link to="listing-left-column.html">Link Level 4</Link>
              </li>
            </ul>
          </div>
          <div className="mmpanel mmhidden" id="mm30">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link
                  to="listing-left-column.html"
                  className="mm-original-link"
                >
                  Link Level 4
                </Link>
              </li>
              <li>
                <Link to="listing-left-column.html">Link Level 5</Link>
              </li>
              <li>
                <Link to="listing-left-column.html">Link Level 5</Link>
              </li>
              <li>
                <Link to="listing-left-column.html">Link Level 5</Link>
              </li>
              <li>
                <Link to="listing-left-column.html">Link Level 5</Link>
              </li>
              <li>
                <Link to="listing-left-column.html">Link Level 5</Link>
              </li>
            </ul>
          </div>
          <div className="mmpanel mmhidden" id="mm31">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link
                  to="listing-left-column.html"
                  className="mm-original-link"
                >
                  BOTTOMS
                </Link>
              </li>
              <li>
                <Link to="listing-left-column.html">
                  Trousers <span className="tt-badge tt-fatured">Fatured</span>
                </Link>
              </li>
              <li>
                <Link to="listing-left-column.html">Jeans</Link>
              </li>
              <li>
                <Link to="listing-left-column.html">Leggings</Link>
              </li>
              <li>
                <Link to="listing-left-column.html">Jumpsuit &amp; Shorts</Link>
              </li>
              <li>
                <Link to="listing-left-column.html">Skirts</Link>
              </li>
              <li>
                <Link to="listing-left-column.html">Tights</Link>
              </li>
            </ul>
          </div>
          <div className="mmpanel mmhidden" id="mm32">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link
                  to="listing-left-column.html"
                  className="mm-original-link"
                >
                  ACCESSORIES
                </Link>
              </li>
              <li>
                <Link to="listing-left-column.html">Jewellery</Link>
              </li>
              <li>
                <Link to="listing-left-column.html">Hats</Link>
              </li>
              <li>
                <Link to="listing-left-column.html">Scarves &amp; Snoods</Link>
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
                  Sunglasses <span className="tt-badge tt-sale">Sale 15%</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mmpanel mmhidden" id="mm33">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link
                  to="listing-right-column.html"
                  className="mm-original-link"
                >
                  MEN
                </Link>
              </li>
              <li>
                <Link to="#mm34" data-target="#mm34" className="mm-next-level">
                  TOPS
                </Link>
              </li>
              <li>
                <Link to="#mm40" data-target="#mm40" className="mm-next-level">
                  BOTTOMS
                </Link>
              </li>
              <li>
                <Link to="#mm41" data-target="#mm41" className="mm-next-level">
                  ACCESSORIES
                </Link>
              </li>
            </ul>
          </div>
          <div className="mmpanel mmhidden" id="mm34">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link
                  to="listing-right-column.html"
                  className="mm-original-link"
                >
                  TOPS
                </Link>
              </li>
              <li>
                <Link to="listing-right-column.html">Blouses &amp; Shirts</Link>
              </li>
              <li>
                <Link to="listing-right-column.html">
                  Dresses <span className="tt-badge tt-new">New</span>
                </Link>
              </li>
              <li>
                <Link to="#mm35" data-target="#mm35" className="mm-next-level">
                  Tops &amp; T-shirts
                </Link>
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
          </div>
          <div className="mmpanel mmhidden" id="mm35">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link
                  to="listing-right-column.html"
                  className="mm-original-link"
                >
                  Tops &amp; T-shirts
                </Link>
              </li>
              <li>
                <Link to="listing-right-column.html">Link Level 1</Link>
              </li>
              <li>
                <Link to="#mm36" data-target="#mm36" className="mm-next-level">
                  Link Level 1
                </Link>
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
          </div>
          <div className="mmpanel mmhidden" id="mm36">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link
                  to="listing-right-column.html"
                  className="mm-original-link"
                >
                  Link Level 1
                </Link>
              </li>
              <li>
                <Link to="listing-right-column.html">Link Level 2</Link>
              </li>
              <li>
                <Link to="#mm37" data-target="#mm37" className="mm-next-level">
                  Link Level 2
                </Link>
              </li>
              <li>
                <Link to="listing-right-column.html">Link Level 2</Link>
              </li>
              <li>
                <Link to="listing-right-column.html">Link Level 2</Link>
              </li>
              <li>
                <Link to="listing-right-column.html">Link Level 2</Link>
              </li>
            </ul>
          </div>
          <div className="mmpanel mmhidden" id="mm37">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link
                  to="listing-right-column.html"
                  className="mm-original-link"
                >
                  Link Level 2
                </Link>
              </li>
              <li>
                <Link to="listing-right-column.html">Link Level 3</Link>
              </li>
              <li>
                <Link to="listing-right-column.html">Link Level 3</Link>
              </li>
              <li>
                <Link to="listing-right-column.html">Link Level 3</Link>
              </li>
              <li>
                <Link to="#mm38" data-target="#mm38" className="mm-next-level">
                  Link Level 3
                </Link>
              </li>
              <li>
                <Link to="listing-right-column.html">Link Level 3</Link>
              </li>
            </ul>
          </div>
          <div className="mmpanel mmhidden" id="mm38">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link
                  to="listing-right-column.html"
                  className="mm-original-link"
                >
                  Link Level 3
                </Link>
              </li>
              <li>
                <Link to="#mm39" data-target="#mm39" className="mm-next-level">
                  Link Level 4
                </Link>
              </li>
              <li>
                <Link to="listing-right-column.html">Link Level 4</Link>
              </li>
              <li>
                <Link to="listing-right-column.html">Link Level 4</Link>
              </li>
              <li>
                <Link to="listing-right-column.html">Link Level 4</Link>
              </li>
              <li>
                <Link to="listing-right-column.html">Link Level 4</Link>
              </li>
            </ul>
          </div>
          <div className="mmpanel mmhidden" id="mm39">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link
                  to="listing-right-column.html"
                  className="mm-original-link"
                >
                  Link Level 4
                </Link>
              </li>
              <li>
                <Link to="listing-right-column.html">Link Level 5</Link>
              </li>
              <li>
                <Link to="listing-right-column.html">Link Level 5</Link>
              </li>
              <li>
                <Link to="listing-right-column.html">Link Level 5</Link>
              </li>
              <li>
                <Link to="listing-right-column.html">Link Level 5</Link>
              </li>
              <li>
                <Link to="listing-right-column.html">Link Level 5</Link>
              </li>
            </ul>
          </div>
          <div className="mmpanel mmhidden" id="mm40">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link
                  to="listing-right-column.html"
                  className="mm-original-link"
                >
                  BOTTOMS
                </Link>
              </li>
              <li>
                <Link to="listing-right-column.html">
                  Trousers <span className="tt-badge tt-fatured">Fatured</span>
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
          </div>
          <div className="mmpanel mmhidden" id="mm41">
            <ul>
              <li>
                <Link to="#" data-target="#" className="mm-prev-level">
                  Back
                </Link>
              </li>
              <li>
                <Link
                  to="listing-right-column.html"
                  className="mm-original-link"
                >
                  ACCESSORIES
                </Link>
              </li>
              <li>
                <Link to="listing-right-column.html">Jewellery</Link>
              </li>
              <li>
                <Link to="listing-right-column.html">Hats</Link>
              </li>
              <li>
                <Link to="listing-right-column.html">Scarves &amp; Snoods</Link>
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
                  Sunglasses <span className="tt-badge tt-sale">Sale 15%</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="tt-mobile-header">
        <div className="container-fluid">
          <div className="tt-header-row">
            <div
              className="tt-mobile-parent-menu"
              onClick={() => openMenuHandler()}
            >
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
            <div className="tt-mobile-parent-cart tt-parent-box">
              <div
                className={`tt-cart tt-dropdown-obj ${openCart}`}
                data-tooltip="Cart"
                data-tposition="bottom"
              >
                <button
                  className="tt-dropdown-toggle"
                  onClick={() => openCartHandler()}
                >
                  <i className="icon-f-39"></i>
                  <span className="tt-badge-cart">3</span>
                </button>
                <div className="tt-dropdown-menu">
                  <div className="tt-mobile-add">
                    <h6 className="tt-title">SHOPPING CART</h6>
                    <button
                      className="tt-close"
                      onClick={() => setOpenCart(null)}
                    >
                      Close
                    </button>
                  </div>
                  <div className="tt-dropdown-inner">
                    <div className="tt-cart-layout">
                      {/* <Link to="empty-cart.html" className="tt-cart-empty">
											<i className="icon-f-39"></i>
											<p>No Products in the Cart</p>
										</Link> */}
                      <div className="tt-cart-content">
                        <div className="tt-cart-list">
                          <div className="tt-item">
                            <Link to="product.html">
                              <div className="tt-item-img">
                                <img
                                  src="/assets/images/product/product-01.jpg"
                                  data-src="/assets/images/product/product-01.jpg"
                                  alt=""
                                  className="loaded"
                                  data-was-processed="true"
                                />
                              </div>
                              <div className="tt-item-descriptions">
                                <h2 className="tt-title">Flared Shift Dress</h2>
                                <ul className="tt-add-info">
                                  <li>Yellow, Material 2, Size 58,</li>
                                  <li>Vendor: Addidas</li>
                                </ul>
                                <div className="tt-quantity">1 X</div>{" "}
                                <div className="tt-price">$12</div>
                              </div>
                            </Link>
                            <div className="tt-item-close">
                              <Link to="#" className="tt-btn-close"></Link>
                            </div>
                          </div>
                          <div className="tt-item">
                            <Link to="product.html">
                              <div className="tt-item-img">
                                <img
                                  src="/assets/images/product/product-02.jpg"
                                  data-src="/assets/images/product/product-02.jpg"
                                  alt=""
                                  className="loaded"
                                  data-was-processed="true"
                                />
                              </div>
                              <div className="tt-item-descriptions">
                                <h2 className="tt-title">Flared Shift Dress</h2>
                                <ul className="tt-add-info">
                                  <li>Yellow, Material 2, Size 58,</li>
                                  <li>Vendor: Addidas</li>
                                </ul>
                                <div className="tt-quantity">1 X</div>{" "}
                                <div className="tt-price">$18</div>
                              </div>
                            </Link>
                            <div className="tt-item-close">
                              <Link to="#" className="tt-btn-close"></Link>
                            </div>
                          </div>
                        </div>
                        <div className="tt-cart-total-row">
                          <div className="tt-cart-total-title">SUBTOTAL:</div>
                          <div className="tt-cart-total-price">$324</div>
                        </div>
                        <div className="tt-cart-btn">
                          <div className="tt-item">
                            <Link to="#" className="btn">
                              PROCEED TO CHECKOUT
                            </Link>
                          </div>
                          <div className="tt-item">
                            <Link
                              to="shopping_cart_02.html"
                              className="btn-link-02 tt-hidden-mobile"
                            >
                              View Cart
                            </Link>
                            <Link
                              to="shopping_cart_02.html"
                              className="btn btn-border tt-hidden-desctope"
                            >
                              VIEW CART
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tt-mobile-parent-account tt-parent-box">
              <div className="tt-account tt-dropdown-obj">
                <button
                  className="tt-dropdown-toggle"
                  data-tooltip="My Account"
                  data-tposition="bottom"
                >
                  <i className="icon-f-94"></i>
                </button>
                <div className="tt-dropdown-menu">
                  <div className="tt-mobile-add">
                    <button className="tt-close">Close</button>
                  </div>
                  <div className="tt-dropdown-inner">
                    <ul>
                      <li>
                        <Link to="login.html">
                          <i className="icon-f-94"></i>Account
                        </Link>
                      </li>
                      <li>
                        <Link to="wishlist.html">
                          <i className="icon-n-072"></i>Wishlist
                        </Link>
                      </li>
                      <li>
                        <Link to="compare.html">
                          <i className="icon-n-08"></i>Compare
                        </Link>
                      </li>
                      <li>
                        <Link to="page404.html">
                          <i className="icon-f-68"></i>Check Out
                        </Link>
                      </li>
                      <li>
                        <Link to="login.html">
                          <i className="icon-f-76"></i>Sign In
                        </Link>
                      </li>
                      <li>
                        <Link to="page404.html">
                          <i className="icon-f-77"></i>Sign Out
                        </Link>
                      </li>
                      <li>
                        <Link to="create-account.html">
                          <i className="icon-f-94"></i>Register
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
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
