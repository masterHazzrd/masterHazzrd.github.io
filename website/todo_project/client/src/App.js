import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, task]);
  };

  const clearTodos = () => {
  setTodos([]);
};

return (
  <div>
    <h1>Trash Pandas'</h1>
    <h3>Garbage Goals</h3>
    <TodoForm addTodo={addTodo} />
    <TodoList todos={todos} />
    <button onClick={clearTodos}>Clear All Goals</button>
  </div>
);
}

export default App;
