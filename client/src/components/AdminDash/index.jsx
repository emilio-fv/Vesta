import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import Paper from '@mui/material/Paper';
import sampleProducts from '../../data/sampleProducts';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import TablePagination from '@mui/material/TablePagination';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch } from 'react-redux';
import { logout } from '../../reducers/auth/authSlice';

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

    // Handle Logout Button
    const handleLogout = () => {
        dispatch(logout());
    }

    // Table Pagination
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5)

    const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - sampleProducts.length) : 0;

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
                            <TableCell sx={{ minWidth: '500px' }}>Description</TableCell>
                            <TableCell>On Sale</TableCell>
                            <TableCell>Discount</TableCell>
                            <TableCell>Featured</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0 
                            ? sampleProducts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : sampleProducts
                        ).map((product) => (
                            <TableRow
                                key={product.name}
                            >
                                <TableCell align='center'>{product.name}</TableCell>
                                <TableCell align='center'>{product.category}</TableCell>
                                <TableCell align='center'>{product.size}</TableCell>
                                <TableCell align='center'>{product.color}</TableCell>
                                <TableCell align='center'>${product.price}</TableCell>
                                <TableCell align='center'>{product.quantity}</TableCell>
                                <TableCell>{product.description}</TableCell>
                                <TableCell align='center'>{product.onSale ? 'yes' : 'no'}</TableCell>
                                <TableCell align='center'>{product.onSale ? parseFloat(product.discount) : 'n/a'}</TableCell>
                                <TableCell align='center'>{product.featured ? 'yes' : 'no'}</TableCell>
                                <TableCell sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <Button size='small' variant='outlined'>Update</Button>
                                    <Button size='small' variant='outlined'>Delete</Button>
                                </TableCell>
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
                                count={sampleProducts.length}
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
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        padding: 3,
                        gap: 3
                    }}
                >
                    <Typography variant='h5'>Add Product</Typography>
                    <form>
                        <Box 
                            sx={{ 
                                display: 'flex', 
                                justifyContent: 'center', 
                                flexDirection: 'column', 
                                gap: 3 
                            }}
                        >
                            {/* Name */}
                            <TextField
                                id='name'
                                label='Product Name'
                                variant='outlined'
                                placeholder='Product Name'
                                size='small'
                            />
                            {/* Category */}
                            <FormControl size='small'>
                                <InputLabel id='category-select-label'>Category</InputLabel>
                                <Select
                                    labelId='category-select-label'
                                    id='category'
                                    // value={}
                                    label='Category'
                                    // onChange={}
                                >
                                    <MenuItem value={'Unisex'}>Unisex</MenuItem>
                                    <MenuItem value={'Women'}>Women</MenuItem>
                                    <MenuItem value={'Men'}>Men</MenuItem>
                                </Select>
                            </FormControl>
                            {/* Size */}
                            <FormControl size='small'>
                                <InputLabel id='size-select-label'>Size</InputLabel>
                                <Select
                                    labelId='size-select-label'
                                    id='size'
                                    // value={}
                                    label='Size'
                                    // onChange={}
                                >
                                    <MenuItem value={'XS'}>XS</MenuItem>
                                    <MenuItem value={'Small'}>Small</MenuItem>
                                    <MenuItem value={'Medium'}>Medium</MenuItem>
                                    <MenuItem value={'Large'}>Large</MenuItem>
                                    <MenuItem value={'XL'}>XL</MenuItem>
                                </Select>
                            </FormControl>
                            {/* Color */}
                            <FormControl size='small'>
                                <InputLabel id='color-select-label'>Color</InputLabel>
                                <Select
                                    labelId='color-select-label'
                                    id='color'
                                    // value={}
                                    label='Size'
                                    // onChange={}
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
                            </FormControl>
                            {/* Price */}
                            <FormControl size='small'>
                                <InputLabel id='price-input'>Price</InputLabel>
                                <OutlinedInput 
                                    id='price'
                                    label='Price'
                                    startAdornment={<InputAdornment position='start'>$</InputAdornment>}
                                />
                            </FormControl>
                            {/* Quantity */}
                            <TextField 
                                id='quantity'
                                label="Quantity"
                                type='number'
                                placeholder='Quantity'
                                size='small'
                            />
                            {/* Description */}
                            <TextField 
                                id='description'
                                label='Description'
                                multiline
                                rows={2}
                                placeholder='Description'
                            />
                            {/* On Sale & Featured */}
                            <FormGroup sx={{ display: 'flex', flexDirection: 'row'}}>
                                <FormControlLabel control={<Checkbox />} label='On Sale'/>
                                <FormControlLabel control={<Checkbox />} label='Featured'/>
                            </FormGroup>
                            {/* Discount */}
                            <FormControl size='small'>
                                <InputLabel id='discount-input'>Discount</InputLabel>
                                <OutlinedInput 
                                    id='discount'
                                    label='Discount'
                                    endAdornment={<InputAdornment position='end'>%</InputAdornment>}
                                />
                            </FormControl>
                            <Button variant="contained">Add Product</Button>
                        </Box>
                    </form>
                </Box>
            </Modal>
        </Container>
    )
}

export default AdminDash;