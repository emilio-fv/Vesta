import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CartCard from '../CartCard';
import sampleProducts from '../../data/sampleProducts';

const CartOverview = () => {
    return (
        <Container 
            sx={{ 
                paddingY: 3 
            }}
        >
            <Typography variant='h4' align='center' sx={{ fontWeight: 'bold', marginBottom: 3 }}>Shopping Cart</Typography>
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3
                }}
            >
                {sampleProducts.map((product) => (
                    <CartCard key={product.name} product={product} />
                ))
                }
            </Box>
        </Container>
    )
}

export default CartOverview;