import { combineReducers, configureStore } from "@reduxjs/toolkit";
import quizReducers from "./Reducers/quizReducers";
const rootReducer = combineReducers({
  quizReducers: quizReducers,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
