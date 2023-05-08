import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const CartSummary = () => {
    return (
        <Container 
            sx={{ 
                paddingY: 3,
                display: 'flex'
            }}
        >
            <Box
                sx={{
                    flex: { xs: 2, sm: 3},
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'end',
                    gap: 1,
                }}
            >
                <Typography variant={{ xs: 'p', sm: 'h6'}} fontWeight='bold'>Subtotal</Typography>
                <Typography variant={{ xs: 'p', sm: 'h6'}} fontWeight='bold'>Tax</Typography>
                <Typography variant={{ xs: 'p', sm: 'h6'}} fontWeight='bold'>Shipping</Typography>
                <Typography variant={{ xs: 'p', sm: 'h6'}} fontWeight='bold'>Total</Typography>
            </Box>
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'end',
                    gap: 1,
                    paddingX: 2,
                }}
            >
                <Typography variant={{ xs: 'p', sm: 'h6'}}>$ 10.99</Typography>
                <Typography variant={{ xs: 'p', sm: 'h6'}}>$ 10.99</Typography>
                <Typography variant={{ xs: 'p', sm: 'h6'}}>$ 10.99</Typography>
                <Typography variant={{ xs: 'p', sm: 'h6'}}>$ 10.99</Typography>
                <Button variant='outlined' sx={{ marginTop: 2 }}>Checkout</Button>
            </Box>
        </Container>
    )
}

export default CartSummary;