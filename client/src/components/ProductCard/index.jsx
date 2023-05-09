import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ProductCard = ({ product, favorited }) => {
    const [favorite, setFavorited] = useState(favorited);

    return (
        <Card>
            <CardContent sx={{ padding: 0, position: 'relative' }}>
                {/* Favorite Button */}
                <IconButton
                    sx={{
                        position: 'absolute',
                        right: 0
                    }}
                    onClick={() => setFavorited(!favorite)}
                >
                    {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
                {/* Product Image */}
                <Box 
                    component='img'
                    sx={{
                        width: '100%',
                        height: '150px',
                    }}
                />
                <Box
                    sx={{
                        padding: 1
                    }}
                >
                    <Typography variant='h6'>{product.name}</Typography>
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
                        ':hover': {
                            bgcolor: 'grey'
                        }
                    }}
                >
                    View Product
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard;