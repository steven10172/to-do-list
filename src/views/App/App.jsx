import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import Dashboard from '../Dashboard';
import * as TodoActions from '../../components/TodoList/TodoList.actions.js'
import './App.css';

const App = ({todoApp, actions}) => (
  <div className="App">
    <Header />
    <div className="App-body">
      <Dashboard addTodo={actions.addTodo} todoApp={todoApp} />
    </div>
  </div>
);

App.propTypes = {
  todoApp: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  todoApp: state.todoApp
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
