import { ideasFetched, newIdeaAdded } from "../actions";

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
      const action = ideasFetched(idea);
      expect(action.payload).toEqual(idea);
    });
  });
  describe("if deleting an idea object from the idea array", () => {
    test("should return the id of the idea object", () => {
      const id = 1;
      const expected = {
        type: "NEW_IDEA_ADDED",
        payload: 1,
      };
      expect(newIdeaAdded(id)).toEqual(expected);
    });

    test("the payload of whats returned should be an id number with the same value id", () => {
      const id = 2;
      const action = ideasFetched(id);
      expect(action.payload).toEqual(id);
    });
  });
});

//Do deleteIdea

//GET THIS WORKING
// describe("#fetchHomepages", () => {
//     describe("when called", () => {
//       test("should dispatch an action FETCH_HOMEPAGES_SUCCESS", async () => {
//         const fakeHomepages = [{}, {}];
//         const response = { data: { homepages: { rows: fakeHomepages } } };
//         axios.get.mockImplementationOnce(() => Promise.resolve(response));
//         const dispatch = jest.fn();
//         const getState = jest.fn().mockReturnValueOnce({ homepages: [] });
//         await fetchHomepages()(dispatch, getState);
//         expect(dispatch).toHaveBeenCalledWith(
//           fetchHomepagesSuccess(fakeHomepages)
//         );
//         expect(getState).toHaveBeenCalledTimes(1);
//       });
//     });
//   });
