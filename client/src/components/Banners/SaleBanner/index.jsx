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