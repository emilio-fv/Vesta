// Imports
import React from 'react';
import { Controller } from 'react-hook-form';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const CheckboxInput = ({ name, control: formControl, label }) => {
  return (
    <Controller 
      name={name}
      control={formControl}
      render={({ field: { onChange, value }}) => (
        <FormControlLabel 
          control={<Checkbox checked={value} onChange={onChange}/>}
          label={label}
        />
      )}
    />
  )
};

export default CheckboxInput;