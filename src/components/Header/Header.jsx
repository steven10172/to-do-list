import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Header extends Component {
  static propTypes = {
    completeAll: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.handleToggleMenu = this.handleToggleMenu.bind(this);
    this.handleCompleteAll = this.handleCompleteAll.bind(this);
  }

  handleToggleMenu() {
    this.setState({open: !this.state.open});
  }

  handleCompleteAll() {
    this.props.completeAll();
    this.handleToggleMenu();
  }

  render() {
    return (
      <div className="Header">
        <AppBar
          title="Todo List"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggleMenu}
        />
        <Drawer open={this.state.open} containerStyle={{'top':64}}>
          <MenuItem onClick={this.handleCompleteAll}>Complete All</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default Header;
