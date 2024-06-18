// Importa la librería React
import React from 'react';

// Importa el archivo CSS que contiene los estilos para este componente
import './TodoSearch.css';

// Define el componente funcional TodoSearch
function TodoSearch({
  searchValue,
  setSearchValue,
}) {
 
  // Retorna un input JSX que representa el campo de búsqueda
  return (
    <input
      // Establece un placeholder para el input
      placeholder='Buscar tareas'
      // Aplica la clase CSS para estilizar el input
      className="todo-search"
      // Vincula el valor del input al estado searchValue
      value={searchValue}
      // Define el manejador de eventos para el cambio en el input
      onChange={(event) => {
        // Actualiza el estado searchValue con el valor actual del input
        setSearchValue(event.target.value);
      }}
    />
  );
}

// Exporta el componente TodoSearch para que pueda ser utilizado en otros archivos
export { TodoSearch };
