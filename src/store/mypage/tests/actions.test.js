import { myPageDetailsFetched, editMyHomepageDetails } from "../actions";

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
