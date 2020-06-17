import axios from "axios";

export function ideasFetched(ideas) {
  return {
    type: "FETCH_IDEAS",
    payload: ideas,
  };
}

export function newIdeaAdded(idea) {
  return {
    type: "NEW_IDEA_ADDED",
    payload: idea,
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

export function addNewIdeaThunkCreator(idea) {
  return async function addNewIdea(dispatch, getState) {
    const token = localStorage.getItem("token");
    try {
      const newIdea = await axios.post(`http://localhost:4000/ideas`, idea, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(newIdeaAdded(newIdea.data));
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
}

export function deleteIdeaThunkCreator(id) {
  return async function deleteIdeaThunk(dispatch, getState) {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`http://localhost:4000/ideas`, id, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
}
