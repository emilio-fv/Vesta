// Imports
import React from 'react';

import Button from '@mui/material/Button';

const CheckoutButton = () => {
  return (
    <Button
      sx={{ 
        bgcolor: 'primary.main',
        color: 'primary.lightText',
        fontSize: '.75rem',
        paddingX: 2,
        '&:hover': {
          bgcolor: 'primary.main',
          opacity: .8
        } 
      }} 
    >
      Checkout
    </Button>
  )
};

// Connect Redux store
// const mapStateToProps = (state) => ({
// });

export default CheckoutButton;