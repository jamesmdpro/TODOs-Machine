import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="todo-item">
      {/* Span para marcar la tarea como completada */}
      <span
        className={`todo-item-done todo-item-done-check ${props.completed && "todo-item-done--active"}`}
        onClick={props.onCompletado} // Llama a la función onCompletado pasada como prop
      >
        V
      </span>
      
      {/* Texto de la tarea */}
      <p className={`${props.completed && "todo-item--complete"}`}>{props.text}</p>
      
      {/* Span para eliminar la tarea */}
      <span
        className="todo-item-delete"
        onClick={props.onEliminado} // Llama a la función onEliminado pasada como prop
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };