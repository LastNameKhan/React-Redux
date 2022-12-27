import React from "react";

const initialState = {
  message: [],
  loading: false,
  error: "",
};

const ChatReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_DATA_SUCCESS":
      return {
        loading: false,
        message: [...state.message, action.payload],
        error: "",
      };
    default:
      return state;
  }
};

export default ChatReducer;
