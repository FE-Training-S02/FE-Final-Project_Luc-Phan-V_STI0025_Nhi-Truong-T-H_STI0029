import { ApiService } from '@app/core/services/api.service';

const apiService = new ApiService();
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
