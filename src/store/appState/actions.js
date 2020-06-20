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

export function appLoading() {
  return {
    type: "LOADING",
    payload: true,
  };
}

export function appDoneLoading() {
  return {
    type: "DONE_LOADING",
    payload: false,
  };
}

export function showMessageThunkCreator(message, variant) {
  return function showMessage(dispatch, getState) {
    dispatch(setMessage(message, variant));
    setTimeout(() => dispatch(clearMessage()), 2000);
  };
}
