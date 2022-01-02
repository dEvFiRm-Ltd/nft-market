import React from 'react';

const BannerItem = () => {
    return (
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
    );
};

export default BannerItem;
