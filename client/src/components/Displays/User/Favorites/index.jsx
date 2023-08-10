import React from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import ProductCard from '../../../Cards/ProductCard';
import { Typography } from '@mui/material';

const Favorites = ({ favorites }) => {

  if (favorites.length === 0) {
    return (
      <Typography align='center'>No products added yet!</Typography>
    )
  }

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr' },
        gap: '20px'
      }}
    >
      {favorites.map((item) => (
          <ProductCard key={item.id} product={item}/>
        ))
      }
    </Box>
  )
};

// Connect to Redux store
const mapStateToDispatch = (state) => ({
  favorites: state.auth.favorites
});

export default connect(
  mapStateToDispatch
)(Favorites);