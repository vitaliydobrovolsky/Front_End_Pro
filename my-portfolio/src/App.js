// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Resume from './components/Resume';
import TodoList from './components/TodoList';
import Swapi from './components/Swapi';
import { Container } from '@mui/material';

const App = () => {
  return (
    <Router>
      <Header />
      <Container sx={{ marginTop: 3 }}>
        <Routes>
          <Route path="/" element={<Resume />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/swapi" element={<Swapi />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
