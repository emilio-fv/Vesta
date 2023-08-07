// Imports
import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const Footer = () => {
  return (
    <Container 
      disableGutters 
      maxWidth='false' 
      sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' }, 
        backgroundColor: 'black', 
        color: 'white',
        paddingY: 6,
        gap: 2
      }}
    >
      {/* Product Links */}
      <Box 
        sx={{ 
          // paddingY: 1, 
          flexGrow: 1, 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Typography variant='h5'>Products</Typography>
        <Typography variant='a'>Unisex</Typography>
        <Typography variant='a'>Women</Typography>
        <Typography variant='a'>Men</Typography>
        <Typography variant='a'>Sale</Typography>
      </Box>
      {/* Support Links */}
      <Box 
        sx={{
          // paddingY: 1, 
          flexGrow: 1, 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Typography variant='h5'>Support</Typography>
        <Typography variant='a'>FAQ</Typography>
        <Typography variant='a'>Customer Service</Typography>
        <Typography variant='a'>Shipping</Typography>
        <Typography variant='a'>Order Tracking</Typography>
        <Typography variant='a'>Returns & Exchanges</Typography>
      </Box>
      {/* About Links */}
      <Box 
        sx={{
          // paddingY: 1, 
          flexGrow: 1, 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Typography align='center' variant='h5'>About Vesta</Typography>
        <Typography variant='a'>About</Typography>
        <Typography variant='a'>Careers</Typography>
        <Typography variant='a'>Privacy Policy</Typography>
      </Box>
      {/* Git & Professional Links */}
      <Box 
        sx={{ 
          // paddingY: 1,
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'flex-start'
        }}
      >
        <Tooltip title="Github">
          <IconButton onClick={() => window.open('https://github.com/emilio-fv/Vesta', '_blank')}>
            <GitHubIcon htmlColor='#fff'/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Linkedin">
          <IconButton onClick={() => window.open('https://www.linkedin.com/in/emiliofv/', '_blank')}>
            <LinkedInIcon htmlColor='#fff'/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Portfolio Website">
          <IconButton onClick={() => window.open('https://emiliovazquezdev.com/', '_blank')}>
            <WebAssetIcon htmlColor='#fff'/>
          </IconButton>
        </Tooltip>
      </Box>
    </Container>
  )
}

export default Footer;