import axios from "axios";

export function sendHomepageInfoThunkCreator(
  byline,
  experience,
  bio,
  idea,
  location,
  urls
) {
  return async function sendInfoThunk(dispatch, getState) {
    const token = localStorage.getItem("token");
    if (token === null) {
      return;
    }
    try {
      await axios.patch(
        `http://localhost:4000/mypage/`,
        { byline, experience, bio, idea, location },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (urls.length > 0) {
        await axios.post(
          `http://localhost:4000/websites/`,
          { urls },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
}
