import React from 'react';
import './TodoEntry.css';

const TodoList = ({id, text, completed}) => {

  var completedStatus = (completed) ? "true" : "false";

  return (
    <div key={id} className="TodoEntry">{text} - [Completed: {completedStatus}]</div>
  );
};

export default TodoList;
