import React from 'react';
import '../../../vendor/css/style.css';
import Banner from '../Banner';
import Bidding from '../Bidding';
import Collection from '../Collection';
import Footer from '../Footer';
import Header from '../Header';
import Product from '../Product';
import Service from '../Service';
import TopSeller from '../TopSeller';
import './main';
import './style.css';

const Home = () => {
    return (
        <div className="template-color-1">
            {/* Start Header */}
            <Header />
            {/* End Header */}
            {/* start banner area */}
            <Banner />
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
            <Footer />
        </div>
    );
};

export default Home;
