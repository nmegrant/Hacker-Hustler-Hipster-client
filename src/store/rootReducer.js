import { combineReducers } from "redux";
import homepages from "./homepages/reducer";
import homepageDetails from "./homepageDetails/reducer";

export default combineReducers({
  homepages,
  homepageDetails,
});
