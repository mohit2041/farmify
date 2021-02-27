import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_ITEMS,
  ITEM_ERROR,
  // UPDATE_VIEWS,
  // DELETE_ITEM,
  // ADD_ITEM,
  // GET_ITEM,
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

// // Add view
// export const addView = (itemId) => async (dispatch) => {
//   try {
//     const res = await axios.put(`/api/items/view/${itemId}`);

//     dispatch({
//       type: UPDATE_VIEWS,
//       payload: { itemId, views: res.data },
//     });
//   } catch (err) {
//     dispatch({
//       type: ITEM_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
// };

// // Delete item
// export const deleteItem = (id) => async (dispatch) => {
//   try {
//     await axios.delete(`/api/items/${id}`);

//     dispatch({
//       type: DELETE_ITEM,
//       payload: id,
//     });

//     dispatch(setAlert("item Removed", "success"));
//   } catch (err) {
//     dispatch({
//       type: ITEM_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
// };

// // Add item
// export const addItem = (formData) => async (dispatch) => {
//   try {
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };

//     const res = await axios.post("/api/items", formData, config);

//     dispatch({
//       type: ADD_ITEM,
//       payload: res.data,
//     });

//     dispatch(setAlert("item Created", "success"));
//   } catch (err) {
//     dispatch({
//       type: ITEM_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
// };

// // Get item
// export const getItem = (id) => async (dispatch) => {
//   try {
//     const res = await axios.get(`/api/items/${id}`);

//     dispatch({
//       type: GET_ITEM,
//       payload: res.data,
//     });
//   } catch (err) {
//     dispatch({
//       type: ITEM_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
// };
