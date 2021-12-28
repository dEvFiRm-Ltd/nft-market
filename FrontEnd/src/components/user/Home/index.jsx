import React from 'react';
import './main';
import './style.css';

const Home = () => {
    return (
        <div className="template-color-1">
            {/* start header area */}
            {/* Start Header */}
            <header className="rn-header haeder-default black-logo-version header--fixed header--sticky">
                <div className="container">
                    <div className="header-inner">
                        <div className="header-left">
                            <div className="logo-thumbnail logo-custom-css">
                                <a className="logo-light" href="index.html">
                                    <img src="assets/images/logo/logo-white.png" alt="nft-logo" />{' '}
                                </a>
                                <a className="logo-dark" href="index.html">
                                    <img src="assets/images/logo/logo-dark.png" alt="nft-logo" />
                                </a>
                            </div>
                            <div className="mainmenu-wrapper">
                                <nav id="sideNav" className="mainmenu-nav d-none d-xl-block">
                                    {/* Start Mainmanu Nav */}
                                    <ul className="mainmenu">
                                        <li className="has-droupdown has-menu-child-item">
                                            <a className="its_new" href="index.html">
                                                Home
                                            </a>
                                            <ul className="submenu">
                                                <li>
                                                    <a href="index.html">
                                                        Home page One <i className="feather-home" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index-two.html">
                                                        Home page Two
                                                        <i className="feather-home" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index-three.html">
                                                        Home page Three
                                                        <i className="feather-home" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index-four.html">
                                                        Home page Four
                                                        <i className="feather-home" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index-five.html">
                                                        Home page Five
                                                        <i className="feather-home" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index-six.html">
                                                        Home page Six
                                                        <i className="feather-home" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index-seven.html">
                                                        Home page Seven
                                                        <i className="feather-home" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="about.html">About</a>
                                        </li>
                                        <li className="has-droupdown has-menu-child-item">
                                            <a className="its_new" href="#!">
                                                Explore
                                            </a>
                                            <ul className="submenu">
                                                <li>
                                                    <a href="explore-one.html">
                                                        Explore Filter
                                                        <i className="feather-fast-forward" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="explore-two.html">
                                                        Explore Isotop
                                                        <i className="feather-fast-forward" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="explore-three.html">
                                                        Explore Carousel
                                                        <i className="feather-fast-forward" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="explore-four.html">
                                                        Explore Simple
                                                        <i className="feather-fast-forward" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="explore-five.html">
                                                        Explore Place Bid
                                                        <i className="feather-fast-forward" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="explore-six.html">
                                                        Place Bid With Filter
                                                        <i className="feather-fast-forward" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="explore-seven.html">
                                                        Place Bid With Isotop
                                                        <i className="feather-fast-forward" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="explore-eight.html">
                                                        Place Bid With Carousel
                                                        <i className="feather-fast-forward" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="live-expo"
                                                        href="explore-live.html"
                                                    >
                                                        Live Explore
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="live-expo"
                                                        href="explore-live-two.html"
                                                    >
                                                        Live Explore Carousel
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="live-expo"
                                                        href="explore-live-three.html"
                                                    >
                                                        Live With Place Bid
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="with-megamenu">
                                            <a className="its_new" href="#!">
                                                Pages
                                            </a>
                                            <div className="rn-megamenu">
                                                <div className="wrapper">
                                                    <div className="row row--0">
                                                        <div className="col-lg-3 single-mega-item">
                                                            <ul className="mega-menu-item">
                                                                <li>
                                                                    <a href="create.html">
                                                                        Create NFT
                                                                        <i data-feather="file-plus" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="upload-variants.html">
                                                                        Upload Type
                                                                        <i data-feather="layers" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="activity.html">
                                                                        Activity
                                                                        <i data-feather="activity" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="creator.html">
                                                                        Creators
                                                                        <i data-feather="users" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="collection.html">
                                                                        Our Collection
                                                                        <i data-feather="package" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="upcoming_projects.html">
                                                                        Upcoming Projects
                                                                        <i data-feather="loader" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3 single-mega-item">
                                                            <ul className="mega-menu-item">
                                                                <li>
                                                                    <a href="login.html">
                                                                        Log In{' '}
                                                                        <i data-feather="log-in" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="sign-up.html">
                                                                        Registration{' '}
                                                                        <i data-feather="user-plus" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="forget.html">
                                                                        Forget Password{' '}
                                                                        <i data-feather="key" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="author.html">
                                                                        Author/Profile(User){' '}
                                                                        <i data-feather="user" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="connect.html">
                                                                        Connect to Wallet{' '}
                                                                        <i data-feather="pocket" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="privacy-policy.html">
                                                                        Privacy Policy{' '}
                                                                        <i data-feather="file-text" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3 single-mega-item">
                                                            <ul className="mega-menu-item">
                                                                <li>
                                                                    <a href="product.html">
                                                                        Product
                                                                        <i data-feather="folder" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="product-details.html">
                                                                        Product Details{' '}
                                                                        <i data-feather="layout" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="ranking.html">
                                                                        NFT Ranking
                                                                        <i data-feather="trending-up" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="blog.html">
                                                                        Our News{' '}
                                                                        <i data-feather="message-square" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="blog-details.html">
                                                                        Blog Details
                                                                        <i data-feather="book-open" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="404.html">
                                                                        404{' '}
                                                                        <i data-feather="alert-triangle" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3 single-mega-item">
                                                            <ul className="mega-menu-item">
                                                                <li>
                                                                    <a href="about.html">
                                                                        About Us
                                                                        <i data-feather="award" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="contact.html">
                                                                        Contact{' '}
                                                                        <i data-feather="headphones" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="support.html">
                                                                        Support/FAQ{' '}
                                                                        <i data-feather="help-circle" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="terms-condition.html">
                                                                        Terms &amp; Condition{' '}
                                                                        <i data-feather="list" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="coming-soon.html">
                                                                        Coming Soon{' '}
                                                                        <i data-feather="clock" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="maintenance.html">
                                                                        Maintenance{' '}
                                                                        <i data-feather="cpu" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="blog.html">Blog</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact</a>
                                        </li>
                                    </ul>
                                    {/* End Mainmanu Nav */}
                                </nav>
                            </div>
                        </div>
                        <div className="header-right">
                            <div className="setting-option d-none d-lg-block">
                                <form className="search-form-wrapper" action="#">
                                    <input
                                        type="search"
                                        placeholder="Search Here"
                                        aria-label="Search"
                                    />
                                    <div className="search-icon">
                                        <button type="button">
                                            <i className="feather-search" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="setting-option rn-icon-list d-block d-lg-none">
                                <div className="icon-box search-mobile-icon">
                                    <button type="button">
                                        <i className="feather-search" />
                                    </button>
                                </div>
                                <form
                                    id="header-search-1"
                                    action="#"
                                    method="GET"
                                    className="large-mobile-blog-search"
                                >
                                    <div className="rn-search-mobile form-group">
                                        <button type="submit" className="search-button">
                                            <i className="feather-search" />
                                        </button>
                                        <input type="text" placeholder="Search ..." />
                                    </div>
                                </form>
                            </div>

                            <div className="setting-option rn-icon-list notification-badge">
                                <div className="icon-box">
                                    <a href="activity.html">
                                        <i className="feather-bell" />
                                        <span className="badge">6</span>
                                    </a>
                                </div>
                            </div>

                            <div className="setting-option header-btn">
                                <div className="icon-box">
                                    <a
                                        className="btn btn-primary-alta btn-small"
                                        href="create.html"
                                    >
                                        Create
                                    </a>
                                </div>
                            </div>
                            <div className="setting-option rn-icon-list user-account">
                                <div className="icon-box">
                                    <a href="author.html">
                                        <img
                                            src="assets/images/icons/boy-avater.png"
                                            alt="Images"
                                        />
                                    </a>
                                    <div className="rn-dropdown">
                                        <div className="rn-inner-top">
                                            <h4 className="title">
                                                <a href="product-details.html">
                                                    Christopher William
                                                </a>
                                            </h4>
                                            <span>
                                                <a href="#!">Set Display Name</a>
                                            </span>
                                        </div>
                                        <div className="rn-product-inner">
                                            <ul className="product-list">
                                                <li className="single-product-list">
                                                    <div className="thumbnail">
                                                        <a href="product-details.html">
                                                            <img
                                                                src="assets/images/portfolio/portfolio-07.jpg"
                                                                alt="Nft Product Images"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="title">
                                                            <a href="product-details.html">
                                                                Balance
                                                            </a>
                                                        </h6>
                                                        <span className="price">25 ETH</span>
                                                    </div>
                                                    <div className="button" />
                                                </li>
                                                <li className="single-product-list">
                                                    <div className="thumbnail">
                                                        <a href="product-details.html">
                                                            <img
                                                                src="assets/images/portfolio/portfolio-01.jpg"
                                                                alt="Nft Product Images"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="title">
                                                            <a href="product-details.html">
                                                                Balance
                                                            </a>
                                                        </h6>
                                                        <span className="price">25 ETH</span>
                                                    </div>
                                                    <div className="button" />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="add-fund-button mt--20 pb--20">
                                            <a className="btn btn-primary-alta w-100" href="#!">
                                                Add Your More Funds
                                            </a>
                                        </div>
                                        <ul className="list-inner">
                                            <li>
                                                <a href="author.html">My Profile</a>
                                            </li>
                                            <li>
                                                <a href="author.html">Edit Profile</a>
                                            </li>
                                            <li>
                                                <a href="connect.html">Manage funds</a>
                                            </li>
                                            <li>
                                                <a href="login.html">Sign Out</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="setting-option mobile-menu-bar d-block d-xl-none">
                                <div className="hamberger">
                                    <button type="button" className="hamberger-button">
                                        <i className="feather-menu" />
                                    </button>
                                </div>
                            </div>
                            <div id="my_switcher" className="setting-option my_switcher">
                                <ul>
                                    <li>
                                        <a href="!#" data-theme="light" className="setColor light">
                                            <img
                                                src="assets/images/icons/sun-01.svg"
                                                alt="Sun images"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="!#" data-theme="dark" className="setColor dark">
                                            <img
                                                src="assets/images/icons/vector.svg"
                                                alt="Vector Images"
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* End Header Area */}
            <div className="popup-mobile-menu">
                <div className="inner">
                    <div className="header-top">
                        <div className="logo logo-custom-css">
                            <a className="logo-light" href="index.html">
                                <img src="assets/images/logo/logo-white.png" alt="nft-logo" />
                            </a>
                            <a className="logo-dark" href="index.html">
                                <img src="assets/images/logo/logo-dark.png" alt="nft-logo" />
                            </a>
                        </div>
                        <div className="close-menu">
                            <button type="button" className="close-button">
                                <i className="feather-x" />
                            </button>
                        </div>
                    </div>
                    <nav>
                        {/* Start Mainmanu Nav */}
                        <ul className="mainmenu">
                            <li className="has-droupdown">
                                <a className="nav-link its_new" href="#!">
                                    Home
                                </a>
                                <ul className="submenu">
                                    <li>
                                        <a href="index.html">
                                            Home page One <i className="feather-home" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="index-two.html">
                                            Home page Two
                                            <i className="feather-home" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="index-three.html">
                                            Home page Three
                                            <i className="feather-home" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="index-four.html">
                                            Home page Four
                                            <i className="feather-home" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="index-five.html">
                                            Home page Five
                                            <i className="feather-home" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="index-six.html">
                                            Home page Six
                                            <i className="feather-home" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="index-seven.html">
                                            Home page Seven
                                            <i className="feather-home" />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="about.html">About</a>
                            </li>
                            <li className="has-droupdown">
                                <a className="nav-link its_new" href="#!">
                                    Explore
                                </a>
                                <ul className="submenu">
                                    <li>
                                        <a href="explore-one.html">
                                            Explore Filter
                                            <i className="feather-fast-forward" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="explore-two.html">
                                            Explore Isotop
                                            <i className="feather-fast-forward" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="explore-three.html">
                                            Explore Carousel
                                            <i className="feather-fast-forward" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="explore-four.html">
                                            Explore Simple
                                            <i className="feather-fast-forward" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="explore-five.html">
                                            Explore Place Bid
                                            <i className="feather-fast-forward" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="explore-six.html">
                                            Place Bid With Filter
                                            <i className="feather-fast-forward" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="explore-seven.html">
                                            Place Bid With Isotop
                                            <i className="feather-fast-forward" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="explore-eight.html">
                                            Place Bid With Carousel
                                            <i className="feather-fast-forward" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="live-expo" href="explore-live.html">
                                            Live Explore
                                        </a>
                                    </li>
                                    <li>
                                        <a className="live-expo" href="explore-live-two.html">
                                            Live Explore Carousel
                                        </a>
                                    </li>
                                    <li>
                                        <a className="live-expo" href="explore-live-three.html">
                                            Live With Place Bid
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="with-megamenu">
                                <a className="nav-link its_new" href="#!">
                                    Pages
                                </a>
                                <div className="rn-megamenu">
                                    <div className="wrapper">
                                        <div className="row row--0">
                                            <div className="col-lg-3 single-mega-item">
                                                <ul className="mega-menu-item">
                                                    <li>
                                                        <a href="create.html">
                                                            Create NFT
                                                            <i data-feather="file-plus" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="upload-variants.html">
                                                            Upload Type
                                                            <i data-feather="layers" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="activity.html">
                                                            Activity
                                                            <i data-feather="activity" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="creator.html">
                                                            Creators
                                                            <i data-feather="users" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="collection.html">
                                                            Our Collection
                                                            <i data-feather="package" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="upcoming_projects.html">
                                                            Upcoming Projects
                                                            <i data-feather="loader" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3 single-mega-item">
                                                <ul className="mega-menu-item">
                                                    <li>
                                                        <a href="login.html">
                                                            Log In <i data-feather="log-in" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="sign-up.html">
                                                            Registration{' '}
                                                            <i data-feather="user-plus" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="forget.html">
                                                            Forget Password <i data-feather="key" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="author.html">
                                                            Author/Profile(User){' '}
                                                            <i data-feather="user" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="connect.html">
                                                            Connect to Wallet{' '}
                                                            <i data-feather="pocket" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="privacy-policy.html">
                                                            Privacy Policy{' '}
                                                            <i data-feather="file-text" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3 single-mega-item">
                                                <ul className="mega-menu-item">
                                                    <li>
                                                        <a href="product.html">
                                                            Product
                                                            <i data-feather="folder" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="product-details.html">
                                                            Product Details{' '}
                                                            <i data-feather="layout" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="ranking.html">
                                                            NFT Ranking
                                                            <i data-feather="trending-up" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog.html">
                                                            Our News{' '}
                                                            <i data-feather="message-square" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-details.html">
                                                            Blog Details
                                                            <i data-feather="book-open" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="404.html">
                                                            404 <i data-feather="alert-triangle" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3 single-mega-item">
                                                <ul className="mega-menu-item">
                                                    <li>
                                                        <a href="about.html">
                                                            About Us
                                                            <i data-feather="award" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="contact.html">
                                                            Contact <i data-feather="headphones" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="support.html">
                                                            Support/FAQ{' '}
                                                            <i data-feather="help-circle" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="terms-condition.html">
                                                            Terms &amp; Condition{' '}
                                                            <i data-feather="list" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="coming-soon.html">
                                                            Coming Soon <i data-feather="clock" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="maintenance.html">
                                                            Maintenance <i data-feather="cpu" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="blog.html">Blog</a>
                            </li>
                            <li>
                                <a href="contact.html">Contact</a>
                            </li>
                        </ul>
                        {/* End Mainmanu Nav */}
                    </nav>
                </div>
            </div>
            {/* ENd Header Area */}

            {/* start banner area */}
            <div className="banner-style-4 rn-section-gapTop">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-12 order-2 order-lg-1 mt_md--40 mt_sm--40">
                            <div className="sldier-content">
                                <span
                                    className="title-badge"
                                    data-sal="slide-up"
                                    data-sal-delay="150"
                                    data-sal-duration="800"
                                >
                                    Nuron Marketplace
                                </span>
                                <h2
                                    className="title"
                                    data-sal="slide-up"
                                    data-sal-delay="200"
                                    data-sal-duration="800"
                                >
                                    Search your rare NFT &sbquo;s by world <br /> class artists
                                </h2>
                                <p
                                    className="banner-disc-one"
                                    data-sal="slide-up"
                                    data-sal-delay="250"
                                    data-sal-duration="800"
                                >
                                    Where Bitcoin was hailed as the digital answer to currency, NFTs
                                    <br /> are now being touted as the digital answer to
                                    collectables.
                                </p>
                                <div className="button-group">
                                    <a
                                        className="btn btn-large btn-primary"
                                        data-sal="slide-up"
                                        data-sal-delay="300"
                                        data-sal-duration="800"
                                        href="#!"
                                    >
                                        Get Started
                                    </a>
                                    <a
                                        className="btn btn-large btn-primary-alta"
                                        data-sal="slide-up"
                                        data-sal-delay="300"
                                        data-sal-duration="800"
                                        href="create.html"
                                    >
                                        Create
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 order-1 order-lg-2">
                            <div className="slider slick-activation-04">
                                <div className="slider-thumbnail thumbnail-overlay">
                                    <a href="product-details.html">
                                        <img
                                            src="assets/images/banner/banner-04.jpg"
                                            alt="NFT_portfolio"
                                        />
                                    </a>
                                    <div className="read-wrapper">
                                        <h5>Sukanli</h5>
                                        <span>Bordcast</span>
                                    </div>
                                </div>

                                <div className="slider-thumbnail thumbnail-overlay">
                                    <a href="product-details.html">
                                        <img
                                            src="assets/images/banner/banner-01.jpg"
                                            alt="NFT_portfolio"
                                        />
                                    </a>
                                    <div className="read-wrapper">
                                        <h5>
                                            <a href="product-details.html">HasLivbe</a>
                                        </h5>
                                        <span>Md. Master</span>
                                    </div>
                                </div>

                                <div className="slider-thumbnail thumbnail-overlay">
                                    <a href="product-details.html">
                                        <img
                                            src="assets/images/banner/banner-02.jpg"
                                            alt="NFT_portfolio"
                                        />
                                    </a>
                                    <div className="read-wrapper">
                                        <h5>
                                            <a href="product-details.html">Ladicon Mos</a>
                                        </h5>
                                        <span>John Lee</span>
                                    </div>
                                </div>

                                <div className="slider-thumbnail thumbnail-overlay">
                                    <a href="product-details.html">
                                        <img
                                            src="assets/images/banner/banner-03.jpg"
                                            alt="NFT_portfolio"
                                        />
                                    </a>
                                    <div className="read-wrapper">
                                        <h5>Masters</h5>
                                        <span>Keenlee</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end banner area */}

            {/* Explore Style Carousel */}
            <div className="rn-live-bidding-area rn-section-gapTop">
                <div className="container">
                    <div className="row mb--50">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h3
                                    className="title mb--0 live-bidding-title"
                                    data-sal-delay="150"
                                    data-sal="slide-up"
                                    data-sal-duration="800"
                                >
                                    Live Bidding
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner-one-slick slick-activation-03 slick-arrow-style-one rn-slick-dot-style slick-gutter-15">
                                {/* start single product */}
                                <div className="single-slide-product">
                                    <div className="product-style-one">
                                        <div className="card-thumbnail">
                                            <a href="product-details.html">
                                                <img
                                                    src="assets/images/portfolio/portfolio-07.jpg"
                                                    alt="NFT_portfolio"
                                                />
                                            </a>
                                            <div className="countdown" data-date="2022-11-09">
                                                <div className="countdown-container days">
                                                    <span className="countdown-value">87</span>
                                                    <span className="countdown-heading">
                                                        D&sbquo;s
                                                    </span>
                                                </div>
                                                <div className="countdown-container hours">
                                                    <span className="countdown-value">23</span>
                                                    <span className="countdown-heading">
                                                        H&sbquo;s
                                                    </span>
                                                </div>
                                                <div className="countdown-container minutes">
                                                    <span className="countdown-value">38</span>
                                                    <span className="countdown-heading">
                                                        Min &sbquo;s
                                                    </span>
                                                </div>
                                                <div className="countdown-container seconds">
                                                    <span className="countdown-value">27</span>
                                                    <span className="countdown-heading">Sec</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-share-wrapper">
                                            <div className="profile-share">
                                                <a
                                                    href="author.html"
                                                    className="avatar"
                                                    data-tooltip="Mark JOrdan"
                                                >
                                                    <img
                                                        src="assets/images/client/client-2.png"
                                                        alt="Nft_Profile"
                                                    />
                                                </a>
                                                <a
                                                    href="author.html"
                                                    className="avatar"
                                                    data-tooltip="Mark"
                                                >
                                                    <img
                                                        src="assets/images/client/client-3.png"
                                                        alt="Nft_Profile"
                                                    />
                                                </a>
                                                <a
                                                    href="author.html"
                                                    className="avatar"
                                                    data-tooltip="Jordan"
                                                >
                                                    <img
                                                        src="assets/images/client/client-5.png"
                                                        alt="Nft_Profile"
                                                    />
                                                </a>
                                                <a className="more-author-text" href="#!">
                                                    20+ Place Bit.
                                                </a>
                                            </div>
                                            <div className="share-btn share-btn-activation dropdown">
                                                <button
                                                    type="button"
                                                    className="icon"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <svg
                                                        viewBox="0 0 14 4"
                                                        fill="none"
                                                        width="16"
                                                        height="16"
                                                        className="sc-bdnxRM sc-hKFxyN hOiKLt"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </button>

                                                <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                                    <button
                                                        type="button"
                                                        className="btn-setting-text share-text"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#shareModal"
                                                    >
                                                        Share
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn-setting-text report-text"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#reportModal"
                                                    >
                                                        Report
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="product-details.html">
                                            <span className="product-name">Preatent</span>
                                        </a>
                                        <span className="latest-bid">Highest bid 1/20</span>
                                        <div className="bid-react-area">
                                            <div className="last-bid">0.244wETH</div>
                                            <div className="react-area">
                                                <svg
                                                    viewBox="0 0 17 16"
                                                    fill="none"
                                                    width="16"
                                                    height="16"
                                                    className="sc-bdnxRM sc-hKFxyN kBvkOu"
                                                >
                                                    <path
                                                        d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                    />
                                                </svg>
                                                <span className="number">322</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* end single product */}

                                {/* start single product */}
                                <div className="single-slide-product">
                                    <div className="product-style-one">
                                        <div className="card-thumbnail">
                                            <a href="product-details.html">
                                                <img
                                                    src="assets/images/portfolio/portfolio-10.jpg"
                                                    alt="NFT_portfolio"
                                                />
                                            </a>
                                            <div className="countdown" data-date="2022-10-09">
                                                <div className="countdown-container days">
                                                    <span className="countdown-value">87</span>
                                                    <span className="countdown-heading">
                                                        D&sbquo;s
                                                    </span>
                                                </div>
                                                <div className="countdown-container hours">
                                                    <span className="countdown-value">23</span>
                                                    <span className="countdown-heading">
                                                        H&sbquo;s
                                                    </span>
                                                </div>
                                                <div className="countdown-container minutes">
                                                    <span className="countdown-value">38</span>
                                                    <span className="countdown-heading">
                                                        Min&sbquo;s
                                                    </span>
                                                </div>
                                                <div className="countdown-container seconds">
                                                    <span className="countdown-value">27</span>
                                                    <span className="countdown-heading">Sec</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-share-wrapper">
                                            <div className="profile-share">
                                                <a
                                                    href="author.html"
                                                    className="avatar"
                                                    data-tooltip="Farik Shaikh"
                                                >
                                                    <img
                                                        src="assets/images/client/client-1.png"
                                                        alt="Nft_Profile"
                                                    />
                                                </a>
                                                <a
                                                    href="author.html"
                                                    className="avatar"
                                                    data-tooltip="Shaikh"
                                                >
                                                    <img
                                                        src="assets/images/client/client-6.png"
                                                        alt="Nft_Profile"
                                                    />
                                                </a>
                                                <a
                                                    href="author.html"
                                                    className="avatar"
                                                    data-tooltip="Farik"
                                                >
                                                    <img
                                                        src="assets/images/client/client-8.png"
                                                        alt="Nft_Profile"
                                                    />
                                                </a>
                                                <a className="more-author-text" href="#!">
                                                    15+ Place Bit.
                                                </a>
                                            </div>

                                            <div className="share-btn share-btn-activation dropdown">
                                                <button
                                                    type="button"
                                                    className="icon"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <svg
                                                        viewBox="0 0 14 4"
                                                        fill="none"
                                                        width="16"
                                                        height="16"
                                                        className="sc-bdnxRM sc-hKFxyN hOiKLt"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </button>

                                                <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                                    <button
                                                        type="button"
                                                        className="btn-setting-text share-text"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#shareModal"
                                                    >
                                                        Share
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn-setting-text report-text"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#reportModal"
                                                    >
                                                        Report
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="product-details.html">
                                            <span className="product-name">#21 The Wonder</span>
                                        </a>
                                        <span className="latest-bid">Highest bid 1/20</span>
                                        <div className="bid-react-area">
                                            <div className="last-bid">0.244wETH</div>
                                            <div className="react-area">
                                                <svg
                                                    viewBox="0 0 17 16"
                                                    fill="none"
                                                    width="16"
                                                    height="16"
                                                    className="sc-bdnxRM sc-hKFxyN kBvkOu"
                                                >
                                                    <path
                                                        d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                    />
                                                </svg>
                                                <span className="number">322</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* end single product */}

                                {/* start single product */}
                                <div className="single-slide-product">
                                    <div className="product-style-one">
                                        <div className="card-thumbnail">
                                            <a href="product-details.html">
                                                <img
                                                    src="assets/images/portfolio/portfolio-03.jpg"
                                                    alt="NFT_portfolio"
                                                />
                                            </a>
                                            <div className="countdown" data-date="2023-12-09">
                                                <div className="countdown-container days">
                                                    <span className="countdown-value">87</span>
                                                    <span className="countdown-heading">
                                                        D&sbquo;s
                                                    </span>
                                                </div>
                                                <div className="countdown-container hours">
                                                    <span className="countdown-value">23</span>
                                                    <span className="countdown-heading">
                                                        H&sbquo;s
                                                    </span>
                                                </div>
                                                <div className="countdown-container minutes">
                                                    <span className="countdown-value">38</span>
                                                    <span className="countdown-heading">
                                                        Min&sbquo;s
                                                    </span>
                                                </div>
                                                <div className="countdown-container seconds">
                                                    <span className="countdown-value">27</span>
                                                    <span className="countdown-heading">Sec</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-share-wrapper">
                                            <div className="profile-share">
                                                <a
                                                    href="author.html"
                                                    className="avatar"
                                                    data-tooltip="Mona Lisa"
                                                >
                                                    <img
                                                        src="assets/images/client/client-8.png"
                                                        alt="Nft_Profile"
                                                    />
                                                </a>
                                                <a
                                                    href="author.html"
                                                    className="avatar"
                                                    data-tooltip="Lisa"
                                                >
                                                    <img
                                                        src="assets/images/client/client-4.png"
                                                        alt="Nft_Profile"
                                                    />
                                                </a>
                                                <a
                                                    href="author.html"
                                                    className="avatar"
                                                    data-tooltip="Mona"
                                                >
                                                    <img
                                                        src="assets/images/client/client-9.png"
                                                        alt="Nft_Profile"
                                                    />
                                                </a>
                                                <a className="more-author-text" href="#!">
                                                    12+ Place Bit.
                                                </a>
                                            </div>
                                            <div className="share-btn share-btn-activation dropdown">
                                                <button
                                                    type="button"
                                                    className="icon"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <svg
                                                        viewBox="0 0 14 4"
                                                        fill="none"
                                                        width="16"
                                                        height="16"
                                                        className="sc-bdnxRM sc-hKFxyN hOiKLt"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </button>

                                                <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                                    <button
                                                        type="button"
                                                        className="btn-setting-text share-text"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#shareModal"
                                                    >
                                                        Share
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn-setting-text report-text"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#reportModal"
                                                    >
                                                        Report
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="product-details.html">
                                            <span className="product-name">OrBid6</span>
                                        </a>
                                        <span className="latest-bid">Highest bid 2/31</span>
                                        <div className="bid-react-area">
                                            <div className="last-bid">0.2128wETH</div>
                                            <div className="react-area">
                                                <svg
                                                    viewBox="0 0 17 16"
                                                    fill="none"
                                                    width="16"
                                                    height="16"
                                                    className="sc-bdnxRM sc-hKFxyN kBvkOu"
                                                >
                                                    <path
                                                        d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                    />
                                                </svg>
                                                <span className="number">12</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* end single product */}

                                {/* start single product */}
                                <div className="single-slide-product">
                                    <div className="product-style-one">
                                        <div className="card-thumbnail">
                                            <a href="product-details.html">
                                                <img
                                                    src="assets/images/portfolio/portfolio-04.jpg"
                                                    alt="NFT_portfolio"
                                                />
                                            </a>
                                            <div className="countdown" data-date="2024-10-08">
                                                <div className="countdown-container days">
                                                    <span className="countdown-value">87</span>
                                                    <span className="countdown-heading">
                                                        D&sbquo;s
                                                    </span>
                                                </div>
                                                <div className="countdown-container hours">
                                                    <span className="countdown-value">23</span>
                                                    <span className="countdown-heading">
                                                        H&sbquo;s
                                                    </span>
                                                </div>
                                                <div className="countdown-container minutes">
                                                    <span className="countdown-value">38</span>
                                                    <span className="countdown-heading">
                                                        Min&sbquo;s
                                                    </span>
                                                </div>
                                                <div className="countdown-container seconds">
                                                    <span className="countdown-value">27</span>
                                                    <span className="countdown-heading">Sec</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-share-wrapper">
                                            <div className="profile-share">
                                                <a
                                                    href="author.html"
                                                    className="avatar"
                                                    data-tooltip="Falak Sabbir"
                                                >
                                                    <img
                                                        src="assets/images/client/client-2.png"
                                                        alt="Nft_Profile"
                                                    />
                                                </a>
                                                <a
                                                    href="author.html"
                                                    className="avatar"
                                                    data-tooltip="Sabbir"
                                                >
                                                    <img
                                                        src="assets/images/client/client-1.png"
                                                        alt="Nft_Profile"
                                                    />
                                                </a>
                                                <a
                                                    href="author.html"
                                                    className="avatar"
                                                    data-tooltip="Falak"
                                                >
                                                    <img
                                                        src="assets/images/client/client-11.png"
                                                        alt="Nft_Profile"
                                                    />
                                                </a>
                                                <a className="more-author-text" href="#!">
                                                    16+ Place Bit.
                                                </a>
                                            </div>
                                            <div className="share-btn share-btn-activation dropdown">
                                                <button
                                                    type="button"
                                                    className="icon"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <svg
                                                        viewBox="0 0 14 4"
                                                        fill="none"
                                                        width="16"
                                                        height="16"
                                                        className="sc-bdnxRM sc-hKFxyN hOiKLt"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </button>

                                                <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                                    <button
                                                        type="button"
                                                        className="btn-setting-text share-text"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#shareModal"
                                                    >
                                                        Share
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn-setting-text report-text"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#reportModal"
                                                    >
                                                        Report
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="product-details.html">
                                            <span className="product-name">Morgan11</span>
                                        </a>
                                        <span className="latest-bid">Highest bid 3/16</span>
                                        <div className="bid-react-area">
                                            <div className="last-bid">0.265wETH</div>
                                            <div className="react-area">
                                                <svg
                                                    viewBox="0 0 17 16"
                                                    fill="none"
                                                    width="16"
                                                    height="16"
                                                    className="sc-bdnxRM sc-hKFxyN kBvkOu"
                                                >
                                                    <path
                                                        d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                    />
                                                </svg>
                                                <span className="number">20</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* end single product */}

                                {/* start single product */}
                                <div className="single-slide-product">
                                    <div className="product-style-one">
                                        <div className="card-thumbnail">
                                            <a href="product-details.html">
                                                <img
                                                    src="assets/images/portfolio/portfolio-06.jpg"
                                                    alt="NFT_portfolio"
                                                />
                                            </a>
                                            <div className="countdown" data-date="2023-11-08">
                                                <div className="countdown-container days">
                                                    <span className="countdown-value">87</span>
                                                    <span className="countdown-heading">
                                                        D&sbquo;s
                                                    </span>
                                                </div>
                                                <div className="countdown-container hours">
                                                    <span className="countdown-value">23</span>
                                                    <span className="countdown-heading">
                                                        H&sbquo;s
                                                    </span>
                                                </div>
                                                <div className="countdown-container minutes">
                                                    <span className="countdown-value">38</span>
                                                    <span className="countdown-heading">
                                                        Min&sbquo;s
                                                    </span>
                                                </div>
                                                <div className="countdown-container seconds">
                                                    <span className="countdown-value">27</span>
                                                    <span className="countdown-heading">Sec</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-share-wrapper">
                                            <div className="profile-share">
                                                <a
                                                    href="author.html"
                                                    className="avatar"
                                                    data-tooltip="Oram Kasin"
                                                >
                                                    <img
                                                        src="assets/images/client/client-8.png"
                                                        alt="Nft_Profile"
                                                    />
                                                </a>
                                                <a
                                                    href="author.html"
                                                    className="avatar"
                                                    data-tooltip="Kasin"
                                                >
                                                    <img
                                                        src="assets/images/client/client-2.png"
                                                        alt="Nft_Profile"
                                                    />
                                                </a>
                                                <a
                                                    href="author.html"
                                                    className="avatar"
                                                    data-tooltip="Oram"
                                                >
                                                    <img
                                                        src="assets/images/client/client-1.png"
                                                        alt="Nft_Profile"
                                                    />
                                                </a>
                                                <a className="more-author-text" href="#!">
                                                    10+ Place Bit.
                                                </a>
                                            </div>
                                            <div className="share-btn share-btn-activation dropdown">
                                                <button
                                                    type="button"
                                                    className="icon"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <svg
                                                        viewBox="0 0 14 4"
                                                        fill="none"
                                                        width="16"
                                                        height="16"
                                                        className="sc-bdnxRM sc-hKFxyN hOiKLt"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </button>

                                                <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                                    <button
                                                        type="button"
                                                        className="btn-setting-text share-text"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#shareModal"
                                                    >
                                                        Share
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn-setting-text report-text"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#reportModal"
                                                    >
                                                        Report
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="product-details.html">
                                            <span className="product-name">mAtal8</span>
                                        </a>
                                        <span className="latest-bid">Highest bid 6/50</span>
                                        <div className="bid-react-area">
                                            <div className="last-bid">0.244wETH</div>
                                            <div className="react-area">
                                                <svg
                                                    viewBox="0 0 17 16"
                                                    fill="none"
                                                    width="16"
                                                    height="16"
                                                    className="sc-bdnxRM sc-hKFxyN kBvkOu"
                                                >
                                                    <path
                                                        d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                    />
                                                </svg>
                                                <span className="number">205</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* end single product */}
                                {/* start single product */}
                                <div className="single-slide-product">
                                    <div className="product-style-one">
                                        <div className="card-thumbnail">
                                            <a href="product-details.html">
                                                <img
                                                    src="assets/images/portfolio/portfolio-10.jpg"
                                                    alt="NFT_portfolio"
                                                />
                                            </a>
                                            <div className="countdown" data-date="2023-11-08">
                                                <div className="countdown-container days">
                                                    <span className="countdown-value">87</span>
                                                    <span className="countdown-heading">
                                                        D&sbquo;s
                                                    </span>
                                                </div>
                                                <div className="countdown-container hours">
                                                    <span className="countdown-value">23</span>
                                                    <span className="countdown-heading">
                                                        H&sbquo;s
                                                    </span>
                                                </div>
                                                <div className="countdown-container minutes">
                                                    <span className="countdown-value">38</span>
                                                    <span className="countdown-heading">
                                                        Min&sbquo;s
                                                    </span>
                                                </div>
                                                <div className="countdown-container seconds">
                                                    <span className="countdown-value">27</span>
                                                    <span className="countdown-heading">Sec</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-share-wrapper">
                                            <div className="profile-share">
                                                <a
                                                    href="author.html"
                                                    className="avatar"
                                                    data-tooltip="Oram Kasin"
                                                >
                                                    <img
                                                        src="assets/images/client/client-10.png"
                                                        alt="Nft_Profile"
                                                    />
                                                </a>
                                                <a
                                                    href="author.html"
                                                    className="avatar"
                                                    data-tooltip="Kasin"
                                                >
                                                    <img
                                                        src="assets/images/client/client-6.png"
                                                        alt="Nft_Profile"
                                                    />
                                                </a>
                                                <a
                                                    href="author.html"
                                                    className="avatar"
                                                    data-tooltip="Oram"
                                                >
                                                    <img
                                                        src="assets/images/client/client-1.png"
                                                        alt="Nft_Profile"
                                                    />
                                                </a>
                                                <a className="more-author-text" href="#!">
                                                    11+ Place Bit.
                                                </a>
                                            </div>
                                            <div className="share-btn share-btn-activation dropdown">
                                                <button
                                                    type="button"
                                                    className="icon"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <svg
                                                        viewBox="0 0 14 4"
                                                        fill="none"
                                                        width="16"
                                                        height="16"
                                                        className="sc-bdnxRM sc-hKFxyN hOiKLt"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </button>

                                                <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                                    <button
                                                        type="button"
                                                        className="btn-setting-text share-text"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#shareModal"
                                                    >
                                                        Share
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn-setting-text report-text"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#reportModal"
                                                    >
                                                        Report
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="product-details.html">
                                            <span className="product-name">Delta25</span>
                                        </a>
                                        <span className="latest-bid">Highest bid 6/30</span>
                                        <div className="bid-react-area">
                                            <div className="last-bid">0.234wETH</div>
                                            <div className="react-area">
                                                <svg
                                                    viewBox="0 0 17 16"
                                                    fill="none"
                                                    width="16"
                                                    height="16"
                                                    className="sc-bdnxRM sc-hKFxyN kBvkOu"
                                                >
                                                    <path
                                                        d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                    />
                                                </svg>
                                                <span className="number">205</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* end single product */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Explore Style Carousel End */}

            {/* Start product area */}
            <div className="rn-product-area rn-section-gapTop">
                <div className="container">
                    <div className="row mb--30 align-items-center">
                        <div className="col-12">
                            <h3
                                className="title mb--0"
                                data-sal-delay="150"
                                data-sal="slide-up"
                                data-sal-duration="800"
                            >
                                Explore Product
                            </h3>
                        </div>
                    </div>

                    <div className="default-exp-wrapper">
                        <div className="inner">
                            <div className="filter-select-option">
                                <label htmlFor="likes" className="filter-leble">
                                    LIKES
                                </label>
                                <select id="likes">
                                    <option data-display="Most liked">Most liked</option>
                                    <option value="1">Least liked</option>
                                </select>
                            </div>
                            <div className="filter-select-option">
                                <label className="filter-leble">Category</label>
                                <select>
                                    <option data-display="Category">Category</option>
                                    <option value="1">Art</option>
                                    <option value="1">Photograph</option>
                                    <option value="2">Metaverses</option>
                                    <option value="4">Potato</option>
                                    <option value="4">Photos</option>
                                </select>
                            </div>

                            <div className="filter-select-option">
                                <label className="filter-leble">Collections</label>
                                <select>
                                    <option data-display="Collections">Collections</option>
                                    <option value="1">BoredApeYachtClub</option>
                                    <option value="2">MutantApeYachtClub</option>
                                    <option value="4">Art Blocks Factory</option>
                                </select>
                            </div>

                            <div className="filter-select-option">
                                <label className="filter-leble">Sale type</label>
                                <select>
                                    <option data-display="Sale type">Sale type</option>
                                    <option value="1">Fixed price</option>
                                    <option value="2">Timed auction</option>
                                    <option value="4">Not for sale</option>
                                    <option value="4">Open for offers</option>
                                </select>
                            </div>

                            <div className="filter-select-option">
                                <label className="filter-leble">Price Range</label>
                                <div className="price_filter s-filter clear">
                                    <form action="#" method="GET">
                                        <div id="slider-range" />
                                        <div className="slider__range--output">
                                            <div className="price__output--wrap">
                                                <div className="price--output">
                                                    <span>Price :</span>
                                                    <input type="text" id="amount" readOnly />
                                                </div>
                                                <div className="price--filter">
                                                    <a
                                                        className="btn btn-primary btn-small"
                                                        href="#!"
                                                    >
                                                        Filter
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-5 mt_dec--30">
                        {/* start single product */}
                        <div
                            className="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                        >
                            <div className="product-style-one no-overlay with-placeBid">
                                <div className="card-thumbnail">
                                    <a href="product-details.html">
                                        <img
                                            src="assets/images/portfolio/portfolio-01.jpg"
                                            alt="NFT_portfolio"
                                        />
                                    </a>
                                    <a href="product-details.html" className="btn btn-primary">
                                        Place Bid
                                    </a>
                                </div>
                                <div className="product-share-wrapper">
                                    <div className="profile-share">
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Owener:Mr.Jone-lee"
                                        >
                                            <img
                                                src="assets/images/client/client-2.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Owener:Mr.Jone-lee"
                                        >
                                            <img
                                                src="assets/images/client/client-3.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Owener:Mr.Jone-lee"
                                        >
                                            <img
                                                src="assets/images/client/client-4.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a className="more-author-text" href="#!">
                                            9+ Place Bit.
                                        </a>
                                    </div>
                                    <div className="share-btn share-btn-activation dropdown">
                                        <button
                                            type="button"
                                            className="icon"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <svg
                                                viewBox="0 0 14 4"
                                                fill="none"
                                                width="16"
                                                height="16"
                                                className="sc-bdnxRM sc-hKFxyN hOiKLt"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </button>

                                        <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                            <button
                                                type="button"
                                                className="btn-setting-text share-text"
                                                data-bs-toggle="modal"
                                                data-bs-target="#shareModal"
                                            >
                                                Share
                                            </button>
                                            <button
                                                type="button"
                                                className="btn-setting-text report-text"
                                                data-bs-toggle="modal"
                                                data-bs-target="#reportModal"
                                            >
                                                Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <a href="product-details.html">
                                    <span className="product-name">Diamond Dog</span>
                                </a>
                                <span className="latest-bid">Highest bid 1/20</span>
                                <div className="bid-react-area">
                                    <div className="last-bid">0.244wETH</div>
                                    <div className="react-area">
                                        <svg
                                            viewBox="0 0 17 16"
                                            fill="none"
                                            width="16"
                                            height="16"
                                            className="sc-bdnxRM sc-hKFxyN kBvkOu"
                                        >
                                            <path
                                                d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                        <span className="number">322</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end single product */}
                        {/* start single product */}
                        <div
                            className="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
                            data-sal="slide-up"
                            data-sal-delay="200"
                            data-sal-duration="800"
                        >
                            <div className="product-style-one no-overlay with-placeBid">
                                <div className="card-thumbnail">
                                    <a href="product-details.html">
                                        <img
                                            src="assets/images/portfolio/portfolio-02.jpg"
                                            alt="NFT_portfolio"
                                        />
                                    </a>
                                    <a href="product-details.html" className="btn btn-primary">
                                        Place Bid
                                    </a>
                                </div>
                                <div className="product-share-wrapper">
                                    <div className="profile-share">
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Owener:Mr.Jone-lee"
                                        >
                                            <img
                                                src="assets/images/client/client-1.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Owener:Mr.Jone-lee"
                                        >
                                            <img
                                                src="assets/images/client/client-10.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Owener:Mr.Jone-lee"
                                        >
                                            <img
                                                src="assets/images/client/client-11.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a className="more-author-text" href="#!">
                                            10+ Place Bit.
                                        </a>
                                    </div>
                                    <div className="share-btn share-btn-activation dropdown">
                                        <button
                                            type="button"
                                            className="icon"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <svg
                                                viewBox="0 0 14 4"
                                                fill="none"
                                                width="16"
                                                height="16"
                                                className="sc-bdnxRM sc-hKFxyN hOiKLt"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </button>

                                        <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                            <button
                                                type="button"
                                                className="btn-setting-text share-text"
                                                data-bs-toggle="modal"
                                                data-bs-target="#shareModal"
                                            >
                                                Share
                                            </button>
                                            <button
                                                type="button"
                                                className="btn-setting-text report-text"
                                                data-bs-toggle="modal"
                                                data-bs-target="#reportModal"
                                            >
                                                Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <a href="product-details.html">
                                    <span className="product-name">OrBid6</span>
                                </a>
                                <span className="latest-bid">Highest bid 1/20</span>
                                <div className="bid-react-area">
                                    <div className="last-bid">0.244wETH</div>
                                    <div className="react-area">
                                        <svg
                                            viewBox="0 0 17 16"
                                            fill="none"
                                            width="16"
                                            height="16"
                                            className="sc-bdnxRM sc-hKFxyN kBvkOu"
                                        >
                                            <path
                                                d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                        <span className="number">322</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end single product */}
                        {/* start single product */}
                        <div
                            className="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
                            data-sal="slide-up"
                            data-sal-delay="250"
                            data-sal-duration="800"
                        >
                            <div className="product-style-one no-overlay with-placeBid">
                                <div className="card-thumbnail">
                                    <a href="product-details.html">
                                        <img
                                            src="assets/images/portfolio/portfolio-03.jpg"
                                            alt="NFT_portfolio"
                                        />
                                    </a>
                                    <a href="product-details.html" className="btn btn-primary">
                                        Place Bid
                                    </a>
                                </div>
                                <div className="product-share-wrapper">
                                    <div className="profile-share">
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Owener:Mr.Jone-lee"
                                        >
                                            <img
                                                src="assets/images/client/client-1.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Owener:Mr.Jone-lee"
                                        >
                                            <img
                                                src="assets/images/client/client-10.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Owener:Mr.Jone-lee"
                                        >
                                            <img
                                                src="assets/images/client/client-11.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a className="more-author-text" href="#!">
                                            10+ Place Bit.
                                        </a>
                                    </div>
                                    <div className="share-btn share-btn-activation dropdown">
                                        <button
                                            type="button"
                                            className="icon"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <svg
                                                viewBox="0 0 14 4"
                                                fill="none"
                                                width="16"
                                                height="16"
                                                className="sc-bdnxRM sc-hKFxyN hOiKLt"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </button>

                                        <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                            <button
                                                type="button"
                                                className="btn-setting-text share-text"
                                                data-bs-toggle="modal"
                                                data-bs-target="#shareModal"
                                            >
                                                Share
                                            </button>
                                            <button
                                                type="button"
                                                className="btn-setting-text report-text"
                                                data-bs-toggle="modal"
                                                data-bs-target="#reportModal"
                                            >
                                                Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <a href="product-details.html">
                                    <span className="product-name">Morgan11</span>
                                </a>
                                <span className="latest-bid">Highest bid 1/20</span>
                                <div className="bid-react-area">
                                    <div className="last-bid">0.244wETH</div>
                                    <div className="react-area">
                                        <svg
                                            viewBox="0 0 17 16"
                                            fill="none"
                                            width="16"
                                            height="16"
                                            className="sc-bdnxRM sc-hKFxyN kBvkOu"
                                        >
                                            <path
                                                d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                        <span className="number">322</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end single product */}
                        {/* start single product */}
                        <div
                            className="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
                            data-sal="slide-up"
                            data-sal-delay="300"
                            data-sal-duration="800"
                        >
                            <div className="product-style-one no-overlay with-placeBid">
                                <div className="card-thumbnail">
                                    <a href="product-details.html">
                                        <img
                                            src="assets/images/portfolio/portfolio-04.jpg"
                                            alt="NFT_portfolio"
                                        />
                                    </a>
                                    <a href="product-details.html" className="btn btn-primary">
                                        Place Bid
                                    </a>
                                </div>
                                <div className="product-share-wrapper">
                                    <div className="profile-share">
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Owener:Mr.Jone-lee"
                                        >
                                            <img
                                                src="assets/images/client/client-1.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Owener:Mr.Jone-lee"
                                        >
                                            <img
                                                src="assets/images/client/client-10.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Owener:Mr.Jone-lee"
                                        >
                                            <img
                                                src="assets/images/client/client-9.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a className="more-author-text" href="#!">
                                            21+ Place Bit.
                                        </a>
                                    </div>
                                    <div className="share-btn share-btn-activation dropdown">
                                        <button
                                            type="button"
                                            className="icon"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <svg
                                                viewBox="0 0 14 4"
                                                fill="none"
                                                width="16"
                                                height="16"
                                                className="sc-bdnxRM sc-hKFxyN hOiKLt"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </button>

                                        <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                            <button
                                                type="button"
                                                className="btn-setting-text share-text"
                                                data-bs-toggle="modal"
                                                data-bs-target="#shareModal"
                                            >
                                                Share
                                            </button>
                                            <button
                                                type="button"
                                                className="btn-setting-text report-text"
                                                data-bs-toggle="modal"
                                                data-bs-target="#reportModal"
                                            >
                                                Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <a href="product-details.html">
                                    <span className="product-name">mAtal8</span>
                                </a>
                                <span className="latest-bid">Highest bid 1/20</span>
                                <div className="bid-react-area">
                                    <div className="last-bid">0.244wETH</div>
                                    <div className="react-area">
                                        <svg
                                            viewBox="0 0 17 16"
                                            fill="none"
                                            width="16"
                                            height="16"
                                            className="sc-bdnxRM sc-hKFxyN kBvkOu"
                                        >
                                            <path
                                                d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                        <span className="number">322</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end single product */}
                        {/* start single product */}
                        <div
                            className="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
                            data-sal="slide-up"
                            data-sal-delay="350"
                            data-sal-duration="800"
                        >
                            <div className="product-style-one no-overlay with-placeBid">
                                <div className="card-thumbnail">
                                    <a href="product-details.html">
                                        <img
                                            src="assets/images/portfolio/portfolio-05.jpg"
                                            alt="NFT_portfolio"
                                        />
                                    </a>
                                    <a href="product-details.html" className="btn btn-primary">
                                        Place Bid
                                    </a>
                                </div>
                                <div className="product-share-wrapper">
                                    <div className="profile-share">
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Owener:Mr.Jone-lee"
                                        >
                                            <img
                                                src="assets/images/client/client-10.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Owener:Mr.Jone-lee"
                                        >
                                            <img
                                                src="assets/images/client/client-11.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Owener:Mr.Jone-lee"
                                        >
                                            <img
                                                src="assets/images/client/client-9.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a className="more-author-text" href="#!">
                                            12+ Place Bit.
                                        </a>
                                    </div>
                                    <div className="share-btn share-btn-activation dropdown">
                                        <button
                                            type="button"
                                            className="icon"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <svg
                                                viewBox="0 0 14 4"
                                                fill="none"
                                                width="16"
                                                height="16"
                                                className="sc-bdnxRM sc-hKFxyN hOiKLt"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </button>

                                        <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                            <button
                                                type="button"
                                                className="btn-setting-text share-text"
                                                data-bs-toggle="modal"
                                                data-bs-target="#shareModal"
                                            >
                                                Share
                                            </button>
                                            <button
                                                type="button"
                                                className="btn-setting-text report-text"
                                                data-bs-toggle="modal"
                                                data-bs-target="#reportModal"
                                            >
                                                Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <a href="product-details.html">
                                    <span className="product-name">PlatOrgan</span>
                                </a>
                                <span className="latest-bid">Highest bid 1/20</span>
                                <div className="bid-react-area">
                                    <div className="last-bid">0.244wETH</div>
                                    <div className="react-area">
                                        <svg
                                            viewBox="0 0 17 16"
                                            fill="none"
                                            width="16"
                                            height="16"
                                            className="sc-bdnxRM sc-hKFxyN kBvkOu"
                                        >
                                            <path
                                                d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                        <span className="number">322</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end single product */}
                        {/* start single product */}
                        <div
                            className="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
                            data-sal="slide-up"
                            data-sal-delay="400"
                            data-sal-duration="800"
                        >
                            <div className="product-style-one no-overlay with-placeBid">
                                <div className="card-thumbnail">
                                    <a href="product-details.html">
                                        <img
                                            src="assets/images/portfolio/portfolio-06.jpg"
                                            alt="NFT_portfolio"
                                        />
                                    </a>
                                    <a href="product-details.html" className="btn btn-primary">
                                        Place Bid
                                    </a>
                                </div>
                                <div className="product-share-wrapper">
                                    <div className="profile-share">
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Owener:Mr.Jone-lee"
                                        >
                                            <img
                                                src="assets/images/client/client-1.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Owener:Mr.Jone-lee"
                                        >
                                            <img
                                                src="assets/images/client/client-10.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Owener:Mr.Jone-lee"
                                        >
                                            <img
                                                src="assets/images/client/client-11.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a className="more-author-text" href="#!">
                                            5+ Place Bit.
                                        </a>
                                    </div>
                                    <div className="share-btn share-btn-activation dropdown">
                                        <button
                                            type="button"
                                            className="icon"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <svg
                                                viewBox="0 0 14 4"
                                                fill="none"
                                                width="16"
                                                height="16"
                                                className="sc-bdnxRM sc-hKFxyN hOiKLt"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </button>

                                        <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                            <button
                                                type="button"
                                                className="btn-setting-text share-text"
                                                data-bs-toggle="modal"
                                                data-bs-target="#shareModal"
                                            >
                                                Share
                                            </button>
                                            <button
                                                type="button"
                                                className="btn-setting-text report-text"
                                                data-bs-toggle="modal"
                                                data-bs-target="#reportModal"
                                            >
                                                Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <a href="product-details.html">
                                    <span className="product-name">Orthogon#720</span>
                                </a>
                                <span className="latest-bid">Highest bid 1/20</span>
                                <div className="bid-react-area">
                                    <div className="last-bid">0.244wETH</div>
                                    <div className="react-area">
                                        <svg
                                            viewBox="0 0 17 16"
                                            fill="none"
                                            width="16"
                                            height="16"
                                            className="sc-bdnxRM sc-hKFxyN kBvkOu"
                                        >
                                            <path
                                                d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                        <span className="number">322</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end single product */}
                        {/* start single product */}
                        <div
                            className="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
                            data-sal="slide-up"
                            data-sal-delay="450"
                            data-sal-duration="800"
                        >
                            <div className="product-style-one no-overlay with-placeBid">
                                <div className="card-thumbnail">
                                    <a href="product-details.html">
                                        <img
                                            src="assets/images/portfolio/portfolio-07.jpg"
                                            alt="NFT_portfolio"
                                        />
                                    </a>
                                    <a href="product-details.html" className="btn btn-primary">
                                        Place Bid
                                    </a>
                                </div>
                                <div className="product-share-wrapper">
                                    <div className="profile-share">
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Owener:Mr.Jone-lee"
                                        >
                                            <img
                                                src="assets/images/client/client-6.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Owener:Mr.Jone-lee"
                                        >
                                            <img
                                                src="assets/images/client/client-5.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Owener:Mr.Jone-lee"
                                        >
                                            <img
                                                src="assets/images/client/client-10.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a className="more-author-text" href="#!">
                                            9+ Place Bit.
                                        </a>
                                    </div>
                                    <div className="share-btn share-btn-activation dropdown">
                                        <button
                                            type="button"
                                            className="icon"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <svg
                                                viewBox="0 0 14 4"
                                                fill="none"
                                                width="16"
                                                height="16"
                                                className="sc-bdnxRM sc-hKFxyN hOiKLt"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </button>

                                        <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                            <button
                                                type="button"
                                                className="btn-setting-text share-text"
                                                data-bs-toggle="modal"
                                                data-bs-target="#shareModal"
                                            >
                                                Share
                                            </button>
                                            <button
                                                type="button"
                                                className="btn-setting-text report-text"
                                                data-bs-toggle="modal"
                                                data-bs-target="#reportModal"
                                            >
                                                Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <a href="product-details.html">
                                    <span className="product-name">Orgajis</span>
                                </a>
                                <span className="latest-bid">Highest bid 1/20</span>
                                <div className="bid-react-area">
                                    <div className="last-bid">0.244wETH</div>
                                    <div className="react-area">
                                        <svg
                                            viewBox="0 0 17 16"
                                            fill="none"
                                            width="16"
                                            height="16"
                                            className="sc-bdnxRM sc-hKFxyN kBvkOu"
                                        >
                                            <path
                                                d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                        <span className="number">322</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end single product */}
                        {/* start single product */}
                        <div
                            className="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
                            data-sal="slide-up"
                            data-sal-delay="500"
                            data-sal-duration="800"
                        >
                            <div className="product-style-one no-overlay with-placeBid">
                                <div className="card-thumbnail">
                                    <a href="product-details.html">
                                        <img
                                            src="assets/images/portfolio/portfolio-05.jpg"
                                            alt="NFT_portfolio"
                                        />
                                    </a>
                                    <a href="product-details.html" className="btn btn-primary">
                                        Place Bid
                                    </a>
                                </div>
                                <div className="product-share-wrapper">
                                    <div className="profile-share">
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Owener:Mr.Jone-lee"
                                        >
                                            <img
                                                src="assets/images/client/client-1.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Owener:Mr.Jone-lee"
                                        >
                                            <img
                                                src="assets/images/client/client-10.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Owener:Mr.Jone-lee"
                                        >
                                            <img
                                                src="assets/images/client/client-11.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a className="more-author-text" href="#!">
                                            16+ Place Bit.
                                        </a>
                                    </div>
                                    <div className="share-btn share-btn-activation dropdown">
                                        <button
                                            type="button"
                                            className="icon"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <svg
                                                viewBox="0 0 14 4"
                                                fill="none"
                                                width="16"
                                                height="16"
                                                className="sc-bdnxRM sc-hKFxyN hOiKLt"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </button>

                                        <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                            <button
                                                type="button"
                                                className="btn-setting-text share-text"
                                                data-bs-toggle="modal"
                                                data-bs-target="#shareModal"
                                            >
                                                Share
                                            </button>
                                            <button
                                                type="button"
                                                className="btn-setting-text report-text"
                                                data-bs-toggle="modal"
                                                data-bs-target="#reportModal"
                                            >
                                                Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <a href="product-details.html">
                                    <span className="product-name">Preatent</span>
                                </a>
                                <span className="latest-bid">Highest bid 1/20</span>
                                <div className="bid-react-area">
                                    <div className="last-bid">0.244wETH</div>
                                    <div className="react-area">
                                        <svg
                                            viewBox="0 0 17 16"
                                            fill="none"
                                            width="16"
                                            height="16"
                                            className="sc-bdnxRM sc-hKFxyN kBvkOu"
                                        >
                                            <path
                                                d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                        <span className="number">322</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end single product */}
                        {/* start single product */}
                        <div
                            className="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
                            data-sal="slide-up"
                            data-sal-delay="550"
                            data-sal-duration="800"
                        >
                            <div className="product-style-one no-overlay with-placeBid">
                                <div className="card-thumbnail">
                                    <a href="product-details.html">
                                        <img
                                            src="assets/images/portfolio/portfolio-09.jpg"
                                            alt="NFT_portfolio"
                                        />
                                    </a>
                                    <a href="product-details.html" className="btn btn-primary">
                                        Place Bid
                                    </a>
                                </div>
                                <div className="product-share-wrapper">
                                    <div className="profile-share">
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Owener:Mr.Jone-lee"
                                        >
                                            <img
                                                src="assets/images/client/client-10.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Owener:Mr.Jone-lee"
                                        >
                                            <img
                                                src="assets/images/client/client-11.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Owener:Mr.Jone-lee"
                                        >
                                            <img
                                                src="assets/images/client/client-1.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a className="more-author-text" href="#!">
                                            22+ Place Bit.
                                        </a>
                                    </div>
                                    <div className="share-btn share-btn-activation dropdown">
                                        <button
                                            type="button"
                                            className="icon"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <svg
                                                viewBox="0 0 14 4"
                                                fill="none"
                                                width="16"
                                                height="16"
                                                className="sc-bdnxRM sc-hKFxyN hOiKLt"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </button>

                                        <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                            <button
                                                type="button"
                                                className="btn-setting-text share-text"
                                                data-bs-toggle="modal"
                                                data-bs-target="#shareModal"
                                            >
                                                Share
                                            </button>
                                            <button
                                                type="button"
                                                className="btn-setting-text report-text"
                                                data-bs-toggle="modal"
                                                data-bs-target="#reportModal"
                                            >
                                                Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <a href="product-details.html">
                                    <span className="product-name">Preatent</span>
                                </a>
                                <span className="latest-bid">Highest bid 1/20</span>
                                <div className="bid-react-area">
                                    <div className="last-bid">0.244wETH</div>
                                    <div className="react-area">
                                        <svg
                                            viewBox="0 0 17 16"
                                            fill="none"
                                            width="16"
                                            height="16"
                                            className="sc-bdnxRM sc-hKFxyN kBvkOu"
                                        >
                                            <path
                                                d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                        <span className="number">322</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end single product */}
                        {/* start single product */}
                        <div
                            className="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
                            data-sal="slide-up"
                            data-sal-delay="600"
                            data-sal-duration="800"
                        >
                            <div className="product-style-one no-overlay with-placeBid">
                                <div className="card-thumbnail">
                                    <a href="product-details.html">
                                        <img
                                            src="assets/images/portfolio/portfolio-10.jpg"
                                            alt="NFT_portfolio"
                                        />
                                    </a>
                                    <a href="product-details.html" className="btn btn-primary">
                                        Place Bid
                                    </a>
                                </div>
                                <div className="product-share-wrapper">
                                    <div className="profile-share">
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Owener:Mr.Jone-lee"
                                        >
                                            <img
                                                src="assets/images/client/client-4.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Owener:Mr.Jone-lee"
                                        >
                                            <img
                                                src="assets/images/client/client-5.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Owener:Mr.Jone-lee"
                                        >
                                            <img
                                                src="assets/images/client/client-8.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a className="more-author-text" href="#!">
                                            13+ Place Bit.
                                        </a>
                                    </div>
                                    <div className="share-btn share-btn-activation dropdown">
                                        <button
                                            type="button"
                                            className="icon"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <svg
                                                viewBox="0 0 14 4"
                                                fill="none"
                                                width="16"
                                                height="16"
                                                className="sc-bdnxRM sc-hKFxyN hOiKLt"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </button>

                                        <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                            <button
                                                type="button"
                                                className="btn-setting-text share-text"
                                                data-bs-toggle="modal"
                                                data-bs-target="#shareModal"
                                            >
                                                Share
                                            </button>
                                            <button
                                                type="button"
                                                className="btn-setting-text report-text"
                                                data-bs-toggle="modal"
                                                data-bs-target="#reportModal"
                                            >
                                                Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <a href="product-details.html">
                                    <span className="product-name">Preatent</span>
                                </a>
                                <span className="latest-bid">Highest bid 1/20</span>
                                <div className="bid-react-area">
                                    <div className="last-bid">0.244wETH</div>
                                    <div className="react-area">
                                        <svg
                                            viewBox="0 0 17 16"
                                            fill="none"
                                            width="16"
                                            height="16"
                                            className="sc-bdnxRM sc-hKFxyN kBvkOu"
                                        >
                                            <path
                                                d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                        <span className="number">322</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end single product */}
                    </div>
                </div>
            </div>
            {/* end product area */}
            {/* top top-seller start */}
            <div className="rn-top-top-seller-area nice-selector-transparent rn-section-gapTop">
                <div className="container">
                    <div className="row  mb--30">
                        <div className="col-12 justify-sm-center d-flex">
                            <h3
                                className="title"
                                data-sal-delay="150"
                                data-sal="slide-up"
                                data-sal-duration="800"
                            >
                                Top Seller in
                            </h3>
                            <select>
                                <option data-display="1 day"> 1 day</option>
                                <option value="1">7 Day&sbquo;s</option>
                                <option value="2">15 Day&sbquo;s</option>
                                <option value="4">30 Day&sbquo;s</option>
                            </select>
                        </div>
                    </div>
                    <div className="row justify-sm-center g-5 top-seller-list-wrapper">
                        {/* start single top-seller */}
                        <div
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                            className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list"
                        >
                            <div className="top-seller-inner-one">
                                <div className="top-seller-wrapper">
                                    <div className="thumbnail varified">
                                        <a href="author.html">
                                            <img
                                                src="assets/images/client/client-12.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                    </div>
                                    <div className="top-seller-content">
                                        <a href="author.html">
                                            <h6 className="name">Brodband</h6>
                                        </a>
                                        <span className="count-number">$2500,000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End single top-seller */}

                        {/* start single top-seller */}
                        <div
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                            className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list"
                        >
                            <div className="top-seller-inner-one">
                                <div className="top-seller-wrapper">
                                    <div className="thumbnail">
                                        <a href="author.html">
                                            <img
                                                src="assets/images/client/client-2.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                    </div>
                                    <div className="top-seller-content">
                                        <a href="author.html">
                                            <h6 className="name">Ms. Parkline</h6>
                                        </a>
                                        <span className="count-number">$2300,000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End single top-seller */}

                        {/* start single top-seller */}
                        <div
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                            className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list"
                        >
                            <div className="top-seller-inner-one">
                                <div className="top-seller-wrapper">
                                    <div className="thumbnail">
                                        <a href="author.html">
                                            <img
                                                src="assets/images/client/client-3.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                    </div>
                                    <div className="top-seller-content">
                                        <a href="author.html">
                                            <h6 className="name">Methods</h6>
                                        </a>
                                        <span className="count-number">$2100,000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End single top-seller */}

                        {/* start single top-seller */}
                        <div
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                            className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list"
                        >
                            <div className="top-seller-inner-one">
                                <div className="top-seller-wrapper">
                                    <div className="thumbnail varified">
                                        <a href="author.html">
                                            <img
                                                src="assets/images/client/client-4.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                    </div>
                                    <div className="top-seller-content">
                                        <a href="author.html">
                                            <h6 className="name">Jone sone</h6>
                                        </a>
                                        <span className="count-number">$2000,000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End single top-seller */}

                        {/* start single top-seller */}
                        <div
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                            className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list"
                        >
                            <div className="top-seller-inner-one">
                                <div className="top-seller-wrapper">
                                    <div className="thumbnail">
                                        <a href="author.html">
                                            <img
                                                src="assets/images/client/client-5.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                    </div>
                                    <div className="top-seller-content">
                                        <a href="author.html">
                                            <h6 className="name">Siddhart</h6>
                                        </a>
                                        <span className="count-number">$200,000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End single top-seller */}

                        {/* start single top-seller */}
                        <div
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                            className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list"
                        >
                            <div className="top-seller-inner-one">
                                <div className="top-seller-wrapper">
                                    <div className="thumbnail varified">
                                        <a href="author.html">
                                            <img
                                                src="assets/images/client/client-6.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                    </div>
                                    <div className="top-seller-content">
                                        <a href="author.html">
                                            <h6 className="name">Sobuj Mk</h6>
                                        </a>
                                        <span className="count-number">$2000,000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End single top-seller */}

                        {/* start single top-seller */}
                        <div
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                            className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list"
                        >
                            <div className="top-seller-inner-one">
                                <div className="top-seller-wrapper">
                                    <div className="thumbnail varified">
                                        <a href="author.html">
                                            <img
                                                src="assets/images/client/client-7.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                    </div>
                                    <div className="top-seller-content">
                                        <a href="author.html">
                                            <h6 className="name">Trodband</h6>
                                        </a>
                                        <span className="count-number">$2500,000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End single top-seller */}

                        {/* start single top-seller */}
                        <div
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                            className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list"
                        >
                            <div className="top-seller-inner-one">
                                <div className="top-seller-wrapper">
                                    <div className="thumbnail">
                                        <a href="author.html">
                                            <img
                                                src="assets/images/client/client-8.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                    </div>
                                    <div className="top-seller-content">
                                        <a href="author.html">
                                            <h6 className="name">Yash</h6>
                                        </a>
                                        <span className="count-number">$2500,000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End single top-seller */}

                        {/* start single top-seller */}
                        <div
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                            className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list"
                        >
                            <div className="top-seller-inner-one">
                                <div className="top-seller-wrapper">
                                    <div className="thumbnail">
                                        <a href="author.html">
                                            <img
                                                src="assets/images/client/client-9.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                    </div>
                                    <div className="top-seller-content">
                                        <a href="author.html">
                                            <h6 className="name">YASHKIB</h6>
                                        </a>
                                        <span className="count-number">$2500,000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End single top-seller */}

                        {/* start single top-seller */}
                        <div
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                            className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list"
                        >
                            <div className="top-seller-inner-one">
                                <div className="top-seller-wrapper">
                                    <div className="thumbnail varified">
                                        <a href="author.html">
                                            <img
                                                src="assets/images/client/client-10.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                    </div>
                                    <div className="top-seller-content">
                                        <a href="author.html">
                                            <h6 className="name">Brodband</h6>
                                        </a>
                                        <span className="count-number">$2500,000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End single top-seller */}
                    </div>
                </div>
            </div>
            {/* top top-seller end */}
            {/* start service area */}
            <div className="rn-service-area rn-section-gapTop">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb--50">
                            <h3
                                className="title"
                                data-sal-delay="150"
                                data-sal="slide-up"
                                data-sal-duration="800"
                            >
                                Create and sell your NFTs
                            </h3>
                        </div>
                    </div>
                    <div className="row g-5">
                        {/* start single service */}
                        <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div
                                data-sal="slide-up"
                                data-sal-delay="150"
                                data-sal-duration="800"
                                className="rn-service-one color-shape-7"
                            >
                                <div className="inner">
                                    <div className="icon">
                                        <img src="assets/images/icons/shape-7.png" alt="Shape" />
                                    </div>
                                    <div className="subtitle">Step-01</div>
                                    <div className="content">
                                        <h4 className="title">
                                            <a href="#!">Set up your wallet</a>
                                        </h4>
                                        <p className="description">
                                            Powerful features and inclusions, which makes Nuron
                                            standout, easily customizable and scalable.
                                        </p>
                                        <a className="read-more-button" href="#!">
                                            <i className="feather-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                                <a className="over-link" href="#!">
                                    {' '}
                                </a>
                            </div>
                        </div>
                        {/* End single service */}
                        {/* start single service */}
                        <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div
                                data-sal="slide-up"
                                data-sal-delay="200"
                                data-sal-duration="800"
                                className="rn-service-one color-shape-1"
                            >
                                <div className="inner">
                                    <div className="icon">
                                        <img src="assets/images/icons/shape-1.png" alt="Shape" />
                                    </div>
                                    <div className="subtitle">Step-02</div>
                                    <div className="content">
                                        <h4 className="title">
                                            <a href="#!">Create your collection</a>
                                        </h4>
                                        <p className="description">
                                            A great collection of beautiful website templates for
                                            your need. Choose the best suitable template.
                                        </p>
                                        <a className="read-more-button" href="#!">
                                            <i className="feather-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                                <a className="over-link" href="#!">
                                    {' '}
                                </a>
                            </div>
                        </div>
                        {/* End single service */}
                        {/* start single service */}
                        <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div
                                data-sal="slide-up"
                                data-sal-delay="250"
                                data-sal-duration="800"
                                className="rn-service-one color-shape-5"
                            >
                                <div className="inner">
                                    <div className="icon">
                                        <img src="assets/images/icons/shape-5.png" alt="Shape" />
                                    </div>
                                    <div className="subtitle">Step-03</div>
                                    <div className="content">
                                        <h4 className="title">
                                            <a href="#!">Add your NFT&sbquo;s</a>
                                        </h4>
                                        <p className="description">
                                            We&sbquo;ve made the template fully responsive, so it
                                            looks great on all devices: desktop, tablets and.
                                        </p>
                                        <a className="read-more-button" href="#!">
                                            <i className="feather-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                                <a className="over-link" href="#!">
                                    {' '}
                                </a>
                            </div>
                        </div>
                        {/* End single service */}
                        {/* start single service */}
                        <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div
                                data-sal="slide-up"
                                data-sal-delay="300"
                                data-sal-duration="800"
                                className="rn-service-one color-shape-6"
                            >
                                <div className="inner">
                                    <div className="icon">
                                        <img src="assets/images/icons/shape-6.png" alt="Shape" />
                                    </div>
                                    <div className="subtitle">Step-04</div>
                                    <div className="content">
                                        <h4 className="title">
                                            <a href="#!">Sell Your NFT&sbquo;s</a>
                                        </h4>
                                        <p className="description">
                                            I throw myself down among the tall grass by the stream
                                            as I lie close to the earth NFT&sbquo;s.
                                        </p>
                                        <a className="read-more-button" href="#!">
                                            <i className="feather-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                                <a className="over-link" href="#!">
                                    {' '}
                                </a>
                            </div>
                        </div>
                        {/* End single service */}
                    </div>
                </div>
            </div>
            {/* End service area */}
            {/* collection area Start */}
            <div className="rn-collection-area rn-section-gapTop">
                <div className="container">
                    <div className="row mb--50 align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <h3
                                className="title mb--0"
                                data-sal-delay="150"
                                data-sal="slide-up"
                                data-sal-duration="800"
                            >
                                Top Collection
                            </h3>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
                            <div
                                className="view-more-btn text-start text-sm-end"
                                data-sal-delay="150"
                                data-sal="slide-up"
                                data-sal-duration="800"
                            >
                                <a className="btn-transparent" href="#!">
                                    VIEW ALL
                                    <i data-feather="arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="row g-5">
                        {/* start single collention */}
                        <div
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                            className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12"
                        >
                            <a href="product-details.html" className="rn-collection-inner-one">
                                <div className="collection-wrapper">
                                    <div className="collection-big-thumbnail">
                                        <img
                                            src="assets/images/collection/collection-lg-01.jpg"
                                            alt="Nft_Profile"
                                        />
                                    </div>
                                    <div className="collenction-small-thumbnail">
                                        <img
                                            src="assets/images/collection/collection-sm-01.jpg"
                                            alt="Nft_Profile"
                                        />
                                        <img
                                            src="assets/images/collection/collection-sm-02.jpg"
                                            alt="Nft_Profile"
                                        />
                                        <img
                                            src="assets/images/collection/collection-sm-03.jpg"
                                            alt="Nft_Profile"
                                        />
                                    </div>
                                    <div className="collection-profile">
                                        <img
                                            src="assets/images/client/client-15.png"
                                            alt="Nft_Profile"
                                        />
                                    </div>
                                    <div className="collection-deg">
                                        <h6 className="title">Cubic Trad</h6>
                                        <span className="items">27 Items</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        {/* End single collention */}
                        {/* start single collention */}
                        <div
                            data-sal="slide-up"
                            data-sal-delay="200"
                            data-sal-duration="800"
                            className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12"
                        >
                            <a href="product-details.html" className="rn-collection-inner-one">
                                <div className="collection-wrapper">
                                    <div className="collection-big-thumbnail">
                                        <img
                                            src="assets/images/collection/collection-lg-02.jpg"
                                            alt="Nft_Profile"
                                        />
                                    </div>
                                    <div className="collenction-small-thumbnail">
                                        <img
                                            src="assets/images/collection/collection-sm-04.jpg"
                                            alt="Nft_Profile"
                                        />
                                        <img
                                            src="assets/images/collection/collection-sm-05.jpg"
                                            alt="Nft_Profile"
                                        />
                                        <img
                                            src="assets/images/collection/collection-sm-06.jpg"
                                            alt="Nft_Profile"
                                        />
                                    </div>
                                    <div className="collection-profile">
                                        <img
                                            src="assets/images/client/client-12.png"
                                            alt="Nft_Profile"
                                        />
                                    </div>
                                    <div className="collection-deg">
                                        <h6 className="title">Diamond Dog</h6>
                                        <span className="items">20 Items</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        {/* End single collention */}
                        {/* start single collention */}
                        <div
                            data-sal="slide-up"
                            data-sal-delay="250"
                            data-sal-duration="800"
                            className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12"
                        >
                            <a href="product-details.html" className="rn-collection-inner-one">
                                <div className="collection-wrapper">
                                    <div className="collection-big-thumbnail">
                                        <img
                                            src="assets/images/collection/collection-lg-03.jpg"
                                            alt="Nft_Profile"
                                        />
                                    </div>
                                    <div className="collenction-small-thumbnail">
                                        <img
                                            src="assets/images/collection/collection-sm-07.jpg"
                                            alt="Nft_Profile"
                                        />
                                        <img
                                            src="assets/images/collection/collection-sm-08.jpg"
                                            alt="Nft_Profile"
                                        />
                                        <img
                                            src="assets/images/collection/collection-sm-09.jpg"
                                            alt="Nft_Profile"
                                        />
                                    </div>
                                    <div className="collection-profile">
                                        <img
                                            src="assets/images/client/client-13.png"
                                            alt="Nft_Profile"
                                        />
                                    </div>
                                    <div className="collection-deg">
                                        <h6 className="title">Morgan11</h6>
                                        <span className="items">15 Items</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        {/* End single collention */}
                        {/* start single collention */}
                        <div
                            data-sal="slide-up"
                            data-sal-delay="350"
                            data-sal-duration="800"
                            className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12"
                        >
                            <a href="product-details.html" className="rn-collection-inner-one">
                                <div className="collection-wrapper">
                                    <div className="collection-big-thumbnail">
                                        <img
                                            src="assets/images/collection/collection-lg-05.jpg"
                                            alt="Nft_Profile"
                                        />
                                    </div>
                                    <div className="collenction-small-thumbnail">
                                        <img
                                            src="assets/images/collection/collection-sm-10.jpg"
                                            alt="Nft_Profile"
                                        />
                                        <img
                                            src="assets/images/collection/collection-sm-11.jpg"
                                            alt="Nft_Profile"
                                        />
                                        <img
                                            src="assets/images/collection/collection-sm-12.jpg"
                                            alt="Nft_Profile"
                                        />
                                    </div>
                                    <div className="collection-profile">
                                        <img
                                            src="assets/images/client/client-14.png"
                                            alt="Nft_Profile"
                                        />
                                    </div>
                                    <div className="collection-deg">
                                        <h6 className="title">Orthogon#720</h6>
                                        <span className="items">10 Items</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        {/* End single collention */}
                    </div>
                </div>
            </div>
            {/* collection area End */}
            {/* Modal */}
            <div
                className="rn-popup-modal share-modal-wrapper modal fade"
                id="shareModal"
                tabIndex="-1"
                aria-hidden="true"
            >
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                >
                    <i data-feather="x" />
                </button>
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content share-wrapper">
                        <div className="modal-header share-area">
                            <h5 className="modal-title">Share this NFT</h5>
                        </div>
                        <div className="modal-body">
                            <ul className="social-share-default">
                                <li>
                                    <a href="#!">
                                        <span className="icon">
                                            <i data-feather="facebook" />
                                        </span>
                                        <span className="text">facebook</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <span className="icon">
                                            <i data-feather="twitter" />
                                        </span>
                                        <span className="text">twitter</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <span className="icon">
                                            <i data-feather="linkedin" />
                                        </span>
                                        <span className="text">linkedin</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <span className="icon">
                                            <i data-feather="instagram" />
                                        </span>
                                        <span className="text">instagram</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <span className="icon">
                                            <i data-feather="youtube" />
                                        </span>
                                        <span className="text">youtube</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <div
                className="rn-popup-modal report-modal-wrapper modal fade"
                id="reportModal"
                tabIndex="-1"
                aria-hidden="true"
            >
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                >
                    <i data-feather="x" />
                </button>
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content report-content-wrapper">
                        <div className="modal-header report-modal-header">
                            <h5 className="modal-title">Why are you reporting?</h5>
                        </div>
                        <div className="modal-body">
                            <p>
                                Describe why you think this item should be removed from marketplace
                            </p>
                            <div className="report-form-box">
                                <h6 className="title">Message</h6>
                                <textarea name="message" placeholder="Write issues" />
                                <div className="report-button">
                                    <button type="button" className="btn btn-primary mr--10 w-auto">
                                        Report
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-primary-alta w-auto"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Start Footer Area */}
            <div className="rn-footer-one rn-section-gap bg-color--1 mt--100 mt_md--80 mt_sm--80">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="widget-content-wrapper">
                                <div className="footer-left">
                                    <div className="logo-thumbnail logo-custom-css">
                                        <a className="logo-light" href="index.html">
                                            <img
                                                src="assets/images/logo/logo-white.png"
                                                alt="nft-logo"
                                            />
                                        </a>
                                        <a className="logo-dark" href="index.html">
                                            <img
                                                src="assets/images/logo/logo-dark.png"
                                                alt="nft-logo"
                                            />
                                        </a>
                                    </div>
                                    <p className="rn-footer-describe">
                                        Created with the collaboration of over 60 of the
                                        world&sbquo;s best Nuron Artists.
                                    </p>
                                </div>
                                <div className="widget-bottom mt--40 pt--40">
                                    <h6 className="title">Get The Latest Nuron Updates </h6>
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="form-control bg-color--2"
                                            placeholder="Your username"
                                            aria-label="Recipient's username"
                                        />
                                        <div className="input-group-append">
                                            <button
                                                type="button"
                                                className="btn btn-primary-alta btn-outline-secondary"
                                            >
                                                Subscribe
                                            </button>
                                        </div>
                                    </div>
                                    <div className="newsletter-dsc">
                                        <p>Email is safe. We don&sbquo;t spam.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_mobile--40">
                            <div className="footer-widget widget-quicklink">
                                <h6 className="widget-title">Nuron</h6>
                                <ul className="footer-list-one">
                                    <li className="single-list">
                                        <a href="#!">Protocol Explore</a>
                                    </li>
                                    <li className="single-list">
                                        <a href="#!">System Token</a>
                                    </li>
                                    <li className="single-list">
                                        <a href="#!">Otimize Time</a>
                                    </li>
                                    <li className="single-list">
                                        <a href="#!">Visual Checking</a>
                                    </li>
                                    <li className="single-list">
                                        <a href="#!">Fadeup System</a>
                                    </li>
                                    <li className="single-list">
                                        <a href="#!">Activity Log</a>
                                    </li>
                                    <li className="single-list">
                                        <a href="#!">System Auto Since</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
                            <div className="footer-widget widget-information">
                                <h6 className="widget-title">Information</h6>
                                <ul className="footer-list-one">
                                    <li className="single-list">
                                        <a href="#!">Market Explore</a>
                                    </li>
                                    <li className="single-list">
                                        <a href="#!">Ready Token</a>
                                    </li>
                                    <li className="single-list">
                                        <a href="#!">Main Option</a>
                                    </li>
                                    <li className="single-list">
                                        <a href="#!">Product Checking</a>
                                    </li>
                                    <li className="single-list">
                                        <a href="blog.html">Blog Grid</a>
                                    </li>
                                    <li className="single-list">
                                        <a href="about.html">About Us</a>
                                    </li>
                                    <li className="single-list">
                                        <a href="#!">Fix Bug </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
                            <div className="footer-widget">
                                <h6 className="widget-title">Recent Sold Out</h6>
                                <ul className="footer-recent-post">
                                    <li className="recent-post">
                                        <div className="thumbnail">
                                            <a href="product-details.html">
                                                <img
                                                    src="assets/images/portfolio/portfolio-01.jpg"
                                                    alt="Product Images"
                                                />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <h6 className="title">
                                                <a href="product-details.html">#21 The Wonder</a>
                                            </h6>
                                            <p>Highest bid 1/20</p>
                                            <span className="price">0.244wETH</span>
                                        </div>
                                    </li>
                                    <li className="recent-post">
                                        <div className="thumbnail">
                                            <a href="product-details.html">
                                                <img
                                                    src="assets/images/portfolio/portfolio-02.jpg"
                                                    alt="Product Images"
                                                />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <h6 className="title">
                                                <a href="product-details.html">Diamond Dog</a>
                                            </h6>
                                            <p>Highest bid 1/20</p>
                                            <span className="price">0.022wETH</span>
                                        </div>
                                    </li>
                                    <li className="recent-post">
                                        <div className="thumbnail">
                                            <a href="product-details.html">
                                                <img
                                                    src="assets/images/portfolio/portfolio-03.jpg"
                                                    alt="Product Images"
                                                />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <h6 className="title">
                                                <a href="product-details.html">Morgan11</a>
                                            </h6>
                                            <p>Highest bid 1/20</p>
                                            <span className="price">0.892wETH</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Footer Area */}
            {/* Start Footer Area */}
            <div className="copy-right-one ptb--20 bg-color--1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="copyright-left">
                                <span>© Nuron, Inc. All rights reserved.</span>
                                <ul className="privacy">
                                    <li>
                                        <a href="terms-condition.html">Terms</a>
                                    </li>
                                    <li>
                                        <a href="privacy-policy.html">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="copyright-right">
                                <ul className="social-copyright">
                                    <li>
                                        <a href="#!">
                                            <i data-feather="facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <i data-feather="twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <i data-feather="instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <i data-feather="linkedin" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <i data-feather="mail" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Footer Area */}
            <div className="mouse-cursor cursor-outer" />
            <div className="mouse-cursor cursor-inner" />
            {/* Start Top To Bottom Area  */}
            <div className="rn-progress-parent">
                <svg
                    className="rn-back-circle svg-inner"
                    width="100%"
                    height="100%"
                    viewBox="-1 -1 102 102"
                >
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>
            {/* End Top To Bottom Area  */}
        </div>
    );
};

export default Home;
