import { fetchedSkills, fetchSkillsThunkCreator } from "../actions";
import axios from "../../axios";

describe("#fetchSkills", () => {
  describe("if given an array with skill info", () => {
    test("should return an array containing my skill objects", () => {
      const skills = [{ test: "test" }, { test1: "test1" }];
      const expected = {
        type: "FETCHED_SKILLS",
        payload: skills,
      };
      expect(fetchedSkills(skills)).toEqual(expected);
    });
    test("payload should be the same as skills array passed", () => {
      const skills = [{ test: "test" }, { test1: "test1" }];
      const expected = {
        type: "FETCHED_SKILLS",
        payload: skills,
      };
      expect(fetchedSkills(skills).payload).toEqual(skills);
    });
  });
});

jest.mock("axios");

describe("#fetchSkills", () => {
  describe("when called", () => {
    test("should dispatch an action to fetch skills", async () => {
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
