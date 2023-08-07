// Imports
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '../../../TabPanel';
import AccountInfo from '../../User/AccountInfo';
import Favorites from '../../User/Favorites';

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
        <Tab label="Favorites" />
        <Tab label="Account Info" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Favorites />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AccountInfo />
      </TabPanel>
    </Box>
  )
};

export default Dashboard;