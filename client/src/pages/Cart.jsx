import React from 'react';
import Layout from '../components/Layout';import CartOverview from '../components/CartOverview';
import CartSummary from '../components/CartSummary';

const Cart = () => {
  return (
    <Layout>
      {
        <CartOverview />
      }
      {      
        <CartSummary />
      }
    </Layout>
  )
};

export default Cart;