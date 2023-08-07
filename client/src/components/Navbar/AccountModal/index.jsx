// Imports
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '../TabPanel';
import RegisterForm from '../../Forms/RegisterForm';
import LoginForm from '../../Forms/LoginForm';

const AccountModal = ({ open, onClose }) => {
  // Tab helpers
  const [value, setValue] = useState(0);

  // Handle changing tabs
  const handleTabChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="Account modal"
      aria-describedby="Register and login forms"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        bgcolor: 'white',
        transform: 'translate(-50%, -50%)',
        width: '50vw',
      }}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Box 
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
            }}
          > 
            <Tabs value={value} onChange={handleTabChange} aria-label="Register and login tabs">
              <Tab label="Register" />
              <Tab label="Login" />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <RegisterForm />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <LoginForm />
          </TabPanel>
        </Box>
      </Box>
    </Modal>
  )
};

export default AccountModal;