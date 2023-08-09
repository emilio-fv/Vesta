import React from 'react';
import Box from '@mui/material/Box';
import ProductCard from '../../../Cards/ProductCard';
import { connect } from 'react-redux';
import { useGetInventoryByCategoryQuery } from '../../../../store/api/inventoryApi';
import CircularProgress from '@mui/material/CircularProgress';

const ProductsDisplay = ({ category, inventory }) => {
  // Helpers
  const { isLoading, isSuccess } = useGetInventoryByCategoryQuery(category, { refetchOnMountOrArgChange: true });

  if (isLoading) {
    <CircularProgress color='success' />
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
      { isSuccess && inventory
        ? inventory.map((item) => (
            <ProductCard key={item.id} product={item}/>
          ))
        : null
      }
    </Box>
  )
}

// Connect to Redux store
const mapStateToProps = (state) => ({
  inventory: state.inventory.inventory
});

// Exports
export default connect(
  mapStateToProps,
)(ProductsDisplay);