// Imports
import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
// import { sizes, sizeOptions, colorOptions, colors } from '../../../assets/selectOptions';
import CheckboxInput from '../../Inputs/Checkbox';
import SliderInput from '../../Inputs/Slider';
import { filter, resetFilter } from '../../../store/reducers/inventory/inventorySlice';

import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
// import { colorDefaults, sizeDefaults } from '../../../assets/filterOptions';
import { colorDefaults, colors, priceRange, sizeDefaults, sizes } from '../../../assets/constants';

const marks = [
    {
        value: 0,
        label: '$0'
    },
    {
        value: 500,
        label: '$500'
    }
];

const FilterProducts = ({ filter, resetFilter }) => {
  // Handle form changes and submit
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      ...sizeDefaults,
      ...colorDefaults,
    }
  });

  // Handle apply filters 
  const handleApplyFilters = (data) => {
    let filters = {
      size: null,
      color: null,
      price: null
    }
    // Iterate over data and check if true
    for (const [key, value] of Object.entries(data)) {
      if (value) {
        if (sizes.includes(key)) {
          filters.size ? filters.size.push(key) : filters.size = [key];
        }
        
        if (colors.includes(key)) {
          filters.color ? filters.color.push(key) : filters.color = [key];
        }

        if (key === 'price') {
          filters.price = value
        }
      }
    }

    filter(filters);
  }

  const handleReset = () => {
    reset();
    resetFilter();
  };

  return (
    <Box
      component='form'
      onSubmit={handleSubmit(handleApplyFilters)}
      sx={{
        flex: 1,
        px: { xs: 5, sm: 0 },
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
          marginBottom: 1,
        }}
      >
        <FilterAltIcon />
        <Typography marginTop='5px'>Filter</Typography>
      </Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='filter-size-checkboxes'
          id='filter-size'
        >
          <Typography>Size</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            {sizes.map((size) => (
              <CheckboxInput name={size} label={size} control={control}/>
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='filter-color-checkboxes'
          id='filter-color'
        >
          <Typography>Color</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            {colors.map((color) => (
              <CheckboxInput control={control} name={color} label={color} />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='filter-price-checkboxes'
            id='filter-price'
          >
            <Typography>Price</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <SliderInput 
              control={control}
              name={'price'}
              min={priceRange[0]}
              max={priceRange[1]}
              step={1}
              ariaLabel={() => 'Price Range'}
              valueText={(value) => `$${value}`}
              labelFormat={(value) => `$${value}`}
              marks={marks}
            />
          </AccordionDetails>
      </Accordion> 
      <Button type='submit' sx={{ bgcolor: 'black', color: 'white',  }}>Apply</Button>
      <Button onClick={() => handleReset()} sx={{ bgcolor: 'black', color: 'white',  }}>Reset</Button>
    </Box>
  )
}

// Connect to Redux store
const mapDispatchToProps = {
    filter,
    resetFilter
};

export default connect(
    null,
    mapDispatchToProps
)(FilterProducts);