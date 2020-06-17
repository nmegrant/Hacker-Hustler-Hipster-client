import axios from "axios";

export function ideasFetched(ideas) {
  return {
    type: "FETCH_IDEAS",
    payload: ideas,
  };
}

export function fetchIdeasThunkCreator() {
  return async function fetchIdeas(dispatch, getState) {
    const token = localStorage.getItem("token");
    try {
      const ideas = await axios.get(`http://localhost:4000/ideas`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(ideasFetched(ideas.data));
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
}
