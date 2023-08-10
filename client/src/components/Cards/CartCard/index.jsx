// Imports
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import { removeFromCart } from '../../../store/reducers/cart/cartSlice';
import { connect } from 'react-redux';

const CartCard = ({ product, index, removeFromCart }) => {
  const handleRemoveFromCart = () => {
    removeFromCart(index);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row'
      }}
    >
      <Box 
        component='img'
        src={product.src}
        sx={{
          maxHeight: '125px'
        }}
      />
      <Box
        sx={{
          width: '100%',
          padding: 2
        }}
      >
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
          }}
        >
          <Typography>{product.name}</Typography>
          <Typography>{product.quantity} x ${product.price}</Typography>
        </Box>
        <Typography>Size: {product.size}</Typography>
        <Typography>Color: {product.color}</Typography>
        <Box
          sx={{ 
            display: 'flex', 
            justifyContent: 'flex-end',
            cursor: 'pointer'
          }}
        >
          <Link onClick={() => handleRemoveFromCart()}>Remove</Link>
        </Box>
      </Box>
    </Box>
  )
}

// Connect to Redux store
const mapDispatchToProps = {
  removeFromCart
};

export default connect(
  null,
  mapDispatchToProps
)(CartCard);


// <Box
// sx={{ 
//     display: 'flex',
//     flexDirection: 'row',
// }}
// >
// {/* product image */}
// <Box
//     component='img'
//     sx={{
//         flex: 1,
//         minHeight: { xs: '100px', sm: '150px', md: '200px' }
//     }}
// />
// {/* product details */}
// <Box
//     sx={{
//         flex: { xs: 2, sm: 3, md: 4},
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//         paddingY: 2
//     }}
// >
//     <Box
//         sx={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             paddingX: 2
//         }}
//     >
//         <Typography variant='h5' sx={{ fontWeight: 'bold' }}>{product.name}</Typography>
//         <Typography>$ {product.price}</Typography>
//     </Box>
//     <Box    
//         sx={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             paddingLeft: 2,
//             paddingRight: 1,
//         }}
//     >
//         <Box
//             sx={{
//                 display: 'flex',
//                 flexDirection: 'column'
//             }}
//         >
//             <Typography variant='p'>Color: {product.color}</Typography>
//             <Typography variant='p'>Size: {product.size}</Typography>
//         </Box>
//         <ButtonGroup
//             sx={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//             }}
//         >
//             <IconButton size='small'>
//                 <RemoveIcon />
//             </IconButton>
//             <Typography fontSize={{ xs: 12, sm: 15 }}>{product.quantity}</Typography>
//             <IconButton size='small'>
//                 <AddIcon />
//             </IconButton>
//         </ButtonGroup>
//     </Box>
// </Box>
// </Box>