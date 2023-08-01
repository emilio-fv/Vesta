import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useUpdateInventoryMutation } from '../../../store/api/inventoryApi';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import TableCell from '@mui/material/TableCell';
import TextField from '@mui/material/TextField';

const InventoryRowForm = ({ product, setUpdateRow }) => {
    // Helpers 
    const dispatch = useDispatch();
    const { status, messages } = useSelector((state) =>  state.products);

    // Form Data, Error Messages
    const [formData, setFormData] = useState({
        id: product.id,
        name: product.name,
        category: product.category,
        size: product.size,
        color: product.color,
        price: parseFloat(product.price.slice(1)),
        quantity: product.quantity,
        description: product.description,
        onSale: product.onSale,
        discount: product.discount * 100,
        featured: product.featured
    });
    const [errorMessages, setErrorMessages] = useState([]);

    // Set Error Messages, Reset Error Messages and Revert Format
    useEffect(() => {
        if (status === 'failed') {
            setErrorMessages(messages)
        }

        if (status === 'updated') {
            setUpdateRow(null);
        }

    }, [status, messages])

    // Handle Form Changes 
    const handleChanges = (event) => {
        const { name, value } = event.target;
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

    // Handle Save Button
    const handleSaveClick = () => {
        // dispatch(updateProduct(formData));
        // TODO update inventory
    }

    // Handle Undo Button
    const handleUndoClick = () => {
        setUpdateRow(null);
        // dispatch(resetMessages());
    }

    return (
        <>
            {/* Name */}
            <TableCell align='center' sx={{ minWidth: '150px' }}>
                <TextField
                    fullWidth
                    id='name'
                    variant='outlined'
                    name='name'
                    size='small'
                    value={formData.name}
                    onChange={event => handleChanges(event)}
                    error={errorMessages?.some(error => error.path === 'name')}
                    helperText={errorMessages?.find(error => error.path === 'name')?.message}
                />
            </TableCell>
            {/* Category */}
            <TableCell align='center'>
                <FormControl size='small'>
                    <Select
                        id='category'
                        name='category'
                        value={formData.category}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        onChange={event => handleChanges(event)}
                        error={errorMessages?.some(error => error.path === 'category')}
                    >
                        <MenuItem value={'Unisex'}>Unisex</MenuItem>
                        <MenuItem value={'Women'}>Women</MenuItem>
                        <MenuItem value={'Men'}>Men</MenuItem>
                    </Select>
                    {errorMessages?.some(error => error.path === 'category')
                        ? <FormHelperText sx={{ color: 'error.main' }}>{errorMessages?.find(error => error.path === 'category')?.message}</FormHelperText>
                        : null
                    }
                </FormControl>
            </TableCell>
            {/* Size */}
            <TableCell align='center'>
                <FormControl size='small'>
                    <Select
                        id='size'
                        name='size'
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        value={formData.size}
                        onChange={event => handleChanges(event)}
                        error={errorMessages?.some(error => error.path === 'size')}
                    >
                        <MenuItem value={'XS'}>XS</MenuItem>
                        <MenuItem value={'S'}>Small</MenuItem>
                        <MenuItem value={'M'}>Medium</MenuItem>
                        <MenuItem value={'L'}>Large</MenuItem>
                        <MenuItem value={'XL'}>XL</MenuItem>
                    </Select>
                    {errorMessages?.some(error => error.path === 'size')
                        ? <FormHelperText sx={{ color: 'error.main'}}>{errorMessages?.find(error => error.path === 'size')?.message}</FormHelperText>
                        : null
                    }
                </FormControl>
            </TableCell>
            {/* Color */}
            <TableCell align='center'>
                <FormControl size='small'>
                    <Select
                        id='color'
                        name='color'
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
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
            </TableCell>
            {/* Price */}
            <TableCell align='center' sx={{ minWidth: '100px' }}>
                <FormControl size='small'>
                    <OutlinedInput 
                        id='price'
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
            </TableCell>
            {/* Quantity */}
            <TableCell align='center'>
                <TextField 
                    id='quantity'
                    name='quantity'
                    type='number'
                    size='small'
                    inputProps={{ min: 0 }}
                    value={formData.quantity}
                    onChange={event => handleChanges(event)}
                    error={errorMessages?.some(error => error.path === 'quantity')}
                    helperText={errorMessages?.find(error => error.path === 'quantity')?.message}
                />
            </TableCell>
            {/* Description */}
            <TableCell>
                <TextField 
                    id='description'
                    name='description'
                    multiline
                    rows={2}
                    placeholder='Description'
                    value={formData.description}
                    onChange={event => handleChanges(event)}
                    error={errorMessages?.some(error => error.path === 'description')}
                    helperText={errorMessages?.find(error => error.path === 'description')?.message}
                />
            </TableCell>
            {/* On Sale */}
            <TableCell align='center'>
                <FormControl>
                    <FormControlLabel
                        name='onSale'
                        control={
                            <Checkbox
                                checked={formData.onSale}
                                onChange={event => handleChanges(event)}
                            />
                        }
                    />
                </FormControl>
            </TableCell>
            {/* Discount */}
            <TableCell align='center'>
                <FormControl size='small' sx={{ minWidth: '100px' }}>
                    <OutlinedInput 
                        id='discount'
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
            </TableCell>
            {/* Featured */}
            <TableCell align='center'>
                <FormControl>
                    <FormControlLabel 
                        name='featured'
                        control={
                            <Checkbox
                                checked={formData.featured}
                                onChange={event => handleChanges(event)}
                            />
                        }
                    />
                </FormControl>
            </TableCell>
            <TableCell>
                <Button onClick={event => handleUndoClick()} size='small' variant='outlined'>Undo</Button>
                <Button onClick={event => handleSaveClick()} size='small' variant='outlined'>Save</Button>
            </TableCell>
        </>
    );
};

export default InventoryRowForm;