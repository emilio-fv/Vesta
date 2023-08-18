// Imports
import React from 'react';
import { useLogoutMutation } from "../../../store/api/authApi";
import { connect } from 'react-redux';

import Button from '@mui/material/Button';

const LogoutButton = ({ loggedInUser }) => {
  // Helpers
  const [logout] = useLogoutMutation();

  const handleLogoutClick = () => {
    logout();
  }

  return (
    <Button
      sx={{ 
        bgcolor: 'primary.main',
        color: 'primary.lightText',
        fontSize: '.75rem',
        paddingX: 2,
        '&:hover': {
          bgcolor: 'primary.main',
          opacity: .8
        } 
      }} 
      onClick={() => handleLogoutClick()}
    >
      Logout
    </Button>
  )
};

// Connect Redux store
const mapStateToProps = (state) => ({
  loggedInUser: state.auth.loggedInUser
});

export default connect(
  mapStateToProps,
)(LogoutButton);