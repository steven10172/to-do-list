import React from 'react';
import Header from '../../components/Header';
import Dashboard from '../Dashboard';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <div className="App-body">
      <Dashboard />
    </div>
  </div>
);

export default App;