import axios from "../../axios";
import {
  homepageDetailsFetched,
  fetchHomepageDetailsThunkCreator,
} from "../actions";
import { appLoading, appDoneLoading } from "../../appState/actions";

describe("#fetchHomepageDetails", () => {
  describe("if given an object of homepage details", () => {
    //
    test("should return an action containing object homepage details", () => {
      const homepageDetails = {};
      const expected = {
        type: "FETCHED_DETAILS",
        payload: {},
      };
      expect(homepageDetailsFetched(homepageDetails)).toEqual(expected);
    });
    test("the payload of whats returned should be an object with the same value as the homepage object", () => {
      const homepageDetails = { test: "test" };
      const action = homepageDetailsFetched(homepageDetails);
      expect(action.payload).toEqual(homepageDetails);
    });
  });
});

jest.mock("axios");

describe("#fetchHomepageDetails", () => {
  describe("when called", () => {
    test("should dispatch an action FETCHED_DETAILS, APP_LOADING, APP_DONE_LOADING", async () => {
      const fakeHomepageDetails = {};
      const response = { data: fakeHomepageDetails };
      axios.get.mockImplementationOnce(() => Promise.resolve(response));
      const dispatch = jest.fn();
      const getState = jest.fn().mockReturnValueOnce([]);
      await fetchHomepageDetailsThunkCreator()(dispatch, getState);
      expect(dispatch).toHaveBeenCalledWith(appLoading());
      expect(dispatch).toHaveBeenCalledWith(
        homepageDetailsFetched(fakeHomepageDetails)
      );
      expect(dispatch).toHaveBeenCalledWith(appDoneLoading());
      expect(dispatch).toHaveBeenCalledTimes(3);
    });
  });
  describe("when called and reject", () => {
    test("error should dispatch showMessageThunkCreator", async () => {
      const error = { response: { data: { message: "error" } } };
      axios.get.mockImplementationOnce(() => Promise.reject(error));
      const dispatch = jest.fn();
      const getState = jest.fn().mockReturnValueOnce([]);
      await fetchHomepageDetailsThunkCreator()(dispatch, getState);
      expect(dispatch).toHaveBeenCalledWith(appLoading());
      expect(dispatch).toHaveBeenCalledWith(appDoneLoading());
      expect(dispatch).toHaveBeenCalledTimes(3);
    });
  });
});
