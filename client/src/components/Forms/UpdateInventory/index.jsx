// Import
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useUpdateInventoryMutation } from '../../../store/api/inventoryApi';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SelectInput from '../../Inputs/Select';
import NumberInput from '../../Inputs/Number';
import CheckboxInput from '../../Inputs/Checkbox';
import { colors, sizes } from '../../../assets/constants';
// import { colors, sizes } from '../../../assets/selectOptions';

const UpdateInventory = ({ item, updateInventoryFormOpen, handleCloseUpdateInventoryForm }) => {
  // Helpers
  const [ updateInventory, { isSuccess }] = useUpdateInventoryMutation();

  // Handle form changes and submit
  const { handleSubmit, control } = useForm({ 
    defaultValues: {
      size: item.size,
      color: item.color,
      quantity: item.quantity,
      onSale: item.onSale,
      discount: (item.discount * 100),
      featured: item.featured
    }
  });

  // Handle form submit
  const handleUpdateInventory = (data) => {
    updateInventory({
      ...data,
      discount: (data.discount / 100),
      id: item.id
    })
  };

  // Handle update inventory success
  useEffect(() => {
    if (isSuccess) {
      handleCloseUpdateInventoryForm();
    }
  }, [isSuccess])

  return (
    <Modal
      open={updateInventoryFormOpen}
      onClose={() => {
        handleCloseUpdateInventoryForm();
      }}
      aria-labelledby='Update inventory form'
      aria-describedby='Form used to update inventory'
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          width: 300,
          p: 5,
        }}
      >
        <Typography variant='h6' align='center'>Update Inventory</Typography>
        <Box
          component='form'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1
          }}
          autoComplete='off'
          onSubmit={handleSubmit(handleUpdateInventory)}
        >
          <SelectInput 
            name={'size'}
            control={control}
            label={'Size'}
            options={sizes}
          />
          <SelectInput 
            name={'color'}
            control={control}
            label={'Color'}
            options={colors}
          />
          <NumberInput 
            name={'quantity'}
            control={control}
            label={'Quantity'}
            inputProps={{
              step: '1',
              min: '0',
            }}
          />
          <CheckboxInput 
            name={'onSale'}
            control={control}
            label={'On Sale'}
          />
          <NumberInput 
            name={'discount'}
            control={control}
            label={'Discount'}
            inputProps={{
              min: '0',
              max: '99'
            }}
          />
          <CheckboxInput 
            name={'featured'}
            control={control}
            label={'Featured'}
          />
          <Button type='submit' variant='contained' size='small'>Update</Button>
        </Box>
      </Box>
    </Modal>
  )
};

export default UpdateInventory;