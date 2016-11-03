import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import ListItem from 'material-ui/List/ListItem';
import './TodoEntry.css';

const checkboxStyles = {
  width: 30,
  marginRight: 20
};

const TodoList = ({text, completed, deleteSelf, toggleCompleted}) => {

  return (
    <div className="TodoEntry">
      <Checkbox style={checkboxStyles} defaultChecked={completed} onChange={toggleCompleted} />
      <ListItem primaryText="Notifications" leftCheckbox={<Checkbox />} />
      <input type="checkbox" />
      <span className="text">{text}</span>
      <button onClick={deleteSelf}>X</button>
    </div>
  );
};

export default TodoList;
