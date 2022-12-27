const intialState = {
  data: [],
};

const formReducers: any = (state = intialState, action: any) => {
  console.log(action, "action");
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};

export default formReducers;
