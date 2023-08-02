import React from 'react';
import { Controller } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormHelperText } from '@mui/material';

const SelectInput = ({ name, control, rules, label, options }) => {
  return (
    <Controller 
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>{label}</InputLabel>
          <Select
            value={value}
            label={label}
            autoWidth
            onChange={onChange}
            error={!!error}
          >
            {options.map((option) => (
              <MenuItem value={option}>{option}</MenuItem>
            ))}
          </Select>
          {error 
            ? <FormHelperText>{error.message}</FormHelperText>
            : null
          }
        </FormControl>
      )}
    />
  )
};

export default SelectInput;