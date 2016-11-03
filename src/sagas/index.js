import { takeEvery } from 'redux-saga'
import { take, put, call, fork, select } from 'redux-saga/effects'
import API from '../api'
import * as actions from '../components/TodoList/TodoList.actions.js'
import { ADD_TODO, RECEIVE_TODOS, DELETE_TODO, COMPLETE_TODO, COMPLETE_ALL, UPDATE_TEXT } from '../components/TodoList/TodoList.actions.js'

function* addTodo() {
  const todos = yield call(API.addTodo, 'Test Add Todo');
  yield put(window.store.dispatch(actions.receiveTodos(todos)));
}

function* watchAddTodos() {
  while(true) {
    const data = yield take(({ action }) => action && action.type === ADD_TODO);
    console.log('Yield: ', data);
    yield fork(addTodo);
  }
}

/*function* watchUpdateTodoText() {
  while(true) {
    const data = yield take(({ action }) => action && action.type === ADD_TODO);
    console.log('Yield: ', data);
    yield fork(addTodo);
  }
}*/

export default function* root() {
  yield [ 
    fork(watchAddTodos)
  ]
}