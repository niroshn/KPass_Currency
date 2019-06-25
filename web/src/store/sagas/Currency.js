import { call, put, takeEvery, all } from 'redux-saga/effects';
import { API_ERROR, SUBMIT_FORM_SUCCESS, SUBMIT_FORM_START } from '../actions';

import API from '../api';

function delay(duration) {
  const promise = new Promise(resolve => {
    setTimeout(() => resolve(true), duration);
  });
  return promise;
}

function* fetchCurrencyData() {
  try {
    const { data } = yield call(API.getCurrencyInfo, { data: 1 });
    yield put({ type: SUBMIT_FORM_SUCCESS, data });
    yield call(delay, 3000);
  } catch (error) {
    yield put({ type: API_ERROR, code: error.code });
  }
}

function* watchAppLoad() {
  yield all([takeEvery(SUBMIT_FORM_START, fetchCurrencyData)]);
}

export default watchAppLoad;
