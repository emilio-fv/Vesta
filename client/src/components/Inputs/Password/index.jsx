import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormHelperText from '@mui/material/FormHelperText';

const PasswordInput = ({ name, control, rules, label }) => {
    // Handle Password Visibility
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = (event) => event.preventDefault();

    return (
        <Controller 
            name={name} 
            control={control}
            rules={rules}
            render={({ field: { onChange, value }, fieldState: { error }}) => (
                <FormControl size='small' variant='standard'>
                    <InputLabel>{label}</InputLabel>
                    <Input 
                        id={name}
                        size='small'
                        margin='none'
                        type={showPassword ? 'text' : 'password'}
                        value={value}
                        onChange={onChange}
                        error={error}
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={handleShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge='end'
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    {error 
                        ? <FormHelperText sx={{ color: 'error.main' }}>{error.message}</FormHelperText> 
                        : null
                    }
                </FormControl>  
            )}
        />
    )
}

export default PasswordInput;