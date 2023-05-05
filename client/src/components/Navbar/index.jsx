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

const categories = ['Unisex', 'Women', 'Men'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  
  // Account Button
  const [accountOpen, setAccountOpen] = useState(false);
  const handleAccountOpen = () => setAccountOpen(true);
  const handleAccountClose = () => setAccountOpen(false);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
                display: { xs: 'flex', md: 'none' },
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
            <Box sx={{ marginLeft: 3, flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 3 }}>
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
          width: 400,
          height: 400
        }}>
          <Register />
        </Box>
      </Modal>
    </>
  )
}

export default Navbar;