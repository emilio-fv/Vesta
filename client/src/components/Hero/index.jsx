import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroImg from '../../assets/hero.jpg'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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
        <Button 
          onClick={() => navigate('/unisex/products')}
          sx={{ 
            border: '2px solid',
            fontSize: '.8rem',
            minHeight: '2rem',
            paddingX: 4
          }}
        >
          Unisex
        </Button>
        <Button 
          onClick={() => navigate('/women/products')}
          sx={{ 
            border: '2px solid',
            fontSize: '.8rem',
            minHeight: '2rem',
            paddingX: 4
          }}
        >
          Women
        </Button>
        <Button 
          onClick={() => navigate('/men/products')}
          sx={{ 
            border: '2px solid',
            fontSize: '.8rem',
            minHeight: '2rem',
            paddingX: 4
          }}
        >
          Men
        </Button>
      </Box>
    </Box>
  )
}

export default Hero;