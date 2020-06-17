import { combineReducers } from "redux";
import homepages from "./homepages/reducer";
import homepageDetails from "./homepageDetails/reducer";
import user from "./user/reducer";
import myPage from "./mypage/reducer";
import ideas from "./ideas/reducer";

export default combineReducers({
  homepages,
  homepageDetails,
  user,
  myPage,
  ideas,
});
