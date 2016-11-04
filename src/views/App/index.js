import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from './App.jsx';
import * as TodoListActions from '../../components/TodoList/TodoList.actions.js';

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoListActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
