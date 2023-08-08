// Imports
import React from 'react';
import { useLogoutMutation } from "../../../store/api/authApi";
import Button from '@mui/material/Button';

const LogoutButton = () => {
  // Helpers
  const [logout] = useLogoutMutation();

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
      onClick={() => logout()}
    >
      Logout
    </Button>
  )
};

export default LogoutButton;