import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ProductFilter from '../ProductsFilter';
import ProductSort from '../ProductsSort';
import Box from '@mui/material/Box';
import ProductCard from '../ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsByCategory, resetFilteredProducts } from '../../reducers/products/productsSlice';
import { useNavigate } from 'react-router-dom';

const ProductsDisplay = () => {
    // Helpers
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { products, filteredProducts, category, filter } = useSelector((state) => state.products);

    // Fetch Products
    useEffect(() => {
        if (category === null) {
            navigate('/');
        }
        dispatch(getAllProductsByCategory(category));
        dispatch(resetFilteredProducts())
    }, [category])

    return (
        <Container 
            maxWidth='lg'
            sx={{ 
                minHeight: '70vh',
                paddingY: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
            }}
        >
            {/* Category & Sort Menu */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Typography variant='h5'>{category}</Typography>
                <ProductSort />
            </Box>
            {/* Products Display */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row'},
                    justifyContent: 'space-between',
                    alignItems: 'space-around',
                    gap: 3
                }}
            >
                <ProductFilter />
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
            </Box>
        </Container>
    )
}

export default ProductsDisplay;