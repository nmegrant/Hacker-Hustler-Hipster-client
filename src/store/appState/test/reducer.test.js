import reducer from "../reducer";

describe("userReducer", () => {
  const initialState = {
    loading: false,
    info: null,
  };
  describe("if given no state and a random action", () => {
    test("returns the inital state", () => {
      const newState = reducer(undefined, { type: "ANY" });
      expect(newState).toEqual(initialState);
    });
  });

  describe("when given a SET_MESSAGE action type", () => {
    test("returns info object", () => {
      let message = "Hi";
      let variant = "info";
      const info = {
        message,
        variant,
      };
      const action = { type: "SET_MESSAGE", payload: info };
      const newState = reducer(initialState, action);
      expect(newState).toEqual({ info, loading: false });
    });
    test("returns a new state with the payload object values are correct", () => {
      let message = "Hi";
      let variant = "info";
      const info = {
        message,
        variant,
      };
      const action = { type: "SET_MESSAGE", payload: info };
      const newState = reducer(initialState, action);
      expect(newState.info.message).toBe(message);
      expect(newState.info.variant).toBe(variant);
    });
  });
  describe("when given a CLEAR_MESSAGE action type", () => {
    test("returns null", () => {
      let message = "Hi";
      let variant = "info";
      const info = {
        message,
        variant,
      };
      const action = { type: "SET_MESSAGE", payload: info };
      const newState = reducer(initialState, action);
      const clearAction = { type: "CLEAR_MESSAGE", payload: null };
      const newClearState = reducer(newState, clearAction);
      expect(newClearState).toEqual({ info: null, loading: false });
    });
  });
  //
  describe("when given a LOADING action type", () => {
    test("returns loading object", () => {
      const action = { type: "LOADING", payload: true };
      const newState = reducer(initialState, action);
      expect(newState).toEqual({ info: null, loading: true });
    });
  });
  describe("when given a DONE_LOADING action type", () => {
    test("returns null", () => {
      const action = { type: "LOADING", payload: true };
      const newState = reducer(initialState, action);
      const doneAction = { type: "DONE_LOADING", payload: false };
      const newDoneState = reducer(newState, doneAction);
      expect(newDoneState).toEqual({ info: null, loading: false });
    });
  });
});
