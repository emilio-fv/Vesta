// Imports
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { connect } from 'react-redux';
import LogoutButton from '../../../Buttons/Logout';

const Header = ({ loggedInUser }) => {
  return (
    <Box
      sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        marginBottom: 3, 
        alignItems: 'center',
      }}
    >
      <Typography 
        variant='h5' 
        fontWeight='bold'
      >
        Welcome, { loggedInUser.firstName }
      </Typography>
      <LogoutButton />
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