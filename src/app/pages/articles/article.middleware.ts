import { ApiService } from "@app/core/services/api.service";

const apiService = new ApiService();

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
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  };
};

export const createArticle = (file, resolve, reject) => {
  return async () => {
    await apiService.get([`/signatures?type_upload=cover-post&file_name=${file.name}&file_type=${file.type}`])
      .then((res) => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  };
};
