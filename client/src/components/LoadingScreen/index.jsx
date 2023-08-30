import React from 'react';
import Box from '@mui/material/Box';
import { Typography, keyframes } from '@mui/material';

// Glowing animation  
const glow = keyframes`
  from { text-shadow: 0px 0px 5px white; }
  to { text-shadow: 0px 0px 25px white; }
`;

const LoadingScreen = () => {
  return (
    <Box
      sx={{
        height: '100%',
        width: '100vw',
        backgroundColor: 'primary.main',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Typography 
        sx={{
          color: 'primary.lightText',
          fontSize: '8rem',
          animationName: `${glow}`,
          animationDuration: '1.25s',
          animationDirection: 'alternate',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'linear'
        }}
      >
        V
      </Typography>
    </Box>
  )
}

export default LoadingScreen;