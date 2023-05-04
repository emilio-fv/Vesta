import React from 'react';
import Layout from './Layout';
import ProductsDisplay from '../components/ProductsDisplay';

const Products = () => {
    return (
        <Layout>
            {
                <ProductsDisplay />
            }
        </Layout>
    )
};

export default Products;