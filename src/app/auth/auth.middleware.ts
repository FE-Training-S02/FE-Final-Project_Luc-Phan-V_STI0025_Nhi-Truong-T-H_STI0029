import JwtHelper from '@app/core/helpers/jwtHelper';
import { environment } from '@config/environment';
import { AuthStorageService } from '@app/core/services/authStorage.service';
import { ApiService } from '@app/core/services/api.service';
import ACTION_TYPES from '@app/core/constants/types';
import { RootStateOrAny, useSelector } from 'react-redux';

const apiBaseUrl = environment.apiBaseUrl;
const jwtHelper = new JwtHelper();
const auth = new AuthStorageService();
const apiService = new ApiService();
export const loadUser = () => async dispatch => {
  const userId = jwtHelper.getUserInfo() ? jwtHelper.getUserInfo().userId : null;
  if(!userId) {
    dispatch({
      type: ACTION_TYPES.GET_USER_INFO,
      payload: null
    });
    return;
  }
  try {
    apiService.get([`/users/${userId}`])
    .then ( response => {
      dispatch({
        type: ACTION_TYPES.GET_USER_INFO,
        payload: response
      });
    })
    .catch ( error =>{console.log(error);} 
    )
  } catch (error) {
    console.log('error', error.message);
  }
}
