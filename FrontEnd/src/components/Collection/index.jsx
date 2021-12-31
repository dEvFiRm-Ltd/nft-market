import React from 'react';
import './main';
import './style.css';

const Collection = () => {
    return (
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
                                        src={`${process.env.PUBLIC_URL}/images/collection/collection-lg-01.jpg`}
                                        alt="Nft_Profile"
                                    />
                                </div>
                                <div className="collenction-small-thumbnail">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/collection/collection-sm-01.jpg`}
                                        alt="Nft_Profile"
                                    />
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/collection/collection-sm-02.jpg`}
                                        alt="Nft_Profile"
                                    />
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/collection/collection-sm-03.jpg`}
                                        alt="Nft_Profile"
                                    />
                                </div>
                                <div className="collection-profile">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/client/client-15.png`}
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
                                        src={`${process.env.PUBLIC_URL}/images/collection/collection-lg-02.jpg`}
                                        alt="Nft_Profile"
                                    />
                                </div>
                                <div className="collenction-small-thumbnail">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/collection/collection-sm-04.jpg`}
                                        alt="Nft_Profile"
                                    />
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/collection/collection-sm-05.jpg`}
                                        alt="Nft_Profile"
                                    />
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/collection/collection-sm-06.jpg`}
                                        alt="Nft_Profile"
                                    />
                                </div>
                                <div className="collection-profile">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/client/client-12.png`}
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
                                        src={`${process.env.PUBLIC_URL}/images/collection/collection-lg-03.jpg`}
                                        alt="Nft_Profile"
                                    />
                                </div>
                                <div className="collenction-small-thumbnail">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/collection/collection-sm-07.jpg`}
                                        alt="Nft_Profile"
                                    />
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/collection/collection-sm-08.jpg`}
                                        alt="Nft_Profile"
                                    />
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/collection/collection-sm-09.jpg`}
                                        alt="Nft_Profile"
                                    />
                                </div>
                                <div className="collection-profile">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/client/client-13.png`}
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
                                        src={`${process.env.PUBLIC_URL}/images/collection/collection-lg-05.jpg`}
                                        alt="Nft_Profile"
                                    />
                                </div>
                                <div className="collenction-small-thumbnail">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/collection/collection-sm-10.jpg`}
                                        alt="Nft_Profile"
                                    />
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/collection/collection-sm-11.jpg`}
                                        alt="Nft_Profile"
                                    />
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/collection/collection-sm-12.jpg`}
                                        alt="Nft_Profile"
                                    />
                                </div>
                                <div className="collection-profile">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/client/client-14.png`}
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
    );
};

export default Collection;
