import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../reducers/products/productsSlice';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';

const InventoryRow = ({ product, handleUpdateClick }) => {
    // Helpers
    const dispatch = useDispatch();

    // Handle Delete
    const handleDelete = (id) => {
        dispatch(deleteProduct(id));
    }

    return (
        <>
            <TableCell align='center'>{product.name}</TableCell>
            <TableCell align='center'>{product.category}</TableCell>
            <TableCell align='center'>{product.size}</TableCell>
            <TableCell align='center'>{product.color}</TableCell>
            <TableCell align='center'>{product.price}</TableCell>
            <TableCell align='center'>{product.quantity}</TableCell>
            <TableCell>{product.description}</TableCell>
            <TableCell align='center'>{product.onSale ? 'Yes' : 'No'}</TableCell>
            <TableCell align='center'>{product.discount * 100 + '%'}</TableCell>
            <TableCell align='center'>{product.featured ? 'Yes' : 'No'}</TableCell>
            <TableCell sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button onClick={event => handleUpdateClick(product.id)} size='small' variant='outlined'>Update</Button>
                <Button onClick={event => handleDelete(product.id)} size='small' variant='outlined'>Delete</Button>
            </TableCell>
        </>
    );
};

export default InventoryRow;
