import axios from "../axios";
import { appLoading, appDoneLoading } from "../appState/actions";

export function homepagesFetched(homepages) {
  return {
    type: "HOMEPAGES_FETCHED",
    payload: homepages,
  };
}

export function fetchHomepagesThunkCreator() {
  return async function homepagesThunk(dispatch, getState) {
    try {
      dispatch(appLoading());
      const response = await axios.get(`/homepages`);
      dispatch(homepagesFetched(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log(`Error2: ${error}`);
    }
  };
}

//filter homepages based on search criteria
export function fetchFilteredHomepageThunkCreator(skills, role, idea) {
  return async function filteredHompagesThunk(dispatch, getState) {
    try {
      dispatch(appLoading());
      const response = await axios.get(`/homepages/filters`, {
        params: {
          skills,
          role,
          idea,
        },
      });
      dispatch(homepagesFetched(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
}
