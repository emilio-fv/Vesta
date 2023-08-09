import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';
import Tooltip from '@mui/material/Tooltip';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ProductCard = ({ product }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Product image */}
      <Box 
        component='img'
        src={product.src}
        sx={{
          width: '100%',
          borderRadius: '3%'
        }}
      />
      <Box
        sx={{
          paddingY: 1,
        }}
      >
        <Typography fontSize={'.8rem'}>{product.name}</Typography>
        <Typography fontSize={'.8rem'}>${product.price}</Typography>
        {product.inventory.map((item) => (
          <Tooltip title={item.color}>
            <CircleIcon fontSize='small' htmlColor={item.color}/>
          </Tooltip>
        ))}
      </Box>
    </Box>
  )
};

export default ProductCard;