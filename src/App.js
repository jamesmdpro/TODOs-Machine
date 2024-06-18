import React, { useState } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoModal } from './TodoModal';
import './App.css';

const defaultTodos = [
  { text: 'cortar cebolla', completed: true },
  { text: 'tomar curso de react', completed: false },
  { text: 'llorar con la llorona', completed: true },
  { text: 'cortar cebolla x2', completed: true },
  { text: 'lalalalal', completed: false },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completadoTodo = text => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const eliminarTodo = text => {
    const newTodos = todos.filter(todo => todo.text !== text);
    setTodos(newTodos);
  };

  const addTodo = text => {
    const newTodos = [...todos, { text, completed: false }];
    setTodos(newTodos);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompletado={() => completadoTodo(todo.text)}
            onEliminado={() => eliminarTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton openModal={openModal} />
      {isModalOpen && <TodoModal onClose={closeModal} onAddTodo={addTodo} />}
    </React.Fragment>
  );
}

export default App;
