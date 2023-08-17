// Imports
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import CategoryBanners from '../components/Banners/Categories';
import About from '../components/About';

const Landing = () => {
  return (
    <Layout>
      <Hero />
      <CategoryBanners />
      <About />
      {/* TODO: Sale banner */}
    </Layout>
  )
};

export default Landing;