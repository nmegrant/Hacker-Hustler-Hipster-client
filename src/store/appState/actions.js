export function setMessage(message, variant) {
  return {
    type: "SET_MESSAGE",
    payload: {
      message,
      variant,
    },
  };
}

export function clearMessage() {
  return {
    type: "CLEAR_MESSAGE",
    payload: null,
  };
}

export function showMessageThunkCreator(message, variant) {
  return function showMessage(dispatch, getState) {
    dispatch(setMessage("Hello", "info"));
    setTimeout(() => dispatch(clearMessage()), 2000);
  };
}
