import React from 'react';
import './main';
import './style.css';

const Home = () => {
    return (
        <div className="dark-scheme de-grey">
            <div id="wrapper">
                <header className="transparent scroll-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="de-flex sm-pt10">
                                    <div className="de-flex-col">
                                        <div className="de-flex-col">
                                            <div id="logo">
                                                <a href="03_grey-index.html">
                                                    <img alt="" src="images/logo-3.png" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="de-flex-col">
                                            <input
                                                id="quick_search"
                                                className="xs-hide style-2"
                                                name="quick_search"
                                                placeholder="search item here..."
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div className="de-flex-col header-col-mid">
                                        <ul id="mainmenu">
                                            <li>
                                                <a href="03_grey-index.html">
                                                    Home
                                                    <span />
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="03_grey-index.html">Homepage 1</a>
                                                    </li>
                                                    <li>
                                                        <a href="03_grey-index-2.html">
                                                            Homepage 2
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="03_grey-index-3.html">
                                                            Homepage 3
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="03_grey-index-4.html">
                                                            Homepage 4
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="03_grey-explore.html">
                                                    Explore
                                                    <span />
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="03_grey-explore.html">Explore</a>
                                                    </li>
                                                    <li>
                                                        <a href="03_grey-explore-2.html">
                                                            Explore 2
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="03_grey-explore-music-nft.html">
                                                            New: Music NFT
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="03_grey-collection.html">
                                                            Collections
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="03_grey-live-auction.html">
                                                            Live Auction
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="03_grey-item-details.html">
                                                            Item Details
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="03_grey-help-center.html">
                                                            Help Center
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="03_grey-author.html">
                                                    Author
                                                    <span />
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="03_grey-author.html">Author</a>
                                                    </li>
                                                    <li>
                                                        <a href="03_grey-profile.html">Profile</a>
                                                    </li>
                                                    <li>
                                                        <a href="03_grey-wallet.html">Wallet</a>
                                                    </li>
                                                    <li>
                                                        <a href="03_grey-create-options.html">
                                                            Create
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="03_grey-login.html">Login</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    Stats
                                                    <span />
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="03_grey-activity.html">Activity</a>
                                                    </li>
                                                    <li>
                                                        <a href="03_grey-rankings.html">Rankings</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <div className="menu_side_area">
                                            <a
                                                href="03_grey-wallet.html"
                                                className="btn-main btn-wallet"
                                            >
                                                <i className="icon_wallet_alt" />
                                                <span>Connect Wallet</span>
                                            </a>
                                            <span id="menu-btn" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="no-bottom no-top" id="content">
                    <div id="top" />
                    <section
                        id="section-hero"
                        aria-label="section"
                        className="pt20 pb20 vh-100"
                        data-bgimage="url(images/background/7.jpg) bottom"
                    >
                        <div className="v-center">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="spacer-single" />
                                        <h6 className="wow fadeInUp" data-wow-delay=".5s">
                                            <span className="text-uppercase id-color-2">
                                                Gigaland Market
                                            </span>
                                        </h6>
                                        <div className="spacer-10" />
                                        <h1 className="wow fadeInUp" data-wow-delay=".75s">
                                            Discover rare{' '}
                                            <span className="id-color-2">artworks</span> by world
                                            class artists
                                        </h1>
                                        <p className="wow fadeInUp lead" data-wow-delay="1s">
                                            Unit of data stored on a digital ledger, called a
                                            blockchain, that certifies a digital asset to be unique
                                            and therefore not interchangeable
                                        </p>
                                        <div className="spacer-10" />
                                        <a
                                            href="03_grey-explore.html"
                                            className="btn-main wow fadeInUp lead"
                                            data-wow-delay="1.25s"
                                        >
                                            Explore
                                        </a>
                                        <div className="mb-sm-30" />
                                    </div>
                                    <div className="col-md-6 xs-hide">
                                        <div className="d-carousel">
                                            <div
                                                id="item-carousel-big-type-2"
                                                className="owl-carousel wow fadeIn"
                                            >
                                                <div className="nft_pic style-2">
                                                    <a href="03_grey-item-details.html">
                                                        <span className="nft_pic_info">
                                                            <span className="nft_pic_title">
                                                                Live Arts
                                                            </span>
                                                            <span className="nft_pic_by">
                                                                Nicholas Daniels
                                                            </span>
                                                        </span>
                                                    </a>
                                                    <div className="nft_pic_wrap">
                                                        <img
                                                            src="images/carousel/crs-5.jpg"
                                                            className="lazy img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>

                                                <div className="nft_pic style-2">
                                                    <a href="03_grey-item-details.html">
                                                        <span className="nft_pic_info">
                                                            <span className="nft_pic_title">
                                                                Red Ocean
                                                            </span>
                                                            <span className="nft_pic_by">
                                                                Monica Lucas
                                                            </span>
                                                        </span>
                                                    </a>
                                                    <div className="nft_pic_wrap">
                                                        <img
                                                            src="images/carousel/crs-4.jpg"
                                                            className="lazy img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>

                                                <div className="nft_pic style-2">
                                                    <a href="03_grey-item-details.html">
                                                        <span className="nft_pic_info">
                                                            <span className="nft_pic_title">
                                                                Glass Cube
                                                            </span>
                                                            <span className="nft_pic_by">
                                                                Mamie Barnett
                                                            </span>
                                                        </span>
                                                    </a>
                                                    <div className="nft_pic_wrap">
                                                        <img
                                                            src="images/carousel/crs-1.jpg"
                                                            className="lazy img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>

                                                <div className="nft_pic style-2">
                                                    <a href="03_grey-item-details.html">
                                                        <span className="nft_pic_info">
                                                            <span className="nft_pic_title">
                                                                Loop Donut
                                                            </span>
                                                            <span className="nft_pic_by">
                                                                Lori Hart
                                                            </span>
                                                        </span>
                                                    </a>
                                                    <div className="nft_pic_wrap">
                                                        <img
                                                            src="images/items/anim-5.html"
                                                            className="lazy img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>

                                                <div className="nft_pic style-2">
                                                    <a href="03_grey-item-details.html">
                                                        <span className="nft_pic_info">
                                                            <span className="nft_pic_title">
                                                                I Believe I Can Fly
                                                            </span>
                                                            <span className="nft_pic_by">
                                                                Fred Ryan
                                                            </span>
                                                        </span>
                                                    </a>
                                                    <div className="nft_pic_wrap">
                                                        <img
                                                            src="images/items/anim-8.html"
                                                            className="lazy img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-arrow-left">
                                                <i className="fa fa-angle-left" />
                                            </div>
                                            <div className="d-arrow-right">
                                                <i className="fa fa-angle-right" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="section-collections" className="pt30 pb30">
                        <div className="container">
                            <div className="spacer-single" />

                            <div className="row wow fadeIn">
                                <div className="col-lg-12">
                                    <h2 className="style-2">New Items</h2>
                                </div>

                                <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="nft__item style-2">
                                        <div
                                            className="de_countdown"
                                            data-year="2022"
                                            data-month="1"
                                            data-day="6"
                                            data-hour="8"
                                        />
                                        <div className="author_list_pp">
                                            <a
                                                href="03_grey-author.html"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                title="Creator: Monica Lucas"
                                            >
                                                <img
                                                    className="lazy"
                                                    src="images/author/author-1.jpg"
                                                    alt=""
                                                />
                                                <i className="fa fa-check" />
                                            </a>
                                        </div>
                                        <div className="nft__item_wrap">
                                            <div className="nft__item_extra">
                                                <div className="nft__item_buttons">
                                                    <button
                                                        type="button"
                                                        onClick="location.href='03_grey-item-details.html'"
                                                    >
                                                        Buy Now
                                                    </button>
                                                    <div className="nft__item_share">
                                                        <h4>Share</h4>
                                                        <a
                                                            href="../m.facebook.com/login719c.html?u=https://gigaland.io"
                                                            target="_blank"
                                                        >
                                                            <i className="fa fa-facebook fa-lg" />
                                                        </a>
                                                        <a
                                                            href="../twitter.com/intent/tweet80e6.html?url=https://gigaland.io"
                                                            target="_blank"
                                                        >
                                                            <i className="fa fa-twitter fa-lg" />
                                                        </a>
                                                        <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io">
                                                            <i className="fa fa-envelope fa-lg" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="03_grey-item-details.html">
                                                <img
                                                    src="images/items-alt/static-1.jpg"
                                                    className="lazy nft__item_preview"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="nft__item_info">
                                            <a href="03_grey-item-details.html">
                                                <h4>Sunny Day</h4>
                                            </a>
                                            <div className="nft__item_click">
                                                <span />
                                            </div>
                                            <div className="nft__item_price">
                                                0.08 ETH<span>1/20</span>
                                            </div>
                                            <div className="nft__item_action">
                                                <a href="#!">Place a bid</a>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart" />
                                                <span>50</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="nft__item style-2">
                                        <div className="author_list_pp">
                                            <a
                                                href="03_grey-author.html"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                title="Creator: Stacy Long"
                                            >
                                                <img
                                                    className="lazy"
                                                    src="images/author/author-10.jpg"
                                                    alt=""
                                                />
                                                <i className="fa fa-check" />
                                            </a>
                                        </div>
                                        <div className="nft__item_wrap">
                                            <div className="nft__item_extra">
                                                <div className="nft__item_buttons">
                                                    <button
                                                        type="button"
                                                        onClick="location.href='03_grey-item-details.html'"
                                                    >
                                                        Buy Now
                                                    </button>
                                                    <div className="nft__item_share">
                                                        <h4>Share</h4>
                                                        <a
                                                            href="../m.facebook.com/login719c.html?u=https://gigaland.io"
                                                            target="_blank"
                                                        >
                                                            <i className="fa fa-facebook fa-lg" />
                                                        </a>
                                                        <a
                                                            href="../twitter.com/intent/tweet80e6.html?url=https://gigaland.io"
                                                            target="_blank"
                                                        >
                                                            <i className="fa fa-twitter fa-lg" />
                                                        </a>
                                                        <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io">
                                                            <i className="fa fa-envelope fa-lg" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="03_grey-item-details.html">
                                                <img
                                                    src="images/items-alt/static-2.jpg"
                                                    className="lazy nft__item_preview"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="nft__item_info">
                                            <a href="03_grey-item-details.html">
                                                <h4>Blue Planet</h4>
                                            </a>
                                            <div className="nft__item_click">
                                                <span />
                                            </div>
                                            <div className="nft__item_price">
                                                0.06 ETH<span>1/22</span>
                                            </div>
                                            <div className="nft__item_action">
                                                <a href="#!">Place a bid</a>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart" />
                                                <span>80</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="nft__item style-2">
                                        <div
                                            className="de_countdown id-color"
                                            data-year="2022"
                                            data-month="1"
                                            data-day="12"
                                            data-hour="8"
                                        />
                                        <div className="author_list_pp">
                                            <a
                                                href="03_grey-author.html"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                title="Creator: Ida Chapman"
                                            >
                                                <img
                                                    className="lazy"
                                                    src="images/author/author-11.jpg"
                                                    alt=""
                                                />
                                                <i className="fa fa-check" />
                                            </a>
                                        </div>
                                        <div className="nft__item_wrap">
                                            <div className="nft__item_extra">
                                                <div className="nft__item_buttons">
                                                    <button
                                                        type="button"
                                                        onClick="location.href='03_grey-item-details.html'"
                                                    >
                                                        Buy Now
                                                    </button>
                                                    <div className="nft__item_share">
                                                        <h4>Share</h4>
                                                        <a
                                                            href="../m.facebook.com/login719c.html?u=https://gigaland.io"
                                                            target="_blank"
                                                        >
                                                            <i className="fa fa-facebook fa-lg" />
                                                        </a>
                                                        <a
                                                            href="../twitter.com/intent/tweet80e6.html?url=https://gigaland.io"
                                                            target="_blank"
                                                        >
                                                            <i className="fa fa-twitter fa-lg" />
                                                        </a>
                                                        <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io">
                                                            <i className="fa fa-envelope fa-lg" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="03_grey-item-details.html">
                                                <img
                                                    src="images/items-alt/static-3.jpg"
                                                    className="lazy nft__item_preview"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="nft__item_info">
                                            <a href="03_grey-item-details.html">
                                                <h4>Finally Free</h4>
                                            </a>
                                            <div className="nft__item_click">
                                                <span />
                                            </div>
                                            <div className="nft__item_price">
                                                0.05 ETH<span>1/11</span>
                                            </div>
                                            <div className="nft__item_action">
                                                <a href="#!">Place a bid</a>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart" />
                                                <span>97</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="nft__item style-2">
                                        <div className="author_list_pp">
                                            <a
                                                href="03_grey-author.html"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                title="Creator: Fred Ryan"
                                            >
                                                <img
                                                    className="lazy"
                                                    src="images/author/author-12.jpg"
                                                    alt=""
                                                />
                                                <i className="fa fa-check" />
                                            </a>
                                        </div>
                                        <div className="nft__item_wrap">
                                            <div className="nft__item_extra">
                                                <div className="nft__item_buttons">
                                                    <button
                                                        type="button"
                                                        onClick="location.href='03_grey-item-details.html'"
                                                    >
                                                        Buy Now
                                                    </button>
                                                    <div className="nft__item_share">
                                                        <h4>Share</h4>
                                                        <a
                                                            href="../m.facebook.com/login719c.html?u=https://gigaland.io"
                                                            target="_blank"
                                                        >
                                                            <i className="fa fa-facebook fa-lg" />
                                                        </a>
                                                        <a
                                                            href="../twitter.com/intent/tweet80e6.html?url=https://gigaland.io"
                                                            target="_blank"
                                                        >
                                                            <i className="fa fa-twitter fa-lg" />
                                                        </a>
                                                        <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io">
                                                            <i className="fa fa-envelope fa-lg" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="03_grey-item-details.html">
                                                <img
                                                    src="images/items-alt/static-4.jpg"
                                                    className="lazy nft__item_preview"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="nft__item_info">
                                            <a href="03_grey-item-details.html">
                                                <h4>Work From Home</h4>
                                            </a>
                                            <div className="nft__item_click">
                                                <span />
                                            </div>
                                            <div className="nft__item_price">
                                                0.02 ETH<span>1/15</span>
                                            </div>
                                            <div className="nft__item_action">
                                                <a href="#!">Place a bid</a>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart" />
                                                <span>73</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="nft__item style-2">
                                        <div className="author_list_pp">
                                            <a
                                                href="03_grey-author.html"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                title="Creator: Franklin Greer"
                                            >
                                                <img
                                                    className="lazy"
                                                    src="images/author/author-9.jpg"
                                                    alt=""
                                                />
                                                <i className="fa fa-check" />
                                            </a>
                                        </div>
                                        <div className="nft__item_wrap">
                                            <div className="nft__item_extra">
                                                <div className="nft__item_buttons">
                                                    <button
                                                        type="button"
                                                        onClick="location.href='03_grey-item-details.html'"
                                                    >
                                                        Buy Now
                                                    </button>
                                                    <div className="nft__item_share">
                                                        <h4>Share</h4>
                                                        <a
                                                            href="../m.facebook.com/login719c.html?u=https://gigaland.io"
                                                            target="_blank"
                                                        >
                                                            <i className="fa fa-facebook fa-lg" />
                                                        </a>
                                                        <a
                                                            href="../twitter.com/intent/tweet80e6.html?url=https://gigaland.io"
                                                            target="_blank"
                                                        >
                                                            <i className="fa fa-twitter fa-lg" />
                                                        </a>
                                                        <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io">
                                                            <i className="fa fa-envelope fa-lg" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="03_grey-item-details.html">
                                                <img
                                                    src="images/items/anim-4.html"
                                                    className="lazy nft__item_preview"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="nft__item_info">
                                            <a href="03_grey-item-details.html">
                                                <h4>The Truth</h4>
                                            </a>
                                            <div className="nft__item_click">
                                                <span />
                                            </div>
                                            <div className="nft__item_price">
                                                0.06 ETH<span>1/20</span>
                                            </div>
                                            <div className="nft__item_action">
                                                <a href="#!">Place a bid</a>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart" />
                                                <span>26</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="nft__item style-2">
                                        <div
                                            className="de_countdown id-color"
                                            data-year="2021"
                                            data-month="12"
                                            data-day="15"
                                            data-hour="8"
                                        />
                                        <div className="author_list_pp">
                                            <a
                                                href="03_grey-author.html"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                title="Creator: Mamie Barnett"
                                            >
                                                <img
                                                    className="lazy"
                                                    src="images/author/author-2.jpg"
                                                    alt=""
                                                />
                                                <i className="fa fa-check" />
                                            </a>
                                        </div>
                                        <div className="nft__item_wrap">
                                            <div className="nft__item_extra">
                                                <div className="nft__item_buttons">
                                                    <button
                                                        type="button"
                                                        onClick="location.href='03_grey-item-details.html'"
                                                    >
                                                        Buy Now
                                                    </button>
                                                    <div className="nft__item_share">
                                                        <h4>Share</h4>
                                                        <a
                                                            href="../m.facebook.com/login719c.html?u=https://gigaland.io"
                                                            target="_blank"
                                                        >
                                                            <i className="fa fa-facebook fa-lg" />
                                                        </a>
                                                        <a
                                                            href="../twitter.com/intent/tweet80e6.html?url=https://gigaland.io"
                                                            target="_blank"
                                                        >
                                                            <i className="fa fa-twitter fa-lg" />
                                                        </a>
                                                        <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io">
                                                            <i className="fa fa-envelope fa-lg" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="03_grey-item-details.html">
                                                <img
                                                    src="images/items-alt/static-5.jpg"
                                                    className="lazy nft__item_preview"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="nft__item_info">
                                            <a href="03_grey-item-details.html">
                                                <h4>Running Puppets</h4>
                                            </a>
                                            <div className="nft__item_click">
                                                <span />
                                            </div>
                                            <div className="nft__item_price">
                                                0.03 ETH<span>1/24</span>
                                            </div>
                                            <div className="nft__item_action">
                                                <a href="#!">Place a bid</a>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart" />
                                                <span>45</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="nft__item style-2">
                                        <div className="author_list_pp">
                                            <a
                                                href="03_grey-author.html"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                title="Creator: Nicholas Daniels"
                                            >
                                                <img
                                                    className="lazy"
                                                    src="images/author/author-3.jpg"
                                                    alt=""
                                                />
                                                <i className="fa fa-check" />
                                            </a>
                                        </div>
                                        <div className="nft__item_wrap">
                                            <div className="nft__item_extra">
                                                <div className="nft__item_buttons">
                                                    <button
                                                        type="button"
                                                        onClick="location.href='03_grey-item-details.html'"
                                                    >
                                                        Buy Now
                                                    </button>
                                                    <div className="nft__item_share">
                                                        <h4>Share</h4>
                                                        <a
                                                            href="../m.facebook.com/login719c.html?u=https://gigaland.io"
                                                            target="_blank"
                                                        >
                                                            <i className="fa fa-facebook fa-lg" />
                                                        </a>
                                                        <a
                                                            href="../twitter.com/intent/tweet80e6.html?url=https://gigaland.io"
                                                            target="_blank"
                                                        >
                                                            <i className="fa fa-twitter fa-lg" />
                                                        </a>
                                                        <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io">
                                                            <i className="fa fa-envelope fa-lg" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="03_grey-item-details.html">
                                                <img
                                                    src="images/items-alt/static-6.jpg"
                                                    className="lazy nft__item_preview"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="nft__item_info">
                                            <a href="03_grey-item-details.html">
                                                <h4>Green Frogman</h4>
                                            </a>
                                            <div className="nft__item_click">
                                                <span />
                                            </div>
                                            <div className="nft__item_price">
                                                0.09 ETH<span>1/25</span>
                                            </div>
                                            <div className="nft__item_action">
                                                <a href="#!">Place a bid</a>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart" />
                                                <span>76</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="nft__item style-2">
                                        <div
                                            className="de_countdown id-color"
                                            data-year="2022"
                                            data-month="1"
                                            data-day="8"
                                            data-hour="8"
                                        />
                                        <div className="author_list_pp">
                                            <a
                                                href="03_grey-author.html"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                title="Creator: Lori Hart"
                                            >
                                                <img
                                                    className="lazy"
                                                    src="images/author/author-4.jpg"
                                                    alt=""
                                                />
                                                <i className="fa fa-check" />
                                            </a>
                                        </div>
                                        <div className="nft__item_wrap">
                                            <div className="nft__item_extra">
                                                <div className="nft__item_buttons">
                                                    <button
                                                        type="button"
                                                        onClick="location.href='03_grey-item-details.html'"
                                                    >
                                                        Buy Now
                                                    </button>
                                                    <div className="nft__item_share">
                                                        <h4>Share</h4>
                                                        <a
                                                            href="../m.facebook.com/login719c.html?u=https://gigaland.io"
                                                            target="_blank"
                                                        >
                                                            <i className="fa fa-facebook fa-lg" />
                                                        </a>
                                                        <a
                                                            href="../twitter.com/intent/tweet80e6.html?url=https://gigaland.io"
                                                            target="_blank"
                                                        >
                                                            <i className="fa fa-twitter fa-lg" />
                                                        </a>
                                                        <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io">
                                                            <i className="fa fa-envelope fa-lg" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="03_grey-item-details.html">
                                                <img
                                                    src="images/items/anim-5.html"
                                                    className="lazy nft__item_preview"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="nft__item_info">
                                            <a href="03_grey-item-details.html">
                                                <h4>Loop Donut</h4>
                                            </a>
                                            <div className="nft__item_click">
                                                <span />
                                            </div>
                                            <div className="nft__item_price">
                                                0.09 ETH<span>1/14</span>
                                            </div>
                                            <div className="nft__item_action">
                                                <a href="#!">Place a bid</a>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart" />
                                                <span>94</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="spacer-single" />

                            <div className="row">
                                <div className="col-lg-12">
                                    <h2 className="style-2">Hot Collections</h2>
                                </div>
                                <div
                                    id="collection-carousel-alt"
                                    className="owl-carousel wow fadeIn"
                                >
                                    <div className="nft_coll style-2">
                                        <div className="nft_wrap">
                                            <a href="03_grey-collection.html">
                                                <img
                                                    src="images/collections/coll-1.jpg"
                                                    className="lazy img-fluid"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="nft_coll_pp">
                                            <a href="03_grey-collection.html">
                                                <img
                                                    className="lazy pp-coll"
                                                    src="images/author/author-1.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <i className="fa fa-check" />
                                        </div>
                                        <div className="nft_coll_info">
                                            <a href="03_grey-collection.html">
                                                <h4>Abstraction</h4>
                                            </a>
                                            <span>ERC-192</span>
                                        </div>
                                    </div>

                                    <div className="nft_coll style-2">
                                        <div className="nft_wrap">
                                            <a href="03_grey-collection.html">
                                                <img
                                                    src="images/collections/coll-2.jpg"
                                                    className="lazy img-fluid"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="nft_coll_pp">
                                            <a href="03_grey-collection.html">
                                                <img
                                                    className="lazy pp-coll"
                                                    src="images/author/author-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <i className="fa fa-check" />
                                        </div>
                                        <div className="nft_coll_info">
                                            <a href="03_grey-collection.html">
                                                <h4>Patternlicious</h4>
                                            </a>
                                            <span>ERC-61</span>
                                        </div>
                                    </div>

                                    <div className="nft_coll style-2">
                                        <div className="nft_wrap">
                                            <a href="03_grey-collection.html">
                                                <img
                                                    src="images/collections/coll-3.jpg"
                                                    className="lazy img-fluid"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="nft_coll_pp">
                                            <a href="03_grey-collection.html">
                                                <img
                                                    className="lazy pp-coll"
                                                    src="images/author/author-3.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <i className="fa fa-check" />
                                        </div>
                                        <div className="nft_coll_info">
                                            <a href="03_grey-collection.html">
                                                <h4>Skecthify</h4>
                                            </a>
                                            <span>ERC-126</span>
                                        </div>
                                    </div>

                                    <div className="nft_coll style-2">
                                        <div className="nft_wrap">
                                            <a href="03_grey-collection.html">
                                                <img
                                                    src="images/collections/coll-4.jpg"
                                                    className="lazy img-fluid"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="nft_coll_pp">
                                            <a href="03_grey-collection.html">
                                                <img
                                                    className="lazy pp-coll"
                                                    src="images/author/author-4.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <i className="fa fa-check" />
                                        </div>
                                        <div className="nft_coll_info">
                                            <a href="03_grey-collection.html">
                                                <h4>Cartoonism</h4>
                                            </a>
                                            <span>ERC-73</span>
                                        </div>
                                    </div>

                                    <div className="nft_coll style-2">
                                        <div className="nft_wrap">
                                            <a href="03_grey-collection.html">
                                                <img
                                                    src="images/collections/coll-5.jpg"
                                                    className="lazy img-fluid"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="nft_coll_pp">
                                            <a href="03_grey-collection.html">
                                                <img
                                                    className="lazy pp-coll"
                                                    src="images/author/author-5.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <i className="fa fa-check" />
                                        </div>
                                        <div className="nft_coll_info">
                                            <a href="03_grey-collection.html">
                                                <h4>Virtuland</h4>
                                            </a>
                                            <span>ERC-85</span>
                                        </div>
                                    </div>

                                    <div className="nft_coll style-2">
                                        <div className="nft_wrap">
                                            <a href="03_grey-collection.html">
                                                <img
                                                    src="images/collections/coll-6.jpg"
                                                    className="lazy img-fluid"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="nft_coll_pp">
                                            <a href="03_grey-collection.html">
                                                <img
                                                    className="lazy pp-coll"
                                                    src="images/author/author-6.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <i className="fa fa-check" />
                                        </div>
                                        <div className="nft_coll_info">
                                            <a href="03_grey-collection.html">
                                                <h4>Papercut</h4>
                                            </a>
                                            <span>ERC-42</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="spacer-double" />

                            <div className="row">
                                <div className="col-lg-12">
                                    <h2 className="style-2">Top Sellers</h2>
                                </div>
                                <div className="col-md-12 wow fadeIn">
                                    <ol className="author_list">
                                        <li>
                                            <div className="author_list_pp">
                                                <a href="03_grey-author.html">
                                                    <img
                                                        className="lazy"
                                                        src="images/author/author-1.jpg"
                                                        alt=""
                                                    />
                                                    <i className="fa fa-check" />
                                                </a>
                                            </div>
                                            <div className="author_list_info">
                                                <a href="03_grey-author.html">Monica Lucas</a>
                                                <span>3.2 ETH</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="author_list_pp">
                                                <a href="03_grey-author.html">
                                                    <img
                                                        className="lazy"
                                                        src="images/author/author-2.jpg"
                                                        alt=""
                                                    />
                                                    <i className="fa fa-check" />
                                                </a>
                                            </div>
                                            <div className="author_list_info">
                                                <a href="03_grey-author.html">Mamie Barnett</a>
                                                <span>2.8 ETH</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="author_list_pp">
                                                <a href="03_grey-author.html">
                                                    <img
                                                        className="lazy"
                                                        src="images/author/author-3.jpg"
                                                        alt=""
                                                    />
                                                    <i className="fa fa-check" />
                                                </a>
                                            </div>
                                            <div className="author_list_info">
                                                <a href="03_grey-author.html">Nicholas Daniels</a>
                                                <span>2.5 ETH</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="author_list_pp">
                                                <a href="03_grey-author.html">
                                                    <img
                                                        className="lazy"
                                                        src="images/author/author-4.jpg"
                                                        alt=""
                                                    />
                                                    <i className="fa fa-check" />
                                                </a>
                                            </div>
                                            <div className="author_list_info">
                                                <a href="03_grey-author.html">Lori Hart</a>
                                                <span>2.2 ETH</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="author_list_pp">
                                                <a href="03_grey-author.html">
                                                    <img
                                                        className="lazy"
                                                        src="images/author/author-5.jpg"
                                                        alt=""
                                                    />
                                                    <i className="fa fa-check" />
                                                </a>
                                            </div>
                                            <div className="author_list_info">
                                                <a href="03_grey-author.html">Jimmy Wright</a>
                                                <span>1.9 ETH</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="author_list_pp">
                                                <a href="03_grey-author.html">
                                                    <img
                                                        className="lazy"
                                                        src="images/author/author-6.jpg"
                                                        alt=""
                                                    />
                                                    <i className="fa fa-check" />
                                                </a>
                                            </div>
                                            <div className="author_list_info">
                                                <a href="03_grey-author.html">Karla Sharp</a>
                                                <span>1.6 ETH</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="author_list_pp">
                                                <a href="03_grey-author.html">
                                                    <img
                                                        className="lazy"
                                                        src="images/author/author-7.jpg"
                                                        alt=""
                                                    />
                                                    <i className="fa fa-check" />
                                                </a>
                                            </div>
                                            <div className="author_list_info">
                                                <a href="03_grey-author.html">Gayle Hicks</a>
                                                <span>1.5 ETH</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="author_list_pp">
                                                <a href="03_grey-author.html">
                                                    <img
                                                        className="lazy"
                                                        src="images/author/author-8.jpg"
                                                        alt=""
                                                    />
                                                    <i className="fa fa-check" />
                                                </a>
                                            </div>
                                            <div className="author_list_info">
                                                <a href="03_grey-author.html">Claude Banks</a>
                                                <span>1.3 ETH</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="author_list_pp">
                                                <a href="03_grey-author.html">
                                                    <img
                                                        className="lazy"
                                                        src="images/author/author-9.jpg"
                                                        alt=""
                                                    />
                                                    <i className="fa fa-check" />
                                                </a>
                                            </div>
                                            <div className="author_list_info">
                                                <a href="03_grey-author.html">Franklin Greer</a>
                                                <span>0.9 ETH</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="author_list_pp">
                                                <a href="03_grey-author.html">
                                                    <img
                                                        className="lazy"
                                                        src="images/author/author-10.jpg"
                                                        alt=""
                                                    />
                                                    <i className="fa fa-check" />
                                                </a>
                                            </div>
                                            <div className="author_list_info">
                                                <a href="03_grey-author.html">Stacy Long</a>
                                                <span>0.8 ETH</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="author_list_pp">
                                                <a href="03_grey-author.html">
                                                    <img
                                                        className="lazy"
                                                        src="images/author/author-11.jpg"
                                                        alt=""
                                                    />
                                                    <i className="fa fa-check" />
                                                </a>
                                            </div>
                                            <div className="author_list_info">
                                                <a href="03_grey-author.html">Ida Chapman</a>
                                                <span>0.6 ETH</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="author_list_pp">
                                                <a href="03_grey-author.html">
                                                    <img
                                                        className="lazy"
                                                        src="images/author/author-12.jpg"
                                                        alt=""
                                                    />
                                                    <i className="fa fa-check" />
                                                </a>
                                            </div>
                                            <div className="author_list_info">
                                                <a href="03_grey-author.html">Fred Ryan</a>
                                                <span>0.5 eth</span>
                                            </div>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="section-text" className="no-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2 className="style-2">Create and Sell Now</h2>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-sm-30">
                                    <div className="feature-box f-boxed style-3">
                                        <i className="wow fadeInUp bg-color-2 i-boxed icon_wallet" />
                                        <div className="text">
                                            <h4 className="wow fadeInUp">Set up your wallet</h4>
                                            <p className="wow fadeInUp" data-wow-delay=".25s">
                                                Sed ut perspiciatis unde omnis iste natus error sit
                                                voluptatem accusantium doloremque laudantium, totam
                                                rem.
                                            </p>
                                        </div>
                                        <i className="wm icon_wallet" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-sm-30">
                                    <div className="feature-box f-boxed style-3">
                                        <i className="wow fadeInUp bg-color-2 i-boxed icon_cloud-upload_alt" />
                                        <div className="text">
                                            <h4 className="wow fadeInUp">Add your NFT&sbquo;s</h4>
                                            <p className="wow fadeInUp" data-wow-delay=".25s">
                                                Sed ut perspiciatis unde omnis iste natus error sit
                                                voluptatem accusantium doloremque laudantium, totam
                                                rem.
                                            </p>
                                        </div>
                                        <i className="wm icon_cloud-upload_alt" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-sm-30">
                                    <div className="feature-box f-boxed style-3">
                                        <i className="wow fadeInUp bg-color-2 i-boxed icon_tags_alt" />
                                        <div className="text">
                                            <h4 className="wow fadeInUp">Sell your NFT&sbquo;s</h4>
                                            <p className="wow fadeInUp" data-wow-delay=".25s">
                                                Sed ut perspiciatis unde omnis iste natus error sit
                                                voluptatem accusantium doloremque laudantium, totam
                                                rem.
                                            </p>
                                        </div>
                                        <i className="wm icon_tags_alt" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <a href="#!" id="back-to-top">
                    {' '}
                </a>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-xs-1">
                                <div className="widget">
                                    <h5>Marketplace</h5>
                                    <ul>
                                        <li>
                                            <a href="#!">All NFTs</a>
                                        </li>
                                        <li>
                                            <a href="#!">Art</a>
                                        </li>
                                        <li>
                                            <a href="#!">Music</a>
                                        </li>
                                        <li>
                                            <a href="#!">Domain Names</a>
                                        </li>
                                        <li>
                                            <a href="#!">Virtual World</a>
                                        </li>
                                        <li>
                                            <a href="#!">Collectibles</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-1">
                                <div className="widget">
                                    <h5>Resources</h5>
                                    <ul>
                                        <li>
                                            <a href="#!">Help Center</a>
                                        </li>
                                        <li>
                                            <a href="#!">Partners</a>
                                        </li>
                                        <li>
                                            <a href="#!">Suggestions</a>
                                        </li>
                                        <li>
                                            <a href="#!">Discord</a>
                                        </li>
                                        <li>
                                            <a href="#!">Docs</a>
                                        </li>
                                        <li>
                                            <a href="#!">Newsletter</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-1">
                                <div className="widget">
                                    <h5>Community</h5>
                                    <ul>
                                        <li>
                                            <a href="#!">Community</a>
                                        </li>
                                        <li>
                                            <a href="#!">Documentation</a>
                                        </li>
                                        <li>
                                            <a href="#!">Brand Assets</a>
                                        </li>
                                        <li>
                                            <a href="#!">Blog</a>
                                        </li>
                                        <li>
                                            <a href="#!">Forum</a>
                                        </li>
                                        <li>
                                            <a href="#!">Mailing List</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-1">
                                <div className="widget">
                                    <h5>Newsletter</h5>
                                    <p>
                                        Signup for our newsletter to get the latest news in your
                                        inbox.
                                    </p>
                                    <form
                                        action="https://gigaland.io/blank.php"
                                        className="row form-dark"
                                        id="form_subscribe"
                                        method="post"
                                        name="form_subscribe"
                                    >
                                        <div className="col text-center">
                                            <input
                                                className="form-control"
                                                id="txt_subscribe"
                                                name="txt_subscribe"
                                                placeholder="enter your email"
                                                type="text"
                                            />{' '}
                                            <a href="#!" id="btn-subscribe">
                                                <i className="arrow_right bg-color-secondary" />
                                            </a>
                                            <div className="clearfix" />
                                        </div>
                                    </form>
                                    <div className="spacer-10" />
                                    <small>Your email is safe with us. We don&sbquo;t spam.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="subfooter">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="de-flex">
                                        <div className="de-flex-col">
                                            <a href="03_grey-index.html">
                                                <span className="copy">
                                                    &copy; Copyright 2021 - Gigaland by Designesia
                                                </span>
                                            </a>
                                        </div>
                                        <div className="de-flex-col">
                                            <div className="social-icons">
                                                <a href="#!">
                                                    <i className="fa fa-facebook fa-lg" />
                                                </a>
                                                <a href="#!">
                                                    <i className="fa fa-twitter fa-lg" />
                                                </a>
                                                <a href="#!">
                                                    <i className="fa fa-linkedin fa-lg" />
                                                </a>
                                                <a href="#!">
                                                    <i className="fa fa-pinterest fa-lg" />
                                                </a>
                                                <a href="#!">
                                                    <i className="fa fa-rss fa-lg" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Home;
