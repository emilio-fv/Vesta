import React from 'react';
import Layout from './Layout';
import HomeHero from '../components/HomeHero';

const Home = () => {
  return (
    <Layout>
      {
        <HomeHero />
      }
    </Layout>
  )
};

export default Home;