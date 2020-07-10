const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case "SET_FAVOURITES_LIST":
      return [...action.payload];
    default:
      return state;
  }
}
