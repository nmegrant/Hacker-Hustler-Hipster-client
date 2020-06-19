import axios from "axios";

export function homepagesFetched(homepages) {
  return {
    type: "HOMEPAGES_FETCHED",
    payload: homepages,
  };
}

export function fetchHomepagesThunkCreator(skills) {
  return async function homepagesThunk(dispatch, getState) {
    try {
      const response = await axios.get(`http://localhost:4000/homepages`);
      dispatch(homepagesFetched(response.data));
    } catch (error) {
      console.log(`Error2: ${error}`);
    }
  };
}

export function fetchFilteredHomepageThunkCreator(skills) {
  return async function filteredHompagesThunk(dispatch, getState) {
    try {
      const response = await axios.get(
        `http://localhost:4000/homepages/skills`,
        {
          params: {
            skills,
          },
        }
      );
      dispatch(homepagesFetched(response.data));
    } catch (error) {}
  };
}
