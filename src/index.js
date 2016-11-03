import React from 'react';
import ReactDOM from 'react-dom';
import Root from './views/Root';
import configureStore from './store/configureStore';
import API from './api'

/* Import Styles */
import './index.css';

API.deserializeFromServer()
  .then((preloadedState) => {
    const store = configureStore(preloadedState);

    ReactDOM.render(
      <Root store={store} />,
      document.getElementById('root')
    );
  });

