import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const SaleBanner = () => {
  // Helpers
  const navigate = useNavigate();

  return (
    <Button
      onClick={event => navigate('/sale/products')}
      sx={{
        width: '100%',
        height: '10rem',
        bgcolor: 'primary.sale',
        color: 'primary.darkText', 
        ':hover': {
          bgcolor: 'primary.sale',
          color: 'primary.lightText',
          opacity: 0.9
        },
        borderRadius: 0,
      }}
    >
      Sale
    </Button>
  )
};

export default SaleBanner;