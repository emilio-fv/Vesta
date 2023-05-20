import React from 'react';
import Layout from './Layout';
import UserAccountInfo from '../components/UserAccountInfo';
import Favorites from '../components/Favorites';

const UserDashboard = () => {
  return (
    <Layout>
        <UserAccountInfo />
        <Favorites />
    </Layout>
  )
};

export default UserDashboard;