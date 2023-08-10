// Imports
import Box from '@mui/material/Box';
import { useForm } from 'react-hook-form';
import SelectInput from '../../Inputs/Select';
import { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { connect } from 'react-redux';
import { addToCart } from '../../../store/reducers/cart/cartSlice';
import NumberInput from '../../Inputs/Number';

const AddToCartForm = ({ product, addToCart, status }) => {
  // Selected color 
  const [selectedColor, setSelectedColor] = useState(null);

  // Handle form changes & submit
  const { handleSubmit, control } = useForm();

  const handleAddToCart = (data) => {
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
      onSubmit={handleSubmit(handleAddToCart)}
      sx={{
        display: 'flex',
        flexDirection: 'column'
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
        options={product.inventory.map(item => item.color)}
      />
      <SelectInput 
        name={'size'}
        control={control}
        rules={{
          required: 'Size required.'
        }}
        label={'Size'}
        disabled={selectedColor === null ? true  : false}
        options={product.inventory.filter(item => item.color === selectedColor).map(item => item.size)}
      />
      <NumberInput 
        name={'quantity'}
        control={control}
        defaultValue={0}
        label={'Quantity'}
        inputProps={{
          min: '0',
          max: '99'
        }}
      />
      {status === 'added' 
       ? <Typography align='center'>Added!</Typography> 
       : <Button type='submit'>Add To Cart</Button>
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