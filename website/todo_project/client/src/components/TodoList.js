import React from 'react';

function TodoList({ todos }) {
  return (
    <div>
      <h2>Garbage Goals</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
