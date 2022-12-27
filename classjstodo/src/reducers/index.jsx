import { combineReducers } from "redux";
import todoReducers from "./TodoReducers";

const allReducers = combineReducers({
  todos: todoReducers,
});

export default allReducers;