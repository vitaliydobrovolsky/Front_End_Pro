// src/components/Swapi.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem, Container, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const Swapi = () => {
  const [category, setCategory] = useState('people');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Функція для отримання даних із SWAPI
  const fetchData = async (category) => {
    setLoading(true);
    try {
      const response = await fetch(`https://swapi.dev/api/${category}/`);
      const result = await response.json();
      setData(result.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(category); // Завжди отримуємо дані при зміні категорії
  }, [category]);

  return (
    <Box sx={{ padding: 3 }}>
      <Container>
        <Typography variant="h4">SWAPI</Typography>
        
        {/* Меню для вибору категорії */}
        <FormControl fullWidth sx={{ marginTop: 2 }}>
          <InputLabel>Виберіть категорію</InputLabel>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            label="Виберіть категорію"
          >
            <MenuItem value="people">Персонажі</MenuItem>
            <MenuItem value="planets">Планети</MenuItem>
            <MenuItem value="films">Фільми</MenuItem>
            <MenuItem value="species">Види</MenuItem>
            <MenuItem value="starships">Кораблі</MenuItem>
            <MenuItem value="vehicles">Транспортні засоби</MenuItem>
          </Select>
        </FormControl>

        {/* Виведення даних */}
        {loading ? (
          <Typography variant="h6" sx={{ marginTop: 2 }}>Завантаження...</Typography>
        ) : (
          <>
            <Typography variant="h6" sx={{ marginTop: 2 }}>
              Список {category === 'people' ? 'Персонажів' : category === 'planets' ? 'Планет' : category === 'films' ? 'Фільмів' : category === 'species' ? 'Видів' : category === 'starships' ? 'Кораблів' : 'Транспортних засобів'}
            </Typography>
            <List>
              {data.map((item, index) => (
                <ListItem key={index}>
                  {item.name || item.title} {/* Відображаємо відповідне поле */}
                </ListItem>
              ))}
            </List>
          </>
        )}
      </Container>
    </Box>
  );
};

export default Swapi;
