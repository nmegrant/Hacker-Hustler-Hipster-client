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

//need to test
export function addNewSkills(newSkills) {
  return {
    type: "UPDATE_MY_SKILLS",
    payload: newSkills,
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
        `http://localhost:4000/mypage/`,
        { byline, experience, bio, idea, location },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(editMyHomepageDetails(homepageDetails.data));
      if (urls.length > 0) {
        await axios.post(
          `http://localhost:4000/websites/`,
          { urls },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      }
      if (skills.length > 0) {
        const newSkills = await axios.post(
          `http://localhost:4000/skills/user/`,
          { skills },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        dispatch(addNewSkills(newSkills));
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
      const response = await axios.get(`http://localhost:4000/mypage`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(myPageDetailsFetched(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
}
