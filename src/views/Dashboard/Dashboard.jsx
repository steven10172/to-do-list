import React, { PropTypes, Component } from 'react';
import TodoList from '../../components/TodoList';
import './Dashboard.css';

export default class Dashboard extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    todoApp: PropTypes.object.isRequired
  }

  addNewTodo = text => {
    this.props.addTodo("New Entry" + Math.floor(Math.random() * 100));
  }

  render() {
    return (
      <div className="Dashboard">
        <button onClick={this.addNewTodo}>Add New Entry</button>
        <TodoList todos={this.props.todoApp.todos} />
      </div>
    );
  }
}
