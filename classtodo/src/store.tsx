import { legacy_createStore as createStore } from "redux";
import allreducers from "./Reducers";

const store = createStore(allreducers);

export default store;
