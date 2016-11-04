import { takeEvery } from 'redux-saga'
import { take, put, call, fork, select } from 'redux-saga/effects'
import API from '../api'
import * as actions from '../components/TodoList/TodoList.actions.js'
import { ADD_TODO, RECEIVE_TODOS, DELETE_TODO, COMPLETE_TODO, COMPLETE_ALL, UPDATE_TEXT } from '../components/TodoList/TodoList.actions.js'

function* addTodo() {
  const todos = yield call(API.addTodo, 'Test Add Todo');
  yield put(window.store.dispatch(actions.receiveTodos(todos)));
}

function* deleteTodo(id) {
  const todos = yield call(API.deleteTodo, id);
  yield put(window.store.dispatch(actions.receiveTodos(todos)));
}

/****************
 *** WATCHERS ***
 ***************/
function* watchAddTodos() {
  while(true) {
    const data = yield take(({ action }) => action && action.type === ADD_TODO);
    yield fork(addTodo);
  }
}

function* watchDeleteTodo() {
  while(true) {
    const data = yield take(({ action }) => action && action.type === DELETE_TODO);
    yield fork(deleteTodo, data.action.id);
  }
}

export default function* root() {
  yield [ 
    fork(watchAddTodos),
    fork(watchDeleteTodo)
  ]
}