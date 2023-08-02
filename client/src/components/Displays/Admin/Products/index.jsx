// Imports
import React from 'react';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { connect } from 'react-redux';
import { Typography } from '@mui/material';

const ProductsTable = ({ products }) => {
  return (
    <Box 
      sx={{ 
        width: 1,
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      {products.map((product) => (
          <Typography>{product.name}</Typography>
        ))
      }
    </Box>
  )
};

// Connect to Redux store
const mapStateToProps = (state) => ({
  products: state.products.products
});

export default connect(
  mapStateToProps
)(ProductsTable);

// const AdminDash = () => {
//     // Helpers
//     // Table Pagination
//     const [page, setPage] = useState(0);
//     const [rowsPerPage, setRowsPerPage] = useState(5)

//     const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - products.length) : 0;

//     const handleChangePage = (event, newPage) => {
//         setPage(newPage);
//     }

//     const handleChangeRowsPerPage = (event) => {
//         setRowsPerPage(parseInt(event.target.value, 10));
//         setPage(0);
//     }

//     return (
//         <Container maxWidth='lg' sx={{ paddingY: 3 }}>
//             {/* Header */}
//             <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
//                 <Typography variant='h4' fontWeight='bold'>Admin Dashboard</Typography>
//                 <Button size='small' sx={{ paddingX: 1, bgcolor: '#ed214d', '&:hover': { bgcolor: '#ff305d' }}} onClick={event => handleLogout(event)}>Logout</Button>
//             </Box>
//             {/* Section Header */}
//             <Box
//                 sx={{
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     paddingY: 1,
//                 }}
//             >
//                 <Typography variant='h6'>Inventory</Typography>
//                 <Button onClick={handleOpen} variant='contained' size='small'>Add Product</Button>
//             </Box>
//             {/* Inventory Table */}
//             <TableContainer component={Paper}>
//                 <Table aria-label='inventory table'>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>Name</TableCell>
//                             <TableCell>Category</TableCell>
//                             <TableCell>Size</TableCell>
//                             <TableCell>Color</TableCell>
//                             <TableCell>Price</TableCell>
//                             <TableCell>Quantity</TableCell>
//                             <TableCell sx={{ minWidth: '250px' }}>Description</TableCell>
//                             <TableCell>On Sale</TableCell>
//                             <TableCell>Discount</TableCell>
//                             <TableCell>Featured</TableCell>
//                             <TableCell>Actions</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {(rowsPerPage > 0 
//                             ? products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                             : products
//                         ).map((product) => (
//                             <TableRow
//                                 key={product.id}
//                             >
//                                 {product.id === updateRow 
//                                     ? <InventoryRowForm product={product} setUpdateRow={setUpdateRow}/>
//                                     : <InventoryRow product={product} handleUpdateClick={handleUpdateClick}/>
//                                 }
//                             </TableRow>
//                         ))}

//                         {emptyRows > 0 && (
//                             <TableRow style={{ height: 53 * emptyRows }}>
//                                 <TableCell colSpan={6}/>
//                             </TableRow>
//                         )}
//                     </TableBody>
//                     <TableFooter>
//                         <TableRow>
//                             <TablePagination 
//                                 rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1}]}
//                                 // colSpan={6}
//                                 count={products.length}
//                                 rowsPerPage={rowsPerPage}
//                                 page={page}
//                                 SelectProps={{
//                                     inputProps: {
//                                         'aria-label': 'rows per page',
//                                     },
//                                     native: true
//                                 }}
//                                 onPageChange={handleChangePage}
//                                 onRowsPerPageChange={handleChangeRowsPerPage}
//                                 ActionsComponent={TablePaginationActions}
//                             />
//                         </TableRow>
//                     </TableFooter>
//                 </Table>
//             </TableContainer>
//         </Container>
//     )
// }