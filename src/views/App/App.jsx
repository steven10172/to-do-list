import React from 'react';
import Header from '../../components/Header';
import Dashboard from '../Dashboard';
import './App.css';

const App = ({ state, actions }) => (
  <div className="App">
    <Header completeAll={actions.completeAll} />
    <div className="App-body">
      <Dashboard />
    </div>
  </div>
);

export default App;