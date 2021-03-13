import { GET_MARKET_RESULTS, RESULTS_ERROR } from "../actions/types";

const initialState = {
  isFormSubmitted: false,
  results: [],
  error: {},
};

function alertReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_MARKET_RESULTS:
      return {
        ...state,
        isFormSubmitted: true,
        results: payload,
      };
    case RESULTS_ERROR:
      return {
        ...state,
        isFormSubmitted: true,
        results: [],
        error: payload,
      };
    default:
      return state;
  }
}

export default alertReducer;
