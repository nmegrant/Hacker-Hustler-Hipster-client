import reducer from "../reducer";

describe("myPageReducer", () => {
  const initialState = {};
  describe("if given no state and a random action", () => {
    test("returns the inital state", () => {
      const newState = reducer(undefined, { type: "ANY" });
      expect(newState).toEqual(initialState);
    });
  });

  describe("when given a FETCHED_MY_PAGE_DETAILS action type", () => {
    test("returns a new state with of the payload object", () => {
      const myPage = { test: "test" };
      const action = { type: "FETCHED_MY_PAGE_DETAILS", payload: myPage };
      const newState = reducer(myPage, action);
      expect(newState.test).toBe(myPage.test);
      expect(newState).toEqual(myPage);
    });
  });

  describe("when given a UPDATE_MY_PAGE_DETAILS action type", () => {
    test("returns a new state that is includes the updated value", () => {
      const myPage = { test: "test", test2: "test2" };
      const newInfo = { test2: "newIdea" };
      const action = {
        type: "UPDATE_MY_PAGE_DETAILS",
        payload: newInfo,
      };
      const newState = reducer(myPage, action);
      expect(newState.test2).toBe("newIdea");
    });
    test("returns a original state if no update provided", () => {
      const myPage = { test: "test", test2: "test2" };
      const newInfo = {};
      const action = {
        type: "UPDATE_MY_PAGE_DETAILS",
        payload: newInfo,
      };
      const newState = reducer(myPage, action);
      expect(newState.test2).toBe("test2");
    });
    test("returns a whole new state if entire state updated", () => {
      const myPage = { test: "test", test2: "test2" };
      const newInfo = { test: "newtest", test2: "newtest2" };
      const action = {
        type: "UPDATE_MY_PAGE_DETAILS",
        payload: newInfo,
      };
      const newState = reducer(myPage, action);
      expect(newState).toEqual(newInfo);
    });
  });
});