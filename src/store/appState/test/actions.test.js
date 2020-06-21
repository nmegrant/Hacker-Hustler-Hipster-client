import {
  setMessage,
  clearMessage,
  appLoading,
  appDoneLoading,
} from "../actions";

describe("#appstate", () => {
  describe("if given set message with message and variant", () => {
    test("should return an object containing message and variant", () => {
      let message = "test";
      let variant = "also test";
      const expected = {
        type: "SET_MESSAGE",
        payload: { message, variant },
      };
      expect(setMessage(message, variant)).toEqual(expected);
    });
    test("payload should be the same as message, variant passed", () => {
      let message = "test";
      let variant = "also test";
      const expected = {
        type: "SET_MESSAGE",
        payload: { message, variant },
      };
      expect(setMessage(message, variant).payload).toEqual({
        message,
        variant,
      });
    });
  });
  describe("if given apploading", () => {
    test("should return an action type LOADING and payload true", () => {
      const expected = {
        type: "LOADING",
        payload: true,
      };
      expect(appLoading()).toEqual(expected);
    });
  });
  describe("if given app done loading", () => {
    test("should return an action type DONE_LOADING and payload false", () => {
      const expected = {
        type: "DONE_LOADING",
        payload: false,
      };
      expect(appDoneLoading()).toEqual(expected);
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
