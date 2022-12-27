const intialState = {
  data: {},
};

const formReducer = (state = intialState, action: any) => {
  switch (action.type) {
    case "ADD_DATA":
      console.log("Action------", action.payload);

      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;
