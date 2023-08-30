// Imports
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import HeroImg from '../assets/hero.jpg';
import CategoryBanners from '../components/Banners/Categories';
import About from '../components/About';
import useImagePreloader from '../hooks/useImagePreloader';
import LoadingScreen from '../components/LoadingScreen';

const images = [
  HeroImg
];

const Landing = () => {
  const { imagesPreloaded } = useImagePreloader(images);

  if (!imagesPreloaded) {
    return <LoadingScreen />
  }

  return (
    <Layout>
      <Hero />
      <CategoryBanners />
      <About />
    </Layout>
  )
};

export default Landing;