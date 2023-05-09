import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const UserAccountInfo = () => {
  return (
    <Container sx={{ paddingY: 3 }}>
        <Typography variant='h4' fontWeight='bold' marginBottom={3}>Hello, TODO username</Typography>
        <Typography fontWeight='bold'>Account Overview</Typography>
        <Box sx={{
            padding: 2
        }}>
            <Typography>First Name:</Typography>
            <Typography>Last Name:</Typography>
            <Typography>Email:</Typography>
        </Box>
    </Container>
  )
};

export default UserAccountInfo;