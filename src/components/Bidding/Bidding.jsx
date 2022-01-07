import React from 'react';
import Slider from 'react-slick';
import SingleBidding from './Single-Bidding/SingleBidding';
import './main';
import './style.css';

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      type='button'
      className='slide-arrow next-arrow slick-arrow'
      onClick={onClick}
      style={{ display: 'block' }}
    >
      <i className='feather-arrow-right' />
    </button>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      type='button'
      className='slide-arrow prev-arrow slick-arrow'
      onClick={onClick}
      style={{ display: 'block' }}
    >
      <i className='feather-arrow-left' />
    </button>
  );
};

const Bidding = () => {
  const slides = {
    dots: false,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className='rn-live-bidding-area rn-section-gapTop'>
      <div className='container'>
        <div className='row mb--50'>
          <div className='col-lg-12'>
            <div className='section-title'>
              <h3
                className='title mb--0 live-bidding-title'
                data-sal-delay='150'
                data-sal='slide-up'
                data-sal-duration='800'
              >
                Live Bidding
              </h3>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='banner-one-slick slick-activation-03 slick-arrow-style-one rn-slick-dot-style slick-gutter-15'>
              <Slider {...slides}>
                <SingleBidding
                  img='portfolio-10.jpg'
                  duration=''
                  bidders=''
                  title='#21 The Wonder'
                  likes='322'
                />
                <SingleBidding
                  img='portfolio-11.jpg'
                  duration=''
                  bidders=''
                  title='#25 The Wonder'
                  likes='382'
                />
                <SingleBidding
                  img='portfolio-01.jpg'
                  duration=''
                  bidders=''
                  title='#5 The Wonder'
                  likes='382'
                />
                <SingleBidding
                  img='portfolio-06.jpg'
                  duration=''
                  bidders=''
                  title='#5 The Wonder'
                  likes='382'
                />
                <SingleBidding
                  img='portfolio-02.jpg'
                  duration=''
                  bidders=''
                  title='#5 The Wonder'
                  likes='382'
                />
                <SingleBidding
                  img='portfolio-03.jpg'
                  duration=''
                  bidders=''
                  title='#5 The Wonder'
                  likes='382'
                />
                <SingleBidding
                  img='portfolio-04.jpg'
                  duration=''
                  bidders=''
                  title='#5 The Wonder'
                  likes='382'
                />
                <SingleBidding
                  img='portfolio-05.jpg'
                  duration=''
                  bidders=''
                  title='#5 The Wonder'
                  likes='382'
                />
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bidding;
