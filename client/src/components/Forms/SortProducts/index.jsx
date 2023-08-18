import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setSort } from '../../../store/reducers/inventory/inventorySlice';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SortProducts = ({ sort, setSort }) => {
  // Handle selected value 
  const [selectedValue, setSelectedValue] = useState(sort);

  // Handle Sort Select Changes
  const handleChanges = (event) => {
    const { value } = event.target;
    setSelectedValue(value);
    setSort(value);
  }

  return (
    <Box sx={{ minWidth: 120, marginTop: 1 }}>
      <FormControl fullWidth size='small'>
        <InputLabel id='sort-by-label'>Sort By</InputLabel>
        <Select
          labelId='sort-by-label'
          id='sort-by'
          value={selectedValue}
          defaultValue={selectedValue}
          label='sort-category'
          onChange={(event) => handleChanges(event)}
        >
          <MenuItem value={'Default'}>Default</MenuItem>
          <MenuItem value={'ASC'}>Price: High to Low</MenuItem>
          <MenuItem value={'DESC'}>Price: Low to High</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

// Connect to Redux store
const mapStateToProps = (state) => ({
  sort: state.inventory.sort,
});

const mapDispatchToProps = {
  setSort,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortProducts);