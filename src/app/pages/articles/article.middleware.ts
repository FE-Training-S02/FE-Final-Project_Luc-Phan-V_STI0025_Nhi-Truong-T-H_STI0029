import { ApiService } from "@app/core/services/api.service";

const http = new ApiService();

export const getDataArticleList = (id, resolve, reject) => {
  return (dispatch) => {
    http.get([`/auth/article/${id}`])
      .then(res => {
        resolve(res);
      }).catch(error => {
        reject(error);
      });
  };
};
