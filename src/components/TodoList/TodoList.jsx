import React from 'react';
import TodoEntry from '../TodoEntry';
import './TodoList.css';

const TodoList = ({todos}) => {
  window.todos = todos;
  const todoElements = todos.map(({id, text, completed}) => (
    <TodoEntry text={text} completed={completed} />
  ));

  return (
    <div className="TodoList">
      {todoElements}
    </div>
  );
};

export default TodoList;
