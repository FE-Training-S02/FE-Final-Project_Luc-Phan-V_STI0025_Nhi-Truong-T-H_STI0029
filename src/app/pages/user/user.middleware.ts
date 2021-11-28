import { ApiService } from "@app/core/services/api.service";

const apiService = new ApiService();
export const changePassword = (data, resolve, reject) => {
  return async () => {
    await apiService.put([`/users/change-password/`], data)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  };
};