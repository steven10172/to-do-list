import { RECEIVE_TODOS } from './TodoList.actions.js';

const initialState = {
  todos: [
    {
      id: 0,
      text: 'New Entry',
      completed: false
    }
  ]
};

function todosApp(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_TODOS:
      return Object.assign({}, state, {
        todos: action.todos
      });
    default:
      return state;
  }
};

export default todosApp;