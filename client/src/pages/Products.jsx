import React from 'react';
import Layout from '../components/PageLayout';
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