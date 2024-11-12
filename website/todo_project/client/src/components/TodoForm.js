import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
        addTodo(task);
        setTask('');
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
    <button type="submit">Add Goal</button>
    </form>
);
}

export default TodoForm;
