import React from 'react';
import Layout from '../components/Layout';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import Box from '@mui/material';
import Inventory from '../components/Displays/';
import { useLogoutMutation } from '../store/api/authApi';

const AdminDashboard = () => {
  // Helpers
  const [logout] = useLogoutMutation();

  // Handle Logout Button
  const handleLogout = () => {
    logout();
  }

  return (
    <Layout>
      {
        <>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
            <Typography variant='h4' fontWeight='bold'>Admin Dashboard</Typography>
            <Button size='small' sx={{ paddingX: 1, bgcolor: '#ed214d', '&:hover': { bgcolor: '#ff305d' }}} onClick={event => handleLogout(event)}>Logout</Button>
          </Box>
          <Inventory />
        </>
      }
    </Layout>
  )
};

export default AdminDashboard;