// Imports
import { useLogoutMutation } from '../store/api/authApi';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Header = ({ handleOpenInventoryForm, handleOpenProductForm }) => {
    // Helpers
    const [logout] = useLogoutMutation();

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        padding: 3,
      }}
    >
    <Typography variant='h5' fontWeight='bold'>Admin Dashboard</Typography>
    <Box>
      <Button 
        size='small' 
        sx={{ 
          paddingX: 1,
        }} 
        onClick={handleOpenInventoryForm}
      >
        Add Inventory
      </Button>
      <Button 
        size='small' 
        sx={{ 
          paddingX: 1,
        }} 
        onClick={handleOpenProductForm}
      >
        Create Product
      </Button>
      <Button 
        size='small' 
        sx={{ 
          paddingX: 1, 
          bgcolor: '#ed214d', 
          '&:hover': { bgcolor: '#ff305d' }
        }} 
        onClick={() => logout()}
      >
        Logout
      </Button>
    </Box>
  </Box>
  )
};

export default Header;