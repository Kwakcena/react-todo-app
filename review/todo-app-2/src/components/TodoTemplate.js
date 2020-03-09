import React from 'react';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">{children}</div>
      <div className="content"></div>
    </div>
  );
};

export default TodoTemplate;
