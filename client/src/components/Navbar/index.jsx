import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

const categories = ['Unisex', 'Women', 'Men'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          {/* Logo (Desktop) */}
          <Typography 
            variant='h6'
            noWrap
            component='a'
            // TODO: add link to homepage
            sx={{
              display: { xs: 'none', md: 'flex' },
              textDecoration: 'none'
            }}
          >
            VESTA
          </Typography>
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
                  <Typography>{category}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Logo (Mobile) */}
          <Typography
            noWrap
            component="a"
            // TODO: add link to homepage
            sx={{
              display: { xs: 'flex', md: 'none' },
            }}
          >
            VESTA
          </Typography>
          {/* Menu (Desktop) */}
          <Box sx={{ marginLeft: 3, flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
            {categories.map((category) => (
              <Button 
                key={category}
                // TODO: Handle click
                sx={{ color: 'white' }}
              >
                {category}
              </Button>
            ))}
          </Box>
          {/* Icons (Mobile & Desktop) */}
          <Box sx={{ flexGrow: 0 }}>
            {/* TODO: Add links to icons */}
            <IconButton>
              <AccountCircleIcon fontSize='small' htmlColor='#fff'/>
            </IconButton>
            <IconButton>
              <FavoriteBorderRoundedIcon fontSize='small' htmlColor='#fff'/>
            </IconButton>
            <IconButton>
              <ShoppingCartRoundedIcon fontSize='small' htmlColor='#fff'/>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar;