import axios from "axios";

export function fetchHomepageDetailsThunkCreator(id) {
  return async function fetchHomepageDetailsThunk(dispatch, getState) {
    try {
      const homepageDetails = await axios.get(
        `http://localhost:4000/homepages/${id}`
      );
      console.log(homepageDetails.data);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
}
