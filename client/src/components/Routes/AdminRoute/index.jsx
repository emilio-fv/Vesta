import React from 'react';
import { connect } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const AdminRoute = ({ loggedInUser, children, ...rest}) => {
    return (
        loggedInUser.admin ? <Outlet /> : <Navigate to='/'/>
    )
}

// Connect to Redux store
const mapStateToProps = (state) => ({
    loggedInUser: state.auth.loggedInUser
})
export default connect(
    mapStateToProps
)(AdminRoute);