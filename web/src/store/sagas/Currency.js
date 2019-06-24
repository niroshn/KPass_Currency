import { call, put, takeEvery, all } from 'redux-saga/effects';
import * as actions from '../actions';
import { API_ERROR, SUBMIT_FORM_SUCCESS } from '../actions';

import API from '../api';

function delay(duration) {
  const promise = new Promise(resolve => {
    setTimeout(() => resolve(true), duration);
  });
  return promise;
}

function* fetchCurrencyData(action) {
  while (true) {
    try {
      const { data } = yield call(API.getCurrencyInfo);
      yield put({ type: SUBMIT_FORM_SUCCESS, data: data });
      yield call(delay, 3000);
    } catch (error) {
      yield put({ type: API_ERROR, code: error.code });
    }
  }
}

function* watchAppLoad() {
  yield all([takeEvery(actions.SUBMIT_FORM_START, fetchCurrencyData)]);
}

export default watchAppLoad;
