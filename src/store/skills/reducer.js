const initialState = [];

export default function skillsReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCHED_SKILLS":
      return [...action.payload];
    default:
      return state;
  }
}
