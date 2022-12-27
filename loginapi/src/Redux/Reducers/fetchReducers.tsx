import {
  GET_DATA_REQUEST,
  GET_DATA_FAILURE,
  GET_DATA_SUCCESS,
  SINGUP_ACTION,
} from "../Actions/fetchActionsTypes";

const initialState = {
  allpost: [],
  loading: false,
  error: "",
};

const fetchReducers = (state = initialState, action: any) => {
  //   console.log("actionReducers", state.allpost);
  //   console.log("actionPayload", action.payload);
  //   console.log("AllPOSTS", state);
  switch (action.type) {
    case GET_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_DATA_SUCCESS:
      return {
        loading: false,
        allpost: action.payload,
        error: "",
      };
    case GET_DATA_FAILURE:
      return {
        loading: false,
        allpost: [],
        error: action.payload,
      };
      case SINGUP_ACTION:
        return {
          loading: false,
          allpost: [],
          error: action.payload,
        };
    default:
      return state;
  }
};

export default fetchReducers;
