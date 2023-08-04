// Imports
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import SelectInput from '../../Inputs/Select';
import { connect } from 'react-redux';
import { sizes, colors } from '../../../assets/selectOptions.js';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NumberInput from '../../Inputs/Number';
import CheckboxInput from '../../Inputs/Checkbox';
import { useCreateInventoryMutation } from '../../../store/api/inventoryApi';

const CreateInventory = ({ inventoryFormOpen, handleCloseInventoryForm, products }) => {
  // Helpers
  const [createInventory, { isSuccess }] = useCreateInventoryMutation();

  // Handle form changes & submit
  const { handleSubmit, control, reset } = useForm({
    productId: null,
    size: null,
    color: null,
    quantity: 0,
    onSale: false,
    discount: 0,
    featured: false
  });

  // Handle form submit
  const handleCreateInventory = (data) => {
    createInventory({
      ...data,
      quantity: parseInt(data.quantity),
      discount: (parseInt(data.discount) / 100)
    });
  };

  // Handle successful request
  useEffect(() => {
    if (isSuccess) {
      reset();
      handleCloseInventoryForm();
    }
  }, [isSuccess]);

  return (
    <Modal
      open={inventoryFormOpen}
      onClose={() => {
        reset();
        handleCloseInventoryForm();
      }}
      aria-labelledby='Add inventory form'
      aria-describedby='Form used to add inventory'
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
        <Typography variant='h6'>Add Inventory</Typography>
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
          onSubmit={handleSubmit(handleCreateInventory)}
        >
          <SelectInput 
            name={'productId'}
            control={control}
            rules={{
              required: 'Product required.'
            }}
            label={'Product'}
            options={products}
          />
          <SelectInput 
            name={'size'}
            control={control}
            rules={{
              required: 'Size required.'
            }}
            label={'Size'}
            options={sizes}
          />
          <SelectInput 
            name={'color'}
            control={control}
            rules={{
              required: 'Color required.'
            }}
            label={'Color'}
            options={colors}
          />
          <NumberInput 
            name={'quantity'}
            control={control}
            rules={{
              required: 'Quantity required.'
            }}
            label={'Quantity'}
            inputProps={{
              step: '1',
              min: 0,
            }}
          />
          <CheckboxInput 
            name={'onSale'}
            control={control}
            label={'On Sale'}

          />
          {/* Discount */}
          <NumberInput 
            name={'discount'}
            defaultValue={0}
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
          <Button type='submit' variant='contained' size='small'>Submit</Button>
        </Box>
      </Box>
    </Modal>
  )
};

// Connect to Redux store
const mapStateToProps = (state) => {
  const { products } = state.products;
  const options = products.map((product) => {
    return {
      option: product.name,
      value: product.id
    }
  })
  return {
    products: options
  }
};

export default connect(
  mapStateToProps
)(CreateInventory);