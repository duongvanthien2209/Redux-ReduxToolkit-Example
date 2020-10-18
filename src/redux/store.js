import todoReducer from './todo';

const { combineReducers, createStore } = require("redux");

const rootReducer = combineReducers({
  todos: todoReducer,
});

export default createStore(rootReducer);