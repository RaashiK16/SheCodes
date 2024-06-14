import React from 'react';
import { List, ListItem, ListItemText, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  Dashboard,
  AccountCircle,
  Login,
  PersonAdd,
  AccountBalance,
  HelpOutline
} from '@mui/icons-material';

const Sidebar = () => {
  return (
    <Box p={2} bgcolor="primary.main" color="white" height="100vh">
      <Typography variant="h6" gutterBottom>
        Dashboard
      </Typography>
      <List>
        <ListItem button component={Link} to="/">
          <Dashboard style={{ marginRight: '10px' }} />
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/account">
          <AccountCircle style={{ marginRight: '10px' }} />
          <ListItemText primary="Account" />
        </ListItem>
        <ListItem button component={Link} to="/login">
          <Login style={{ marginRight: '10px' }} />
          <ListItemText primary="Login" />
        </ListItem>
        <ListItem button component={Link} to="/signup">
          <PersonAdd style={{ marginRight: '10px' }} />
          <ListItemText primary="Sign Up" />
        </ListItem>
        <ListItem button component={Link} to="/balance">
          <AccountBalance style={{ marginRight: '10px' }} />
          <ListItemText primary="Balance" />
        </ListItem>
        <ListItem button component={Link} to="/help-center">
          <HelpOutline style={{ marginRight: '10px' }} />
          <ListItemText primary="Help Center" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
