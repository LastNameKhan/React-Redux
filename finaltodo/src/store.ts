import { legacy_createStore as createStore } from "redux";
import { StoreState } from "./types";
import { todoReducer } from "./reducers";

const store = createStore<StoreState>(todoReducer, { todos: [] });

export default store;
