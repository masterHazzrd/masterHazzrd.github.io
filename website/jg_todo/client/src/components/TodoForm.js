import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('short-term'); // Default category

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo({ task, category }); // Pass category along with task
      setTask('');
      setCategory('short-term'); // Reset category after submit
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Goal"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="short-term">Short-term</option>
        <option value="mid-term">Mid-term</option>
        <option value="long-term">Long-term</option>
      </select>
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default TodoForm;