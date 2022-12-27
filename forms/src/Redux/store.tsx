import { configureStore } from "@reduxjs/toolkit";
import formReducers from "./Reducers/formReducers";

const store = configureStore({
  reducer: formReducers,
});

export default store;
