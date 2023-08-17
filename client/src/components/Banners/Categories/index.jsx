// Imports
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryButton from '../../Buttons/Category';

const darkButtonStyles = { 
  width: '100%', 
  height: '10rem',
  bgcolor: 'primary.main',
  color: 'primary.lightText',
  ':hover': {
    bgcolor: 'primary.main',
    opacity: 0.75
  },
  borderRadius: 0
}

const lightButtonStyles = { 
  width: '100%', 
  height: '10rem',
  backgroundColor: 'primary.light',
  color: 'black',
  ':hover': {
    bgcolor: 'primary.main',
    color: 'primary.lightText',
    opacity: 0.75
  },
  borderRadius: 0
}

const CategoryBanners = () => {
  // Helpers
  const navigate = useNavigate();

  return (
    <>
      <CategoryButton 
        handleClick={() => navigate('/unisex/products')}
        sx={darkButtonStyles}
        text={'Shop Unisex'}
      />
      <CategoryButton 
        handleClick={() => navigate('/women/products')}
        sx={lightButtonStyles}
        text={'Shop Women'}
      />
      <CategoryButton 
        handleClick={() => navigate('/men/products')}
        sx={darkButtonStyles}
        text={'Shop Men'}
      />
    </>
  )
};

export default CategoryBanners;