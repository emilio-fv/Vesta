// Imports
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Products from '../Products';
import Inventory from '../Inventory';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

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
        <Tab label="Inventory" {...a11yProps(0)} />
        <Tab label="Products" {...a11yProps(1)} />
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