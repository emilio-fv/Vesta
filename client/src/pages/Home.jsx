import React from 'react';
import Layout from '../components/PageLayout';
import HomeLayout from '../components/HomeLayout';

const Home = () => {
  return (
    <Layout>
      {
        <HomeLayout />
      }
    </Layout>
  )
};

export default Home;