
import React, { useState } from 'react';
import { TextField, Button, List, ListItem, Container, Box } from '@mui/material';

const TodoList = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (todo) {
      setTodos([...todos, todo]);
      setTodo('');
    }
  };

  return (
    <Container>
      <Box sx={{ marginTop: 3 }}>
        <TextField 
          label="Нове завдання" 
          variant="outlined" 
          value={todo} 
          onChange={(e) => setTodo(e.target.value)} 
          fullWidth
        />
        <Button onClick={handleAddTodo} variant="contained" sx={{ marginTop: 2 }}>
          Додати
        </Button>
        <List sx={{ marginTop: 2 }}>
          {todos.map((task, index) => (
            <ListItem key={index}>{task}</ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default TodoList;
