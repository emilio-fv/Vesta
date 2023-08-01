import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroImg from '../../assets/hero.jpg'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@emotion/react';

const Hero = () => {
    // Helpers
    const navigate = useNavigate();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const buttonProps = {
        size: !isSmallScreen ? 'small' : 'medium',
    };

    return (
      <Box sx={{ position: 'relative' }}>
        {/* Image */}
        <Box 
            component='img'
            src={HeroImg}
            sx={{
                maxInlineSize: '100%',
                blockSize: 'auto',
                height: '100%',
                width: '100%',
                marginBottom: -2
            }}
        />
          {/* Category Buttons */}
          <Box
              sx={{
                  position: 'absolute',
                  top: { xs: '25%', sm: '35%', md: '35%'},
                  left: { xs: '15%', sm: '20%', md: '25%'},
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
              }}
          >
            <Button 
                onClick={event => navigate('/unisex/products')}
                {...buttonProps}
                sx={{ 
                    border: '2px solid black',
                    fontSize: { xs: '.7rem', md: ''}
                }}
            >
                Shop Unisex
            </Button>
            <Button 
                onClick={event => navigate('/women/products')}
                {...buttonProps}
                sx={{ 
                    border: '2px solid black',
                    fontSize: { xs: '.7rem', md: ''}
                }}
            >
                Shop Women
            </Button>
            <Button 
                onClick={event => navigate('/men/products')}
                // component={RouterLink}
                // to='/products'
                {...buttonProps}
                sx={{ 
                    border: '2px solid black',
                    fontSize: { xs: '.7rem', md: ''}
                }}
            >
                Shop Men
            </Button>
          </Box>
      </Box>
    )
}

export default Hero;