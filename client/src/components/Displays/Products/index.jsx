import React from 'react';
import Box from '@mui/material/Box';
import ProductCard from '../../Cards/ProductCard';
import { connect } from 'react-redux';
import { useGetInventoryByCategoryQuery } from '../../../store/api/inventoryApi';

const ProductsDisplay = ({ category, inventory }) => {
    // Helpers
    const { isLoading, isSuccess } = useGetInventoryByCategoryQuery({ category: category });

    if (isLoading) {
        <h1>TODO: Loading spinner</h1>
    }

    return (
        <Box
            sx={{
                flex: 3,
                display: 'grid',
                gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr' },
                gridGap: '25px',
            }}
        >
            { isSuccess && inventory
                ? inventory.map((product) => (
                    <ProductCard key={product.id} product={product}/>
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