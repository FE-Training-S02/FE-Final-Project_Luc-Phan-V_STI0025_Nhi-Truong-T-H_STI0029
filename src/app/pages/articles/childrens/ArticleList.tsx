import React, { useState, useEffect } from 'react';
import ArticleItem from '../partials/ArticleItem';
import { getArticlesPublic, getArticlesRecommend } from '../article.middleware';
import { Post } from '@app/shared/models/post';
import { useDispatch } from 'react-redux';
import { useLoading } from '@app/shared/contexts/loading.context';
import Sidebar from '@app/shared/components/layout/Sidebar';
import { AuthStorageService } from '@app/core/services/authStorage.service';

const ArticleList = () => {
  const [articles, setArticles] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const { setLoading } = useLoading();
  const disPatch = useDispatch();
  const authStorage = new AuthStorageService();
  const token = authStorage.getToken();

  useEffect(() => {
    setLoading(true);
    getArticles(page);
  }
    , []);
  const loadMore = () => {
    setLoading(true);
    getArticles(page + 1);
    setPage(page + 1);
  };

  const getArticles = (page) => {
    token ? disPatch(getArticlesRecommend(page, getArticlesSuccess, getArticlesError)) :
      disPatch(getArticlesPublic(page, getArticlesSuccess, getArticlesError));
  };
  const getArticlesSuccess = (res) => {
    const { data, loadMore } = res;
    setArticles([...articles, ...data]);
    setIsLoadMore(loadMore);
    setLoading(false);
  };
  const getArticlesError = (error) => {
    setLoading(false);
  };
  return (
    <div className="row">
      <section className="section-articles-list col-8">
        <ul className="row article-list">
          {articles.map((item: Post, index: any) =>
            <li className="col col-6" key={item.id}>
              <ArticleItem post={item} />
            </li>
          )}
        </ul>
        {isLoadMore && <button className="btn-load-more" onClick={loadMore}>Load more</button>}
      </section>
      <Sidebar />
    </div>
  );
};

export default ArticleList;
