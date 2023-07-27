import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCategory } from '../../../reducers/products/productsSlice';
import Button from '@mui/material/Button';

const CategoryBanners = () => {
  // Helpers
  const dispatch = useDispatch();

  return (
    <>
      {/* Unisex Banner */}
      <Button
        onClick={event => dispatch(setCategory("Unisex"))}
        component={RouterLink}
        to='/products'
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
        onClick={event => dispatch(setCategory("Women"))}
        component={RouterLink}
        to='/products'
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
        onClick={event => dispatch(setCategory("Men"))}
        component={RouterLink}
        to='/products'
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