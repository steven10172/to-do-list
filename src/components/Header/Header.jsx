import React from 'react';
import AppBar from 'material-ui/AppBar';

const Header = (props) => (
  <div className="Header">
    <AppBar
      title="Todo List"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
  </div>
);

export default Header;
