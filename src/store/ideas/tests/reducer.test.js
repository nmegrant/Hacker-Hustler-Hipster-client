import reducer from "../reducer";

describe("ideasReducer", () => {
  const initialState = [];
  describe("if given no state and a random action", () => {
    test("returns the inital state", () => {
      const newState = reducer(undefined, { type: "ANY" });
      expect(newState).toEqual(initialState);
    });
  });

  describe("when given a FETCH_IDEAS action type", () => {
    test("returns a new state with the payload object included", () => {
      const ideas = [{ test: "test" }, { test: "test" }, { test: "test" }];
      const action = { type: "FETCH_IDEAS", payload: ideas };
      const newState = reducer(ideas, action);
      expect(newState[0].test).toBe(ideas[0].test);
      expect(newState).toEqual(ideas);
    });
  });
});

//Do NEW_IDEA_ADDED

//Do DELETE_IDEA
