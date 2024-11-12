import React from 'react';

function TodoList({ todos, toggleComplete }) {
  const categories = ['short-term', 'mid-term', 'long-term'];

  return (
    <div>
      {categories.map((category) => (
        <div key={category}>
          <h2>{category.replace('-', ' ')} Goals</h2>
          <ul>
            {todos
              .filter((todo) => todo.category === category)
              .map((todo) => (
                <li key={todo._id}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo._id)}
                  />
                  {todo.task}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
