// Imports
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useUpdateProductMutation } from '../../../store/api/productsApi';
import { useEffect } from 'react';
import TextInput from '../../Inputs/Text';
import SelectInput from '../../Inputs/Select';
import NumberInput from '../../Inputs/Number';
import { Cloudinary } from '@cloudinary/url-gen';
import ImageUploadWidget from '../../ImageUploadWidget';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { categories } from '../../../assets/selectOptions';

const UpdateProduct = ({ product, updateProductFormOpen, handleCloseUpdateProductForm }) => {
  // Helpers
  const [uploadedImgUrl, setUploadedImgUrl] = useState(product?.src);
  const [imgError, setImgError] = useState(null);
  const [ updateProduct, { isSuccess }] = useUpdateProductMutation();

  // Handle form changes and submit
  const { handleSubmit, control } = useForm({
    name: '',
    category: '',
    price: '',
    description: ''
  })

  // Configure cloudinary params
  const cld = new Cloudinary({
    cloud: {
      cloud_name: 'dvugkhi4r',
      upload_preset: 'vesta-app'
    }
  })

  // Handle on upload
  const handleOnUpload = (secure_url) => {
    setUploadedImgUrl(secure_url);
  }

  // Handle form submit
  const handleUpdateProduct = (data) => {
    // console.log(data);
    // console.log(uploadedImgUrl);

    updateProduct({
      ...data,
      src: uploadedImgUrl,
      id: product.id
    })
  }

  // Handle update product success
  useEffect(() => {
    if (isSuccess) {
      setImgError(null);
      handleCloseUpdateProductForm();
    }
  }, [isSuccess]);

  return (
    <Modal
      open={updateProductFormOpen}
      onClose={() => {
        setImgError(null);
        handleCloseUpdateProductForm();
      }}
      aria-labelledby='Update product form'
      aria-describedby='Form used to update products'
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
        <Typography variant='h6' align='center'>Update Product</Typography>
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
          onSubmit={handleSubmit(handleUpdateProduct)}
        >
          <TextInput 
            name={'name'}
            control={control}
            defaultValue={product?.name}
            rules={{
              required: 'Name required.'
            }}
            label={'Name'}
          />
          <SelectInput 
            name={'category'}
            control={control}
            defaultValue={product?.category}
            rules={{
              required: 'Category required.'
            }}
            label={'Category'}
            options={categories}
          />
          <NumberInput 
            name={'price'}
            control={control}
            defaultValue={product?.price}
            rules={{
              required: 'Price required.'
            }}
            label={'Price'}
            inputProps={{
              step: '.01',
              min: '0.01'
            }}
          />
          <TextInput 
            name={'description'}
            control={control}
            defaultValue={product?.description}
            rules={{
              required: 'Description required.'
            }}
            label={'Description'}
            multiline={true}
          />
          <Typography>Current image:</Typography>
          <Box 
            component='img'
            src={uploadedImgUrl}
            sx={{
              width: '100px',
              height: '100px',
            }}
          />
          <ImageUploadWidget 
            cloud_name={cld.cloudinaryConfig.cloud.cloud_name}
            upload_preset={cld.cloudinaryConfig.cloud.upload_preset}
            onImageUpload={(secure_url) => handleOnUpload(secure_url)}
          />
          {imgError     
            ? <Typography>{imgError}</Typography>
            : null
          }
          <Button type='submit' variant='contained' size='small'>Update</Button>
        </Box>
      </Box>
    </Modal>
  )
};

export default UpdateProduct; 