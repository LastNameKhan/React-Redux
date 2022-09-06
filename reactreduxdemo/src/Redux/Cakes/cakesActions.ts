import { BUY_CAKE } from "./cakeTypes";

//ActionCreator function
export const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};

//An action is an Object with a type property
//we chnage out action type from string to a constant

