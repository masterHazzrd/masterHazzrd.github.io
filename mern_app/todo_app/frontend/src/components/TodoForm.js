import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('short-term'); // Default category

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo({ task, category, completed: false }); // Pass task, category, and completed status
      setTask('');
      setCategory('short-term'); // Reset category after submit
    }
  };

    const placeholders = ["Steal shiny things", "Wash hands in a puddle", "Take over the trash can"];
    const randomPlaceholder = placeholders[Math.floor(Math.random() * placeholders.length)];


  return (
    <form onSubmit={handleSubmit}>
      <input
      type="text"
      placeholder={randomPlaceholder}
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
