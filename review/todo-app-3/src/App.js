import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 공부하기',
      checked: false,
    },
    {
      id: 2,
      text: '자바스크립트 공부하기',
      checked: false,
    },
    {
      id: 3,
      text: '운동하기',
      checked: true,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const nextTodo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(nextTodo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} />
    </TodoTemplate>
  );
};

export default App;
