import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove }) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoListItem todo={todo} onRemove={onRemove} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
