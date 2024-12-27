import React from 'react';

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <div className="todo-item">
      <span>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
