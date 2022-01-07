import React from 'react';
import Bidding from '../Bidding/Bidding';
import Collection from '../Collections/Collection';
import Hero from '../Hero/Hero';
import CollectionOfAsseets from '../MyAsset/CollectionOfAsseets';
import Product from '../Product/Product';
import Service from '../Service/Service';
import TopSeller from '../TopSeller/TopSeller';
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

      <CollectionOfAsseets />
    </>
  );
};

export default Home;
