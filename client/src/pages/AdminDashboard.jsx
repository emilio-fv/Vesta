// Imports
import React, { useState } from 'react';
import Layout from '../components/Layout';
// import Inventory from '../components/Displays/Inventory';
import { useLogoutMutation } from '../store/api/authApi';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import Dashboard from '../components/Displays/Admin/Dashboard';
import CreateProduct from '../components/Forms/CreateProduct';
import CreateInventory from '../components/Forms/CreateInventory';

const AdminDashboard = () => {
  // Helpers
  const [logout] = useLogoutMutation();
  
  // Handle create product form modal
  const [productFormOpen, setProductFormOpen] = useState(false);
  const handleOpenProductForm = () => setProductFormOpen(true);
  const handleCloseProductForm = () => setProductFormOpen(false);

  // Handle add inventory form modal
  const [inventoryFormOpen, setInventoryFormOpen] = useState(false);
  const handleOpenInventoryForm = () => setInventoryFormOpen(true);
  const handleCloseInventoryForm = () => setInventoryFormOpen(false);

  // Handle logout button
  const handleLogout = () => {
    logout();
  }

  return (
    <Layout>
      {
        <Container sx={{ pb: 3 }}>
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              padding: 3,
            }}
          >
            <Typography variant='h5' fontWeight='bold'>Admin Dashboard</Typography>
            <Box>
              <Button 
                size='small' 
                sx={{ 
                  paddingX: 1,
                }} 
                onClick={handleOpenInventoryForm}
              >
                Add Inventory
              </Button>
              <Button 
                size='small' 
                sx={{ 
                  paddingX: 1,
                }} 
                onClick={handleOpenProductForm}
              >
                Create Product
              </Button>
              <Button 
                size='small' 
                sx={{ 
                  paddingX: 1, 
                  bgcolor: '#ed214d', 
                  '&:hover': { bgcolor: '#ff305d' }
                }} 
                onClick={event => handleLogout(event)}
              >
                Logout
              </Button>
            </Box>
          </Box>
          <Dashboard />
          <CreateProduct productFormOpen={productFormOpen} handleCloseProductForm={handleCloseProductForm}/>
          <CreateInventory inventoryFormOpen={inventoryFormOpen} handleCloseInventoryForm={handleCloseInventoryForm}/>
        </Container>
      }
    </Layout>
  )
};

export default AdminDashboard;