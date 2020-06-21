import {
  setMessage,
  clearMessage,
  appLoading,
  appDoneLoading,
  showMessageThunkCreator,
} from "../actions";
import axios from "axios";

describe("#appstate", () => {
  describe("if given set message with message and variant", () => {
    test("should return an object containing message and variant", () => {
      let message = "test";
      let variant = "also test";
      const expected = {
        type: "SET_MESSAGE",
        payload: { message, variant },
      };
      expect(setMessage(message, variant)).toEqual(expected);
    });
    test("payload should be the same as message, variant passed", () => {
      let message = "test";
      let variant = "also test";
      const expected = {
        type: "SET_MESSAGE",
        payload: { message, variant },
      };
      expect(setMessage(message, variant).payload).toEqual({
        message,
        variant,
      });
    });
    describe("if given clear message ", () => {
      test("should return an object containing null payload", () => {
        const expected = {
          type: "CLEAR_MESSAGE",
          payload: null,
        };
        expect(clearMessage()).toEqual(expected);
      });
    });
  });
  describe("if given apploading", () => {
    test("should return an action type LOADING and payload true", () => {
      const expected = {
        type: "LOADING",
        payload: true,
      };
      expect(appLoading()).toEqual(expected);
    });
  });
  describe("if given app done loading", () => {
    test("should return an action type DONE_LOADING and payload false", () => {
      const expected = {
        type: "DONE_LOADING",
        payload: false,
      };
      expect(appDoneLoading()).toEqual(expected);
    });
  });
});

jest.mock("axios");

describe("#fetchHomepageDetails", () => {
  describe("when called", () => {
    test("should dispatch an action set message", async () => {
      const message = "Hi";
      const variant = "info";
      axios.get.mockImplementationOnce(() => Promise.resolve());
      const dispatch = jest.fn();
      const getState = jest.fn().mockReturnValueOnce([]);
      await showMessageThunkCreator(message, variant)(dispatch, getState);
      expect(dispatch).toHaveBeenCalledWith(setMessage(message, variant));
      expect(dispatch).toHaveBeenCalledTimes(1);
    });
  });
});
