/*const express = require(`express`);
const app = express();
app.listen(9000, () => console.log(`Server started`))*/

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;
app.listen(5000, () => console.log(`Server started`))

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/todolist', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Mongoose Schema
const todoSchema = new mongoose.Schema({
    name: String,
    completed: Boolean,
});

const Todo = mongoose.model('Todo', todoSchema);

// Routes
// Create a new todo
app.post('/todos', async (req, res) => {
    const { name } = req.body;
    const todo = new Todo({ name, completed: false });
    try {
        const savedTodo = await todo.save();
        res.status(201).json(savedTodo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all todos
app.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a todo
app.put('/todos/:id', async (req, res) => {
    const { id } = req.params;
    const { name, completed } = req.body;
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(id, { name, completed }, { new: true });
        res.json(updatedTodo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a todo
app.delete('/todos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Todo.findByIdAndDelete(id);
        res.json({ message: 'Todo deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
