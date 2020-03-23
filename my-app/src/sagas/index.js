import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_DATA_PENDING } from '../actions';
import { fetchDataSuccess, fetchDataFail } from '../actionCreators';

const API_URL = 'https://api.myjson.com/bins/15psn9';

function* fetchRawData() {
  try {
    const { data } = yield call(axios.get, API_URL);

    yield put(fetchDataSuccess(data));
  } catch (e) {
    yield put(fetchDataFail('Something went wrong'));
    global.console.error('Error from mySaga', e);
  }
}

function* mySaga() {
  yield takeLatest(FETCH_DATA_PENDING, fetchRawData);
}

export default mySaga;