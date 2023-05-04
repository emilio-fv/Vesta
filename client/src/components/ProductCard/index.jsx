import React from 'react';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

const ProductCard = ({ product }) => {
    return (
        <Card sx={{ width: '100%', maxWidth: '150px', padding: 0 }}>
            <CardContent
                sx={{
                    padding: 0,
                }}
            >
                <Box 
                    component='img'
                    sx={{
                        width: '100%',
                        height: '150px',
                        bored: '2px solid red'
                    }}
                />
                <Box
                    sx={{
                        padding: 1
                    }}
                >
                    <Typography variant='h5'>{product.name}</Typography>
                    <Typography variant='p'>$ {parseFloat(product.price)}</Typography>
                </Box>
            </CardContent>
            <CardActions
                sx={{
                    padding: 0
                }}
            >
                <Button 
                    sx={{
                        backgroundColor: 'black',
                        color: 'white',
                        width: '100%',
                    }}
                >
                    View Product
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard;