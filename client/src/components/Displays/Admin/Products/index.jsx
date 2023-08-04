// Imports
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useDeleteProductMutation, useGetAllProductsQuery } from '../../../../store/api/productsApi';
import UpdateProduct from '../../../Forms/UpdateProduct';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

const headerStyling = {
  fontWeight: 'bold'
}

const ProductsTable = ({ products }) => {
  // Helpers
  const [updateProductFormOpen, setUpdateProductFormOpen] = useState(false);
  const handleOpenUpdateProductForm = () => setUpdateProductFormOpen(true);
  const handleCloseUpdateProductForm = () => {
    setUpdateProductFormOpen(false);
    setSelectedProduct(null);
  };
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [deleteProduct] = useDeleteProductMutation();

  // Fetch products
  const { isSuccess } = useGetAllProductsQuery();

  // Handle update button click
  const handleUpdateClick = (product) => {
    setSelectedProduct(product);
    handleOpenUpdateProductForm();
  };

  // Handle delete button click
  const handleDeleteClick = (productId) => {
    deleteProduct(productId);
  };

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
                <TableRow key={product.id}>
                  <TableCell>
                    {product.name}
                  </TableCell>
                  <TableCell>
                    {product.category}
                  </TableCell>
                  <TableCell>
                    ${product.price}
                  </TableCell>
                  <TableCell>
                    {product.description}
                  </TableCell>
                  <TableCell>
                    <Link href={product.src} target='_blank' rel='noopener'>url</Link>
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => handleUpdateClick(product)}>Update</Button>
                    <Button onClick={() => handleDeleteClick(product.id)}>Delete</Button>
                  </TableCell>
                </TableRow>
              )) 
            : null
          }
        </TableBody>
      </Table>
      {selectedProduct ?
      <UpdateProduct 
        product={selectedProduct} 
        handleCloseUpdateProductForm={handleCloseUpdateProductForm} 
        updateProductFormOpen={updateProductFormOpen}
      /> : null
      }
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