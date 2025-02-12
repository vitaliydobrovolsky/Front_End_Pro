
import React from 'react';
import { Box, Typography, List, ListItem, Container } from '@mui/material';

const Resume = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Container>
        <Typography variant="h4">Віталій Добровольський / Моє Резюме</Typography>
        <Typography variant="h6" sx={{ marginTop: 2 }}>Навички:</Typography>
        <List>
          <ListItem>JavaScript</ListItem>
          <ListItem>React</ListItem>
          <ListItem>HTML/CSS</ListItem>
          <ListItem>Node.js</ListItem>
        </List>
      </Container>
    </Box>
  );
};

export default Resume;
