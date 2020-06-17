const initialState = [];

export default function ideasReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_IDEAS":
      return [...action.payload];
    default:
      return state;
  }
}
