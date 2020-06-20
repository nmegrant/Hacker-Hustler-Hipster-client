import axios from "axios";
import { showMessageThunkCreator } from "../appState/actions";

export function homepageDetailsFetched(details) {
  return {
    type: "FETCHED_DETAILS",
    payload: details,
  };
}

export function fetchHomepageDetailsThunkCreator(id) {
  return async function fetchHomepageDetailsThunk(dispatch, getState) {
    try {
      const homepageDetails = await axios.get(
        `http://localhost:4000/homepages/${id}`
      );
      dispatch(homepageDetailsFetched(homepageDetails.data));
    } catch (error) {
      console.log(`Error: ${error}`);
      dispatch(showMessageThunkCreator(error.response.data.message, "danger"));
    }
  };
}
