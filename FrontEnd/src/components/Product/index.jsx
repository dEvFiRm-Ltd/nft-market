import { Slider } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useState } from 'react';
import './main';
import './style.css';

function valuetext(value) {
    return `${value}°C`;
}

const Product = () => {
    const [age, setAge] = useState('');

    const ageChange = (event) => {
        setAge(event.target.value);
    };
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
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
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={ageChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
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
                            <Slider
                                getAriaLabel={() => 'Temperature range'}
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                            />
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
                                        src={`${process.env.PUBLIC_URL}/images/portfolio/portfolio-01.jpg`}
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
                                            src={`${process.env.PUBLIC_URL}/images/client/client-2.png`}
                                            alt="Nft_Profile"
                                        />
                                    </a>
                                    <a
                                        href="author.html"
                                        className="avatar"
                                        data-tooltip="Owener:Mr.Jone-lee"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/client/client-3.png`}
                                            alt="Nft_Profile"
                                        />
                                    </a>
                                    <a
                                        href="author.html"
                                        className="avatar"
                                        data-tooltip="Owener:Mr.Jone-lee"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/client/client-4.png`}
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
                                        src={`${process.env.PUBLIC_URL}/images/portfolio/portfolio-02.jpg`}
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
                                            src={`${process.env.PUBLIC_URL}/images/client/client-1.png`}
                                            alt="Nft_Profile"
                                        />
                                    </a>
                                    <a
                                        href="author.html"
                                        className="avatar"
                                        data-tooltip="Owener:Mr.Jone-lee"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/client/client-10.png`}
                                            alt="Nft_Profile"
                                        />
                                    </a>
                                    <a
                                        href="author.html"
                                        className="avatar"
                                        data-tooltip="Owener:Mr.Jone-lee"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/client/client-11.png`}
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
                                        src={`${process.env.PUBLIC_URL}/images/portfolio/portfolio-03.jpg`}
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
                                            src={`${process.env.PUBLIC_URL}/images/client/client-1.png`}
                                            alt="Nft_Profile"
                                        />
                                    </a>
                                    <a
                                        href="author.html"
                                        className="avatar"
                                        data-tooltip="Owener:Mr.Jone-lee"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/client/client-10.png`}
                                            alt="Nft_Profile"
                                        />
                                    </a>
                                    <a
                                        href="author.html"
                                        className="avatar"
                                        data-tooltip="Owener:Mr.Jone-lee"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/client/client-11.png`}
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
                                        src={`${process.env.PUBLIC_URL}/images/portfolio/portfolio-04.jpg`}
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
                                            src={`${process.env.PUBLIC_URL}/images/client/client-1.png`}
                                            alt="Nft_Profile"
                                        />
                                    </a>
                                    <a
                                        href="author.html"
                                        className="avatar"
                                        data-tooltip="Owener:Mr.Jone-lee"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/client/client-10.png`}
                                            alt="Nft_Profile"
                                        />
                                    </a>
                                    <a
                                        href="author.html"
                                        className="avatar"
                                        data-tooltip="Owener:Mr.Jone-lee"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/client/client-9.png`}
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
                                        src={`${process.env.PUBLIC_URL}/images/portfolio/portfolio-05.jpg`}
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
                                            src={`${process.env.PUBLIC_URL}/images/client/client-10.png`}
                                            alt="Nft_Profile"
                                        />
                                    </a>
                                    <a
                                        href="author.html"
                                        className="avatar"
                                        data-tooltip="Owener:Mr.Jone-lee"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/client/client-11.png`}
                                            alt="Nft_Profile"
                                        />
                                    </a>
                                    <a
                                        href="author.html"
                                        className="avatar"
                                        data-tooltip="Owener:Mr.Jone-lee"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/client/client-9.png`}
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
                                        src={`${process.env.PUBLIC_URL}/images/portfolio/portfolio-06.jpg`}
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
                                            src={`${process.env.PUBLIC_URL}/images/client/client-1.png`}
                                            alt="Nft_Profile"
                                        />
                                    </a>
                                    <a
                                        href="author.html"
                                        className="avatar"
                                        data-tooltip="Owener:Mr.Jone-lee"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/client/client-10.png`}
                                            alt="Nft_Profile"
                                        />
                                    </a>
                                    <a
                                        href="author.html"
                                        className="avatar"
                                        data-tooltip="Owener:Mr.Jone-lee"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/client/client-11.png`}
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
                                        src={`${process.env.PUBLIC_URL}/images/portfolio/portfolio-07.jpg`}
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
                                            src={`${process.env.PUBLIC_URL}/images/client/client-6.png`}
                                            alt="Nft_Profile"
                                        />
                                    </a>
                                    <a
                                        href="author.html"
                                        className="avatar"
                                        data-tooltip="Owener:Mr.Jone-lee"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/client/client-5.png`}
                                            alt="Nft_Profile"
                                        />
                                    </a>
                                    <a
                                        href="author.html"
                                        className="avatar"
                                        data-tooltip="Owener:Mr.Jone-lee"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/client/client-10.png`}
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
                                        src={`${process.env.PUBLIC_URL}/images/portfolio/portfolio-05.jpg`}
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
                                            src={`${process.env.PUBLIC_URL}/images/client/client-1.png`}
                                            alt="Nft_Profile"
                                        />
                                    </a>
                                    <a
                                        href="author.html"
                                        className="avatar"
                                        data-tooltip="Owener:Mr.Jone-lee"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/client/client-10.png`}
                                            alt="Nft_Profile"
                                        />
                                    </a>
                                    <a
                                        href="author.html"
                                        className="avatar"
                                        data-tooltip="Owener:Mr.Jone-lee"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/client/client-11.png`}
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
                                        src={`${process.env.PUBLIC_URL}/images/portfolio/portfolio-09.jpg`}
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
                                            src={`${process.env.PUBLIC_URL}/images/client/client-10.png`}
                                            alt="Nft_Profile"
                                        />
                                    </a>
                                    <a
                                        href="author.html"
                                        className="avatar"
                                        data-tooltip="Owener:Mr.Jone-lee"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/client/client-11.png`}
                                            alt="Nft_Profile"
                                        />
                                    </a>
                                    <a
                                        href="author.html"
                                        className="avatar"
                                        data-tooltip="Owener:Mr.Jone-lee"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/client/client-1.png`}
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
                                        src={`${process.env.PUBLIC_URL}/images/portfolio/portfolio-10.jpg`}
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
                                            src={`${process.env.PUBLIC_URL}/images/client/client-4.png`}
                                            alt="Nft_Profile"
                                        />
                                    </a>
                                    <a
                                        href="author.html"
                                        className="avatar"
                                        data-tooltip="Owener:Mr.Jone-lee"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/client/client-5.png`}
                                            alt="Nft_Profile"
                                        />
                                    </a>
                                    <a
                                        href="author.html"
                                        className="avatar"
                                        data-tooltip="Owener:Mr.Jone-lee"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/client/client-8.png`}
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
    );
};

export default Product;
