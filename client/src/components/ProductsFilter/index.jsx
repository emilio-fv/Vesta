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

function valueText(value) {
    return `$${value}`;
}

const ProductFilter = () => {
    const [value, setValue] = useState([0, 500]);
    
    const handleChange = (event, newValue) => {
        console.log(event.target.name);
        setValue(newValue);
    }
    return (
        <Box 
            sx={{
                flex: 1,
                px: { xs: 5, sm: 0 }
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
                        <FormControlLabel control={<Checkbox />} label="XS"/>
                        <FormControlLabel control={<Checkbox />} label="Small"/>
                        <FormControlLabel control={<Checkbox />} label="Medium"/>
                        <FormControlLabel control={<Checkbox />} label="Large"/>
                        <FormControlLabel control={<Checkbox />} label="XL"/>
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
                        <FormControlLabel control={<Checkbox />} label="Black"/>
                        <FormControlLabel control={<Checkbox />} label="Grey"/>
                        <FormControlLabel control={<Checkbox />} label="White"/>
                        <FormControlLabel control={<Checkbox />} label="Brown"/>
                        <FormControlLabel control={<Checkbox />} label="Purple"/>
                        <FormControlLabel control={<Checkbox />} label="Blue"/>
                        <FormControlLabel control={<Checkbox />} label="Green"/>
                        <FormControlLabel control={<Checkbox />} label="Yellow"/>
                        <FormControlLabel control={<Checkbox />} label="Orange"/>
                        <FormControlLabel control={<Checkbox />} label="Pink"/>
                        <FormControlLabel control={<Checkbox />} label="Pink"/>
                        <FormControlLabel control={<Checkbox />} label="Red"/>
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
                    <Slider 
                        max={500}
                        getAriaLabel={() => 'Price Range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay='auto'
                        getAriaValueText={valueText}
                    />
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default ProductFilter;