import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import Tooltip from '@mui/material/Tooltip';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Modal from '@mui/material/Modal';
import Register from '../Register';
import Login from '../Login';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

const categories = ['Unisex', 'Women', 'Men'];

// Register / Login Tabs
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Navbar = () => {
  // Nav Menu (Mobile)
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Register / Login Tabs
  const [value, setValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  }

  // Account Button
  const [accountOpen, setAccountOpen] = useState(false);
  const handleAccountOpen = () => setAccountOpen(true);
  const handleAccountClose = () => setAccountOpen(false);



  return (
    <>
      <AppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters
            sx={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            {/* Logo (Desktop) */}
            <Link 
              component={RouterLink} 
              to='/' 
              underline='none' 
              variant='h6'
              noWrap
              // TODO: handle link click
              sx={{
                display: { xs: 'none', md: 'flex' },
                color: 'white'
              }}
            >
              VESTA
            </Link>
            {/* Menu (Mobile) */}
            <Box 
              sx={{ 
                display: { xs: 'flex', sm: 'none' },
              }}
            >
              <IconButton
                size='large'
                aria-label='product categories menu'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
              >
                <MenuIcon htmlColor='#fff'/>
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' }
                }}
              >
                {categories.map((category) => (
                  <MenuItem
                    key={category}
                    onClick={handleCloseNavMenu}
                  >
                    <Link 
                      onClick={() => console.log(category)}
                      component={RouterLink}
                      to='/products'
                      underline='none'
                      noWrap
                      // TODO: handle link click
                    >
                      {category}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* Logo (Mobile) */}
            <Link
              component={RouterLink}
              to='/'
              noWrap
              underline='none'
              sx={{
                display: { xs: 'flex', md: 'none' },
                color: 'white'
              }}
            >
              VESTA
            </Link>
            {/* Menu (Desktop) */}
            <Box sx={{ marginLeft: 3, flexGrow: 1, display: { xs: 'none', sm: 'flex' }, gap: 3 }}>
              {categories.map((category) => (
                <Link 
                  key={category}
                  component={RouterLink}
                  to='/products'
                  noWrap
                  underline='none'
                  // TODO: Handle click
                  sx={{ color: 'white' }}
                >
                  {category}
                </Link>
              ))}
            </Box>
            {/* Icons (Mobile & Desktop) */}
            <Box sx={{ flexGrow: 0 }}>
              {/* TODO: Add links to icons */}
              <Tooltip title="Account">
                <IconButton onClick={handleAccountOpen}>
                  <AccountCircleIcon fontSize='small' htmlColor='#fff'/>
                </IconButton>
              </Tooltip>
              <Tooltip title="Favorites">
                <IconButton>
                  <FavoriteBorderRoundedIcon fontSize='small' htmlColor='#fff'/>
                </IconButton>
              </Tooltip>
              <Tooltip title="Shopping Cart">
                <IconButton>
                  <ShoppingCartRoundedIcon fontSize='small' htmlColor='#fff'/>
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* Login / Register Modal */}
      <Modal
        open={accountOpen}
        onClose={handleAccountClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          bgcolor: 'white',
          transform: 'translate(-50%, -50%)',
          width: '50vw',
          height: '50vh',

        }}>
          <Box
            sx={{
              width: '100%',
              display: { xs: 'flex', md: 'none' },
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
                <Tab label="Register" {...a11yProps(0)} />
                <Tab label="Login" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Register />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Login />
            </TabPanel>
          </Box>
          {/* Login/Register (Desktop) */}
          <Box 
            sx={{ 
              display: { xs: 'none', md: 'flex' },
              flexDirection: 'row',
              height: '100%'
            }}
          >
            <Register />
            <Login />
          </Box>
        </Box>
      </Modal>
    </>
  )
}

export default Navbar;