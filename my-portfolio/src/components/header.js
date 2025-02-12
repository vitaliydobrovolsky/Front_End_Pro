// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Мій Сайт
          </Typography>
          <Button color="inherit" component={Link} to="/">Головна</Button>
          <Button color="inherit" component={Link} to="/todo">TODO</Button>
          <Button color="inherit" component={Link} to="/swapi">SWAPI</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
