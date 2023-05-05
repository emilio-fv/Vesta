import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
    return (
        <Box 
            sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1
            }}
        >
            <Typography variant='h5'>Login</Typography>
            <TextField label="Email" variant="standard" margin='none' size='small'/>
            <TextField label="Password" variant="standard" margin='none' size='small' type="password"/>
            <Button variant='contained' size='small' sx={{ marginTop: 1 }}>Login</Button>
        </Box>
    )
}

export default Login;