import { combineReducers } from "redux";
import homepages from "./homepages/reducer";
import homepageDetails from "./homepageDetails/reducer";
import user from "./user/reducer";
import myPage from "./mypage/reducer";
import ideas from "./ideas/reducer";
import skills from "./skills/reducer";
import state from "./appState/reducer";

export default combineReducers({
  homepages,
  homepageDetails,
  user,
  myPage,
  ideas,
  skills,
  state,
});
