const initialState = {
  loading: false,
  info: null,
};

export default function appStateReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_MESSAGE":
      return { ...state, info: action.payload };
    case "CLEAR_MESSAGE":
      return { ...state, info: action.payload };
    case "LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "DONE_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}
