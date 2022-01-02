import React from 'react';
import { Link } from 'react-router-dom';

const BannerItem = ({ preview, title, minter }) => {
    return (
        <div className="slider-thumbnail thumbnail-overlay">
            <Link to="/">
                <img
                    src={`${process.env.PUBLIC_URL}/images/banner/${preview}`}
                    alt="NFT_portfolio"
                />
            </Link>
            <div className="read-wrapper">
                <h5>{title}</h5>
                <span>{minter}</span>
            </div>
        </div>
    );
};

export default BannerItem;
