import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../../../store/api/authApi';
import { useForm } from 'react-hook-form';
import TextInput from '../../Inputs/Text';
import PasswordField from '../../Inputs/Password';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const RegisterForm = () => {
    // Helpers
    const navigate = useNavigate();
    const [ register, { data, isError, error, isSuccess } ] = useRegisterMutation();

    // Handle register form changes and submit
    const { handleSubmit, control, watch } = useForm({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // Handler register success
    useEffect(() => {
        if (isSuccess) {
            if (data.admin) {
                navigate('/admin');
            } else {
                navigate('/account');
            }
        }
    }, [isSuccess])


    // Handle form submit
    const handleRegister = (data) => {
        register(data);
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
            onSubmit={handleSubmit(handleRegister)}
        >
            <Typography component='p' variant='h5'>Register</Typography>
            <TextInput 
                name={'firstName'}
                control={control}
                rules={{ 
                    required: 'First name required.'
                }}
                label={'First Name'}
            />
            <TextInput 
                name={'lastName'}
                control={control}
                rules={{ 
                    required: 'Last name required.'
                }}
                label={'Last Name'}
            />
            <TextInput 
                name={'email'}
                control={control}
                rules={{
                    required: 'Email required.', 
                    pattern: { 
                      value: /^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/, 
                      message: "Invalid email."
                    }
                }}
                label={'Email'}
            />
            <PasswordField 
                name={'password'}
                control={control}
                rules={{ 
                    required: 'Password required.'
                }}
                label={'Password'}
            />
            <PasswordField 
                name={'confirmPassword'}
                control={control}
                rules={{ 
                    required: 'Confirm password required.',
                    validate: value => {
                        if (watch('password') !== value) {
                            return "Passwords must match."
                        }
                    }
                }}
                label={'Confirm Password'}
            />
            {isError 
                ? <Typography component='p' sx={{ color: 'error.main' }}>{error.data.message}</Typography>
                : null
            }
            <Button type='submit' variant='contained' size='small' sx={{ marginTop: 1 }}>Register</Button>
        </Box>
    )
}

export default RegisterForm;