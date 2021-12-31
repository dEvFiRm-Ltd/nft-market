import React from 'react';
import './main';
import './style.css';

const Banner = () => {
    return (
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
                                Search your rare NFT&rsquo;s by world <br /> class artists
                            </h2>
                            <p
                                className="banner-disc-one"
                                data-sal="slide-up"
                                data-sal-delay="250"
                                data-sal-duration="800"
                            >
                                Where Bitcoin was hailed as the digital answer to currency, NFTs
                                <br /> are now being touted as the digital answer to collectables.
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
                                        src={`${process.env.PUBLIC_URL}/images/banner/banner-04.jpg`}
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
                                        src={`${process.env.PUBLIC_URL}/images/banner/banner-01.jpg`}
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
                                        src={`${process.env.PUBLIC_URL}/images/banner/banner-02.jpg`}
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
                                        src={`${process.env.PUBLIC_URL}/images/banner/banner-03.jpg`}
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
    );
};

export default Banner;
