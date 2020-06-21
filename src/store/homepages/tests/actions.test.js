import {
  homepagesFetched,
  fetchHomepagesThunkCreator,
  fetchFilteredHomepageThunkCreator,
} from "../actions";
import { appLoading, appDoneLoading } from "../../appState/actions";
import axios from "axios";

describe("#fetchHomepages", () => {
  describe("if given an array of homepages", () => {
    test("should return an action array containing object homepages", () => {
      const homepages = [{}, {}];
      const expected = {
        type: "HOMEPAGES_FETCHED",
        payload: [{}, {}],
      };
      expect(homepagesFetched(homepages)).toEqual(expected);
    });
    test("the payload of whats returned should have the same length as the homepages array", () => {
      const homepages = [{}, {}];
      const action = homepagesFetched(homepages);
      expect(action.payload).toHaveLength(homepages.length);
    });
    test("the payload of whats returned should contain objects with the same value as the homepages array", () => {
      const homepages = [{ test: "test" }, { test: "test" }];
      const action = homepagesFetched(homepages);
      expect(action.payload).toEqual(homepages);
    });
  });
});

jest.mock("axios");

describe("#fetchHomepages", () => {
  describe("when called", () => {
    test("should dispatch an action HOMEPAGES_FETCHED, APP_LOADING, APP_DONE_LOADING", async () => {
      const fakeHomepages = [{}, {}];
      const response = { data: fakeHomepages };
      axios.get.mockImplementationOnce(() => Promise.resolve(response));
      const dispatch = jest.fn();
      const getState = jest.fn().mockReturnValueOnce([]);
      await fetchHomepagesThunkCreator()(dispatch, getState);
      expect(dispatch).toHaveBeenCalledWith(appLoading());
      expect(dispatch).toHaveBeenCalledWith(homepagesFetched(fakeHomepages));
      expect(dispatch).toHaveBeenCalledWith(appDoneLoading());
      expect(dispatch).toHaveBeenCalledTimes(3);
    });
  });
});

describe("#fetchFilteredHomepages", () => {
  describe("when called", () => {
    test("should dispatch an action HOMEPAGES_FETCHED, APP_LOADING, APP_DONE_LOADING", async () => {
      const fakeHomepages = [{}, {}];
      const response = { data: fakeHomepages };
      axios.get.mockImplementationOnce(() => Promise.resolve(response));
      const dispatch = jest.fn();
      const getState = jest.fn().mockReturnValueOnce([]);
      await fetchFilteredHomepageThunkCreator()(dispatch, getState);
      expect(dispatch).toHaveBeenCalledWith(appLoading());
      expect(dispatch).toHaveBeenCalledWith(homepagesFetched(fakeHomepages));
      expect(dispatch).toHaveBeenCalledWith(appDoneLoading());
      expect(dispatch).toHaveBeenCalledTimes(3);
    });
  });
});
