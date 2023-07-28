import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { connect, useDispatch, useSelector } from 'react-redux';
import { sortPriceAsc, sortPriceDesc, sortFeatured } from '../../reducers/products/productsSlice';
import { Typography } from '@mui/material';


const SortProducts = ({ sortPriceAsc, sortPriceDesc, sortFeatured }) => {
    // Helpers
    const dispatch = useDispatch();
    const [sortCategory, setSortCategory] = useState("");

    // Reset Sort Category 
    useEffect(() => {
        return (() => {
            setSortCategory("");
        })
    }, [])

    // Handle Sort Select Changes
    const handleChanges = (event) => {
        const { value } = event.target;
        setSortCategory(value);

        if (value === 'Asc') {
            dispatch(sortPriceAsc());
        }

        if (value === 'Desc') {
            dispatch(sortPriceDesc());
        }

        if (value === 'Featured') {
            dispatch(sortFeatured());
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
                    <MenuItem value={""}/>
                    <MenuItem value={'Asc'}>Price (Ascending)</MenuItem>
                    <MenuItem value={'Desc'}>Price (Descending)</MenuItem>
                    <MenuItem value={'Featured'}>Featured</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

// Connect to Redux
// const mapStateToProps = (state) => ({ });

const mapDispatchToProps = {
    sortFeatured, 
    sortPriceAsc, 
    sortPriceDesc,
};

export default connect(
    null,
    mapDispatchToProps
)(SortProducts);