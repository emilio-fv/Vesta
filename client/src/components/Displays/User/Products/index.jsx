import React from 'react';
import Box from '@mui/material/Box';
import ProductCard from '../../../Cards/ProductCard';
import { connect } from 'react-redux';
import { useGetInventoryByCategoryQuery } from '../../../../store/api/inventoryApi';
import CircularProgress from '@mui/material/CircularProgress';

const ProductsDisplay = ({ category, inventory, filter, filtered }) => {
  // Helpers
  const { isLoading, isSuccess } = useGetInventoryByCategoryQuery(category, { refetchOnMountOrArgChange: true });

  if (isLoading) {
    <CircularProgress color='success' />
  }

  let products;

  if (filter) {
    products = filtered;
  } else {
    products = inventory;
  }

  return (
    <Box
      sx={{
        flex: 4,
        display: 'grid',
        gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr' },
        gridGap: '50px',
      }}
    >
      { isSuccess && products
        ? products.map((item) => (
            <ProductCard key={item.id} product={item}/>
          ))
        : null
      }
    </Box>
  )
}

// Connect to Redux store
const mapStateToProps = (state) => ({
  inventory: state.inventory.inventory,
  filter: state.inventory.filter,
  filtered: state.inventory.filtered
});

// Exports
export default connect(
  mapStateToProps,
)(ProductsDisplay);