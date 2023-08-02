import React from 'react';
import Layout from '../components/Layout';
import AccountInfo from '../components/Displays/User/AccountInfo';
import Favorites from '../components/Displays/User/Favorites';

const UserDashboard = () => {
  return (
    <Layout>
        <AccountInfo />
        <Favorites />
    </Layout>
  )
};

export default UserDashboard;