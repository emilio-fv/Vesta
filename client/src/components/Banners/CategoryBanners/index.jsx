import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const CategoryBanners = () => {
  // Helpers
  const navigate = useNavigate();

  return (
    <>
      {/* Unisex Banner */}
      <Button
        onClick={event => navigate('/unisex/products')}
        sx={{ 
          width: '100%', 
          height: '10rem',
          backgroundColor: 'black',
          color: 'white',
          ':hover': {
            bgcolor: 'grey',
            color: 'black'
          },
          borderRadius: 0
        }}
      >
        Shop Unisex
      </Button>
      {/* Women Banner */}
      <Button
        onClick={event => navigate('/women/products')}
        sx={{ 
          width: '100%', 
          height: '10rem',
          backgroundColor: 'white',
          color: 'black',
          ':hover': {
            bgcolor: 'grey',
            color: 'black'
          },
          borderRadius: 0
        }}
      >
        Shop Women
      </Button>
      {/* Men Banner */}
      <Button
        onClick={event => navigate('/men/products')}
        sx={{ 
          width: '100%', 
          height: '10rem',
          backgroundColor: 'black',
          color: 'white',
          ':hover': {
            bgcolor: 'grey',
            color: 'black'
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