// Imports
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Products from '../Products';
import Inventory from '../Inventory';
import TabPanel from '../../../TabPanel';

const Dashboard = () => {
  // Helpers
  const [value, setValue] = useState(0);

  // Handle change tab
  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'background.paper', 
        display: 'flex',
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChangeTab}
        aria-label="Admin dashboard"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Inventory" />
        <Tab label="Products" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Inventory />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Products />
      </TabPanel>
    </Box>
  );
}

export default Dashboard;