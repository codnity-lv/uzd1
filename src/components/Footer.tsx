import React from 'react';
import { Box, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer: React.FC = () => (
  <Box textAlign="center" py={3} bgcolor="primary.main" color="white">
    <IconButton color="inherit" href="https://facebook.com">
      <Facebook />
    </IconButton>
    <IconButton color="inherit" href="https://twitter.com">
      <Twitter />
    </IconButton>
    <IconButton color="inherit" href="https://instagram.com">
      <Instagram />
    </IconButton>
  </Box>
);

export default Footer;
