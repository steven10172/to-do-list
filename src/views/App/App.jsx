import React from 'react';
import Header from '../../components/Header';
import './App.css';

const App = (props) => (
  <div className="App">
    <Header />
    <div className="App-body">
      {props.children}
    </div>
  </div>
);

export default App;
