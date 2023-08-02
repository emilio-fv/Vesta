// Imports
import React from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

const PriceInput = ({ name, control, rules, label }) => {
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
          autoComplete='off'
          type='number'
          value={value}
          onChange={onChange}
          inputProps={{
            step: '.01',
            min: '0.01'
          }}
          error={!!error}
          helperText={error ? error.message : null}
        />
      )}
    />
  )
};

export default PriceInput;