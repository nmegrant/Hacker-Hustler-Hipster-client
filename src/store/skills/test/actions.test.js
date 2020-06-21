import { fetchedSkills } from "../actions";

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
