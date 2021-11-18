import { ApiService } from "@app/core/services/api.service";

const http = new ApiService();

export const getArticleDetail = (id, resolve, reject) => {
  return (dispatch) => {
    http.get([`/posts/${id}`])
      .then(res => {
        resolve(res);
      }).catch(error => {
        reject(error);
      });
  };
};
