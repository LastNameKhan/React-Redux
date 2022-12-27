import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  UPDATE_TODO,
  CANCEL_EDIT,
} from "../actions/types";

const initialState = {
  Todos: [
    { title: "redux", editing: false },
    { title: "The redux TODO", editing: false },
    { title: "Run to the redux hill", editing: false },
  ],
};

export default function todoReducers(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        Todos: [action.payload, ...state.Todos],
      };
    case DELETE_TODO:
      return {
        Todos: state.Todos.filter((s, i) => i !== action.payload),
      };
    case EDIT_TODO:
      return {
        Todos: state.Todos.map((Todo, i) =>
          i === action.payload
            ? { ...Todo, editing: true }
            : { ...Todo, editing: false }
        ),
      };
    case UPDATE_TODO:
      return {
        Todos: state.Todos.map((Todo, i) =>
          i === action.index
            ? { ...Todo, title: action.title, editing: false }
            : Todo
        ),
      };
    case CANCEL_EDIT:
      return {
        Todos: state.Todos.map((Todo, i) =>
          i === action.index ? { ...Todo, editing: false } : Todo
        ),
      };
    default:
      return state;
  }
}
