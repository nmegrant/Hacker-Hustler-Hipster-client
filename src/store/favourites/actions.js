import axios from "../axios.js";
import { showMessageThunkCreator } from "../appState/actions";

export function favsUserList(favsList) {
  return {
    type: "SET_FAVOURITES_LIST",
    payload: favsList,
  };
}

export function getFavouriteUsersThunkCreator(favListUserIds) {
  return async function (dispatch, getState) {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(`/favourites`, {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          favs: favListUserIds,
        },
      });
      dispatch(favsUserList(response.data));
    } catch (error) {
      dispatch(showMessageThunkCreator(error.response.data.message, "info"));
      console.log(error);
    }
  };
}
