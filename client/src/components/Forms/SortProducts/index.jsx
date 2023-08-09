import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { connect } from 'react-redux';
import { sortByPriceAsc, sortByPriceDesc } from '../../../store/reducers/inventory/inventorySlice';

const SortProducts = ({ sortByPriceAsc, sortByPriceDesc }) => {
  // Helpers
  const [sortCategory, setSortCategory] = useState("");

  // Reset sort category 
  useEffect(() => {
    return (() => {
        setSortCategory("");
    })
  }, []);

  // Handle Sort Select Changes
  const handleChanges = (event) => {
    const { value } = event.target;
    setSortCategory(value);

    if (value === 'Asc') {
      sortByPriceAsc();
    }

    if (value === 'Desc') {
      sortByPriceDesc();
    }
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='sort-by-label'>Sort By</InputLabel>
        <Select
          labelId='sort-by-label'
          id='sort-by'
          value={sortCategory}
          label='sort-category'
          onChange={event => handleChanges(event)}
        >
          <MenuItem value={'Asc'}>Price (Ascending)</MenuItem>
          <MenuItem value={'Desc'}>Price (Descending)</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

// Connect to Redux
const mapDispatchToProps = {
  sortByPriceAsc, 
  sortByPriceDesc
};

export default connect(
  null,
  mapDispatchToProps
)(SortProducts);