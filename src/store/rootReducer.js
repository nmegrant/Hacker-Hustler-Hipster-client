import { combineReducers } from "redux";
import homepages from "./homepages/reducer";
import homepageDetails from "./homepageDetails/reducer";
import user from "./user/reducer";

export default combineReducers({
  homepages,
  homepageDetails,
  user,
});
