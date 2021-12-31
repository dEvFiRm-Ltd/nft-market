import React from 'react';
import { Outlet } from 'react-router-dom';
import '../../vendor/css/style.css';
import Footer from '../Footer';
import Header from '../Header';

const Pages = () => {
    return (
        <div className="template-color-1">
            {/* Start Header */}
            <Header />
            {/* End Header */}
            <Outlet />
            <Footer />
        </div>
    );
};

export default Pages;
