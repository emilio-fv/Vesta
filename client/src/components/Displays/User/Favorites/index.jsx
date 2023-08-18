import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useGetAllProductsQuery } from '../../../../store/api/productsApi';
import FavoritesCard from '../../../Cards/FavoritesCard';
import { useUpdatedUserMutation } from '../../../../store/api/authApi';

const Favorites = ({ favorites }) => {
  // Filter favorite products
  const { data, isSuccess } = useGetAllProductsQuery(undefined, {
    selectFromResult: ({data, isSuccess}) => ({
      data: data?.filter((item) => favorites.includes(item.id)),
      isSuccess
    })
  });

  let products;

  if (isSuccess) {
    products = data;
    console.log(products);
  }

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr' },
        gap: '20px'
      }}
    >
      { products?.length !== 0
      ? products?.map((item) => (
          <FavoritesCard key={item.id} product={item}/>
        ))
      : "No favorites yet!"
      }
    </Box>
  )
};

// Connect to Redux store
const mapStateToDispatch = (state) => ({
  favorites: state.auth.loggedInUser.favorites
});

export default connect(
  mapStateToDispatch
)(Favorites);