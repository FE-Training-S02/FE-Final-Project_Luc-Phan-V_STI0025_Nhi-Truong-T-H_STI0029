import JwtHelper from '@app/core/helpers/jwtHelper';
import { ApiService } from '@app/core/services/api.service';
import ACTION_TYPES from '@app/core/constants/types';

const jwtHelper = new JwtHelper();
const apiService = new ApiService();
export const loadArticles =  (showPosts, page) => {
  return async () => {
    await apiService.get([`/posts/public?page=${page}&size=9`])
    .then ((res) => {
      showPosts(res)
    })
    .catch(error => console.log(error))
  }
}
