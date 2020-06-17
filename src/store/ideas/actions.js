import axios from "axios";

export function fetchIdeasThunkCreator() {
  return async function fetchIdeas(dispatch, getState) {
    const token = localStorage.getItem("token");
    try {
      const ideas = await axios.get(`http://localhost:4000/ideas`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(ideas);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
}
