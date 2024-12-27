import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('');

  const handleChange = (e) => setTodoText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim()) {
      addTodo({
        id: Math.random(),
        text: todoText,
      });
      setTodoText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        value={todoText}
        onChange={handleChange}
        placeholder="Add a new todo"
        className="todo-input"
      />
      <button type="submit" className="add-btn">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
