// Imports
import React from 'react';
import { useGetInventoryByProductIdQuery } from '../../../../store/api/inventoryApi';
import AddToCartForm from '../../../Forms/AddToCart';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ProductView = ({ productId }) => {
  const { data, isSuccess } = useGetInventoryByProductIdQuery(productId);

  if (isSuccess) {
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
          {/* Product image */}
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
          <Typography>${data.price}</Typography>
          <Typography>{data.description}</Typography>
          <AddToCartForm product={data}/>
        </Box>
      </Container>
    )
  }
};

export default ProductView;