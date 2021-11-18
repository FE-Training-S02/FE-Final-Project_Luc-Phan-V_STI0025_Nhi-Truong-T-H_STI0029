import React, { useState, useEffect } from 'react';
import ArticleItem from '../partials/ArticleItem';
import { getArticles } from '../article.middleware';
import { Post } from '@app/shared/models/post';
import { useDispatch } from 'react-redux';
import { useLoading } from '@app/shared/contexts/loading';

const ArticleList =  () => {
  const [articles, setArticles] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const { show } = useLoading();
  const disPatch = useDispatch();
  
  const getArticlesPublicSuccess = (res) => {
    const { data } = res;
    setArticles([...articles, ...data]);
    show(false);
  }
  useEffect(() => {
    show(true);
    function getArticlesPublic() {
      disPatch(getArticles(getArticlesPublicSuccess, page));
    }
    getArticlesPublic();
    }
  ,[])
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
      <button className="btn-load-more">Load more</button>
    </section>
  );
};

export default ArticleList;
