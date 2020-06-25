import axios from "axios";
import { showMessageThunkCreator } from "../appState/actions";
import { appLoading, appDoneLoading } from "../appState/actions";

export function myPageDetailsFetched(details) {
  return {
    type: "FETCHED_MY_PAGE_DETAILS",
    payload: details,
  };
}

export function editMyHomepageDetails(homepageDetails) {
  return {
    type: "UPDATE_MY_PAGE_DETAILS",
    payload: homepageDetails,
  };
}

export function addNewSkills(newSkills) {
  return {
    type: "UPDATE_MY_SKILLS",
    payload: newSkills,
  };
}

export function addNewWebsites(newWebsites) {
  return {
    type: "ADD_MY_WEBSITE",
    payload: newWebsites,
  };
}

//Edit/update homepage info
export function sendHomepageInfoThunkCreator(
  byline,
  experience,
  bio,
  idea,
  location,
  urls,
  skills
) {
  return async function sendInfoThunk(dispatch, getState) {
    const token = localStorage.getItem("token");
    if (token === null) {
      return;
    }
    try {
      let homepageDetails = await axios.patch(
        // `http://localhost:4000/mypage/`
        // `https://hacker-hustler-hipster.herokuapp.com/mypages`
        `${REACT_APP_URL$}/mypages`,
        { byline, experience, bio, idea, location },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(editMyHomepageDetails(homepageDetails.data));
      if (urls.length > 0) {
        const newWebsites = await axios.post(
          // `http://localhost:4000/websites`
          // `https://hacker-hustler-hipster.herokuapp.com/websites`
          `${REACT_APP_URL$}/websites`,
          { urls },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        dispatch(addNewWebsites(newWebsites.data));
      }
      if (skills.length > 0) {
        const newSkills = await axios.post(
          // `http://localhost:4000/skills/user`
          // `https://hacker-hustler-hipster.herokuapp.com/skills/user`
          `${REACT_APP_URL$}/skills/user`,
          { skills },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        dispatch(addNewSkills(newSkills.data));
      }
      dispatch(showMessageThunkCreator("Homepage Updated", "info"));
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
}

//fetch mypage details
export function fetchMyHomepageDetailsThunkCreator() {
  return async function fetchMyPageDetailsThunk(dispatch, getState) {
    dispatch(appLoading());
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        // `https://hacker-hustler-hipster.herokuapp.com/mypage`
        `${REACT_APP_URL$}/mypage`,
        // `http://localhost:4000/mypage`
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(myPageDetailsFetched(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
}
