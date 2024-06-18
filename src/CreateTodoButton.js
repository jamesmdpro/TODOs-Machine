import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({ openModal }) {
  return (
    <button
      className="create-todo-button"
      onClick={openModal}
    >
      +
    </button>
  );
}

export { CreateTodoButton };