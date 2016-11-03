import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
//import routes from '../../routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from '../App';

let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const Root = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
