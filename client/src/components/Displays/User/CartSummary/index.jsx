// Imports
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { calculateSubtotal } from '../../../../utils/calculateSubtotal';

const CartSummary = ({ cart }) => {
  return (
      <Box
        sx={{
          flex: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 3
        }}
      >
        <Typography variant='h5' fontWeight='bold'>Summary</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}>
          <Box>
            <Typography># of Items:</Typography>
            <Typography>Subtotal:</Typography>
            <Typography variant='p' fontSize={'.8rem'}>*Taxes & shipping calculated at checkout</Typography>
          </Box>
          <Box>
            <Typography>{cart.length}</Typography>
            <Typography align='right'>${calculateSubtotal(cart)}</Typography>
          </Box>
        </Box>
        <Button fullWidth>Checkout</Button>
      </Box>
  )
}

export default CartSummary;