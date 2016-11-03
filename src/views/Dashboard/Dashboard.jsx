import React from 'react';
import TodoList from '../../components/TodoList';
import CreateNewTodoButton from '../../components/CreateNewTodoButton';
import './Dashboard.css';

const Dashboard = () => (
  <div className="Dashboard">
    <CreateNewTodoButton />
    <TodoList />
  </div>
);


export default Dashboard;
