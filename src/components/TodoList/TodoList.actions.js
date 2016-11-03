export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const COMPLETE_ALL = 'COMPLETE_ALL';

export function addTodo() {
  return {
    type: ADD_TODO,
    text: "New entry" + Math.floor(Math.random() * 100)
  };
};

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