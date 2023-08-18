import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';
import Tooltip from '@mui/material/Tooltip';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton, Link } from '@mui/material';
import AccountModal from '../../Modals/Account';
import { useUpdatedUserMutation } from '../../../store/api/authApi';

const ProductCard = ({ loggedInUser, product, favorites }) => {
  // Helpers
  const [favoriteStatus, setFavoriteStatus] = useState(favorites ? favorites?.includes(product.id) : false);
  const [accountOpen, setAccountOpen] = useState(false);
  const handleAccountClose = () => setAccountOpen(false);
  const [updateUser] = useUpdatedUserMutation();

  // Handle favorite button
  const handleFavoriteButton = () => {
    // Check if user is logged in 
    if (!loggedInUser) {
      setAccountOpen(true);
      return;
    }

    setFavoriteStatus(status => !status);

    favoriteStatus
    ? updateUser({ favorites: favorites.filter(id => id !== product.id )})
    : updateUser({ favorites: [...favorites, product.id]})
  };

  return (
    <>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box
            sx={{
              position: 'relative'
            }}
          >
            <IconButton
              onClick={() => handleFavoriteButton()}
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
              }}
            >
              {favoriteStatus
                ? <FavoriteIcon />
                : <FavoriteBorderIcon />
              }
            </IconButton>
            <Link
              component={RouterLink}
              to={`/${product.id}/product`}
              noWrap
              underline='none'
            >
              <Box
                component='img'
                src={product.src}
                sx={{
                  width: '100%',
                  borderRadius: '3%'
                }}
              />
            </Link>
          </Box>
          <Box
            sx={{
              paddingY: 1,
            }}
          >
            <Typography fontSize={'.8rem'}>{product.name}</Typography>
            <Typography fontSize={'.8rem'}>${product.price}</Typography>
            {product.inventory.map((item) => (
              <Tooltip title={item.color}>
                <CircleIcon fontSize='small' htmlColor={item.color}/>
              </Tooltip>
            ))}
          </Box>
        </Box>
      <AccountModal 
        open={accountOpen}
        onClose={handleAccountClose}
        initialValue={1}
      />
    </>
  )
};

// Connect to Redux store
const mapStateToProps = (state) => ({
  loggedInUser: state.auth.loggedInUser,
  favorites: state.auth.loggedInUser?.favorites
});

export default connect(
  mapStateToProps,
)(ProductCard);