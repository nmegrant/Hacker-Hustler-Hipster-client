import { combineReducers } from "redux";
import homepages from "./homepages/reducer";
import homepageDetails from "./homepageDetails/reducer";
import user from "./user/reducer";
import myPage from "./mypage/reducer";
import ideas from "./ideas/reducer";
import skills from "./skills/reducer";
import appState from "./appState/reducer";
import favourites from "./favourites/reducer";

export default combineReducers({
  homepages,
  homepageDetails,
  user,
  myPage,
  ideas,
  skills,
  appState,
  favourites,
});
