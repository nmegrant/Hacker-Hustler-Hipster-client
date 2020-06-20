import axios from "axios";
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

export function loginThunkCreator(email, password) {
  return async function (dispatch, getState) {
    try {
      const response = await axios.post(`http://localhost:4000/login`, {
        email,
        password,
      });
      dispatch(loggedIn(response.data));
      dispatch(showMessageThunkCreator("Logged in", "info"));
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
}

export function signUpThunkCreator(newUser) {
  return async function signUpThunkCreator(dispatch, getState) {
    try {
      const response = await axios.post(
        `http://localhost:4000/signup`,
        newUser
      );
      dispatch(loggedIn(response.data));
      dispatch(showMessageThunkCreator("Account Created", "info"));
    } catch (error) {
      console.log(`Error: ${error}`);
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
      const response = await axios.get(`http://localhost:4000/user`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(stillLoggedIn(response.data));
    } catch (error) {
      console.log(`Error1: ${error}`);
      dispatch(loggedOut());
    }
  };
}
