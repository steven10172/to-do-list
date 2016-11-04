import { ADD_TODO, DELETE_TODO, COMPLETE_TODO, COMPLETE_ALL, UPDATE_TEXT, RECEIVE_TODOS } from './TodoList.actions.js';

const initialState = {
  todos: [
    {
      id: 0,
      text: 'New Entry',
      completed: false
    }
  ]
};

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.length,
          text: action.text,
          completed: false
        }
      ];

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);

    case UPDATE_TEXT:
      return state.map(todo => {
        if(todo.id === action.id) {
          todo.text = action.text;
        }

        return todo;
      });

    case COMPLETE_TODO:
      return state.map(todo => {
        if(todo.id === action.id) {
          todo.completed = !todo.completed;
        }

        return todo;
      });

    case COMPLETE_ALL:
    default:
      return state;
  }
}

function todosApp(state = initialState, action) {
  switch (action.type) {
    case COMPLETE_TODO:
    case UPDATE_TEXT:
      return Object.assign({}, state, {
        todos: todos(state.todos, action)
      });
    case RECEIVE_TODOS:
      return Object.assign({}, state, {
        todos: action.todos
      });
    default:
      return state;
  }
};

export default todosApp;