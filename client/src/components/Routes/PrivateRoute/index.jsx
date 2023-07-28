import React from 'react';
import { connect } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = ({ loggedInUser, children, ...rest}) => {
    return (
        loggedInUser ? <Outlet /> : <Navigate to='/' />
    )
};

// Connect to Redux store
const mapStateToProps = (state) => ({
    loggedInUser: state.auth.loggedInUser
});

export default connect(
    mapStateToProps
)(PrivateRoute);