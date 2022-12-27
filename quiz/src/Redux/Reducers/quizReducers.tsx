const intialState = {
  questions: [],
  getData: [],
  score: [],
};

export const quizReducers: any = (state = intialState, action: any) => {
  switch (action.type) {
    case "POST_DATA_SUCCESS":
      return {
        ...state,
        questions: action.payload,
      };
    case "GET_DATA_SUCCESS":
      return {
        ...state,
        getData: action.payload,
      };
    case "SET_SCORE": 
        return {
            ...state,
            score: action.payload,
        }
    default:
      return state;
  }
};

export default quizReducers;
