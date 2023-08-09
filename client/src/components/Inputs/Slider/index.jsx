// Imports
import React from 'react';
import { Controller } from 'react-hook-form';
import Slider from '@mui/material/Slider';

const SliderInput = ({ name, control, min, max, step, ariaLabel, valueText, labelFormat, marks }) => {
  return (
    <Controller 
      name={name}
      control={control}
      render={({ field: { onChange, value }}) => (
        <Slider 
          min={min}
          max={max}
          step={step}
          valueLabelDisplay='auto'
          onChange={onChange}
          value={value}
          getAriaLabel={() => ariaLabel}
          getAriaValueText={valueText}
          valueLabelFormat={labelFormat}
          marks={marks}
        />
      )}
    />
  )
};

export default SliderInput;