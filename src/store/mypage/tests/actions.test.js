import {
  myPageDetailsFetched,
  editMyHomepageDetails,
  fetchMyHomepageDetailsThunkCreator,
  addNewSkills,
} from "../actions";
import axios from "axios";
import { appLoading, appDoneLoading } from "../../appState/actions";

describe("#fetchEditMypage", () => {
  describe("if given an object with mypage info", () => {
    test("should return an object containing mypage", () => {
      const myPage = { test: "test", test1: "test1" };
      const expected = {
        type: "FETCHED_MY_PAGE_DETAILS",
        payload: myPage,
      };
      expect(myPageDetailsFetched(myPage)).toEqual(expected);
    });
  });

  describe("if editing the my homepage object", () => {
    test("should return the myhomepage object edit info", () => {
      const myPageEdit = { test: "test" };
      const expected = {
        type: "UPDATE_MY_PAGE_DETAILS",
        payload: myPageEdit,
      };
      expect(editMyHomepageDetails(myPageEdit)).toEqual(expected);
    });
  });
  describe("if adding new skill", () => {
    test("should return the update my skills object", () => {
      const newSkills = [{ test: "test" }, { test: "test" }];
      const expected = {
        type: "UPDATE_MY_SKILLS",
        payload: newSkills,
      };
      expect(addNewSkills(newSkills)).toEqual(expected);
    });
  });
});

jest.mock("axios");

describe("#fetchHomepageDetails", () => {
  describe("when called", () => {
    test("should dispatch an action FETCHED_DETAILS, APP_LOADING, APP_DONE_LOADING", async () => {
      const fakeMyHomepageDetail = {};
      const response = { data: fakeMyHomepageDetail };
      axios.get.mockImplementationOnce(() => Promise.resolve(response));
      const dispatch = jest.fn();
      const getState = jest.fn().mockReturnValueOnce([]);
      await fetchMyHomepageDetailsThunkCreator()(dispatch, getState);
      expect(dispatch).toHaveBeenCalledWith(appLoading());
      expect(dispatch).toHaveBeenCalledWith(
        myPageDetailsFetched(fakeMyHomepageDetail)
      );
      expect(dispatch).toHaveBeenCalledWith(appDoneLoading());
      expect(dispatch).toHaveBeenCalledTimes(3);
    });
  });
});
