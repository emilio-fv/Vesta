import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ProductFilter from '../ProductsFilter';
import ProductSort from '../ProductsSort';
import Box from '@mui/material/Box';
import sampleProducts from '../../data/sampleProducts';
import ProductCard from '../ProductCard';

const ProductsDisplay = () => {
    return (
        <Container 
            maxWidth='lg'
            sx={{ 
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
                <Typography variant='h5'>TODO: Category</Typography>
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
                    {sampleProducts.map((product, key) => (
                            <ProductCard key={key} product={product} />
                        ))
                    }
                </Box>
            </Box>
        </Container>
    )
}

export default ProductsDisplay;