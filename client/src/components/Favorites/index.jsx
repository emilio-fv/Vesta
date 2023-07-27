import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
// import sampleProducts from '../../data/sampleProducts';
import ProductCard from '../Cards/ProductCard';

const sampleProducts = [];

const Favorites = () => {
  return (
    <Container 
        sx={{
            paddingY: 3
        }}
    >
        <Typography fontWeight='bold'>Favorites</Typography>
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr' },
                gridGap: '25px',
                padding: 2
            }}
        >
            {sampleProducts.map((product) => (
                <ProductCard key={product.name} product={product} favorited={true}/>
            ))}
        </Box>
    </Container>
  )
};

export default Favorites;