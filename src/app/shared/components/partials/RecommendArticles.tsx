import { getArticlesRecommend } from '@app/pages/articles/article.middleware';
import { Post } from '@app/shared/models/post';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import RecommendItem from './RecommendItem';

const RecommendArticles = () => {
  const [page, setPage] = useState(1);
  const [articlesRecommend, setArticlesRecommend] = useState<Post[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticlesRecommend(
      page,
      (res) => {
        setArticlesRecommend(res.data.slice(0, 5));
      },
      (error) => {
      }
    )
    );
  }, []);
  return (
    <>
      <h4 className="widget-title">Recommended Articles</h4>
      <ul className="popular-list">
        {articlesRecommend ?
          articlesRecommend.map((item) =>
            <li className="popular-item" key={item.id}>
              <RecommendItem article={item} />
            </li>
          )
          : 'No articles'}
      </ul>
    </>
  );
}
export default RecommendArticles;
