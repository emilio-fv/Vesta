import React from 'react';
import Layout from '../components/Layout';
import UserAccountInfo from '../components/UserAccountInfo';
import Favorites from '../components/Displays/Favorites';

const UserDashboard = () => {
  return (
    <Layout>
        <UserAccountInfo />
        <Favorites />
    </Layout>
  )
};

export default UserDashboard;