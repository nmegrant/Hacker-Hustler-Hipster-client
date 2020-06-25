import reducer from "../reducer";

describe("homepageDetailsReducer", () => {
  const initialState = {};
  describe("if given no state and a random action", () => {
    test("returns the inital state", () => {
      const newState = reducer(undefined, { type: "ANY" });
      expect(newState).toEqual(initialState);
    });
  });

  describe("when given a FETCHED_DETAILS action type", () => {
    test("returns a new state with the payload object included", () => {
      const homepageDetails = { test: "test" };
      const action = { type: "FETCHED_DETAILS", payload: homepageDetails };
      const newState = reducer(initialState, action);
      expect(newState.test).toBe(homepageDetails.test);
      expect(newState).toEqual(homepageDetails);
    });
  });
});
