// Imports
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
import { connect } from 'react-redux';
import Logo from './Logo';
import AccountModal from './AccountModal';

const categories = ['unisex', 'women', 'men'];

const Navbar = ({ loggedInUser }) => {
  // Helpers
  const navigate = useNavigate();
  const [accountOpen, setAccountOpen] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  
  // Handle open and close nav menu (mobile)
  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  // Handle open account 
  const handleAccountOpen = () => {
    loggedInUser 
      ? loggedInUser.admin 
        ? navigate('/admin')
        : navigate('/account')
      : setAccountOpen(true);
  };

  // Handle close account modal
  const handleAccountClose = () => setAccountOpen(false);

  // Favorites Button
  const handleFavoritesButton = () => {
    loggedInUser 
    ? loggedInUser.admin 
      ? navigate('/admin')
      : navigate('/account')
    : setAccountOpen(true);
  };

  // Shopping Cart Button
  const handleShoppingCartButton = () => {
    navigate('/cart');
  };

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
            <Logo 
              component={RouterLink} 
              variant='h6'
              sx={{
                display: { xs: 'none', md: 'flex' },
                color: 'white'
              }}
            />
            {/* Menu (mobile) */}
            <Box sx={{ display: { xs: 'flex', sm: 'none' } }} >
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
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {categories.map((category) => (
                  <MenuItem
                    key={category}
                    onClick={handleCloseNavMenu}
                  >
                    <Link 
                      component={RouterLink}
                      to={`/${category}/products`}
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
            <Logo 
              component={RouterLink}
              sx={{
                display: { xs: 'flex', md: 'none' },
                color: 'white'
              }}
            />
            {/* Menu (Desktop) */}
            <Box sx={{ marginLeft: 3, flexGrow: 1, display: { xs: 'none', sm: 'flex' }, gap: 3 }}>
              {categories.map((category) => (
                <Link 
                  key={category}
                  component={RouterLink}
                  to={`/${category}/products`}
                  noWrap
                  underline='none'
                  sx={{ color: 'white' }}
                >
                  {category}
                </Link>
              ))}
            </Box>
            {/* Icons menu */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Account">
                <IconButton onClick={() => handleAccountOpen()}>
                  <AccountCircleIcon fontSize='small' htmlColor='#fff'/>
                </IconButton>
              </Tooltip>
              <Tooltip title="Favorites">
                <IconButton onClick={() => handleFavoritesButton()}>
                  <FavoriteBorderRoundedIcon fontSize='small' htmlColor='#fff'/>
                </IconButton>
              </Tooltip>
              <Tooltip title="Shopping Cart">
                <IconButton onClick={() => handleShoppingCartButton()}>
                  <ShoppingCartRoundedIcon fontSize='small' htmlColor='#fff'/>
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <AccountModal 
        open={accountOpen}
        onClose={handleAccountClose}
      />
    </>
  )
}

// Connect to Redux store
const mapStateToDispatch = (state) => ({
  loggedInUser: state.auth.loggedInUser
})

// Exports
export default connect(
  mapStateToDispatch
)(Navbar);