import {
  GET_ITEMS,
  ITEM_ERROR,
  UPDATE_VIEWS,
  DELETE_ITEM,
  ADD_ITEM,
  UPDATE_ITEM,
  GET_ITEM,
  GET_OFFERS,
  ADD_OFFER,
  DELETE_OFFER,
} from "../actions/types";

const initialState = {
  offer: null,
  offers: [],
  items: [],
  item: null,
  loading: true,
  error: {},
};

function itemReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ITEMS:
      return {
        ...state,
        items: payload,
        loading: false,
      };
    case GET_ITEM:
      return {
        ...state,
        item: payload,

        loading: false,
      };
    case UPDATE_ITEM:
      return {
        ...state,
        item: payload,
        loadind: false,
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [payload, ...state.items],
        loading: false,
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== payload),
        loading: false,
      };
    case ITEM_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case ADD_OFFER: {
      return {
        ...state,
        offer: payload,
        loading: false,
      };
    }
    case DELETE_OFFER: {
      return {
        ...state,
        offer: null,
        loading: false,
      };
    }
    case GET_OFFERS:
      return {
        ...state,
        offers: payload,
        loading: false,
      };
    case UPDATE_VIEWS:
      return {
        ...state,
        items: state.items.map((item) =>
          item._id === payload.itemId ? { ...item, views: payload.views } : item
        ),
        loading: false,
      };

    default:
      return state;
  }
}

export default itemReducer;
