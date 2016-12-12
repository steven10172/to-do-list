import { take, put, call, fork } from 'redux-saga/effects'
import API from '../api'
import * as actions from '../components/TodoList/TodoList.actions.js'
import { ADD_TODO, DELETE_TODO, COMPLETE_TODO, COMPLETE_ALL, UPDATE_TEXT, CHANGE_VIEW_ORDER } from '../components/TodoList/TodoList.actions.js'

function* addTodo() {
  const todos = yield call(API.addTodo, 'Test Add Todo');
  yield put(actions.receiveTodos(todos));
}

function* deleteTodo(id) {
  const todos = yield call(API.deleteTodo, id);
  yield put(actions.receiveTodos(todos));
}

function* updateTodoText(id, text) {
  const todos = yield call(API.updateTodo, id, text);
  yield put(actions.receiveTodos(todos));
}

function* updateTodoCompletion(id, status) {
  const todos = yield call(API.updateTodoCompletion, id, status);
  yield put(actions.receiveTodos(todos));
}

function* updateTodoViewOrder(id, moveUp) {
  const todos = yield call(API.updateTodoViewOrder, id, moveUp);
  yield put(actions.receiveTodos(todos));
}

function* updateTodoCompletionAll() {
  const todos = yield call(API.updateTodoCompletionAll);
  yield put(actions.receiveTodos(todos));
}

/****************
 *** WATCHERS ***
 ***************/
function* watchAddTodos() {
  while(true) {
    yield take((action) => action && action.type === ADD_TODO);
    yield fork(addTodo);
  }
}

function* watchDeleteTodo() {
  while(true) {
    const data = yield take((action) => action && action.type === DELETE_TODO);
    yield fork(deleteTodo, data.id);
  }
}

function* watchUpdateTodoText() {
  while(true) {
    const data = yield take((action) => action && action.type === UPDATE_TEXT);
    yield fork(updateTodoText, data.id, data.text);
  }
}

function* watchUpdateTodoCompletion() {
  while(true) {
    const data = yield take((action) => action && action.type === COMPLETE_TODO);
    yield fork(updateTodoCompletion, data.id, data.status);
  }
}

function* watchUpdateTodoViewOrder() {
  while(true) {
    const data = yield take((action) => action && action.type === CHANGE_VIEW_ORDER);
    yield fork(updateTodoViewOrder, data.id, data.moveUp);
  }
}

function* watchUpdateTodoMarkAllCompleted() {
  while(true) {
    yield take((action) => action && action.type === COMPLETE_ALL);
    yield fork(updateTodoCompletionAll);
  }
}

export default function* root() {
  yield [ 
    fork(watchAddTodos),
    fork(watchDeleteTodo),
    fork(watchUpdateTodoText),
    fork(watchUpdateTodoCompletion),
    fork(watchUpdateTodoViewOrder),
    fork(watchUpdateTodoMarkAllCompleted)
  ]
}