import React from 'react';
import Layout from '../components/Layout';import AdminDash from '../components/AdminDash';

const AdminDashboard = () => {
  return (
    <Layout>
      {
        <AdminDash />
      }
    </Layout>
  )
};

export default AdminDashboard;