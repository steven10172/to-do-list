import React from 'react';
import TodoEntry from '../TodoEntry';
import './TodoList.css';

const TodoList = ({ todos, actions }) => (
  <div className="TodoList">
    {todos.length === 0
      ? <h2>No Notes</h2>
      : null}
    {todos
      .map(({ id, text, completed }) =>
        <TodoEntry
          key={id}
          text={text}
          completed={completed}
          deleteSelf={() => actions.deleteTodo(id)}
          toggleCompleted={() => actions.completeTodo(id)}
        />
      )
    }
  </div>
);


export default TodoList;
