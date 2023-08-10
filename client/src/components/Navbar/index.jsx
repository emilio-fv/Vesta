// Imports
import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from './Logo';
import AccountModal from './AccountModal';
import { resetInventory } from '../../store/reducers/inventory/inventorySlice';

import AccountCircleIcon from '@mui/icons-material/AccountCircleOutlined';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@emotion/react';

const categories = ['unisex', 'women', 'men'];

const Navbar = ({ loggedInUser, resetInventory }) => {
  // Helpers
  const theme = useTheme();
  const navigate = useNavigate();
  const [accountOpen, setAccountOpen] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  
  // Handle open and close nav menu (mobile)
  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  // Handle open account 
  const handleAccountOpen = () => {
    if (loggedInUser) {
      if (loggedInUser.admin) {
        resetInventory();
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
      <AppBar position='static' >
        <Container maxWidth='xl' >
          <Toolbar 
            disableGutters 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between'
            }} 
          >
            {/* Logo (Desktop) */}
            <Logo 
              component={RouterLink}
              sx={{
                display: { xs: 'none', md: 'flex' },
                color: 'primary.lightText',
                fontSize: '1.5rem'
              }}
            />
            {/* Menu (mobile) */}
            <Box 
              sx={{ 
                display: { xs: 'flex', sm: 'none' } 
              }}
            >
              <IconButton
                size='large'
                aria-label='product categories menu'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
              >
                <MenuIcon htmlColor={theme.palette.primary.lightText}/>
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
                      sx={{ fontSize: '.85rem' }}
                    >
                      {category.toUpperCase()}
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
                fontSize: '1.5rem',
                color: 'primary.lightText'
              }}
            />
            {/* Menu (Desktop) */}
            <Box 
              sx={{ 
                marginLeft: 3, 
                flexGrow: 1, 
                display: { xs: 'none', sm: 'flex' }, 
                gap: 3 
              }}
            >
              {categories.map((category) => (
                <Link 
                  key={category}
                  component={RouterLink}
                  to={`/${category}/products`}
                  noWrap
                  underline='none'
                  sx={{ 
                    color: 'primary.lightText', 
                    fontSize: '.85rem' 
                  }}
                >
                  {category.toUpperCase()}
                </Link>
              ))}
            </Box>
            {/* Icons menu */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Account">
                <IconButton onClick={() => handleAccountOpen()}>
                  <AccountCircleIcon fontSize='small' htmlColor={theme.palette.primary.lightText}/>
                </IconButton>
              </Tooltip>
              <Tooltip title="Favorites">
                <IconButton onClick={() => handleFavoritesButton()}>
                  <FavoriteBorderRoundedIcon fontSize='small' htmlColor={theme.palette.primary.lightText}/>
                </IconButton>
              </Tooltip>
              <Tooltip title="Shopping Cart">
                <IconButton onClick={() => handleShoppingCartButton()}>
                  <ShoppingCartRoundedIcon fontSize='small' htmlColor={theme.palette.primary.lightText}/>
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <AccountModal 
        open={accountOpen}
        onClose={handleAccountClose}
        initialValue={0}
      />
    </>
  )
}

// Connect to Redux store
const mapStateToProps = (state) => ({
  loggedInUser: state.auth.loggedInUser
})

const mapDispatchToProps = {
  resetInventory
}

// Exports
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);