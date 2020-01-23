import axios from 'axios';

export const FETCH_ADVICE = 'FETCH_ADVICE';
export const FETCH_ADVICE_SUCCESS = 'FETCH_ADVICE_SUCCESS';
export const FETCH_ADVICE_FAIL = 'FETCH_ADVICE_FAIL';
export const ADVICE_CLEAR = 'ADVICE_CLEAR';

export const fetchAdvice = () => dispatch => {
  dispatch({ type: FETCH_ADVICE });
  axios
    .get('https://api.adviceslip.com/advice')
    .then(res => {
      dispatch({ type: FETCH_ADVICE_SUCCESS, payload: res.data.slip });
    })
    .catch(err => {
      dispatch({ type: FETCH_ADVICE_FAIL, payload: err.response });
    });
};

export const clearAdvice = () => {
  return { type: ADVICE_CLEAR };
};
