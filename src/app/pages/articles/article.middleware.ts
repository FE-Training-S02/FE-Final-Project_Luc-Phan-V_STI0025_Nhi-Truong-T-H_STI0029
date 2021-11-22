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

export const getListArticles = (endPoint, page, resolve, reject) => {
  return async () => {
    await apiService.get([`${endPoint}?page=${page}&size=8`])
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  };
};

export const uploadImage = (file, resolve, reject) => {
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

export const likeArticle = (id, resolve, reject) => {
  return async () => {
    await apiService.put([`/posts/${id}/likes`])
      .then((res) => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  };
};

export const getListUserLiked = (id, resolve, reject) => {
  return async () => {
    await apiService.get([`/posts/${id}/likes`])
      .then((res) => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  };
};

