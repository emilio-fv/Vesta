import React from 'react';
import Layout from '../components/Layout';
import SortProducts from '../components/Forms/SortProducts';
import FilterProducts from '../components/Forms/FilterProducts';
import { useParams } from 'react-router-dom';
import ProductsDisplay from '../components/Displays/User/Products';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Products = () => {
  // Extract category from url
  const { category } = useParams();
  
  return (
    <Layout>
      <Container
        maxWidth='lg'
        sx={{
          minHeight: '70vh',
          paddingY: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography variant='h5'>{category.toUpperCase()}</Typography>
          <SortProducts />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row'},
            justifyContent: 'space-between',
            alignItems: 'space-around',
            gap: 3
          }}
        >
          <FilterProducts />
          <ProductsDisplay category={category} />
        </Box>
      </Container>
    </Layout>
  )
};

export default Products;