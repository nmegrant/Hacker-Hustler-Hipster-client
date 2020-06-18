const initialState = [];

export default function ideasReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_IDEAS":
      return [...action.payload];
    case "NEW_IDEA_ADDED":
      return [...state, action.payload];
    case "DELETE_IDEA":
      let newState = [...state].filter((idea) => idea.id !== action.payload);
      return [...newState];
    default:
      return state;
  }
}
