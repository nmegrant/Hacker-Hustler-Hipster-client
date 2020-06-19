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

export function fetchFilteredHomepageThunkCreator(skills, role, idea) {
  return async function filteredHompagesThunk(dispatch, getState) {
    try {
      let responseSkills;
      let responseRole;
      let responseIdea;
      if (skills.length > 0) {
        responseSkills = await axios.get(
          `http://localhost:4000/homepages/skills`,
          {
            params: {
              skills,
            },
          }
        );
      }
      if (role.length > 0) {
        responseRole = await axios.get(`http://localhost:4000/homepages/role`, {
          params: {
            role,
          },
        });
      }
      if (idea.length > 0) {
        responseRole = await axios.get(`http://localhost:4000/homepages/idea`, {
          params: {
            idea,
          },
        });
      }
      console.log(responseIdea.data);
      dispatch(homepagesFetched(responseSkills.data));
    } catch (error) {}
  };
}
