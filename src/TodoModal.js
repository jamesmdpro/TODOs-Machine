// TodoModal.js
import React, { useState } from 'react';
import './TodoModal.css';

function TodoModal({ onClose, onAddTodo }) {
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = () => {
    onAddTodo(newTodoText);
    setNewTodoText('');
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Agrega tu nuevo Todo</h2>
        <input className='todo-tarea'
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Agrega tu nuevo pendiente"
        />
        <button className='todo-confirmacion' onClick={handleAddTodo}>Confirmar</button>
      </div>
    </div>
  );
}

export { TodoModal };
