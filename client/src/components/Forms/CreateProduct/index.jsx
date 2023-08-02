import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import TextInput from '../../Inputs/Text';
import SelectInput from '../../Inputs/Select';
import PriceInput from '../../Inputs/Price';
import UploadWidget from '../../UploadWidget';
import { useCreateProductMutation } from '../../../store/api/productsApi';

import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const CreateProduct = ({ productFormOpen, handleCloseProductForm }) => {
  // Helpers
  const [src, setSrc] = useState(null);
  const [srcError, setSrcError] = useState(null);
  const [file, setFile] = useState(null);
  const [ createProduct, { isError, error, isSuccess }] = useCreateProductMutation();

  // Handle form changes and submit
  const { handleSubmit, control } = useForm({
    name: '',
    category: '',
    price: 0.00,
    description: ''
  })

  // Handle form submit
  const handleCreateProduct = (data) => {
    if (src === null) {
      setSrcError('Image required.');
      return;
    }

    createProduct({
      ...data,
      src: src
    });
  };

  // Handle create product success
  useEffect(() => {
    if (isSuccess) {
      handleCloseProductForm();
    }
  }, [isSuccess]);

  // Handle on upload function
  function handleOnUpload(error, result, widget) {
    if (error) {
      setSrcError(error);
      widget.close({
        quiet: true
      });
      return;
    }
    setFile(result?.info?.original_filename + '.' + result?.info?.format);
    setSrc(result?.info?.secure_url);
  }

  return (
    <Modal
      open={productFormOpen}
      onClose={handleCloseProductForm}
      aria-labelledby='Create product form'
      aria-describedby='Form used to create products'
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
        <Typography variant='h6' align='center'>Create Product</Typography>
        <Box
          component='form'
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1
          }}
          autoComplete='off'
          onSubmit={handleSubmit(handleCreateProduct)}
        >
          <TextInput 
            name={'name'}
            control={control}
            rules={{
              required: 'Name required.'
            }}
            label={'Name'}
          />
          <SelectInput 
            name={'category'}
            control={control}
            rules={{
              required: 'Category required.'
            }}
            label={'Category'}
            options={['Women', 'Men', 'Unisex']}
          />
          <PriceInput 
            name={'price'}
            control={control}
            rules={{
              required: 'Price required.'
            }}
            label={'Price'}
          />
          <TextInput 
            name={'description'}
            control={control}
            rules={{
              required: 'Description required.'
            }}
            label={'Description'}
            multiline={true}
          />
          {src 
            ? <Typography>File: {file}</Typography> 
            : <Typography>File: No file selected</Typography>
          }
          <UploadWidget onUpload={handleOnUpload}>
            {({ open }) => {
              function handleOnClick(event) {
                event.preventDefault();
                open();
              }
              return (
                <Button onClick={handleOnClick}>{!src ? 'Upload product image' : 'Replace'}</Button>
              )
            }}
          </UploadWidget>
          {srcError 
            ? <Typography>{srcError}</Typography>
            : null
          }
          <Button type='submit' variant='contained' size='small'>Submit</Button>
        </Box>
      </Box>
    </Modal>
  )
};

export default CreateProduct;