import React, { useState, useCallback, useRef } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트 공부하기",
      checked: false
    },
    {
      id: 2,
      text: "자바스크립트 공부하기",
      checked: false
    },
    {
      id: 3,
      text: "운동하기",
      checked: true
    }
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      setTodos(
        todos.concat({
          id: nextId.current,
          text,
          checked: false
        })
      );
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => id !== todo.id));
    },
    [todos]
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          id === todo.id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
