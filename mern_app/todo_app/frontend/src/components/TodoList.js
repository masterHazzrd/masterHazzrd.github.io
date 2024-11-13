import React from 'react';
import './TodoList.css'; // Import the new CSS file

function lightenColor(color, percent) {
  const num = parseInt(color.slice(1), 16);
  const amt = Math.round(3.55 * percent);
  const R = (num >> 16) + amt;
  const G = ((num >> 8) & 0x00ff) + amt;
  const B = (num & 0x0000ff) + amt;

  return `rgb(${Math.min(R, 255)}, ${Math.min(G, 255)}, ${Math.min(B, 255)})`;
}

function TodoList({ todos, deleteTodo, toggleComplete }) {
  const categories = [
    { name: 'short-term', color: '#ff6700' },
    { name: 'mid-term', color: '#ffce00' },
    { name: 'long-term', color: '#56a0d3' },
  ];

  return (
    <div className="calendar">
      {categories.map((category) => (
        <div key={category.name} className="category-column">
          <h2 style={{ backgroundColor: category.color }}>
            {category.name.replace('-', ' ')} Goals
          </h2>
          <ul>
            {todos
              .filter((todo) => todo.category === category.name)
              .map((todo) => (
                <li
                  key={todo._id}
                  className="task-item"
                  style={{
                    backgroundColor: lightenColor(category.color, 20),
                  }}
                >
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo._id)}
                  />
                  {todo.task}
                  <button onClick={() => deleteTodo(todo._id)}>Delete</button>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
