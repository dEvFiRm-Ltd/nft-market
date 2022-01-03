import React from 'react';
import './main';
import './style.css';

const Wallet = () => {
    return (
        <>
            {/* start page title area */}
            <div className="rn-breadcrumb-inner ptb--30">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <h5 className="title text-center text-md-start">
                                Make your payment easier
                            </h5>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <ul className="breadcrumb-list">
                                <li className="item">
                                    <a href="index.html">Home</a>
                                </li>
                                <li className="separator">
                                    <i className="feather-chevron-right" />
                                </li>
                                <li className="item current">Make your payment easier</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* end page title area */}

            {/* start connect area */}
            <div className="rn-connect-area rn-section-gapTop">
                <div className="container">
                    <div className="row g mb_md--30 mb_sm--30 align-items-center">
                        <div
                            className="col-lg-6"
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                        >
                            <h3 className="connect-title">Connect your wallet</h3>
                            <p className="connect-td">
                                Connect with one of available wallet providers or create a new
                                wallet. <a href="!#">What is a wallet?</a>
                            </p>
                        </div>
                    </div>
                    <div className="row g mb--50 mb_md--30 mb_sm--30 align-items-center">
                        <div
                            className="col-lg-6"
                            data-sal="slide-up"
                            data-sal-delay="200"
                            data-sal-duration="800"
                        >
                            <p className="wallet-bootm-disc">
                                We do not own your private keys and cannot access your funds without
                                your confirmation.
                            </p>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="row g-5">
                                {/* start single wallet */}
                                <div
                                    className="col-12"
                                    data-sal="slide-up"
                                    data-sal-delay="450"
                                    data-sal-duration="800"
                                >
                                    <div className="wallet-wrapper">
                                        <div className="inner">
                                            <div className="icon">
                                                <i className="color-red" data-feather="gitlab" />
                                            </div>
                                            <div className="content">
                                                <h4 className="title">
                                                    <a href="!#">MetaMask</a>
                                                </h4>
                                                <p className="description">
                                                    One of the most famous and popular browser-based
                                                    wallet
                                                </p>
                                            </div>
                                        </div>
                                        <a className="over-link" href="!#">
                                            {' '}
                                        </a>
                                    </div>
                                </div>
                                {/* start single wallet */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End connect area */}
        </>
    );
};

export default Wallet;
