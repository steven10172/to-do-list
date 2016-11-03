import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreateNewTodoButton from './CreateNewTodoButton.jsx';
import { addTodo } from '../TodoList/TodoList.actions.js';

const mapDispatchToProps = dispatch => ({
  onClick: bindActionCreators(addTodo, dispatch),
});

export default connect(
  null,
  mapDispatchToProps
)(CreateNewTodoButton);
