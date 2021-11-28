import { ApiService } from "@app/core/services/api.service";

const apiService = new ApiService();

export const getArticleDetail = (id, resolve, reject) => {
  return async (dispatch) => {
    await apiService.get([`/posts/${id}`])
      .then(res => {
        resolve(res);
      }).catch(error => {
        reject(error);
      });
  };
};

export const getListArticles = (endPoint, page, resolve, reject) => {
  return async () => {
    await apiService.get([`${endPoint}?page=${page}&size=20`])
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  };
};

export const getArticlesRecommend = (page, resolve, reject) => {
  return async () => {
    await apiService.get([`/posts/recommend/?page=${page}&size=5`])
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  };
};

export const deleteArticle = (id, resolve, rejects) => {
  return async (dispatch) => {
    await apiService.delete([`/posts/${id}`])
      .then(res => {
        resolve(res);
      }).catch(error => {
        rejects(error);
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
export const getCommentsList = (id, resolve, reject) => {
  return async () => {
    await apiService.get([`/posts/${id}/comments`])
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  };
};
export const postComment = (id, data, resolve, reject) => {
  return async () => {
    await apiService.post([`/posts/${id}/comments`], data)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  };
};
export const postFollow = (data, resolve, reject) => {
  return async () => {
    await apiService.post([`/friends/follow`], data)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  };
};
export const getAuthor = (id, resolve, reject) => {
  return async () => {
    await apiService.get([`/users/${id}`])
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  };
};
export const createArticle = (data, resolve, reject) => {
  return async () => {
    await apiService.post(['/posts'], data)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  };
};
export const updateArticle = (id, data, resolve, reject) => {
  return async () => {
    await apiService.put([`/posts/${id}`], data)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  };
};
