export function selectToken() {
  return (state) => {
    return state.user.token;
  };
}
