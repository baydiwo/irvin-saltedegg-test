// @flow
import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_DETAIL } from "./constants";
import { fetchDetailSuccess, fetchDetailError, type GetProductsSuccessActionType } from "./actions";
import type { Saga } from "redux-saga";

import request from "../../utils/request";

export function* fetchDetail(action: GetProductsSuccessActionType): Saga<void> {
  try {
    const { data } = yield call(
      request,
      "http://s3.irvinsaltedegg.com.s3-ap-southeast-1.amazonaws.com/engineering-test/products.json"
    );

    yield put(fetchDetailSuccess(data));
  } catch (error) {
    yield put(fetchDetailError(error));
  }
}

// Individual exports for testing
export default function* homeSaga(): Saga<void> {
  yield takeLatest(FETCH_DETAIL, fetchDetail);
}
