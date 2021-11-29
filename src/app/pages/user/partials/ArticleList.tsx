import React, { useState, useEffect } from 'react';
import ArticleItem from '@app/pages/articles/partials/ArticleItem';
import { getListArticles } from '@app/pages/articles/article.middleware';
import { Post } from '@app/shared/models/post';
import { useDispatch } from 'react-redux';
import { useLoading } from '@app/shared/contexts/loading.context';
import Sidebar from '@app/shared/components/layout/Sidebar';

const ArticleList = (props) => {
  const { id } = props;
  const [articles, setArticles] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const { setLoading } = useLoading();
  const disPatch = useDispatch();
  let endPoint = `users/${id}/posts/`;

  useEffect(() => {
    setLoading(true);
    getArticles(page);
  }, []);

  const loadMore = () => {
    setLoading(true);
    getArticles(page + 1);
    setPage(pre => pre + 1);
  };

  const getArticles = (page) => {
    disPatch(getListArticles(endPoint, page, getArticlesSuccess, getArticlesError));
  };

  const getArticlesSuccess = (res) => {
    const { Posts, loadMore, firstName, lastName } = res;
    const user = { firstName, lastName };
    const newPost = Posts.map((item, index) => {
      return item = {...item, user};
    });
    setArticles([...articles, ...newPost]);
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
      <Sidebar />
      <section className="section-articles-list col col-8">
        <ul className="row article-list">
          {articles.map((item: Post, index: any) =>
            <li className="col col-12" key={item.id}>
              <ArticleItem post={item} hadleDeleteArticle={hadleDeleteArticle} list={articles} />
            </li>
          )}
        </ul>
        {isLoadMore && <button className="btn-load-more" onClick={loadMore}>Load more</button>}
      </section>
    </div>
  );
};

export default ArticleList;
