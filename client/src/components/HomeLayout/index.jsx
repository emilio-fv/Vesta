import React from 'react';
import Hero from './Hero';
import CategoryBanners from './CategoryBanners';
import About from './About';
import SaleBanner from './SaleBanner';

// MUI Imports
import Container from '@mui/material/Container';

const HomeLayout = () => {
  // 1. Reset Products
  return (
    <Container maxWidth='false' disableGutters>
      <Hero />
      <CategoryBanners />
      <About />
      <SaleBanner />
    </Container>
  )
};

export default HomeLayout;