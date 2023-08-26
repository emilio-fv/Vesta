// Imports
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import AccountModal from '../Modals/Account';
import { categories } from '../../assets/constants';
import LogoLink from '../Links/Logo';
import MenuLink from '../Links/Menu';

import AccountCircleIcon from '@mui/icons-material/AccountCircleOutlined';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@emotion/react';

const Navbar = ({ loggedInUser }) => {
  // Helpers
  const theme = useTheme();
  const navigate = useNavigate();
  const [accountOpen, setAccountOpen] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  
  // Handle open and close nav menu (mobile)
  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  // Handle open account modal
  const handleAccountOpen = () => {
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

  // Favorites Button
  const handleFavoritesClick = () => {
    loggedInUser 
    ? loggedInUser.admin 
      ? navigate('/admin')
      : navigate('/account')
    : setAccountOpen(true);
  };

  return (
    <>
      <AppBar position='static' >
        <Container maxWidth='xl' >
          <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* Logo (Desktop) */}
            <LogoLink 
              sx={{
                display: { xs: 'none', md: 'flex' },
                color: 'primary.lightText',
                fontSize: '1.5rem',
                '&:hover': {
                  textShadow: '0px 0px 5px white'
                }
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
                    <MenuLink 
                      to={`/${category}/products`}
                      sx={{ fontSize: '.85rem' }}
                      text={category.toUpperCase()}
                    />
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* Logo (Mobile) */}
            <LogoLink
              sx={{
                display: { xs: 'flex', md: 'none' },
                fontSize: '1.5rem',
                color: 'primary.lightText',
                '&:hover': {
                  textShadow: '0px 0px 5px white'
                }
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
                <MenuLink 
                  to={`/${category}/products`}
                  sx={{ 
                    color: 'primary.lightText', 
                    fontSize: '.85rem' ,
                    '&:hover': {
                      textShadow: '0px 0px 5px white'
                    }
                  }}
                  text={category.toUpperCase()}
                />
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
                <IconButton onClick={() => handleFavoritesClick()}>
                  <FavoriteBorderRoundedIcon fontSize='small' htmlColor={theme.palette.primary.lightText}/>
                </IconButton>
              </Tooltip>
              <Tooltip title="Shopping Cart">
                <IconButton onClick={() => navigate('/cart')}>
                  <ShoppingCartRoundedIcon fontSize='small' htmlColor={theme.palette.primary.lightText}/>
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <AccountModal 
        open={accountOpen}
        onClose={() => setAccountOpen(false)}
        initialValue={0}
      />
    </>
  )
}

// Connect to Redux store
const mapStateToProps = (state) => ({
  loggedInUser: state.auth.loggedInUser
})

// Exports
export default connect(
  mapStateToProps,
)(Navbar);