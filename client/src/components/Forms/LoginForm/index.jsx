import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useLoginMutation } from '../../../store/api/authApi';
import { useNavigate } from 'react-router-dom';

const initialFormState = {
    email: null,
    password: null,
}

const LoginForm = () => {
    // Helpers
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, status, messages } = useSelector((state) => state.auth);

    // Login Form Data & Error Messages 
    const [formData, setFormData] = useState(initialFormState);
    const [errorMessages, setErrorMessages] = useState(null)

    // Set error messages, navigate to dashboard
    useEffect(() => {
        if (status === 'failed') {
            setErrorMessages([...messages, ...errorMessages]);
        }

        if (status === 'succeeded' && user) {
            if (user.admin) {
                navigate('/admin')
            } else {
                navigate('/account')
            }
        }
    }, [user, status])

    // Handle Form Changes
    const handleChanges = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    // Handle Form Submit
    const handleSubmit = (event) => {
        event.preventDefault();
        // Email & Password Null Check
        if (formData.email === null || formData.email.length === 0 || formData.password === null || formData.password.length === 0) {
            setErrorMessages({
                error: "All fields required."
            })
            return;
        } else {
            // dispatch(login(formData));
        }
    }

    return (
        <Box 
            component='form'
            sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1
            }}
            autoComplete='off'
            onSubmit={event => handleSubmit(event)}
        >
            <Typography variant='h5'>Login</Typography>
            <TextField
                id='email'
                name='email'
                label="Email" 
                variant="standard" 
                margin='none' 
                size='small'
                value={formData.email}
                error={errorMessages?.error ? true : false}
                onChange={event => handleChanges(event)}
            />
            <TextField
                id='password'
                name='password'
                label="Password" 
                variant="standard" 
                margin='none' 
                size='small'
                type="password"
                value={formData.password}
                error={errorMessages?.error ? true : false}
                helperText={errorMessages?.error}
                onChange={event => handleChanges(event)}
            />
            <Button type='submit' variant='contained' size='small' sx={{ marginTop: 1 }}>Login</Button>
        </Box>
    )
}

export default LoginForm;