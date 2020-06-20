const initialState = {
  info: null,
};

export default function stateReducer(state = initialState, action) {
  switch (action.payload) {
    case "SET_MESSAGE":
      return { ...state, info: action.payload };
    case "CLEAR_MESSAGE":
      return { ...state, info: action.payload };
    default:
      return state;
  }
}
