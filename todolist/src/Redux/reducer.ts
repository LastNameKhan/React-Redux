import * as types from "./actionsTypes";

const intialState = {
  Todos: [],
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
      case types.DELETE_TODOS:
      return {
        ...state,
        loading: false,
      };
      case types.EDIT_TODOS:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default TodoReducers;
