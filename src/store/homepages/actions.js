import axios from "axios";

export function homepagesFetched(homepages) {
  return {
    type: "HOMEPAGES_FETCHED",
    payload: homepages,
  };
}

export function fetchHomepagesThunkCreator() {
  return async function homepagesThunk(dispatch, getState) {
    try {
      const response = await axios.get(`http://localhost:4000/homepages`);
      dispatch(homepagesFetched(response.data));
    } catch (error) {
      console.log(`Error2: ${error}`);
    }
  };
}

export function fetchSkillFilteredHomepageThunkCreator(skills, role) {
  return async function filteredHompagesThunk(dispatch, getState) {
    try {
      console.log(role);
      const response1 = await axios.get(
        `http://localhost:4000/homepages/skills`,
        {
          params: {
            skills,
          },
        }
      );
      console.log(role);
      const response2 = await axios.get(
        `http://localhost:4000/homepages/role`,
        {
          params: {
            role,
          },
        }
      );
      console.log(response2.data);
      dispatch(homepagesFetched(response1.data));
    } catch (error) {}
  };
}
