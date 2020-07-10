import axios from "../axios.js";
import { selectFavourites } from "../store/user/selectors";

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
      const response = axios.get(`/favourites`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(favsUserList(response.data));
    } catch (error) {
      console.log(error);
    }
  };
}
