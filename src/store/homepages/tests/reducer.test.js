import reducer from "../reducer";

describe("homepageReducer", () => {
  const initialState = [];
  describe("if given no state and a random action", () => {
    test("returns the inital state", () => {
      const newState = reducer(undefined, { type: "ANY" });
      expect(newState).toEqual(initialState);
    });
  });

  describe("when given a HOMEPAGES_FETCHED action type", () => {
    test("returns a new state with the payload array included", () => {
      const homepages = [{ test: "test" }, { test: "test" }];
      const action = { type: "HOMEPAGES_FETCHED", payload: homepages };
      const newState = reducer(homepages, action);
      expect(newState).toHaveLength(homepages.length);
      expect(newState).toEqual(homepages);
    });
  });
});
