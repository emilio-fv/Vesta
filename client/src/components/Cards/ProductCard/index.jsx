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
import dummyImg from '../../assets/placeholder.png';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import Tooltip from '@mui/material/Tooltip';

const ProductCard = ({ product, favorited }) => {
    // const [favorite, setFavorited] = useState(favorited);
    return (
        <Card
            sx={{
                height: '375px',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <CardContent 
                sx={{
                    height: '90%',
                    padding: 0, 
                    position: 'relative',
                }}
            >
                {/* TODO: Favorite Button */}
                {/* <IconButton
                    sx={{
                        position: 'absolute',
                        right: 0
                    }}
                    onClick={() => setFavorited(!favorite)}
                >
                    {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton> */}
                {/* Product Image */}
                <Box 
                    component='img'
                    src={dummyImg}
                    sx={{
                        width: '100%',
                        height: '150px',
                    }}
                />
                {/* Product Details */}
                <Box
                    sx={{
                        padding: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1
                    }}
                >
                    <Typography sx={{ flex: 1 }} variant='subtitle1'>{product.name}</Typography>
                    <Typography sx={{ flex: 2 }} variant='subtitle2'>{product.description}</Typography>
                </Box>
            </CardContent>
            {/* View Product Button */}
            <CardActions sx={{ padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'start', gap: 1 }}>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Typography variant='body2' marginLeft={1}>Size: {product.size}</Typography>
                    {/* <Typography variant='body2' marginRight={1}>{product.color}</Typography> */}
                    <Tooltip title={product.color}>
                        <CircleRoundedIcon fontSize='small' sx={{ marginRight: 1, color: product.color, border: '1px solid black', borderRadius: '50%', padding: 0    }}/>
                    </Tooltip>
                </Box>
                <Typography variant='body1' marginLeft={1}>{product.price}</Typography>
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