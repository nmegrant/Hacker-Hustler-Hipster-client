import { homepagesFetched } from "../actions";

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
