const initialState = {
  message: null,
};

export default function stateReducer(state = initialState, action) {
  switch (action.payload) {
    case "SET_MESSAGE":
      return state;
    case "CLEAR_MESSAGE":
      return state;
    default:
      return state;
  }
}
