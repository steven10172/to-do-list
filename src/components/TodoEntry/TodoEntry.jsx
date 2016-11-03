import React, { Component, PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';
import ListItem from 'material-ui/List/ListItem';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import EditTodo from '../EditTodo';

import './TodoEntry.css';

const checkboxStyles = {
  width: 30,
  marginRight: 20
};

class TodoEntry extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    toggleCompleted: PropTypes.func.isRequired,
    onChangeText: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEditClick(event) {
    event.preventDefault();
    this.setState({editing: true});
  }

  handleSave(newValue) {
    this.setState({editing: false});
    this.props.onChangeText(newValue);
  }

  handleDelete() {
    this.props.onDelete();
  }

  render() {
    const { text, completed, toggleCompleted } = this.props;
    const todoContent = !this.state.editing ? <div onClick={this.handleEditClick}>{text}</div> : <EditTodo text={text} onUpdate={this.handleSave} />;

    const todoEntryMenu = <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
      >
        <MenuItem onClick={this.handleDelete} primaryText="Remove" />
      </IconMenu>;

    return (
      <div className="TodoEntry">
        <ListItem
          primaryText={todoContent}
          leftCheckbox={<Checkbox style={checkboxStyles} defaultChecked={completed} onChange={toggleCompleted} />}
          rightIconButton={todoEntryMenu}
        />
      </div>
    );
  }
}

export default TodoEntry;
