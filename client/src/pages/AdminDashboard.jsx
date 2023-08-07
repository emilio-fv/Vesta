// Imports
import React, { useState } from 'react';
import Layout from '../components/Layout';
import Dashboard from '../components/Displays/Admin/Dashboard';
import CreateProduct from '../components/Forms/CreateProduct';
import CreateInventory from '../components/Forms/CreateInventory';
import Header from '../components/Displays/Admin/Header';

const AdminDashboard = () => {
  // Handle create product form modal
  const [productFormOpen, setProductFormOpen] = useState(false);
  const handleOpenProductForm = () => setProductFormOpen(true);
  const handleCloseProductForm = () => setProductFormOpen(false);

  // Handle add inventory form modal
  const [inventoryFormOpen, setInventoryFormOpen] = useState(false);
  const handleOpenInventoryForm = () => setInventoryFormOpen(true);
  const handleCloseInventoryForm = () => setInventoryFormOpen(false);

  return (
    <Layout>
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
    </Layout>
  )
};

export default AdminDashboard;