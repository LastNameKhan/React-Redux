import { combineReducers, configureStore } from "@reduxjs/toolkit";
import formReducers from "./Reducers/formReducers";

const rootReducer = combineReducers({
  formReducer: formReducers,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
