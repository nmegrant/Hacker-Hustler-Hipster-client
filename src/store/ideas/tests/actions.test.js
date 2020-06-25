import axios from "../../axios";
import {
  ideasFetched,
  newIdeaAdded,
  deleteIdea,
  fetchIdeasThunkCreator,
  addNewIdeaThunkCreator,
  deleteIdeaThunkCreator,
} from "../actions";
import { appLoading, appDoneLoading } from "../../appState/actions";

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

jest.mock("../../axios");

describe("#fetch/add/deleteIdeas", () => {
  describe("when fetch called", () => {
    test("should dispatch an action APP_LOADING, APP_DONE_LOADING, ideas fetched", async () => {
      const fakeIdeas = [{}, {}];
      const response = { data: fakeIdeas };
      axios.get.mockImplementationOnce(() => Promise.resolve(response));
      const dispatch = jest.fn();
      const getState = jest.fn().mockReturnValueOnce([]);
      await fetchIdeasThunkCreator()(dispatch, getState);
      expect(dispatch).toHaveBeenCalledWith(appLoading());
      expect(dispatch).toHaveBeenCalledWith(ideasFetched(fakeIdeas));
      expect(dispatch).toHaveBeenCalledWith(appDoneLoading());
      expect(dispatch).toHaveBeenCalledTimes(3);
    });
  });
  describe("when delete called", () => {
    test("should dispatch an action delete", async () => {
      axios.get.mockImplementationOnce(() => Promise.resolve(response));
      const id = 1;
      const dispatch = jest.fn();
      const getState = jest.fn().mockReturnValueOnce([]);
      await deleteIdeaThunkCreator(id)(dispatch, getState);
      expect(dispatch).toHaveBeenCalledWith(deleteIdea(id));
      expect(dispatch).toHaveBeenCalledTimes(1);
    });
  });
  describe("when add new idea called", () => {
    test("should dispatch an action new idea", async () => {
      const fakeIdea = {};
      const response = { data: fakeIdea };
      axios.post.mockImplementationOnce(() => Promise.resolve(response));
      const dispatch = jest.fn();
      const getState = jest.fn().mockReturnValueOnce([]);
      await addNewIdeaThunkCreator(fakeIdea)(dispatch, getState);
      expect(dispatch).toHaveBeenCalledWith(newIdeaAdded(fakeIdea));
      expect(dispatch).toHaveBeenCalledTimes(1);
    });
  });
});
