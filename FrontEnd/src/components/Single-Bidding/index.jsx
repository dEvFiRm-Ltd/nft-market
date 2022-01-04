import React, { useState, useEffect } from 'react';
import './main';
import './style.css';

const SingleBidding = ({ img, duration, bidders, title, likes }) => {
  const ending = new Date('Jan 5, 2022 15:37:25').getTime();
  let current = new Date().getTime();
  let days, hours, minutes, seconds;
  const counter = () => {
    let timer = ending - current;
    days = Math.floor(timer / (1000 * 60 * 60 * 24));
    hours = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((timer % (1000 * 60)) / 1000);
  };
  const [timeLeft, setTimeLeft] = useState(counter());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(counter());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className='single-slide-product'>
      <div className='product-style-one'>
        <div className='card-thumbnail'>
          <a href='product-details.html'>
            <img
              src={`${process.env.PUBLIC_URL}/images/portfolio/${img}`}
              alt='NFT_portfolio'
            />
          </a>
          <div className='countdown'>
            <div className='countdown-container days'>
              <span className='countdown-value'>{days}</span>
              <span className='countdown-heading'>Day&rsquo;s</span>
            </div>
            <div className='countdown-container hours'>
              <span className='countdown-value'>{hours}</span>
              <span className='countdown-heading'>Hour&rsquo;s</span>
            </div>
            <div className='countdown-container minutes'>
              <span className='countdown-value'>{minutes}</span>
              <span className='countdown-heading'>Min&rsquo;s</span>
            </div>
            <div className='countdown-container seconds'>
              <span className='countdown-value'>{seconds}</span>
              <span className='countdown-heading'>Sec&rsquo;s</span>
            </div>
          </div>
        </div>
        <div className='product-share-wrapper'>
          <div className='profile-share'>
            <a
              href='author.html'
              className='avatar'
              data-tooltip='Farik Shaikh'
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/client/client-1.png`}
                alt='Nft_Profile'
              />
            </a>
            <a href='author.html' className='avatar' data-tooltip='Shaikh'>
              <img
                src={`${process.env.PUBLIC_URL}/images/client/client-6.png`}
                alt='Nft_Profile'
              />
            </a>
            <a href='author.html' className='avatar' data-tooltip='Farik'>
              <img
                src={`${process.env.PUBLIC_URL}/images/client/client-8.png`}
                alt='Nft_Profile'
              />
            </a>
            <a className='more-author-text' href='#!'>
              15+ Place Bit.
            </a>
          </div>

          <div className='share-btn share-btn-activation dropdown'>
            <button
              type='button'
              className='icon'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              <svg
                viewBox='0 0 14 4'
                fill='none'
                width='16'
                height='16'
                className='sc-bdnxRM sc-hKFxyN hOiKLt'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z'
                  fill='currentColor'
                />
              </svg>
            </button>

            <div className='share-btn-setting dropdown-menu dropdown-menu-end'>
              <button
                type='button'
                className='btn-setting-text share-text'
                data-bs-toggle='modal'
                data-bs-target='#shareModal'
              >
                Share
              </button>
              <button
                type='button'
                className='btn-setting-text report-text'
                data-bs-toggle='modal'
                data-bs-target='#reportModal'
              >
                Report
              </button>
            </div>
          </div>
        </div>
        <a href='product-details.html'>
          <span className='product-name'>{title}</span>
        </a>
        <span className='latest-bid'>Highest bid</span>
        <div className='bid-react-area'>
          <div className='last-bid'>0.244wETH</div>
          <div className='react-area'>
            <svg
              viewBox='0 0 17 16'
              fill='none'
              width='16'
              height='16'
              className='sc-bdnxRM sc-hKFxyN kBvkOu'
            >
              <path
                d='M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z'
                stroke='currentColor'
                strokeWidth='2'
              />
            </svg>
            <span className='number'>{likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBidding;
