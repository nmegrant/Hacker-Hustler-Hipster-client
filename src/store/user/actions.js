import axios from "axios";

export function loginedIn(userAndToken) {
  return {
    type: "LOGGED_IN",
    payload: userAndToken,
  };
}

export function LoggedOut() {
  return {
    type: "LOGGED_OUT",
    payload: null,
  };
}

export function loginThunkCreator(email, password) {
  return async function (dispatch, getState) {
    try {
      const response = await axios.post(`http://localhost:4000/login`, {
        email,
        password,
      });
      console.log(response);
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
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
}
