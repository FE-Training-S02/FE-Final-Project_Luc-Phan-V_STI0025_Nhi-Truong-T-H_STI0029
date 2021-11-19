import React, { useState, useEffect } from 'react';
import ArticleItem from '../partials/ArticleItem';
import { getArticles } from '../article.middleware';
import { Post } from '@app/shared/models/post';
import { useDispatch } from 'react-redux';
import { useLoading } from '@app/shared/contexts/loading.context';

const ArticleList =  () => {
  const [articles, setArticles] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const { setLoading } = useLoading();
  const disPatch = useDispatch();
  
  const getArticlesPublicSuccess = (res) => {
    const { data, loadMore } = res;
    setArticles([...articles, ...data]);
    setIsLoadMore(loadMore);
    setLoading(false);
  };
  const getArticlesPublicError = (error) => {
    setLoading(false);
  };
  function getArticlesPublic(page) {
    disPatch(getArticles(getArticlesPublicSuccess, getArticlesPublicError, page));
  };
  useEffect(() => {
    setLoading(true);
    getArticlesPublic(page);
    }
  ,[]);
  const loadMore = () => {
    setLoading(true);
    getArticlesPublic(page+1);
    setPage(page+1);
  };
  return (
    <section className="section-articles-list">
      <h3 className="articles-list-title">Articles List</h3>
      <ul className="row article-list">
        {articles.map((item: Post, index: any) =>
            <li className="col col-4" key={item.id}>
              <ArticleItem post={item} />
            </li>
          )}
      </ul>
      {isLoadMore ? <button className="btn-load-more" onClick={() => {loadMore()}}>Load more</button> : ''}
    </section>
  );
};

export default ArticleList;
