const initialState = {};

export default function homepageDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCHED_DETAILS":
      return { ...action.payload };
    default:
      return state;
  }
}
