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
          id={id}
          text={text}
          completed={completed}
          onDelete={() => actions.deleteTodo(id)}
          toggleCompleted={() => actions.completeTodo(id, !completed)}
          onChangeText={(text) => actions.updateTodoText(id, text)}
        />
      )
    }
  </div>
);


export default TodoList;
