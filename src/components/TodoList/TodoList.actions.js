export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const COMPLETE_ALL = 'COMPLETE_ALL';
export const UPDATE_TEXT = 'UPDATE_TEXT';

export function addTodo() {
  return {
    type: ADD_TODO,
    text: "New entry"
  };
};

export function updateTodoText(id, text) {
  return {
    type: UPDATE_TEXT,
    text,
    id
  }
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id
  };
};

export function completeTodo(id) {
  return {
    type: COMPLETE_TODO,
    id
  };
};

export function completeAll() {
  return {
    type: COMPLETE_ALL
  };
};