import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todoReducers";

const rootReducer = combineReducers({
    todoReducer: todoReducer,
})

const store = configureStore({
    reducer: rootReducer,
})

export default store;
