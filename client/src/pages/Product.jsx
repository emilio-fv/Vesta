import React from 'react';
import Layout from '../components/Layout';
import ProductView from '../components/Displays/User/Product';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();

  return (
    <Layout>
      <ProductView productId={id}/>
    </Layout>
  )
};

export default Product;