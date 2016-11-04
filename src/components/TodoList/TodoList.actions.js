export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const COMPLETE_ALL = 'COMPLETE_ALL';
export const UPDATE_TEXT = 'UPDATE_TEXT';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const CHANGE_VIEW_ORDER = 'CHANGE_VIEW_ORDER';

export function receiveTodos(todos) {
  return {
    type: RECEIVE_TODOS,
    todos
  }
}

export function addTodo() {
  return {
    type: ADD_TODO,
    text: "New entry"
  };
};

export function updateTodoText(id, text) {
  return {
    type: UPDATE_TEXT,
    id,
    text
  }
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id
  };
};

export function completeTodo(id, status) {
  return {
    type: COMPLETE_TODO,
    id,
    status
  };
};

export function completeAll() {
  return {
    type: COMPLETE_ALL
  };
};

export function changeViewOrder(id, moveUp) {
  return {
    type: CHANGE_VIEW_ORDER,
    id,
    moveUp
  };
};