import * as types from "./actionTypes";

export const addTodo = (todo: any) => {
  return {
    type: types.ADD_TODO,
    todo,
  };
};

export const editTodo = (newTodoList: any) => {
  return {
    type: types.EDIT_TODO,
    todos: newTodoList,
  };
};
