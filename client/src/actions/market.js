import { GET_MARKET_RESULTS, RESULTS_ERROR } from "../actions/types";
import axios from "axios";
const API_KEY = "579b464db66ec23bdd000001e44d2fbb84de480149294a166d98e108";

// Get market results
export const getMarketResults = (formData, history) => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=" +
        API_KEY +
        "&format=json&limit=10"
    );

    dispatch({
      type: GET_MARKET_RESULTS,
      payload: res.data.records,
    });

    history.push("/market/results");
  } catch (err) {
    dispatch({
      type: RESULTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
