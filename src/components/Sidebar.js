import React from 'react';
import { List, ListItem, ListItemText, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Dashboard } from '@mui/icons-material';

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
      </List>
    </Box>
  );
};

export default Sidebar;
