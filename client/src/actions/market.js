import { GET_MARKET_RESULTS, RESULTS_ERROR } from "../actions/types";
import { setAlert } from "./alert";
import axios from "axios";
const API_KEY = "579b464db66ec23bdd000001e44d2fbb84de480149294a166d98e108";

// Get market results
export const getMarketResults = (formData, offset = 0) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Conrtol-Allow-Headers": "*",
      },
    };

    let query = "";
    if (formData.state !== "") {
      query = query + "&filters[state]=" + formData.state;
      if (formData.district !== "") {
        query = query + "&filters[district]=" + formData.district;
      }
    }

    if (formData.commodity !== "") {
      query = query + "&filters[commodity]=" + formData.commodity;
    }

    let url =
      "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=" +
      API_KEY +
      "&format=json&offset=" +
      offset +
      "&limit=9" +
      query;

    const res = await axios.get(url, config);

    dispatch({
      type: GET_MARKET_RESULTS,
      payload: res,
    });
  } catch (err) {
    const error = {
      msg: "Oops,Something went wrong",
      status: 500,
    };
    dispatch({
      type: RESULTS_ERROR,
      payload: error,
    });
    dispatch(setAlert(error.msg, "danger"));
  }
};
