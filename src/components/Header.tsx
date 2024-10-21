import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header: React.FC = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        React lapa
      </Typography>
      <Button color="inherit" href="/">Home</Button>
      <Button color="inherit" href="/about">About</Button>
      <Button color="inherit" href="/contact">Contact</Button>
    </Toolbar>
  </AppBar>
);

export default Header;
