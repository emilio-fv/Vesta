import React from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

const TextInput = ({ name, control, rules, label }) => {
  return (
        <Controller 
            name={name}
            control={control}
            rules={rules}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField 
                    fullWidth
                    id={name}
                    label={label}
                    variant='standard'
                    margin='none' 
                    size='small'
                    autoComplete='off'
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                />
            )}
        />
  )
};

export default TextInput;