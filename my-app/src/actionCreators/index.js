import {
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
  CLEAR_DATA,
} from '../actions';

export const fetchDataPending = (payload) => ({
  type: FETCH_DATA_PENDING,
  payload
});

export const fetchDataSuccess = (payload) => ({
  type: FETCH_DATA_SUCCESS,
  payload
});

export const fetchDataFail = (payload) => ({
  type: FETCH_DATA_FAIL,
  payload
});

export const clearData = (payload) => ({
  type: CLEAR_DATA,
  payload
});
