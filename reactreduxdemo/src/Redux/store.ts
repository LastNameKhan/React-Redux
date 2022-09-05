import { createStore } from "redux";
import cakeReducer from "./Cakes/cakeReducer";

const store = createStore(cakeReducer);

export default store;
