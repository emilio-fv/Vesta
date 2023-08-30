// Imports
import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroImg from '../../assets/hero.jpg'
import CategoryButton from '../Buttons/Category';

import Box from '@mui/material/Box';

const categoryButtonStyles = { 
  border: '2px solid',
  borderColor: 'primary.darkText',
  fontSize: '.8rem',
  minHeight: '2rem',
  paddingX: 4,
  '&:hover': {
    bgcolor: 'primary.main',
    color: 'primary.lightText',
    borderColor: 'primary.main'
  }
};

const Hero = () => {
  // Helpers
  const navigate = useNavigate();

  return (
    <Box sx={{ position: 'relative', marginBottom: -1 }}>
      <Box 
        component='img'
        src={HeroImg}
        sx={{
          maxInlineSize: '100%',
          blockSize: 'auto',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          left: '25%',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <CategoryButton 
          handleClick={() => navigate('/unisex/products')}
          sx={categoryButtonStyles}
          text={'unisex'}
        />
        <CategoryButton 
          handleClick={() => navigate('/women/products')}
          sx={categoryButtonStyles}
          text={'women'}
        />
        <CategoryButton 
          handleClick={() => navigate('/men/products')}
          sx={categoryButtonStyles}
          text={'men'}
        />
      </Box>
    </Box>
  )
}

export default Hero;