/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { take, call, put, select } from 'redux-saga/effects';
import * as sagas from '../saga';
import {
  fetchDetailSuccess,
} from "../actions";
import { FETCH_DETAIL_SUCCESS } from '../constants';
import request from "../../../utils/request";

// jest.mock("../../common/config", () => ({
//   API_URL: "https://mockedURL.com",
// }));
// const generator = homeSaga();

describe("homeSaga Saga", () => {
  it("handle fetchDetailSuccess", () => {
    const successPayload = [
      {
        currency: "SGD",
        image: "http://s3-ap-southeast-1.amazonaws.com/s3.irvinsaltedegg.com/engineering-test/images/product-1.jpg",
        name: "IPhone 7",
        price: "15",
      }
    ]
    const action = {type: FETCH_DETAIL_SUCCESS};

    const gen = sagas.fetchDetail(action);
    let effect;
    effect = call(
      request,
      "http://s3.irvinsaltedegg.com.s3-ap-southeast-1.amazonaws.com/engineering-test/products.json"
    );
    expect(gen.next(successPayload).value).toEqual(effect);
  });
});
