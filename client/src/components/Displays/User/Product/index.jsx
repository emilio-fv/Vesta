// Imports
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useGetInventoryByProductIdQuery } from '../../../../store/api/inventoryApi';
import { resetStatus } from '../../../../store/reducers/cart/cartSlice';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddToCartForm from '../../../Forms/AddToCart';

const ProductView = ({ productId, resetStatus }) => {
  const { data, isSuccess } = useGetInventoryByProductIdQuery(productId);

  useEffect(() => {
    return () => {
      resetStatus();
    }
  }, [])
  if (!isSuccess) {
    return null
  }

  return (
    <Container 
      maxWidth='lg'
      sx={{
        display: 'flex',

      }}
    >
      <Box
        sx={{
          flex: 3,
          display: 'flex',
          justifyContent: 'center',
          paddingTop: 6,
          paddingX: 2,
        }}
      >
        <Box 
          component='img'
          src={data.src}
          sx={{
            height: '80%'
          }}
        />
      </Box>
      <Box
        sx={{
          flex: 2,
          paddingX: 2, 
          paddingTop: 6,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Typography variant='h5'>{data.name}</Typography>
        <Typography>{data.description}</Typography>
        <AddToCartForm product={data}/>
      </Box>
    </Container>
  )
};

// Connect to Redux store
const mapDispatchToProps = {
  resetStatus
};

export default connect(
  null,
  mapDispatchToProps
)(ProductView);