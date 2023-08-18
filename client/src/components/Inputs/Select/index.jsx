import React from 'react';
import { Controller } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormHelperText } from '@mui/material';

const SelectInput = ({ name, control, rules, label, options, handleChange, disabled }) => {
  return (
    <Controller 
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl fullWidth disabled={disabled} size='small'> 
          <InputLabel>{label}</InputLabel>
          <Select
            value={value}
            label={label}
            fullWidth
            onChange={event => {
              if (handleChange) {
                handleChange(event.target.value);
              }
              onChange(event)
            }}
            error={!!error}
          >
            {options.map((option) => (
              <MenuItem value={option.value}>{option.name}</MenuItem>
            ))}
          </Select>
          {error 
            ? <FormHelperText sx={{ color: 'error.main'}}>{error.message}</FormHelperText>
            : null
          }
        </FormControl>
      )}
    />
  )
};

export default SelectInput;