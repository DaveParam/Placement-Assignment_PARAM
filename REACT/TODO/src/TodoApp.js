import React, { useReducer, useState } from 'react';
import { initialState, todoReducer } from './TodoReducer';

const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [todoText, setTodoText] = useState('');

  const addTodo = e => {
    e.preventDefault();
    if (todoText.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      text: todoText,
      completed: false,
    };
    dispatch({ type: 'ADD_TODO', payload: newTodo });
    setTodoText('');
  };

  const toggleTodo = id => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  const deleteTodo = id => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={todoText}
          onChange={e => setTodoText(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
