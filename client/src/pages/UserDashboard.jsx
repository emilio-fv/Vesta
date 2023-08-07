import React from 'react';
import Layout from '../components/Layout';
import Dashboard from '../components/Displays/User/Dashboard';
import Header from '../components/Displays/User/Header';

const UserDashboard = () => {
  return (
    <Layout>
      <Header />
      <Dashboard />
    </Layout>
  )
};

export default UserDashboard;