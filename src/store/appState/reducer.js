const initialState = {
  info: null,
};

export default function appStateReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_MESSAGE":
      return { ...state, info: action.payload };
    case "CLEAR_MESSAGE":
      return { ...state, info: action.payload };
    default:
      return state;
  }
}
