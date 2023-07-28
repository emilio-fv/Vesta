import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import CategoryBanners from '../components/Banners/CategoryBanners';
import SaleBanner from '../components/Banners/SaleBanner';
import About from '../components/About';

const Landing = () => {
  return (
    <Layout>
      <Hero />
      <CategoryBanners />
      <SaleBanner />
      <About />
    </Layout>
  )
};

export default Landing;