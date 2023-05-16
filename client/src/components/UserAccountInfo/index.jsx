import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../reducers/auth/authSlice';

const UserAccountInfo = () => {
  // Helpers
  const dispatch = useDispatch();

  // Fetch user data from store
  const { user } = useSelector((state) => state.auth);

  // Handle Logout Button
  const handleLogout = () => {
    console.log("logout");
    dispatch(logout());
  }

  return (
    <Container sx={{ paddingY: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3, alignItems: 'center' }}>
          <Typography variant='h4' fontWeight='bold'>Hello, { user.firstName }</Typography>
          <Button sx={{ bgcolor: '#ed214d', '&:hover': { bgcolor: '#ff305d'} }} onClick={event => handleLogout(event)}>Logout</Button>
        </Box>
        <Typography fontWeight='bold'>Account Overview</Typography>
        <Box sx={{
            padding: 2
        }}>
            <Typography>First Name: { user.firstName }</Typography>
            <Typography>Last Name: { user.lastName }</Typography>
            <Typography>Email: { user.email }</Typography>
        </Box> 
    </Container>
  )
};

export default UserAccountInfo;