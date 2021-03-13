import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import item from "./item";
import market from "./market";
export default combineReducers({
  alert,
  auth,
  profile,
  item,
  market,
});
