import * as types from "./actionsTypes";
import axios from "axios";

//Action creator function which is getTodos
const getTodos = (Todos: any) => {
  return {
    type: types.GET_TODOS,
    payload: Todos,
  };
};

//Dispatcher here to dispatch the action
export const loadTodos = () => {
  return function (dispatch: any) {
    axios
      .get(`http://localhost:8080/todos`)
      .then((res) => {
        console.log("response", res.data);
        dispatch(getTodos(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
