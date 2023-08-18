import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Cloudinary } from '@cloudinary/url-gen';
import { useCreateProductMutation } from '../../../store/api/productsApi';
import { categories } from '../../../assets/constants';
import TextInput from '../../Inputs/Text';
import SelectInput from '../../Inputs/Select';
import NumberInput from '../../Inputs/Number';
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
          paddingX: 4,
          paddingY: 3,
          borderRadius: '2%',
        }}
      >
        <Typography variant='h6' align='center' marginBottom={2}>Create Product</Typography>
        <Box
          component='form'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2
          }}
          autoComplete='off'
          onSubmit={handleSubmit(handleCreateProduct)}
        >
          <TextInput 
            name={'name'}
            control={control}
            variant={'outlined'}
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
            options={categories}
          />
          <NumberInput 
            name={'price'}
            control={control}
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
            variant={'outlined'}
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
          <Button sx={{ '&:hover': { opacity: .8 }}} type='submit' variant='contained' size='small'>Submit</Button>
        </Box>
      </Box>
    </Modal>
  )
};

export default CreateProduct;