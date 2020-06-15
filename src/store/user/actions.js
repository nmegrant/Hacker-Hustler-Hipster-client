import axios from "axios";

export function signUpThunkCreator(newUser) {
  return async function signUpThunkCreator(dispatch, getState) {
    try {
      const response = await axios.post(
        `http://localhost:4000/signup`,
        newUser
      );
      console.log(response);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
}
