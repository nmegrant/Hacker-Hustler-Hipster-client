import axios from "axios";
import { appLoading, appDoneLoading } from "../appState/actions";

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

export function deleteIdea(id) {
  return {
    type: "DELETE_IDEA",
    payload: id,
  };
}

export function fetchIdeasThunkCreator() {
  return async function fetchIdeas(dispatch, getState) {
    const token = localStorage.getItem("token");
    try {
      dispatch(appLoading());
      const ideas = await axios.get(
        // `http://localhost:4000/ideas`
        // `https://hacker-hustler-hipster.herokuapp.com/ideas`
        `${REACT_APP_URL$}/ideas`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(ideasFetched(ideas.data));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
}

export function addNewIdeaThunkCreator(idea) {
  return async function addNewIdea(dispatch, getState) {
    const token = localStorage.getItem("token");
    try {
      const newIdea = await axios.post(
        // `http://localhost:4000/ideas`
        // `https://hacker-hustler-hipster.herokuapp.com/ideas`
        `${REACT_APP_URL$}/ideas`,
        idea,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
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
      await axios.delete(
        // `https://hacker-hustler-hipster.herokuapp.com/ideas`
        `${REACT_APP_URL$}/ideas`,
        // `http://localhost:4000/ideas`
        {
          headers: { Authorization: `Bearer ${token}` },
          data: {
            id,
          },
        }
      );
      dispatch(deleteIdea(id));
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
}
