import {
  ideasFetched,
  newIdeaAdded,
  deleteIdea,
  fetchIdeasThunkCreator,
  addNewIdeaThunkCreator,
  deleteIdeaThunkCreator,
} from "../actions";
import { appLoading, appDoneLoading } from "../../appState/actions";
import axios from "axios";

describe("#fetchDeleteAddIdeas", () => {
  describe("if given an array of idea objects", () => {
    test("should return an action containing and arry of idea objects", () => {
      const ideas = [];
      const expected = {
        type: "FETCH_IDEAS",
        payload: [],
      };
      expect(ideasFetched(ideas)).toEqual(expected);
    });
    test("the payload of whats returned should be an arry of objects with the same value idea array", () => {
      const ideas = [{ test: "test" }, { test: "test" }, { test: "test" }];
      const action = ideasFetched(ideas);
      expect(action.payload).toEqual(ideas);
    });
  });

  describe("if adding a new idea object to the idea arry", () => {
    test("should return the idea object", () => {
      const idea = {};
      const expected = {
        type: "NEW_IDEA_ADDED",
        payload: {},
      };
      expect(newIdeaAdded(idea)).toEqual(expected);
    });

    test("the payload of whats returned should be an object with the same value idea object", () => {
      const idea = { test: "test" };
      const action = deleteIdea(idea);
      expect(action.payload).toEqual(idea);
    });
  });
  describe("if deleting an idea object from the idea array", () => {
    test("should return the id of the idea object", () => {
      const id = 1;
      const expected = {
        type: "DELETE_IDEA",
        payload: 1,
      };
      expect(deleteIdea(id)).toEqual(expected);
    });

    test("the payload of whats returned should be an id number with the same value id", () => {
      const id = 2;
      const action = deleteIdea(id);
      expect(action.payload).toBe(id);
    });
  });
});

jest.mock("axios");
