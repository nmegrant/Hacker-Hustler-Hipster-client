import { homepageDetailsFetched } from "../actions";

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
