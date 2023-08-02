// Imports
import React from 'react';
import { connect } from 'react-redux';
import { useGetAllProductsQuery } from '../../../../store/api/productsApi';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from '@mui/material';

const headerStyling = {
  fontWeight: 'bold'
}

const ProductsTable = ({ products }) => {
  // Fetch products
  const { isSuccess } = useGetAllProductsQuery();

  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 850, maxWidth: 950 }}  stickyHeader aria-label='Products table'>
        <colgroup>
          <col width='10%'/>
          <col width='10%'/>
          <col width='10%'/>
          <col width='30%'/>
          <col width='10%'/>
          <col width='20%'/>
        </colgroup>
        <TableHead>
          <TableRow>
            <TableCell sx={headerStyling}>Name</TableCell>
            <TableCell sx={headerStyling}>Category</TableCell>
            <TableCell sx={headerStyling}>Price</TableCell>
            <TableCell sx={headerStyling}>Description</TableCell>
            <TableCell sx={headerStyling}>Image</TableCell>
            <TableCell sx={headerStyling}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isSuccess 
            ? products.map((product) => (
                <TableRow
                  key={product.id}
                >
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>${product.price}</TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell><Link href={product.src} target='_blank' rel='noopener'>url</Link></TableCell>
                  <TableCell>TODO: Actions</TableCell>
                </TableRow>
              ))
            : null
          }
        </TableBody>
      </Table>
    </TableContainer>
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


