import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';

const categories = ['Unisex', 'Women', 'Men'];

const Navbar = () => {
  const [anchorNav, setAnchorNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorNav(null);
  };

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          {/* Logo (Desktop) */}
          <Typography 
            variant='h6'
            noWrap
            component='a'
            // TODO: link
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              textDecoration: 'none'
              // fontWeight: 
            }}
          >
            VESTA
          </Typography>

          {/* Links (Desktop) */}
          <Box 
            sx={{ 
              flexGrow: 1, 
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
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {categories.map((category) => {
                <Button
                  key={category}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: 'white',
                    display: 'block',
                  }}
                >
                  {category}
                </Button>
              })}
            </Menu>
          </Box>

          {/* Links (Mobile) */}
          {/* Logo (Mobile) */}
          {/*  */}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar;