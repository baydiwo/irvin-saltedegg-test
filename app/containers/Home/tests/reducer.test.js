// import produce from 'immer';
import homeReducer from "../reducer";
import {
  FETCH_DETAIL_SUCCESS,
  ADD_TO_CART,
  REMOVE_ITEM,
  ADD_QUANTITY,
  TOTAL_PRICE,
} from "../actions";

/* eslint-disable default-case, no-param-reassign */
describe("homeReducer", () => {
  let state;
  beforeEach(() => {
    state = {
      products: [],
      addedItems: [],
      total: 0,
      tempTotal: 0,
    };
  });

  // it("returns the initial state", () => {
  //   const expectedResult = state;
  //   expect(homeReducer(undefined, {})).toEqual(expectedResult);
  // });
  it("FETCH_DETAIL_SUCCESS", () => {
    const action = {
      type: FETCH_DETAIL_SUCCESS,
      payload:  [
          {
            currency: "SGD",
            image:
              "http://s3-ap-southeast-1.amazonaws.com/s3.irvinsaltedegg.com/engineering-test/images/product-1.jpg",
            name: "IPhone 7",
            price: "15",
          },
        ],
    };
    expect(homeReducer(undefined, action)).toMatchSnapshot();
  });
  
  it("ADD_TO_CART", () => {
    const action = {
      type: ADD_TO_CART,
      payload:  [
          {
            currency: "SGD",
            image:
              "http://s3-ap-southeast-1.amazonaws.com/s3.irvinsaltedegg.com/engineering-test/images/product-1.jpg",
            name: "IPhone 7",
            price: "15",
          },
        ],
    };
    expect(homeReducer(undefined, action)).toMatchSnapshot();
  });
  
  it("REMOVE_ITEM", () => {
    const action = {
      type: REMOVE_ITEM,
      payload:  [
          {
            currency: "SGD",
            image:
              "http://s3-ap-southeast-1.amazonaws.com/s3.irvinsaltedegg.com/engineering-test/images/product-1.jpg",
            name: "IPhone 7",
            price: "15",
          },
        ],
    };
    expect(homeReducer(undefined, action)).toMatchSnapshot();
  });
  
  it("ADD_QUANTITY", () => {
    const action = {
      type: ADD_QUANTITY,
      payload:  [
          {
            currency: "SGD",
            image:
              "http://s3-ap-southeast-1.amazonaws.com/s3.irvinsaltedegg.com/engineering-test/images/product-1.jpg",
            name: "IPhone 7",
            price: "15",
          },
        ],
    };
    expect(homeReducer(undefined, action)).toMatchSnapshot();
  });
  
  it("TOTAL_PRICE", () => {
    const action = {
      type: TOTAL_PRICE,
      payload:  [
          {
            currency: "SGD",
            image:
              "http://s3-ap-southeast-1.amazonaws.com/s3.irvinsaltedegg.com/engineering-test/images/product-1.jpg",
            name: "IPhone 7",
            price: "15",
          },
        ],
    };
    expect(homeReducer(undefined, action)).toMatchSnapshot();
  });
  

  /**
   * Example state change comparison
   *
   * it('should handle the someAction action correctly', () => {
   *   const expectedResult = produce(state, draft => {
   *     draft.loading = true;
   *     draft.error = false;
   *     draft.userData.nested = false;
   *   });
   *
   *   expect(appReducer(state, someAction())).toEqual(expectedResult);
   * });
   */
});
