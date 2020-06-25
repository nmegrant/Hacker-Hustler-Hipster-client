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
    test("returns a new state with the payload object array included", () => {
      const ideas = [{ test: "test" }, { test: "test" }, { test: "test" }];
      const action = { type: "FETCH_IDEAS", payload: ideas };
      const newState = reducer(initialState, action);
      expect(newState[0].test).toBe(ideas[0].test);
      expect(newState).toEqual(ideas);
    });
  });

  describe("when given a NEW_IDEA_ADDED action type", () => {
    test("returns a new state of an array of objects that is length + 1 of the original state", () => {
      const ideas = [{ test: "test" }, { test: "test" }, { test: "test" }];
      const idea = { newIdea: "newIdea" };
      const action = {
        type: "NEW_IDEA_ADDED",
        payload: idea,
      };
      const newState = reducer(ideas, action);
      expect(newState).toHaveLength(ideas.length + 1);
    });
  });
  describe("when given a DELETE_IDEA action type", () => {
    test("returns a new state that is length - 1 of the original state", () => {
      const ideas = [{ id: 1 }, { id: 2 }, { id: 2 }];
      const id = 1;
      const action = {
        type: "DELETE_IDEA",
        payload: id,
      };
      const newState = reducer(ideas, action);
      expect(newState).toHaveLength(ideas.length - 1);
    });
  });
});
