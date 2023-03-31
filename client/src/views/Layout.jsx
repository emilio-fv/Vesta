import React from 'react';
import Navbar from '../components/Navbar/index';
import Footer from '../components/Footer/index';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {
                children
            }
            <Footer />
        </>
    )
}

Layout.propTypes = {
    'children': PropTypes.node
}

export default Layout;