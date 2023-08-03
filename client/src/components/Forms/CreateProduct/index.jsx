import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Cloudinary } from '@cloudinary/url-gen';
import TextInput from '../../Inputs/Text';
import SelectInput from '../../Inputs/Select';
import PriceInput from '../../Inputs/Price';
import { useCreateProductMutation } from '../../../store/api/productsApi';
import ImageUploadWidget from '../../ImageUploadWidget';

import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const CreateProduct = ({ productFormOpen, handleCloseProductForm }) => {
  // Helpers
  const [uploadedImgUrl, setUploadedImgUrl] = useState(null);
  const [imgError, setImgError] = useState(null);
  const [ createProduct, { isSuccess }] = useCreateProductMutation();

  // Handle form changes and submit
  const { handleSubmit, control, reset } = useForm({
    name: '',
    category: '',
    price: 0.00,
    description: ''
  })

  // Configure cloudinary params
  const cld = new Cloudinary({
    cloud: {
      cloud_name: 'dvugkhi4r',
      upload_preset: 'vesta-app'
    }
  });

  // Handle on upload 
  const handleOnUpload = (secure_url) => {
    setUploadedImgUrl(secure_url);
  }

  // Handle form submit
  const handleCreateProduct = (data) => {
    if (uploadedImgUrl === null) {
      setImgError('Image required.');
      return;
    }

    createProduct({
      ...data,
      src: uploadedImgUrl
    });
  };

  // Handle create product success
  useEffect(() => {
    if (isSuccess) {
      setUploadedImgUrl(null);
      setImgError(null);
      reset();
      handleCloseProductForm();
    }
  }, [isSuccess]);

  return (
    <Modal
      open={productFormOpen}
      onClose={() => {
        setUploadedImgUrl(null);
        setImgError(null);
        reset();
        handleCloseProductForm();
      }}
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
          <Typography>Selected image:</Typography>
          { uploadedImgUrl 
            ? <Box 
                component='img'
                src={uploadedImgUrl}
                sx={{
                  width: '100px',
                  height: '100px'
                }}
              />
            : <Typography>No image selected</Typography>
          }
          <ImageUploadWidget 
            cloud_name={cld.cloudinaryConfig.cloud.cloud_name}
            upload_preset={cld.cloudinaryConfig.cloud.upload_preset}
            onImageUpload={(secure_url) => handleOnUpload(secure_url)}
          />
          {imgError
            ? <Typography>{imgError}</Typography>
            : null
          }
          <Button type='submit' variant='contained' size='small'>Submit</Button>
        </Box>
      </Box>
    </Modal>
  )
};

export default CreateProduct;