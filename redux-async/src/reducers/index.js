import {
  FETCH_ADVICE,
  FETCH_ADVICE_SUCCESS,
  ADVICE_CLEAR,
  FETCH_ADVICE_FAIL
} from '../actions/index';

const initialState = {
  advice: null,
  isLoading: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADVICE: {
      return {
        ...state,
        isLoading: true
      };
    }
    case FETCH_ADVICE_SUCCESS: {
      return {
        ...state,
        advice: action.payload,
        isLoading: false
      };
    }
    case ADVICE_CLEAR: {
      return {
        ...state,
        advice: null
      };
    }
    case FETCH_ADVICE_FAIL: {
      return {
        ...state,
        advice: null,
        isLoading: false
      };
    }
    default:
      return state;
  }
};
