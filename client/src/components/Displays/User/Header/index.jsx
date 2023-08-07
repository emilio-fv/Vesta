// Imports
import { useLogoutMutation } from '../../../../store/api/authApi.js';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { connect } from 'react-redux';

const Header = ({ loggedInUser }) => {
  // Helpers
  const [logout] = useLogoutMutation();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3, alignItems: 'center' }}>
      <Typography variant='h4' fontWeight='bold'>Hello, { loggedInUser.firstName }</Typography>
      <Button sx={{ bgcolor: '#ed214d', '&:hover': { bgcolor: '#ff305d'} }} onClick={() => logout()}>Logout</Button>
    </Box>
  )
};

// Connect to Redux store
const mapStateToProps = (state) => ({
  loggedInUser: state.auth.loggedInUser
});

export default connect(
  mapStateToProps
)(Header);