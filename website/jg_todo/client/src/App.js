import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/tasks');
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = async (newTask) => {
    try {
      const response = await axios.post('http://localhost:5000/tasks', newTask);
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const toggleComplete = async (id) => {
    try {
      const task = todos.find((todo) => todo._id === id);
      const updatedTask = { ...task, completed: !task.completed };
      await axios.put(`http://localhost:5000/tasks/${id}`, updatedTask);
      setTodos(
        todos.map((todo) =>
          todo._id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div>
      <h1>Trash Pandas'</h1>
      <h3>Garbage Goals</h3>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
