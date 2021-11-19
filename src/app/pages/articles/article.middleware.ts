import { ApiService } from "@app/core/services/api.service";

const apiService = new ApiService();

export const signIn = (account, resolve, rejects) => {
  return (dispatch) => {
    apiService.post([`/users/login`], account)
      .then(response => {
        resolve(response);
      }).catch(error => {
        console.log(2222, error);
        rejects(error.message);
      });
  };
};
export const getArticleDetail = (id, resolve, reject) => {
  return (dispatch) => {
    apiService.get([`/posts/${id}`])
      .then(res => {
        resolve(res);
      }).catch(error => {
        reject(error);
      });
  };
};
export const getArticles = (resolve, reject, page) => {
  return async () => {
    await apiService.get([`/posts/public?page=${page}&size=9`])
      .then((res) => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  };
};
