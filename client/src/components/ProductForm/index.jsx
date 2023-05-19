import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, resetMessages } from '../../reducers/products/productsSlice.js';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const initialState = {
    name: '',
    category: '',
    size: '',
    color: '',
    price: null,
    quantity: 0,
    description: '',
    onSale: false,
    discount: 0,
    featured: false
}

const ProductForm = ({ handleClose }) => {
    // Helpers
    const dispatch = useDispatch();
    const { status, messages } = useSelector((state) => state.products);

    // Product Form Data & Errors
    const [formData, setFormData] = useState(initialState);
    const [errorMessages, setErrorMessages] = useState(null);

    // Set Error Messages, Reset Error Messages
    useEffect(() => {
        if (status === 'failed') {
            setErrorMessages(messages);
        }

        if (status === 'succeeded') {
            dispatch(resetMessages());
            handleClose();
        }
    }, [status])

    // Handle Changes
    const handleChanges = (event) => {
        const { name, value } = event.target;
        console.log(name, value)
        if (name === 'onSale' || name === 'featured') {
            const { checked } = event.target;
            setFormData({
                ...formData,
                [name]: checked
            })
        } else {
            setFormData({
                ...formData,
                [name]: value
            })
        }
    }

    // Handle Submit
    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Reformat discount
        if (formData.discount > 0) {
            const discountPercentage = formData.discount / 100;
            dispatch(createProduct({
                ...formData,
                discount: discountPercentage
            }))
        } else {
            dispatch(createProduct(formData))
        }
    }

    return (
        <Box
            sx={{
                maxHeight: '500px',
                overflowY: 'auto',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                display: 'flex',
                flexFlow: 'column',
                flexWrap: 'nowrap',
                padding: 3,
            }}
        >
            <Box
                sx={{
                    marginTop: 'auto',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: 3
                }}
            >
                <Typography variant='h5'>Add Product</Typography>
                <Box
                component='form'
                    sx={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        flexDirection: 'column', 
                        gap: 3 
                    }}
                    autoComplete='off'
                    onSubmit={event => handleSubmit(event)}
                >
                    {/* Name */}
                    <TextField
                        id='name'
                        label='Product Name'
                        variant='outlined'
                        name='name'
                        placeholder='Product Name'
                        size='small'
                        value={formData.name}
                        onChange={event => handleChanges(event)}
                        error={errorMessages?.some(error => error.path === 'name')}
                        helperText={errorMessages?.find(error => error.path === 'name')?.message}
                    />
                    {/* Category */}
                    <FormControl size='small'>
                        <InputLabel id='category-select-label'>Category</InputLabel>
                        <Select
                            labelId='category-select-label'
                            id='category'
                            label='Category'
                            name='category'
                            value={formData.category}
                            onChange={event => handleChanges(event)}
                            error={errorMessages?.some(error => error.path === 'category')}
                        >
                            <MenuItem value={'Unisex'}>Unisex</MenuItem>
                            <MenuItem value={'Women'}>Women</MenuItem>
                            <MenuItem value={'Men'}>Men</MenuItem>
                        </Select>
                        {errorMessages?.some(error => error.path === 'category') 
                            ? <FormHelperText sx={{ color: 'error.main'}}>{errorMessages?.find(error => error.path === 'category')?.message}</FormHelperText>
                            : null
                        }
                    </FormControl>
                    {/* Size */}
                    <FormControl size='small'>
                        <InputLabel id='size-select-label'>Size</InputLabel>
                        <Select
                            labelId='size-select-label'
                            id='size'
                            label='Size'
                            name='size'
                            value={formData.size}
                            onChange={event => handleChanges(event)}
                            error={errorMessages?.some(error => error.path === 'size')}
                        >
                            <MenuItem value={'XS'}>XS</MenuItem>
                            <MenuItem value={'Small'}>Small</MenuItem>
                            <MenuItem value={'Medium'}>Medium</MenuItem>
                            <MenuItem value={'Large'}>Large</MenuItem>
                            <MenuItem value={'XL'}>XL</MenuItem>
                        </Select>
                        {errorMessages?.some(error => error.path === 'size') 
                            ? <FormHelperText sx={{ color: 'error.main'}}>{errorMessages?.find(error => error.path === 'size')?.message}</FormHelperText>
                            : null
                        }
                    </FormControl>
                    {/* Color */}
                    <FormControl size='small'>
                        <InputLabel id='color-select-label'>Color</InputLabel>
                        <Select
                            labelId='color-select-label'
                            id='color'
                            label='Color'
                            name='color'
                            value={formData.color}
                            onChange={event => handleChanges(event)}
                            error={errorMessages?.some(error => error.path === 'color')}
                        >
                            <MenuItem value={'Black'}>Black</MenuItem>
                            <MenuItem value={'Grey'}>Grey</MenuItem>
                            <MenuItem value={'White'}>White</MenuItem>
                            <MenuItem value={'Brown'}>Brown</MenuItem>
                            <MenuItem value={'Purple'}>Purple</MenuItem>
                            <MenuItem value={'Blue'}>Blue</MenuItem>
                            <MenuItem value={'Green'}>Green</MenuItem>
                            <MenuItem value={'Yellow'}>Yellow</MenuItem>
                            <MenuItem value={'Orange'}>Orange</MenuItem>
                            <MenuItem value={'Pink'}>Pink</MenuItem>
                            <MenuItem value={'Red'}>Red</MenuItem>
                        </Select>
                        {errorMessages?.some(error => error.path === 'color') 
                            ? <FormHelperText sx={{ color: 'error.main'}}>{errorMessages?.find(error => error.path === 'color')?.message}</FormHelperText>
                            : null
                        }
                    </FormControl>
                    {/* Price */}
                    <FormControl size='small'>
                        <InputLabel id='price-input'>Price</InputLabel>
                        <OutlinedInput 
                            id='price'
                            label='Price'
                            name='price'
                            type='number'
                            inputProps={{ min: 0, step: 0.01 }}
                            startAdornment={<InputAdornment position='start'>$</InputAdornment>}
                            value={formData.price}
                            onChange={event => handleChanges(event)}
                            error={errorMessages?.some(error => error.path === 'price')}
                        />
                        {errorMessages?.some(error => error.path === 'price') 
                            ? <FormHelperText sx={{ color: 'error.main'}}>{errorMessages?.find(error => error.path === 'price')?.message}</FormHelperText>
                            : null
                        }
                    </FormControl>
                    {/* Quantity */}
                    <TextField 
                        id='quantity'
                        label="Quantity"
                        name='quantity'
                        type='number'
                        placeholder='Quantity'
                        size='small'
                        inputProps={{ min: 0 }}
                        value={formData.quantity}
                        onChange={event => handleChanges(event)}
                        error={errorMessages?.some(error => error.path === 'quantity')}
                        helperText={errorMessages?.find(error => error.path === 'quantity')?.message}
                    />
                    {/* Description */}
                    <TextField 
                        id='description'
                        label='Description'
                        name='description'
                        multiline
                        rows={2}
                        placeholder='Description'
                        value={formData.description}
                        onChange={event => handleChanges(event)}
                        error={errorMessages?.some(error => error.path === 'description')}
                        helperText={errorMessages?.find(error => error.path === 'description')?.message}
                    />
                    {/* On Sale & Featured */}
                    <FormGroup sx={{ display: 'flex', flexDirection: 'row'}}>
                        <FormControlLabel 
                            label='On Sale'
                            name='onSale'
                            control={
                                <Checkbox 
                                    checked={formData.onSale}
                                    onChange={event => handleChanges(event)}
                                />
                            } 
                        />
                        <FormControlLabel 
                            label='Featured'
                            name='featured'
                            control={
                                <Checkbox
                                    checked={formData.featured}
                                    onChange={event => handleChanges(event)}
                                />
                            }
                        />
                    </FormGroup>
                    {/* Discount */}
                    <FormControl size='small'>
                        <InputLabel id='discount-input'>Discount</InputLabel>
                        <OutlinedInput 
                            id='discount'
                            label='Discount'
                            name='discount'
                            type='number'
                            inputProps={{ min: 0, max: 99, step: 1 }}
                            endAdornment={<InputAdornment position='end'>%</InputAdornment>}
                            value={formData.discount}
                            onChange={event => handleChanges(event)}
                            error={errorMessages?.some(error => error.path === 'discount')}
                            helperText={errorMessages?.find(error => error.path === 'discount')?.message}
                        />
                    </FormControl>
                    <Button type='submit' variant="contained">Add Product</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default ProductForm;