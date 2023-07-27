import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {
    const { user } = useSelector((state) => state.auth);

    return (
        user ? <Outlet /> : <Navigate to='/' />
    )
};

export default PrivateRoute;