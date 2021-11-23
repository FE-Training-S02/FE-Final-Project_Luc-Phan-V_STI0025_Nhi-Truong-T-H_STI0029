import React, { useState, useEffect } from 'react';
import ArticleItem from '../partials/ArticleItem';
import { getListArticles } from '../article.middleware';
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
  let endPoint = '/posts/public/';
  // token ? (endPoint = '/posts/') : (endPoint = '/posts/public/');
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
    disPatch(getListArticles(endPoint, page, getArticlesSuccess, getArticlesError));
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
  const hadleDeleteArticle = (aritclelist) => {
    setArticles(aritclelist);
  }
  return (
    <div className="row">
      <section className="section-articles-list col-8">
        <ul className="row article-list">
          {articles.map((item: Post, index: any) =>
            <li className="col col-6" key={item.id}>
              <ArticleItem post={item} hadleDeleteArticle={hadleDeleteArticle} list={articles} />
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
