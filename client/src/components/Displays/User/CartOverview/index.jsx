import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CartCard from '../../../Cards/CartCard';


const CartOverview = ({ cart }) => {
  return (
    <Box
      sx={{
        flex: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}
    >
      <Typography variant='h5' fontWeight='bold'>Shopping Cart</Typography>
      {cart.map((item, key) => (
        <CartCard product={item} index={key}/>
      ))}
    </Box>
  )
}

export default CartOverview;