
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'primary.main', padding: 2, marginTop: 'auto' }}>
      <Container>
        <Typography variant="body1">Контакти: example@email.com</Typography>
        <Typography variant="body2">© 2025 Мій Сайт</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
