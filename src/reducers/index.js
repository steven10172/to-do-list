import { combineReducers } from 'redux';
import todosAppReducer from '../components/TodoList/TodoList.reducer.js';

const rootReducer = combineReducers({
  todosApp: todosAppReducer
});

export default rootReducer;
