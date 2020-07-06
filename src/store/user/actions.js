import axios from "../axios.js";
import { selectToken } from "./selectors";
import { showMessageThunkCreator } from "../appState/actions";

export function loggedIn(userAndToken) {
  return {
    type: "LOGGED_IN",
    payload: userAndToken,
  };
}

export function loggedOut() {
  return {
    type: "LOGGED_OUT",
    payload: null,
  };
}

export function stillLoggedIn(userAndToken) {
  return {
    type: "STILL_LOGGED_IN",
    payload: userAndToken,
  };
}

export function setDarkMode(mode) {
  return {
    type: "SET_MODE",
    payload: mode,
  };
}

export function addFavourite(newFavourite) {
  return {
    type: "ADD_FAVOURITE",
    payload: newFavourite,
  };
}

export function darkModeThunkCreator(mode) {
  return async function (dispatch, getState) {
    const token = localStorage.getItem("token");
    try {
      await axios.patch(
        `/user/darkMode`,
        { darkMode: mode },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
}

export function loginThunkCreator(email, password) {
  return async function (dispatch, getState) {
    try {
      const response = await axios.post(`/login`, {
        email,
        password,
      });
      dispatch(loggedIn(response.data));
      dispatch(showMessageThunkCreator("Logged in", "info"));
    } catch (error) {
      console.log(`Error: ${error}`);
      dispatch(showMessageThunkCreator(error.response.data.message, "danger"));
    }
  };
}

export function signUpThunkCreator(newUser) {
  return async function signUpThunkCreator(dispatch, getState) {
    try {
      const response = await axios.post(`/signup`, newUser);
      dispatch(loggedIn(response.data));
      dispatch(showMessageThunkCreator("Account Created", "info"));
    } catch (error) {
      console.log(`Error: ${error}`);
      dispatch(showMessageThunkCreator(error.response.data.message, "danger"));
    }
  };
}

export function getLoggedInUserThunkCreator() {
  return async function getUserThunk(dispatch, getState) {
    const tokenFunction = selectToken();
    const token = tokenFunction(getState());
    if (token === null) {
      return;
    }
    try {
      const response = await axios.get(`/user`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(stillLoggedIn(response.data));
    } catch (error) {
      console.log(`Error1: ${error}`);
      dispatch(showMessageThunkCreator(error.response.data.message, "danger"));
      dispatch(loggedOut());
    }
  };
}

export function removeFromFavouritesThunkCreator(id) {
  return async function removeFavourite(dispatch, getState) {
    const tokenFunction = selectToken();
    const token = tokenFunction(getState());
    try {
      const newFavouriteList = await axios.delete(`/favourites`, {
        headers: { Authorization: `Bearer ${token}` },
        data: {
          id,
        },
      });
      console.log(newFavouriteList);
    } catch (error) {
      console.log(error);
    }
  };
}

export function addToFavouritesThunkCreator(id) {
  return async function addNewFavourite(dispatch, getState) {
    const token = localStorage.getItem("token");
    try {
      const newFavourite = await axios.post(
        `/favourites`,
        { id },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(addFavourite(newFavourite.data));
    } catch (error) {
      console.log(error);
    }
  };
}
