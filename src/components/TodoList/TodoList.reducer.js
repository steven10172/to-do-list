import { ADD_TODO, DELETE_TODO, COMPLETE_TODO, COMPLETE_ALL } from './TodoList.actions.js';
import { combineReducers } from 'redux';

const initialState = [
  {
    id: 0,
    text: 'New Entry',
    completed: true
  }
];

let currentId = 0;

function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: currentId++,
          text: action.text,
          completed: false
        },
        ...state
      ];

    case DELETE_TODO:
      break;
    case COMPLETE_TODO:
      break;
    case COMPLETE_ALL:
      break;
    default:
  }

  return state;
};

const TodoList = combineReducers({
  todos
});

export default TodoList;