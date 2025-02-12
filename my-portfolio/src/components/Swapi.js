// src/components/Swapi.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem, Container } from '@mui/material';

const Swapi = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(data => setData(data.results));
  }, []);

  return (
    <Box sx={{ padding: 3 }}>
      <Container>
        <Typography variant="h4">SWAPI - Персонажі</Typography>
        <List>
          {data.map((person, index) => (
            <ListItem key={index}>{person.name}</ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default Swapi;
