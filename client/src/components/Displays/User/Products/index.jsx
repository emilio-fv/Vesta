import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { useGetAllInventoryByCategoryQuery } from '../../../../store/api/inventoryApi';
import { priceRange } from '../../../../assets/constants';
import ProductCard from '../../../Cards/ProductCard';

import Box from '@mui/material/Box';

const ProductsDisplay = ({ category, filters, sort }) => {
  // Fetch inventory by product category
  const { data: inventory = [], isSuccess } = useGetAllInventoryByCategoryQuery(category);

  // Handle sorting and filtering
  const processedInventory = useMemo(() => {
    let processedInventory = inventory.slice();

    if (sort === 'ASC') {
      processedInventory.sort((a, b) => {
        const aPrice = parseFloat(a.price.slice(1))
        const bPrice = parseFloat(b.price.slice(1));
        return bPrice - aPrice;
      })
    }

    if (sort === 'DESC') {
      processedInventory.sort((a, b) => {
        const aPrice = parseFloat(a.price.slice(1));
        const bPrice = parseFloat(b.price.slice(1));
        return aPrice - bPrice;
      })
    }

    if (filters.size) {
      processedInventory = processedInventory.filter((product) => 
          product.inventory.some(item => filters.size.includes(item.size))
        ).map((product) => {
          return {...product}
        })
    }

      if (filters.color) {
        processedInventory = processedInventory.filter((product) => 
          product.inventory.some(item => filters.color.includes(item.color))
        ).map((product) => {
          return {...product}
        })
      }
  
      if (filters?.price && filters.price !== priceRange) {
        processedInventory = processedInventory.filter((product) => 
          product.price >= filters.price[0] && product.price <= filters.price[1]
        )
      }

    return processedInventory;
  }, [inventory, sort, filters]);

  let products;

  if (isSuccess) {
    products = processedInventory;
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
      { products
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
  filters: state.inventory.filters,
  sort: state.inventory.sort,
});

export default connect(
  mapStateToProps,
)(ProductsDisplay);