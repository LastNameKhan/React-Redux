import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootreducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
// if (process.env.NODE_ENV === "development") {
//   middleware.push(logger);
// }

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
