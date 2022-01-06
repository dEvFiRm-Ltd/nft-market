import React from 'react';
import { Outlet } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../../vendor/css/plugins/feature.css';
import '../../vendor/css/style.css';
import Footer from '../Footer';
import Header from '../Header';

const Pages = () => {
    document.body.classList.add('active-dark-mode');
    return (
        <>
            {/* Start Header */}
            <Header />
            {/* End Header */}
            <Outlet />
            <Footer />
        </>
    );
};

export default Pages;
