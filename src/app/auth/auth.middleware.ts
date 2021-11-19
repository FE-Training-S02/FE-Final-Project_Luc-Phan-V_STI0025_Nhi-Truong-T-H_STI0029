import JwtHelper from '@app/core/helpers/jwtHelper';
import { ApiService } from '@app/core/services/api.service';
import { getUserInfo } from './auth.actions';
import ACTION_TYPES from '@app/core/constants/types';

const jwtHelper = new JwtHelper();
const apiService = new ApiService();
export const loadUser = () => async dispatch => {
  const userId = jwtHelper.getUserInfo() ? jwtHelper.getUserInfo().userId : null;
  try {
    if (!userId) {
      dispatch(getUserInfo(null));
      return;
    }
    apiService.get([`/users/${userId}`])
      .then(response => {
        dispatch(getUserInfo(response));
      })
      .catch(error => { console.log(error); }
      )
  } catch (error) {
    console.log('error', error.message);
  }
}

