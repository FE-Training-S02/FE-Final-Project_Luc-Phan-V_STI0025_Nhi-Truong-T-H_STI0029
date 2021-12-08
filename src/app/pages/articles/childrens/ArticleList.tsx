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
  const { loading, setLoading } = useLoading();
  const dispatch = useDispatch();
  const authStorage = new AuthStorageService();
  const token = authStorage.getToken();
  let endPoint = '/posts/public/';
  token ? (endPoint = '/posts/') : (endPoint = '/posts/public/');
  useEffect(() => {
    setLoading(true);
    getArticles(page);
  }
    , []);
  const loadMore = () => {
    setLoading(true);
    getArticles(page + 1);
    setPage(pre => pre + 1);
  };

  const getArticles = (page) => {
    dispatch(getListArticles(endPoint, page, getArticlesSuccess, getArticlesError));
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
    <>
      <h1 className="blog-title">The ST <span className="txt-primary">Blog</span></h1>
      <p className="blog-description mb-10">The latest updates, stories, on product management, engineering, design, culture and many more... from the ST team.</p>
      {articles.length !== 0 ?
        <div className="row">
          <section className="section-articles-list col col-8">
            <ul className="row article-list">
              {articles.map((item: Post, index: any) =>
                <li className="col col-6" key={item.id}>
                  <ArticleItem post={item} hadleDeleteArticle={hadleDeleteArticle} list={articles} />
                </li>
              )}
            </ul>
            {isLoadMore && <button className="btn btn-primary" onClick={loadMore}>Load more</button>}
          </section>
          <Sidebar />
        </div>
        :
        (!loading && <p className="none-articles mt-5">No articles yet!</p>)
      }
    </>
  );
};

export default ArticleList;
