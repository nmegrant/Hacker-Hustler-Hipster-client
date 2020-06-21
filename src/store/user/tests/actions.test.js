import { loggedIn, loggedOut, stillLoggedIn } from "../actions";

describe("#fetchUserandloggin/out", () => {
  describe("if given an object with user info", () => {
    test("should return an object containing user info", () => {
      const user = { test: "test" };
      const expected = {
        type: "LOGGED_IN",
        payload: user,
      };
      expect(loggedIn(user)).toEqual(expected);
    });
    test("payload should be the same as user object passed", () => {
      const user = { test: "test" };
      const expected = {
        type: "LOGGED_IN",
        payload: user,
      };
      expect(loggedIn(user).payload).toEqual(user);
    });
  });
  describe("if given an object with action log out", () => {
    test("should return an object null payload", () => {
      const expected = {
        type: "LOGGED_OUT",
        payload: null,
      };
      expect(loggedOut()).toEqual(expected);
    });
  });
  describe("if given an object with user info while still logged in", () => {
    test("should return an object containing user info", () => {
      const user = { test: "test" };
      const expected = {
        type: "STILL_LOGGED_IN",
        payload: user,
      };
      expect(stillLoggedIn(user)).toEqual(expected);
    });
    test("payload should be the same as user object passed for still logged in", () => {
      const user = { test: "test" };
      const expected = {
        type: "STILL_LOGGED_IN",
        payload: user,
      };
      expect(stillLoggedIn(user).payload).toEqual(user);
    });
  });
});

//GET THIS WORKING
// describe("#fetchHomepages", () => {
//     describe("when called", () => {
//       test("should dispatch an action FETCH_HOMEPAGES_SUCCESS", async () => {
//         const fakeHomepages = [{}, {}];
//         const response = { data: { homepages: { rows: fakeHomepages } } };
//         axios.get.mockImplementationOnce(() => Promise.resolve(response));
//         const dispatch = jest.fn();
//         const getState = jest.fn().mockReturnValueOnce({ homepages: [] });
//         await fetchHomepages()(dispatch, getState);
//         expect(dispatch).toHaveBeenCalledWith(
//           fetchHomepagesSuccess(fakeHomepages)
//         );
//         expect(getState).toHaveBeenCalledTimes(1);
//       });
//     });
//   });
