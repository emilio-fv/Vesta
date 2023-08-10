// Imports
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Dashboard from '../components/Displays/Admin/Dashboard';
import CreateProduct from '../components/Forms/CreateProduct';
import CreateInventory from '../components/Forms/CreateInventory';
import Header from '../components/Displays/Admin/Header';

import Container from '@mui/material/Container';
import { resetInventory } from '../store/reducers/inventory/inventorySlice';
import { connect } from 'react-redux';

const AdminDashboard = ({ resetInventory }) => {
  // Handle create product form modal
  const [productFormOpen, setProductFormOpen] = useState(false);
  const handleOpenProductForm = () => setProductFormOpen(true);
  const handleCloseProductForm = () => setProductFormOpen(false);

  // Handle add inventory form modal
  const [inventoryFormOpen, setInventoryFormOpen] = useState(false);
  const handleOpenInventoryForm = () => setInventoryFormOpen(true);
  const handleCloseInventoryForm = () => setInventoryFormOpen(false);

  useEffect(() => {
    return () => {
      resetInventory();
    }
  })
  return (
    <Layout>
      <Container maxWidth='lg' sx={{ paddingY: 4, minHeight: '70vh' }}>
        <Header
          handleOpenInventoryForm={handleOpenInventoryForm}
          handleOpenProductForm={handleOpenProductForm}
        />
        <Dashboard />
        <CreateProduct
          productFormOpen={productFormOpen}
          handleCloseProductForm={handleCloseProductForm}
        />
        <CreateInventory
          inventoryFormOpen={inventoryFormOpen}
          handleCloseInventoryForm={handleCloseInventoryForm}
        />
      </Container>
    </Layout>
  )
};

// Connect to Redux store
const mapDispatchToProps = {
  resetInventory
};

export default connect(
  null,
  mapDispatchToProps
)(AdminDashboard);