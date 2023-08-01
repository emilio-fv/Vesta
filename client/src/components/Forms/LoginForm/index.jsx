import React, { useEffect } from 'react';
import { useLoginMutation } from '../../../store/api/authApi';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import TextInput from '../../Inputs/Text';
import PasswordInput from '../../Inputs/Password';

const LoginForm = () => {
    // Helpers
    const navigate = useNavigate();
    const [ login, { data, isError, error, isSuccess }] = useLoginMutation();

    // Handle login form changes and submit
    const { handleSubmit, control } = useForm({
        email: '',
        password: ''
    });

    // Handle login success
    useEffect(() => {
        if (isSuccess) {
            if (data.admin) {
                navigate('/admin')
            } else {
                navigate('/account')
            }
        }
    }, [isSuccess]);

    // Handle form submit
    const handleLogin = (data) => {
        login(data);
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
            onSubmit={handleSubmit(handleLogin)}
        >
            <Typography component='p' variant='h5'>Login</Typography>
            <TextInput 
                name={'email'}
                control={control}
                rules={{
                    required: 'Email required',
                    pattern: { 
                        value: /^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/, 
                        message: "Invalid email."
                      }
                }}
                label={'Email'}
            />
            <PasswordInput 
                name={'password'}
                control={control}
                rules={{
                    required: 'Password required.'
                }}
                label={'Password'}
            />
            {isError
                ? <Typography component='p' sx={{ color: 'error.main' }}>{error.data.message}</Typography>
                : null
            }
            <Button type='submit' variant='contained' size='small' sx={{ marginTop: 1 }}>Login</Button>
        </Box>
    )
}

export default LoginForm;