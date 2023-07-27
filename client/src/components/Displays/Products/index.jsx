import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ProductFilter from '../ProductsFilter';
import ProductSort from '../ProductsSort';
import Box from '@mui/material/Box';
import ProductCard from '../../Cards/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsByCategory, resetFilteredProducts } from '../../../reducers/products/productsSlice';
import { useNavigate } from 'react-router-dom';

const ProductsDisplay = () => {
    // Helpers
    const dispatch = useDispatch();
    const { products, filteredProducts, category, filter } = useSelector((state) => state.products);

    // Fetch Products
    useEffect(() => {
        dispatch(getAllProductsByCategory(category));
        dispatch(resetFilteredProducts())
    }, [category])

    return (
        <Box
            sx={{
                flex: 3,
                display: 'grid',
                gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr' },
                gridGap: '25px',
            }}
        >
            { filter 
                ? filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                    ))
                : products?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                    ))
            }
        </Box>
    )
}

export default ProductsDisplay;