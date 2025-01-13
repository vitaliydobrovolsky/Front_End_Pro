
console.log(`Hello`)
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;
app.listen(5000, () => console.log(`Server started on http://localhost:5000`))





app.use(cors());
app.use(bodyParser.json());


mongoose.connect(
    'mongodb+srv://vitaliydobrovolsky986:<3l2Ix35uxs3YpTRQ>@cluster0.sxjyg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});


const todoSchema = new mongoose.Schema({
    name: String,
    completed: Boolean,
});

const Todo = mongoose.model('Todo', todoSchema);


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


app.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


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


app.delete('/todos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Todo.findByIdAndDelete(id);
        res.json({ message: 'Todo deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


