export function selectMessage() {
  return (state) => {
    return state.appState.info;
  };
}

export function selectLoadingStatus() {
  return (state) => {
    return state.appState.loading;
  };
}
