import React from 'react';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

const SaleBanner = () => {
  return (
    <Button
      // TODO: Link to on sale products
      component={RouterLink}
      to='/products'
      sx={{
        width: '100%',
        height: '10rem',
        backgroundColor: '#ff1a1a',
        color: 'black', 
        ':hover': {
          bgcolor: '#fa6055'
        },
        borderRadius: 0,
      }}
    >
      Sale
    </Button>
  )
};

export default SaleBanner;