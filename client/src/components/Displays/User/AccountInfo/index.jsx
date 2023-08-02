import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { connect } from 'react-redux';
import { useLogoutMutation } from '../../../../store/api/authApi.js';

const AccountInfo = ({ loggedInUser }) => {
  // Helpers
  const [logout] = useLogoutMutation();

  // Handle Logout Button
  const handleLogout = () => {
    logout();
  }

  return (
    <Container sx={{ paddingY: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3, alignItems: 'center' }}>
          <Typography variant='h4' fontWeight='bold'>Hello, { loggedInUser.firstName }</Typography>
          <Button sx={{ bgcolor: '#ed214d', '&:hover': { bgcolor: '#ff305d'} }} onClick={event => handleLogout()}>Logout</Button>
        </Box>
        <Typography fontWeight='bold'>Account Overview</Typography>
        <Box sx={{
            padding: 2
        }}>
            <Typography>First Name: { loggedInUser.firstName }</Typography>
            <Typography>Last Name: { loggedInUser.lastName }</Typography>
            {/* <Typography>Email: { loggedInUser.email }</Typography> */}
        </Box> 
    </Container>
  )
};

// Connect to Redux
const mapStateToProps = (state) => ({
  loggedInUser: state.auth.loggedInUser
})

// const mapDispatchToProps = {
  
// }

export default connect(
  mapStateToProps
)(AccountInfo);