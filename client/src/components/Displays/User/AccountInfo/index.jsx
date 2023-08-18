import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { connect } from 'react-redux';

const AccountInfo = ({ loggedInUser }) => {
  return (
    <Container>
        <Typography fontWeight='bold'>Account Overview</Typography>
        <Box sx={{ padding: 2 }}>
            <Typography>First Name: { loggedInUser.firstName }</Typography>
            <Typography>Last Name: { loggedInUser.lastName }</Typography>
            <Typography>Email: { loggedInUser.email }</Typography>
        </Box> 
    </Container>
  )
};

// Connect to Redux store
const mapStateToProps = (state) => ({
  loggedInUser: state.auth.loggedInUser
});

export default connect(
  mapStateToProps
)(AccountInfo);