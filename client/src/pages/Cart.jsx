import React from 'react';
import Layout from '../components/Layout';
import CartOverview from '../components/Displays/User/CartOverview';
import CartSummary from '../components/Displays/User/CartSummary';
import Container from '@mui/material/Container';
import { connect } from 'react-redux';

const Cart = ({ cart }) => {
  return (
    <Layout>
      <Container 
        maxWidth='md' 
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 3,
          padding: 4,
          minHeight: '80vh'
        }}
      >
        <CartOverview cart={cart}/>
        <CartSummary cart={cart}/>
      </Container>
    </Layout>
  )
};

// Connect to Redux store
const mapStateToProps = (state) => ({
  cart: state.cart.cart
})
export default connect(
  mapStateToProps
)(Cart);