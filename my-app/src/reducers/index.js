import {
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
  CLEAR_DATA,
} from '../actions';

const initialState = {
  loading: false,
  errorMessage: '',
  rowData: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_PENDING:
      return {
        ...state,
        errorMessage: '',
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        rowData: action.payload,
      }
    case FETCH_DATA_FAIL:
      return {
        ...state,
        errorMessage: action.payload,
      }
    case CLEAR_DATA:
      return {
        ...initialState
      };
    default:
      return state;
  }
}

export default rootReducer;