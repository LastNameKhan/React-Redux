import * as types from "./actionsTypes";

const intialState = {
  Todos: [],
  Todo: {},
  loading: false,
};

const TodoReducers = (state = intialState, action: any) => {
  switch (action.type) {
    case types.GET_TODOS:
      return {
        ...state,
        Todos: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default TodoReducers;
