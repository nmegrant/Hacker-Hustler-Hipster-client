export function selectToken() {
  return (state) => {
    return state.user.token;
  };
}

export function selectUser() {
  return (state) => {
    return state.user;
  };
}

export function selectMode() {
  return (state) => {
    return state.user.darkMode;
  };
}
