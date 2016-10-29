import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import routes from '../../routes';
import App from '../App';

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
