import JwtHelper from '@app/core/helpers/jwtHelper';
import { ApiService } from '@app/core/services/api.service';
import { saveUserInfo } from './auth.actions';

const jwtHelper = new JwtHelper();
const apiService = new ApiService();
export const getUserInfo = () => dispatch => {
  const userId = jwtHelper.getUserInfo() ? jwtHelper.getUserInfo().userId : null;
  try {
    if (!userId) {
      dispatch(saveUserInfo(null));
      return;
    }
    apiService.get([`/users/${userId}`])
      .then(response => {
        dispatch(saveUserInfo(response));
      })
      .catch(error => { console.log(error); }
      )
  } catch (error) {
    console.log('error', error.message);
  }
}

export const signIn = (account, resolve, rejects) => {
  return (dispatch) => {
    apiService.post([`/users/login`], account)
      .then(response => {
        resolve(response);
      }).catch(error => {
        rejects(error);
      });
  };
};
export const signUp = (data, resolve, rejects) => {
  return (dispatch) => {
    apiService.post([`/users/register`], data)
      .then(res => {
        resolve(res);
      }).catch(error => {
        rejects(error);
      });
  };
};
