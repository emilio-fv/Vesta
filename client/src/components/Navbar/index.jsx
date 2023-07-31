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
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import Modal from '@mui/material/Modal';
import RegisterForm from '../Forms/RegisterForm';
import LoginForm from '../Forms/LoginForm';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
// import { reset } from '../../reducers/auth/authSlice';
// import { setCategory } from '../../reducers/products/productsSlice';
import { connect } from 'react-redux';

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

const Navbar = ({ loggedInUser }) => {
  // Helpers
  const navigate = useNavigate();
  const [accountOpen, setAccountOpen] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [value, setValue] = useState(0);

  // Handle open and close nav menu (Mobile)
  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  // Handle changing tabs
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  // Handle open account modal
  const handleAccountOpen = () => {
    // Check if user logged in
    if (loggedInUser) {
      if (loggedInUser.admin) {
        navigate('/admin');
      } else {
        navigate('/account');
      }
    } else {
      setAccountOpen(true);
    }
  };

  // Handle close account modal
  const handleAccountClose = () => setAccountOpen(false);

  // TODO: Favorites Button
  // TODO: Shopping Cart Button

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
                      // onClick={event => dispatch(setCategory(category))}
                      component={RouterLink}
                      to='/products'
                      underline='none'
                      noWrap
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
                  // onClick={event => dispatch(setCategory(category))}
                  key={category}
                  component={RouterLink}
                  to='/products'
                  noWrap
                  underline='none'
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
                <IconButton >
                  <FavoriteBorderRoundedIcon fontSize='small' htmlColor='#fff'/>
                </IconButton>
              </Tooltip>
              <Tooltip title="Shopping Cart">
                <Link
                  component={RouterLink}
                  to='/cart'
                >
                  <IconButton>
                    <ShoppingCartRoundedIcon fontSize='small' htmlColor='#fff'/>
                  </IconButton>
                </Link>
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
                <Tab label="Register" {...a11yProps(0)} />
                <Tab label="Login" {...a11yProps(1)} />
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
    </>
  )
}

// Connect to Redux store
const mapStateToDispatch = (state) => ({
  isLoggedIn: state.auth.isLoggedIn
})

// Exports
export default connect(
  mapStateToDispatch
)(Navbar);