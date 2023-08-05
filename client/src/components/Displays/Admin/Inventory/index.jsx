// Imports
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { useDeleteInventoryMutation, useGetAllInventoryQuery } from '../../../../store/api/inventoryApi';
import UpdateInventory from '../../../Forms/UpdateInventory';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

const headerStyling = {
  fontWeight: 'bold'
};

const Inventory = ({ inventory }) => {
  // Fetch all inventory
  const [updateInventoryFormOpen, setUpdateInventoryFormOpen] = useState(false);
  const handleOpenUpdateInventoryForm = () => setUpdateInventoryFormOpen(true);
  const handleCloseUpdateInventoryForm = () => {
    setUpdateInventoryFormOpen(false);
    setSelectedInventory(null);
  };
  const [selectedInventory, setSelectedInventory] = useState(null);
  const [deleteInventory] = useDeleteInventoryMutation();
  const [error, setError] = useState(null);

  // Fetch inventory
  const { isSuccess } = useGetAllInventoryQuery();

  // Handle update button
  const handleUpdateClick = (item) => {
    setSelectedInventory(item);
    handleOpenUpdateInventoryForm();
  };

  // TODO: Handle delete button 
  const handleDeleteClick = (item) => {
    if (item.quantity !== 0) {
      setError('Cannot delete inventory with quantity greater than 0.');
      return;
    }

    deleteInventory(item.id); 
  }


  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 950, maxWidth: 1000 }} stickyHeader aria-label='Inventory table'> 
          <colgroup>
            <col width='30%'/>
            <col width='10%'/>
            <col width='10%'/>
            <col width='5%'/>
            <col width='12%'/>
            <col width='5%'/>
            <col width='5%'/>
            <col width='23%'/>
          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell sx={headerStyling}>Product</TableCell>
              <TableCell sx={headerStyling}>Size</TableCell>
              <TableCell sx={headerStyling}>Color</TableCell>
              <TableCell sx={headerStyling}>Quantity</TableCell>
              <TableCell sx={headerStyling}>On Sale</TableCell>
              <TableCell sx={headerStyling}>Discount</TableCell>
              <TableCell sx={headerStyling}>Featured</TableCell>
              <TableCell sx={headerStyling}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isSuccess
              ? inventory.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      {item.Product.name}
                    </TableCell>
                    <TableCell>
                      {item.size}
                    </TableCell>
                    <TableCell>
                      {item.color}
                    </TableCell>
                    <TableCell>
                      {item.quantity}
                    </TableCell>
                    <TableCell>
                      {item.onSale ? 'Yes' : 'No'}
                    </TableCell>
                    <TableCell>
                      {item.discount * 100}%
                    </TableCell>
                    <TableCell>
                      {item.featured ? 'Yes' : 'No'}
                    </TableCell>
                    <TableCell>
                      <Button onClick={() => handleUpdateClick(item)}>Update</Button>
                      <Button onClick={() => handleDeleteClick(item)}>Delete</Button>
                    </TableCell>
                  </TableRow>
                ))
              : null
            }
          </TableBody>
        </Table>
        {selectedInventory 
          ? <UpdateInventory 
              item={selectedInventory}
              updateInventoryFormOpen={updateInventoryFormOpen}
              handleCloseUpdateInventoryForm={handleCloseUpdateInventoryForm}
            />
          : null
        }
      </TableContainer>
      {error 
        ? <Alert sx={{ position: 'fixed', bottom: 10, left: '50%', transform: 'translate(-50%, -50%)' }} severity='error' onClose={() => {setError(null)}}>{error}</Alert>
        : null
      }
    </>
  )
};

// Connect to Redux store
const mapStateToProps = (state) => ({
  inventory: state.inventory.inventory
})

export default connect(
  mapStateToProps
)(Inventory);