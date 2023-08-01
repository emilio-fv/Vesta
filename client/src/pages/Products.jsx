import React from 'react';
import Layout from '../components/Layout';
import { Box, Container } from '@mui/material';
import SortProducts from '../components/Forms/SortProducts';
import FilterProducts from '../components/Forms/FilterProducts';
import ProductsDisplay from '../components/Displays/Products';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';

const Products = ({ props }) => {
  // Extract category from url
  const { category } = useParams();

  return (
    <Layout>
      {
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
            <ProductsDisplay category={category}/>
          </Box>
        </Container>
      }
    </Layout>
  )
};

export default Products;