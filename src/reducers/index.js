import { combineReducers } from 'redux';
import todoReducer from '../components/TodoList/TodoList.reducer.js';

const rootReducer = combineReducers({
  todoApp: todoReducer
});

export default rootReducer;
