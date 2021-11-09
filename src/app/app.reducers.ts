import { combineReducers } from 'redux';

import authReducer from '@app/auth/auth.reducers';

const appReducer = combineReducers({
  authReducer
});

export default appReducer;
