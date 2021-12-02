import { ApiService } from "@app/core/services/api.service";
import axios from "axios";

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

export const updateUserInfo = (user, resolve, reject) => {
  return () => {
    apiService.put([`/users/me`], user)
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

export const uploadImage = (file, resolve, reject) => {
  return () => {
    apiService.get([`/signatures?type_upload=avatar&file_name=${file.name}&file_type=${file.type}`])
      .then((res: any) => {
        axios.put(res.signedRequest, file);
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  };
};
