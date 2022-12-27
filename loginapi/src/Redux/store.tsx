import { combineReducers, configureStore } from "@reduxjs/toolkit";
import fetchReducers from "./Reducers/fetchReducers";

const rootReducer = combineReducers({
  fetchRedducers: fetchReducers,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
