import axios from "../axios.js";

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
        params: {
          favs: favListUserIds,
        },
      });
      dispatch(favsUserList(response.data));
    } catch (error) {
      console.log(error);
    }
  };
}
