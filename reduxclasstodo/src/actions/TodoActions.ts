import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  UPDATE_TODO,
  CANCEL_EDIT,
} from "./types";

export const addTodo = (todo: any) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const removeTodo = (index: any) => {
  return {
    type: DELETE_TODO,
    payload: index,
  };
};

export const editTodo = (index: any) => {
  return {
    type: EDIT_TODO,
    payload: index,
  };
};

export const updateTodo = (title: any, index: any) => {
  return {
    type: UPDATE_TODO,
    title,
    index,
  };
};

export const cancelEdit = (index: any) => {
  return {
    type: CANCEL_EDIT,
    index,
  };
};
