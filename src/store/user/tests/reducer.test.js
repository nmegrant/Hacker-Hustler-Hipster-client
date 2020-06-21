import reducer from "../reducer";

describe("userReducer", () => {
  const initialState = {
    token: null,
    name: null,
    email: null,
    role: null,
  };
  describe("if given no state and a random action", () => {
    test("returns the inital state", () => {
      const newState = reducer(undefined, { type: "ANY" });
      expect(newState).toEqual(initialState);
    });
  });

  describe("when given a LOGGED_IN action type", () => {
    test("returns a new state with the payload object", () => {
      const user = {
        token: 1234,
        name: "George",
        email: "george@test.com",
        role: "Hacker",
      };
      const action = { type: "LOGGED_IN", payload: user };
      const newState = reducer(initialState, action);
      expect(newState).toEqual(user);
    });
    test("returns a new state with the payload object values are correct", () => {
      const user = {
        token: 1234,
        name: "George",
        email: "george@test.com",
        role: "Hacker",
      };
      const action = { type: "LOGGED_IN", payload: user };
      const newState = reducer(initialState, action);
      expect(newState.token).toBe(user.token);
      expect(newState.name).toBe(user.name);
      expect(newState.email).toBe(user.email);
      expect(newState.role).toBe(user.role);
    });
  });
  describe("when given a LOGGED_OUT action type", () => {
    test("returns a new state equal to initial state", () => {
      const user = {
        token: 1234,
        name: "George",
        email: "george@test.com",
        role: "Hacker",
      };
      const action = { type: "LOGGED_IN", payload: user };
      const newState = reducer(initialState, action);
      const logoutAction = { type: "LOGGED_OUT" };
      const newLogoutState = reducer(newState, logoutAction);
      expect(newLogoutState).toEqual(initialState);
    });
  });
  describe("when given a STILL_LOGGED_IN action type", () => {
    test("returns the same state as the new state", () => {
      const user = {
        token: 1234,
        name: "George",
        email: "george@test.com",
        role: "Hacker",
      };
      const action = { type: "STILL_LOGGED_IN", payload: user };
      const newState = reducer(initialState, action);
      const stillLoggedInAction = {
        type: "STILL_LOGGED_IN",
        payload: {
          token: 1234,
          name: "George",
          email: "george@test.com",
          role: "Hacker",
        },
      };
      const newLoggedInState = reducer(newState, stillLoggedInAction);
      expect(newLoggedInState).toEqual(user);
    });
  });
});
