import React from 'react';
import Bidding from '../../Bidding';
import Collection from '../../Collection';
import Hero from '../../Hero';
import Product from '../../Product';
import Service from '../../Service';
import TopSeller from '../../TopSeller';
import './main';
import './style.css';

const Home = () => {
  return (
    <>
      {/* start banner area */}
      <Hero />
      {/* end banner area */}
      {/* Explore Bidding Style Carousel */}
      <Bidding />
      {/* Explore Bidding Style Carousel End */}
      {/* Start product area */}
      <Product />
      {/* end product area */}
      {/* top top-seller start */}
      <TopSeller />
      {/* top top-seller end */}
      {/* start service area */}
      <Service />
      {/* End service area */}
      {/* collection area Start */}
      <Collection />
      {/* collection area End */}
    </>
  );
};

export default Home;
