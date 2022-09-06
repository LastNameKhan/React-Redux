import { combineReducers } from "redux";
import TodoReducers from "./reducer";

const rootReducer = combineReducers({
  Todos: TodoReducers,
});

export default rootReducer;
