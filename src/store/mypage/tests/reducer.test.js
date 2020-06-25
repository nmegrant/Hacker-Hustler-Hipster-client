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
      const newState = reducer(initialState, action);
      expect(newState.test).toBe(myPage.test);
      expect(newState).toEqual(myPage);
    });
  });

  describe("when given a UPDATE_MY_PAGE_DETAILS action type", () => {
    test("returns a new state that includes the updated value", () => {
      const myPage = { test: "test", test2: "test2" };
      const newInfo = { test2: "newIdea" };
      const action = {
        type: "UPDATE_MY_PAGE_DETAILS",
        payload: newInfo,
      };
      const newState = reducer(myPage, action);
      expect(newState.test2).toBe("newIdea");
    });
    test("returns the original state if no update provided", () => {
      const myPage = { test: "test", test2: "test2" };
      const newInfo = { test3: "test3" };
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
  describe("when given UPDATE_MY_SKILLS action type", () => {
    test("returns a new state with skills updated", () => {
      const myPageAndSkills = {
        bio: "hello",
        user: { email: "test", tags: ["test1", "test2"] },
      };
      const newSkills = ["test3", "test4"];
      const action = { type: "UPDATE_MY_SKILLS", payload: newSkills };
      const newState = reducer(myPageAndSkills, action);
      expect(newState.user.tags).toEqual(["test1", "test2", "test3", "test4"]);
    });
  });
  describe("when given ADD_MY_WEBSITE action type", () => {
    test("returns a new state with websites updated", () => {
      const myPageAndWebsites = {
        bio: "hello",
        user: { email: "test", tags: ["test1", "test2"] },
        websites: ["one", "two"],
      };
      const newWebsites = ["test3", "test4"];
      const action = { type: "ADD_MY_WEBSITE", payload: newWebsites };
      const newState = reducer(myPageAndWebsites, action);
      expect(newState.websites).toEqual(["one", "two", "test3", "test4"]);
    });
  });
});
