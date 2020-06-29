const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  role: null,
  darkMode: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "LOGGED_IN":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
      };
    case "LOGGED_OUT":
      localStorage.removeItem("token");
      return {
        ...initialState,
        token: null,
      };
    case "STILL_LOGGED_IN":
      return {
        ...state,
        ...action.payload,
      };
    case "SET_MODE":
      return {
        ...state,
        darkMode: action.payload,
      };
    default:
      return state;
  }
}
