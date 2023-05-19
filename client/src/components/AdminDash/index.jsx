import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../reducers/auth/authSlice';
import { getAllProducts } from '../../reducers/products/productsSlice';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import IconButton from '@mui/material/IconButton';
import InventoryRow from '../InventoryRow';
import InventoryRowForm from '../InventoryRowForm';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
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

// Inventory Table Pagination
function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    )
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
}

const AdminDash = () => {
    // Helpers
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);

    // Fetch Products
    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    // Handle Logout Button
    const handleLogout = () => {
        dispatch(logout());
    }

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
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                <Typography variant='h4' fontWeight='bold'>Admin Dashboard</Typography>
                <Button size='small' sx={{ paddingX: 1, bgcolor: '#ed214d', '&:hover': { bgcolor: '#ff305d' }}} onClick={event => handleLogout(event)}>Logout</Button>
            </Box>
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

export default AdminDash;