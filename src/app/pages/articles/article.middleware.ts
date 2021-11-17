import { ApiService } from "@app/core/services/api.service";

const http = new ApiService();

export function getDataArticleList(id, resolve) {
  return function (dispatch) {
    http.get([`/auth/article/${id}`])
      .then(res => {
        resolve(res);
      })
  }
}