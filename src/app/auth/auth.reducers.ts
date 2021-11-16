import { createReducer } from '@app/core/helpers/reducer-factory';
import ACTION_TYPES from '@core/constants/types';

const initialState = {
  isLoading: false,
  isProcessing: false,
  hasError: false,
  data: null,
  error: null,
  userInfo: null,
};

// const signInSuccess = (state, payload) => ({
//   ...state,
//   isLoading: false,
//   data: payload.data
// });

// const signInError = (state, payload) => ({
//   ...state,
//   isLoading: false,
//   hasError: true,
//   error: payload.error
// });

// const signIn = (state, payload) => ({
//   ...state,
//   isLoading: true
// });

// const strategies = {
//   [ACTION_TYPES.SIGN_IN_SUCCESS]: signInSuccess,
//   [ACTION_TYPES.SIGN_IN]: signIn,
//   [ACTION_TYPES.SIGN_IN_ERROR]: signInError,
//   __default__: state => state
// };

// const authReducer = createReducer(strategies, initialState);
function authReducer(state = initialState, action) {
  switch (action.type) {
      case ACTION_TYPES.GET_USER_INFO:
        //console.log(action.payload);
          return {
              ...state,
              userInfo: action.payload
          };
      default:
          return state;
  }
}
export default authReducer;
