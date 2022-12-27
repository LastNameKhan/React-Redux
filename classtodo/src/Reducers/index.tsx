import { combineReducers } from "redux";
import TodoReducers from "./TodoReducers";

const allreducers = combineReducers({
  todos: TodoReducers,
});

export default allreducers;
