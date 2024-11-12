const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Task = require('./models/Task'); // Import Task model

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/todo-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// API Routes
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

app.post('/tasks', async (req, res) => {
  try {
    const newTask = new Task({ task: req.body.task });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task' });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
