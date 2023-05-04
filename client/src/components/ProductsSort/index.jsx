import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ProductSort = () => {
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id='sort-by-label'>Sort By</InputLabel>
                <Select
                    labelId='sort-by-label'
                    id='sort-by'
                    // value={}
                    label='sort-category'
                    // onChange={}
                >
                    <MenuItem>Price (Ascending)</MenuItem>
                    <MenuItem>Price (Descending)</MenuItem>
                    <MenuItem>Featured</MenuItem>
                    <MenuItem>Default</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default ProductSort;