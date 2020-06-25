import { fetchedSkills, fetchSkillsThunkCreator } from "../actions";
import axios from "../../axios";

describe("#fetchSkills", () => {
  describe("if given an array with skill info", () => {
    test("should return an action object with type FETCHED_SKILLS and payload of an array of objects", () => {
      const skills = [{ test: "test" }, { test1: "test1" }];
      const expected = {
        type: "FETCHED_SKILLS",
        payload: skills,
      };
      expect(fetchedSkills(skills)).toEqual(expected);
    });
    test("should return a payload that is the same as the array of objects passed", () => {
      const skills = [{ test: "test" }, { test1: "test1" }];
      expect(fetchedSkills(skills).payload).toEqual(skills);
    });
  });
});

jest.mock("../../axios");

describe("#fetchSkills", () => {
  describe("when called", () => {
    test("should dispatch an action fetchSkills", async () => {
      const fakeSkills = [{}, {}];
      const response = { data: fakeSkills };
      axios.get.mockImplementationOnce(() => Promise.resolve(response));
      const dispatch = jest.fn();
      const getState = jest.fn().mockReturnValueOnce([]);
      await fetchSkillsThunkCreator()(dispatch, getState);
      expect(dispatch).toHaveBeenCalledWith(fetchedSkills(fakeSkills));
      expect(dispatch).toHaveBeenCalledTimes(1);
    });
  });
});
