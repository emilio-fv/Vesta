import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const CategoryBanners = () => {
  // Helpers
  const navigate = useNavigate();

  return (
    <>
      <Button
        onClick={() => navigate('/unisex/products')}
        sx={{ 
          width: '100%', 
          height: '10rem',
          bgcolor: 'primary.main',
          color: 'primary.lightText',
          ':hover': {
            bgcolor: 'primary.main',
            opacity: 0.75
          },
          borderRadius: 0
        }}
      >
        Shop Unisex
      </Button>
      <Button
        onClick={() => navigate('/women/products')}
        sx={{ 
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
        }}
      >
        Shop Women
      </Button>
      {/* Men Banner */}
      <Button
        onClick={() => navigate('/men/products')}
        sx={{ 
          width: '100%', 
          height: '10rem',
          backgroundColor: 'primary.main',
          color: 'primary.lightText',
          ':hover': {
            bgcolor: 'primary.main',
            opacity: 0.75
          },
          borderRadius: 0
        }}
      >
        Shop Men
      </Button>
    </>
  )
};

export default CategoryBanners;