import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onToggle }) => {
  console.log(todos);
  return (
    <div className="TodoList">
      {todos.map(todo => {
        console.log(todo);
        return <TodoListItem todo={todo} onToggle={onToggle} key={todo.id} />;
      })}
    </div>
  );
};

export default TodoList;
