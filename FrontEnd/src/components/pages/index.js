import React from 'react';
import { Outlet } from 'react-router-dom';
import '../../vendor/css/style.css';
import '../../vendor/css/plugins/feature.css';
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
