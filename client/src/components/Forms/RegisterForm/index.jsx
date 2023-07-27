import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../reducers/auth/authSlice';

const initialFormState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const RegisterForm = () => {
    // Helpers
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, status, messages } = useSelector((state) => state.auth);

    // Register Form Data & Error Messages
    const [formData, setFormData] = useState(initialFormState);
    const [errorMessages, setErrorMessages] = useState([]);


    // Set error messages, navigate to dashboard
    useEffect(() => {
        if (status === 'failed') {
            setErrorMessages([...errorMessages, ...messages]);
        }

        if (status === 'succeeded' && user !== null) {
            if (user.admin) {
                navigate('/admin')
            }
            navigate('/account')
        }
    }, [user, status])

    // Handle Form Changes
    const handleChanges = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    };

    // Handle Form Submit
    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate confirm password
        if (formData.confirmPassword === null || formData.confirmPassword.length === 0) {
            setErrorMessages([
                ...errorMessages,
                { path: 'confirmPassword', message: 'Confirm Password required.'}
            ])
        } 

        // Compare Password & Confirm Password
        if (formData.password !== formData.confirmPassword) {
            setErrorMessages([
                ...errorMessages,
                { path: 'confirmPassword', message: 'Passwords must match'}
            ])
        } 

        // Register
        dispatch(register({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password
        }));

    };

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
            <Typography component='p' variant='h5'>Register</Typography>
            <TextField 
                id='firstName'
                name='firstName'
                label="First Name" 
                variant="standard" 
                margin='none' 
                size='small'
                autoComplete='off'
                value={formData.firstName}
                onChange={event => handleChanges(event)}
                error={errorMessages?.some(error => error.path === 'firstName')}
                helperText={errorMessages?.find(error => error.path === 'firstName')?.message}
            />
            <TextField 
                id='lastName'
                name='lastName'
                label="Last Name" 
                variant="standard" 
                margin='none' 
                size='small'
                autoComplete='off'
                value={formData.lastName}
                error={errorMessages?.some(error => error.path === 'lastName')}
                helperText={errorMessages?.find(error => error.path === 'lastName')?.message}
                onChange={event => handleChanges(event)}
            />
            <TextField 
                id='email'
                name='email'
                label="Email" 
                variant="standard" 
                margin='none' 
                size='small'
                autoComplete='off'
                error={errorMessages?.some(error => error.path === 'email')}
                helperText={errorMessages?.find(error => error.path === 'email')?.message}
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
                autoComplete='off'
                error={errorMessages?.some(error => error.path === 'password')}
                helperText={errorMessages?.find(error => error.path === 'password')?.message}
                onChange={event => handleChanges(event)}
            />
            <TextField 
                id='confirmPassword'
                name='confirmPassword'
                label="Confirm Password" 
                variant="standard" 
                margin='none' 
                size='small'
                type="password"
                autoComplete='off'
                error={errorMessages?.some(error => error.path === 'confirmPassword')}
                helperText={errorMessages?.find(error => error.path === 'confirmPassword')?.message}
                onChange={event => handleChanges(event)}
            />
            <Button type='submit' variant='contained' size='small' sx={{ marginTop: 1 }}>Register</Button>
        </Box>
    )
}

export default RegisterForm;