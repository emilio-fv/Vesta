// Imports
import React from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

const NumberInput = ({ name, control, defaultValue, rules, label, inputProps }) => {
  return (
    <Controller 
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField  
          fullWidth
          id={name}
          label={label}
          variant='standard'
          autoComplete='off'
          type='number'
          value={value}
          onChange={onChange}
          inputProps={inputProps}
          error={!!error}
          helperText={error ? error.message : null}
        />
      )}
    />
  )
};

export default NumberInput;