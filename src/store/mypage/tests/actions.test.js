import axios from "../../axios";
import {
  myPageDetailsFetched,
  editMyHomepageDetails,
  fetchMyHomepageDetailsThunkCreator,
  addNewSkills,
} from "../actions";
import { appLoading, appDoneLoading } from "../../appState/actions";

describe("#fetchEditMypage", () => {
  describe("if given an object with mypage info", () => {
    test("should return an object containing mypage info as payload and FETCHED_MY_PAGE_DETAILS", () => {
      const myPage = { test: "test", test1: "test1" };
      const expected = {
        type: "FETCHED_MY_PAGE_DETAILS",
        payload: myPage,
      };
      expect(myPageDetailsFetched(myPage)).toEqual(expected);
    });
  });

  describe("if editing the my homepage object", () => {
    test("should return the myhomepage object edit info as payload with type UPDATE_MY_PAGE_DETAILS", () => {
      const myPageEdit = { test: "test" };
      const expected = {
        type: "UPDATE_MY_PAGE_DETAILS",
        payload: myPageEdit,
      };
      expect(editMyHomepageDetails(myPageEdit)).toEqual(expected);
    });
  });
  describe("if adding new skills", () => {
    test("should return my skills action object with type UPDATE_MY_SKILLS and payload newSkills array", () => {
      const newSkills = [{ test: "test" }, { test: "test" }];
      const expected = {
        type: "UPDATE_MY_SKILLS",
        payload: newSkills,
      };
      expect(addNewSkills(newSkills)).toEqual(expected);
    });
  });
  describe("if adding new websites", () => {
    test("should return my website action object with type UPDATE_MY_SKILLS and payload newWebsites array", () => {
      const newWebsites = [{ test: "test" }, { test: "test" }];
      const expected = {
        type: "UPDATE_MY_SKILLS",
        payload: newWebsites,
      };
      expect(addNewSkills(newWebsites)).toEqual(expected);
    });
  });
});

jest.mock("../../axios");

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
