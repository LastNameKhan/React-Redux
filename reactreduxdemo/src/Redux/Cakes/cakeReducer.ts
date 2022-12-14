import { BUY_CAKE } from "./cakeTypes";

const intialState = {
  numOfCakes: 10,
};

//Ties up store an action together.
const cakeReducer = (state = intialState, action: any) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;
