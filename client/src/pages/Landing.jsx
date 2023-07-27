import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import CategoryBanners from '../components/Banners/CategoryBanners';
import About from '../components/About';
import SaleBanner from '../components/Banners/SaleBanner';

const Landing = () => {
  return (
    <Layout>
      {
        <>
          <Hero />
          <CategoryBanners />
          <SaleBanner />
          <About />
        </>
      }
    </Layout>
  )
};

export default Landing;