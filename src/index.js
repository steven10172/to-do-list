import React from 'react';
import ReactDOM from 'react-dom';
import Root from './views/Root';
import configureStore from './store/configureStore';

/* Import Styles */
import './index.css';

const store = configureStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
