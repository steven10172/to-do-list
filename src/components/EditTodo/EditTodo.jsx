import React, { Component, PropTypes } from 'react';

class EditTodo extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onUpdate: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      value: props.text
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.onUpdate = this.props.onUpdate;
  }

  componentDidMount() {
    this.textInput.focus();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSave(event) {
    event.preventDefault();
    this.onUpdate(this.state.value);
  }

  render() {
    const { value } = this.state;

    return (
      <div>
        <input type="text" value={value} ref={(input) => this.textInput = input} onChange={this.handleChange} />
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default EditTodo;
