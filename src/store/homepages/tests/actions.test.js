import { homepagesFetched } from "../actions";

describe("#fetchHomepages", () => {
  describe("if given an array of homepages", () => {
    test("should return an action array containing homepages", () => {
      const homepages = [{}, {}];
      const expected = {
        type: "HOMEPAGES_FETCHED",
        payload: [{}, {}],
      };
      const action = homepagesFetched(homepages);
      expect(action).toEqual(expected);
    });
  });
});
