import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_DETAIL } from "./constants";
import { fetchDetailSuccess, fetchDetailError } from "./actions";

import request from "utils/request";

export function* fetchDetail() {
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
export default function* homeSaga() {
  yield takeLatest(FETCH_DETAIL, fetchDetail);
}
