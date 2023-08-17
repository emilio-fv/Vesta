// Imports
import React, { useState } from 'react';
import TabPanel from '../../TabPanel';
import RegisterForm from '../../Forms/RegisterForm';
import LoginForm from '../../Forms/LoginForm';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const AccountModal = ({ open, onClose, initialValue }) => {
  // Tab helpers
  const [value, setValue] = useState(initialValue);

  // Handle changing tabs
  const handleTabChange = (event, newValue) => {
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
        paddingX: 4,
        paddingY: 1,
        borderRadius: '2%'
      }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
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