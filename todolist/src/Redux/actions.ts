import * as types from "./actionsTypes";
import axios from "axios";

//Action creator function which is getTodos
const getTodos = (Todos: any) => {
  return {
    type: types.GET_TODOS,
    payload: Todos,
  };
};

// const todosDeleted = (id) => {
//   return { type: types.DELETE_TODOS };
// };

//Dispatcher here to dispatch the action
export const loadTodos = () => {
  return function (dispatch: any) {
    axios
      .get(`http://localhost:8080/todos`)
      .then((response) => {
        console.log("response", response.data);
        const Todos = response.data;
        dispatch(getTodos(Todos));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// export const deleteTodos = (id: any) => {
//   return function (dispatch: any) {
//     dispatch()
//     axios
//       .delete(`http://localhost:8080/todos`)
//       .then((res) => {
//         console.log("response", res.data);
//         dispatch(todosDeleted());
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };
