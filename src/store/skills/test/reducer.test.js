import reducer from "../reducer";

describe("skillsReducer", () => {
  const initialState = [];
  describe("if given no state and a random action", () => {
    test("returns the inital state", () => {
      const newState = reducer(undefined, { type: "ANY" });
      expect(newState).toEqual(initialState);
    });
  });

  describe("when given a FETCHED_SKILLS action type", () => {
    test("returns a new state with the payload array of objects object", () => {
      const skills = [{ test: "test" }, { test1: "test1", test2: "test2" }];
      const action = { type: "FETCHED_SKILLS", payload: skills };
      const newState = reducer(skills, action);
      expect(newState).toHaveLength(skills.length);
      expect(newState).toEqual(skills);
    });
  });
});
