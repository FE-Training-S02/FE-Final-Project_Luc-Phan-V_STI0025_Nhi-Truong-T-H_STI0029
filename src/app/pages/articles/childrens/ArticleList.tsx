import React, { useState, useEffect } from 'react';
import ArticleItem from '../partials/ArticleItem';
import { loadArticles } from '../article.middleware';
<<<<<<< HEAD
import { Post } from '@app/shared/models/post';
=======
import { Post } from '@app/shared/models/postType';
>>>>>>> 7ad44b7 (update action loadActicles)
import { useDispatch } from 'react-redux';

const ArticleList =  () => {
  const [articles, setArticles] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const disPatch = useDispatch();
  
  const getArticlesPublicSuccess = (res) => {
    const { data } = res;
    setArticles([...articles, ...data]);
  }
  useEffect(() => {
    function getArticlesPublic() {
      disPatch(loadArticles(getArticlesPublicSuccess, page));
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
