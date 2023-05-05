import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import FormControl from '@mui/material/FormControl';

const Register = () => {
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
            <Typography variant='h5'>Register</Typography>
            <TextField label="First Name" variant="standard" margin='none' size='small'/>
            <TextField label="Last Name" variant="standard" margin='none' size='small'/>
            <TextField label="Email" variant="standard" margin='none' size='small'/>
            <TextField label="Password" variant="standard" margin='none' size='small' type="password"/>
            <TextField label="Confirm Password" variant="standard" margin='none' size='small'/>
            <Button variant='contained' size='small' sx={{ marginTop: 1 }}>Register</Button>
        </Box>
    )
}

export default Register;