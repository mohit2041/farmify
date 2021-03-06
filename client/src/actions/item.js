import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_ITEMS,
  ITEM_ERROR,
  UPDATE_VIEWS,
  DELETE_ITEM,
  ADD_ITEM,
  GET_ITEM,
  UPDATE_ITEM,
  GET_OFFERS,
  ADD_OFFER,
  DELETE_OFFER,
} from "./types";

// Get items
export const getItems = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/items");

    dispatch({
      type: GET_ITEMS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ITEM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
// Get items on sale by a user
export const getUserItems = (userID) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/items/user/${userID}`);

    dispatch({
      type: GET_ITEMS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ITEM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get items on which user made offer
export const getOfferItems = (userID) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/items/user/offer/${userID}`);

    dispatch({
      type: GET_OFFERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ITEM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get offer of the user if made already
export const getUserOffer = (itemID) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/items/offer/${itemID}`);

    dispatch({
      type: ADD_OFFER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ITEM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add offer to item
export const addOffer = (formData, itemId) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.put(`/api/items/offer/${itemId}`, formData, config);

    dispatch({
      type: ADD_OFFER,
      payload: res.data,
    });

    dispatch(setAlert("offer made", "success"));
  } catch (err) {
    dispatch({
      type: ITEM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
// delete offer to item
export const deleteOffer = (itemId) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/items/offer/${itemId}`);

    dispatch({
      type: DELETE_OFFER,
      payload: itemId,
    });
  } catch (err) {
    dispatch({
      type: ITEM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add view
export const addView = (itemId) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/items/view/${itemId}`);

    dispatch({
      type: UPDATE_VIEWS,
      payload: { itemId, views: res.data },
    });
  } catch (err) {
    dispatch({
      type: ITEM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete item
export const deleteItem = (id, history) => async (dispatch) => {
  if (window.confirm("Are you sure to remove this item ?")) {
    try {
      await axios.delete(`/api/items/${id}`);

      dispatch({
        type: DELETE_ITEM,
        payload: id,
      });

      dispatch(setAlert("item Removed", "success"));

      history.push("/shop");
    } catch (err) {
      dispatch({
        type: ITEM_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  }
};

// Add item
export const addItem = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post("/api/items", formData, config);

    dispatch({
      type: ADD_ITEM,
      payload: res.data,
    });

    dispatch(setAlert("item Created", "success"));

    history.push("/shop");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: ITEM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// edit item
export const editItem = (formData, id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(`/api/items/${id}`, formData, config);

    dispatch({
      type: UPDATE_ITEM,
      payload: res.data,
    });

    dispatch(setAlert("item Updated", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: ITEM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get item
export const getItem = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/items/${id}`);

    dispatch({
      type: GET_ITEM,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ITEM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
