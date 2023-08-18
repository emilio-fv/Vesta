// Imports
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { addToCart } from '../../../store/reducers/cart/cartSlice';
import SelectInput from '../../Inputs/Select';
import NumberInput from '../../Inputs/Number';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const AddToCartForm = ({ product, addToCart, status }) => {
  // Handle selected color
  const [selectedColor, setSelectedColor] = useState(null);

  // Handle form changes & submit
  const { handleSubmit, control } = useForm();

  // Handle add to cart click
  const handleAddToCartClick = (data) => {
    const selected = product.inventory.find((item) => {
      if (item.color === data.color && item.size === data.size) {
        return true
      } else {
        return false
      }
    })

    addToCart({
      ...selected,
      quantity: data.quantity,
      name: product.name,
      category: product.category,
      src: product.src,
      price: product.price,
      productId: product.id
    });
  }

  return (
    <Box
      component='form'
      onSubmit={handleSubmit(handleAddToCartClick)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }}
    >
      <SelectInput
        name={'color'}
        control={control}
        rules={{
          required: 'Color required.'
        }}
        label={'Color'}
        handleChange={setSelectedColor}
        options={product.inventory.map(item => ({ name: item.color, value: item.color }))}
      />
      <SelectInput 
        name={'size'}
        control={control}
        rules={{
          required: 'Size required.'
        }}
        label={'Size'}
        disabled={selectedColor === null ? true  : false}
        options={product.inventory.filter(item => item.color === selectedColor).map(item => ({ name: item.size, value: item.size}))}
      />
      <NumberInput 
        name={'quantity'}
        control={control}
        defaultValue={0}
        label={'Quantity'}
        inputProps={{
          min: '0',
          max: '99',
          style: {
            textAlign: 'center'
          }
        }}
      />
      {status === 'added' 
       ? <Typography align='center'>Added!</Typography> 
       : <Button 
          sx={{
            backgroundColor: 'primary.main',
            color: 'primary.lightText',
            '&:hover' : {
              bgcolor: 'primary.main',
              opacity: .8
            }
          }} 
          type='submit'
        >
            Add To Cart
        </Button>
      }
    </Box>
  )
};

// Connect to redux store
const mapStateToProps = (state) => ({
  status: state.cart.status
});

const mapDispatchToProps = {
  addToCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToCartForm);