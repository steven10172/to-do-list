import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TodoList from './TodoList.jsx';
import * as TodoListActions from './TodoList.actions.js';

const mapStateToProps = state => ({
  todos: state.todosApp.todos
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoListActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
