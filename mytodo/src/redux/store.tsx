import { createStore } from "redux";
import TodoReducers from "./reducers/TodoReducer";

const store = createStore(TodoReducers);

export default store;
