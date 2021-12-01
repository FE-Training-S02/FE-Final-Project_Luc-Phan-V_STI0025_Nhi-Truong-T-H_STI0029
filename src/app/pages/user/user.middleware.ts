import { ApiService } from "@app/core/services/api.service";

const apiService = new ApiService();
export const changePassword = (data, resolve, reject) => {
  return () => {
    apiService.put([`/users/change-password/`], data)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  };
};

export const getUserInfo = (id, resolve, reject) => {
  return () => {
    apiService.get([`/users/${id}`])
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  };
};

export const updateUserInfo = (data, resolve, reject) => {
  return () => {
    apiService.put([`/users/me`], data)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  };
};
export const getFollowingsList = (id, endpoint, resolve, reject) => {
  return () => {
    apiService.get([`/friends/${id}/${endpoint}`])
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error); 
      }
    )
  }
};

