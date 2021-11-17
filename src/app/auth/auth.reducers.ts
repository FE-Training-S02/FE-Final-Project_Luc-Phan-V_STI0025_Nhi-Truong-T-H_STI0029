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

function authReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_USER_INFO:
      return {
          ...state,
          userInfo: action.payload
      };
    default:
      return state;
  }
}
export default authReducer;
