import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../reducers/products/productsSlice';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InventoryRow from '../InventoryRow';
import InventoryRowForm from '../InventoryRowForm';
import TablePaginationActions from '../TablePaginationActions';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import ProductForm from '../ProductForm';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

const Inventory = () => {
    // Helpers
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);

    // Fetch Products
    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    // Table Pagination
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5)

    const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - products.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    // New Product Modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Current Row Being Updated
    const [updateRow, setUpdateRow] = useState(null);

    // Handle Update Button
    const handleUpdateClick = (id) => {
        setUpdateRow(id);
    }

    return (
        <Container maxWidth='lg' sx={{ paddingY: 3 }}>
            {/* Header */}

            {/* Section Header */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingY: 1,
                }}
            >
                <Typography variant='h6'>Inventory</Typography>
                <Button onClick={handleOpen} variant='contained' size='small'>Add Product</Button>
            </Box>
            {/* Inventory Table */}
            <TableContainer component={Paper}>
                <Table aria-label='inventory table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Size</TableCell>
                            <TableCell>Color</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell sx={{ minWidth: '250px' }}>Description</TableCell>
                            <TableCell>On Sale</TableCell>
                            <TableCell>Discount</TableCell>
                            <TableCell>Featured</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0 
                            ? products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : products
                        ).map((product) => (
                            <TableRow
                                key={product.id}
                            >
                                {product.id === updateRow 
                                    ? <InventoryRowForm product={product} setUpdateRow={setUpdateRow}/>
                                    : <InventoryRow product={product} handleUpdateClick={handleUpdateClick}/>
                                }
                            </TableRow>
                        ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6}/>
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination 
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1}]}
                                // colSpan={6}
                                count={products.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: {
                                        'aria-label': 'rows per page',
                                    },
                                    native: true
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
            {/* Add Product Form */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="new-product-form"
                aria-describedby="new-product-modal"
            >
                <ProductForm handleClose={handleClose}/>
            </Modal>
        </Container>
    )
}

export default Inventory;