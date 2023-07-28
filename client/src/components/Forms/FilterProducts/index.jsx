import React, { useState } from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import { connect, useDispatch } from 'react-redux';
import { filter } from '../../../store/reducers/inventory/inventorySlice.js';

function valueText(value) {
    return `$${value}`;
}

function valueLabel(value) {
    return `$${value}`;
}

const marks = [
    {
        value: 0,
        label: '$0'
    },
    {
        value: 500,
        label: '$500'
    }
]

const initialPriceRange = [0,500];

const FilterProducts = ({ filter }) => {
    // Helpers
    const dispatch = useDispatch();

    // Size, Color, Price Filter
    const [sizes, setSizes] = useState({
        XS: false,
        S: false,
        M: false,
        L: false,
        XL: false,
    });
    const [colors, setColors] = useState({
        Black: false,
        Grey: false,
        White: false,
        Brown: false,
        Purple: false,
        Blue: false,
        Green: false,
        Yellow: false,
        Orange: false,
        Pink: false,
        Red: false,
    })
    const [priceRange, setPriceRange] = useState(initialPriceRange);

    // Handle Size Changes
    const handleSizeChanges = (event) => {
        const { name, checked } = event.target;
        setSizes({
            ...sizes,
            [name]: checked
        })
    }

    // Handle Color Changes
    const handleColorChanges = (event) => {
        const { name, checked } = event.target;
        setColors({
            ...colors,
            [name]: checked
        })
    }

    // Handle Price Changes
    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue);
    }

    // Handle Apply Click
    const handleApplyClick = (event) => {
        event.preventDefault();

        // Configure filter parameters
        const filters = {}

        for (let key in sizes) {
            if (sizes[key]) {
                if (filters.sizes === undefined) {
                    filters.sizes = [];
                }
                filters.sizes.push(key)
            }
        }

        for (let key in colors) {
            if (colors[key]) {
                if (filters.colors === undefined) {
                    filters.colors = [];
                }
                filters.colors.push(key)
            }
        }

        if (priceRange !== initialPriceRange) {
            filters.price = priceRange;
        }

        dispatch(filter(filters));
    }

    return (
        <Box
            component='form'
            onSubmit={handleApplyClick}
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
                    {/* Size Filter */}
                    <FormGroup sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                        <FormControlLabel control={<Checkbox checked={sizes.XS} onChange={handleSizeChanges} name='XS'/>} label="XS"/>
                        <FormControlLabel control={<Checkbox checked={sizes.S} onChange={handleSizeChanges} name='S'/>} label="Small"/>
                        <FormControlLabel control={<Checkbox checked={sizes.M} onChange={handleSizeChanges} name='M'/>} label="Medium"/>
                        <FormControlLabel control={<Checkbox checked={sizes.L} onChange={handleSizeChanges} name='L'/>} label="Large"/>
                        <FormControlLabel control={<Checkbox checked={sizes.XL} onChange={handleSizeChanges} name='XL'/>} label="XL"/>
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
                    {/* Color Filter */}
                    <FormGroup sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                        <FormControlLabel control={<Checkbox checked={colors.Black} onChange={handleColorChanges} name='Black'/>} label="Black"/>
                        <FormControlLabel control={<Checkbox checked={colors.Grey} onChange={handleColorChanges} name='Grey'/>} label="Grey"/>
                        <FormControlLabel control={<Checkbox checked={colors.White} onChange={handleColorChanges} name='White'/>} label="White"/>
                        <FormControlLabel control={<Checkbox checked={colors.Brown} onChange={handleColorChanges} name='Brown'/>} label="Brown"/>
                        <FormControlLabel control={<Checkbox checked={colors.Purple} onChange={handleColorChanges} name='Purple'/>} label="Purple"/>
                        <FormControlLabel control={<Checkbox checked={colors.Blue} onChange={handleColorChanges} name='Blue'/>} label="Blue"/>
                        <FormControlLabel control={<Checkbox checked={colors.Green} onChange={handleColorChanges} name='Green'/>} label="Green"/>
                        <FormControlLabel control={<Checkbox checked={colors.Yellow} onChange={handleColorChanges} name='Yellow'/>} label="Yellow"/>
                        <FormControlLabel control={<Checkbox checked={colors.Orange} onChange={handleColorChanges} name='Orange'/>} label="Orange"/>
                        <FormControlLabel control={<Checkbox checked={colors.Pink} onChange={handleColorChanges} name='Pink'/>} label="Pink"/>
                        <FormControlLabel control={<Checkbox checked={colors.Red} onChange={handleColorChanges} name='Red'/>} label="Red"/>
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
                    {/* Price Filter */}
                    <Slider 
                        max={500}
                        getAriaLabel={() => 'Price Range'}
                        value={priceRange}
                        onChange={handlePriceChange}
                        valueLabelDisplay='auto'
                        getAriaValueText={valueText}
                        valueLabelFormat={valueLabel}
                        marks={marks}
                    />
                </AccordionDetails>
            </Accordion>
            <Button type='submit' sx={{ bgcolor: 'black', color: 'white',  }}>Apply</Button>
        </Box>
    )
}

// Connect to Redux
// const mapStateToProps = (state) => ({ });

const mapDispatchToProps = {
    filter 
};

export default connect(
    null,
    mapDispatchToProps
)(FilterProducts);