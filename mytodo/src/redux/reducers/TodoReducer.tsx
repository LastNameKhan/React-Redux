import * as types from "../actionTypes";

const initialState = {
  todos: [
    { id: 1, content: "Call Client" },
    { id: 2, content: "Write Blog" },
  ],
};

const TodoReducers = (state = initialState, action:any) => {
  if (action.type === types.ADD_TODO) {
    return state.concat(action.todo);
  } else if (action.type === types.EDIT_TODO) {
    return action.todos;
  } else {
    return state;
  }
};

export default TodoReducers;
