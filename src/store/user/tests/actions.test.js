import {
  loggedIn,
  loggedOut,
  stillLoggedIn,
  loginThunkCreator,
  signUpThunkCreator,
} from "../actions";
import axios from "../../axios";

describe("#fetchUserandloggin/out", () => {
  describe("if given an object with user info", () => {
    test("should return an object containing payload user info and type LOGGED_IN", () => {
      const user = { test: "test" };
      const expected = {
        type: "LOGGED_IN",
        payload: user,
      };
      expect(loggedIn(user)).toEqual(expected);
    });
    test("should return a payload that is the same as user object passed in", () => {
      const user = { test: "test" };
      expect(loggedIn(user).payload).toEqual(user);
    });
  });
  describe("if loggedOut is called", () => {
    test("should return a payload object with null payload and type LOGGED_OUT", () => {
      const expected = {
        type: "LOGGED_OUT",
        payload: null,
      };
      expect(loggedOut()).toEqual(expected);
    });
  });
  describe("if given an object of user info", () => {
    test("should return an object containing payload user info and type STILL_LOGGED_IN", () => {
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

jest.mock("../../axios");

describe("#postLogin", () => {
  describe("when called and success", () => {
    test("should dispatch an action post to log in", async () => {
      const fakeUser = {};
      const response = { data: fakeUser };
      axios.post.mockImplementationOnce(() => Promise.resolve(response));
      const dispatch = jest.fn();
      const getState = jest.fn().mockReturnValueOnce([]);
      await loginThunkCreator()(dispatch, getState);
      expect(dispatch).toHaveBeenCalledWith(loggedIn(fakeUser));
      expect(dispatch).toHaveBeenCalledTimes(2);
    });
  });
  describe("when called and failed", () => {
    test("should dispatch an action message", async () => {
      const error = { response: { data: { message: "error" } } };
      axios.post.mockImplementationOnce(() => Promise.reject(error));
      const dispatch = jest.fn();
      const getState = jest.fn().mockReturnValueOnce([]);
      await loginThunkCreator()(dispatch, getState);
      expect(dispatch).toHaveBeenCalledTimes(1);
    });
  });
});

describe("#postSignUp", () => {
  describe("when called and success", () => {
    test("should dispatch an action post to log in", async () => {
      const fakeUser = {};
      const response = { data: fakeUser };
      axios.post.mockImplementationOnce(() => Promise.resolve(response));
      const dispatch = jest.fn();
      const getState = jest.fn().mockReturnValueOnce([]);
      await signUpThunkCreator()(dispatch, getState);
      expect(dispatch).toHaveBeenCalledWith(loggedIn(fakeUser));
      expect(dispatch).toHaveBeenCalledTimes(2);
    });
  });
  describe("when called and failed", () => {
    test("should dispatch an action message", async () => {
      const error = { response: { data: { message: "error" } } };
      axios.post.mockImplementationOnce(() => Promise.reject(error));
      const dispatch = jest.fn();
      const getState = jest.fn().mockReturnValueOnce([]);
      await signUpThunkCreator()(dispatch, getState);
      expect(dispatch).toHaveBeenCalledTimes(1);
    });
  });
});
