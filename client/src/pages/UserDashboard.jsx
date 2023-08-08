import React from 'react';
import Layout from '../components/Layout';
import Dashboard from '../components/Displays/User/Dashboard';
import Header from '../components/Displays/User/Header';
import Container from '@mui/material/Container';

const UserDashboard = () => {
  return (
    <Layout>
      <Container maxWidth='lg' sx={{ paddingY: 4, minHeight: '70vh' }} >
        <Header />
        <Dashboard />
      </Container>
    </Layout>
  )
};

export default UserDashboard;