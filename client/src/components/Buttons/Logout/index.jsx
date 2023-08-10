// Imports
import React from 'react';
import { useLogoutMutation } from "../../../store/api/authApi";
import { connect } from 'react-redux';
import { resetInventory } from '../../../store/reducers/inventory/inventorySlice';

import Button from '@mui/material/Button';
import { purgeData } from '../../../store/store';

const LogoutButton = ({ loggedInUser, resetInventory }) => {
  // Helpers
  const [logout] = useLogoutMutation();

  const handleLogoutClick = () => {
    if (loggedInUser.admin) {
      resetInventory();
    }
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

const mapDispatchToProps = {
  resetInventory
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutButton);