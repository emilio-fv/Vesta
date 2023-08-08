// Imports
import LogoutButton from '../../../Buttons/Logout';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';

const Header = ({ handleOpenInventoryForm, handleOpenProductForm }) => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        padding: 3,
      }}
    >
    <Typography variant='h5' fontWeight='bold'>Admin Dashboard</Typography>
    <Box
      sx={{
        display: 'flex',
        gap: 2
      }}
    >
      <Button 
        size='small' 
        sx={{ 
          paddingX: 1,
          '&:hover': {
            bgcolor: 'white',
            textDecoration: 'underline'
          }
        }} 
        onClick={handleOpenInventoryForm}
      >
        Add Inventory
      </Button>
      <Button 
        size='small' 
        sx={{ 
          paddingX: 1,
          '&:hover': {
            bgcolor: 'white',
            textDecoration: 'underline'
          }
        }} 
        onClick={handleOpenProductForm}
      >
        Create Product
      </Button>
      <LogoutButton />
    </Box>
  </Box>
  )
};

export default Header;