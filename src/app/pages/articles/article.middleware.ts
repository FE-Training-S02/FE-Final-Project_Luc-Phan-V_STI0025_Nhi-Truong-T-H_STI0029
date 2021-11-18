import JwtHelper from '@app/core/helpers/jwtHelper';
import { ApiService } from '@app/core/services/api.service';
import ACTION_TYPES from '@app/core/constants/types';

const apiService = new ApiService();
export const getArticles = (resolve, reject, page) => {
  return async () => {
    await apiService.get([`/posts/public?page=${page}&size=9`])
    .then((res) => {
      resolve(res);
    })
    .catch(error => {
      reject(error)
    })
  }
}
