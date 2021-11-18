import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useLoading } from '@app/shared/contexts/loading.context';
import { getArticleDetail } from '../article.middleware';

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const { setLoading } = useLoading();
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getArticleDetail(
        id,
        (res) => {
          setArticle(res);
        },
        (error) => {
          setLoading(false);
        }));
    }
  }, [id])

  return (
    <main className="main-content">
      <div className="article-header">
        <h2 className="article-title">{article?.title}</h2>
        <div className="article-author">
          <span className="text-writen-by">WRITEN BY</span>
          <Link to="/" className="article-author-name">
            <i className="fas fa-pen-fancy"></i>
            <h3>{article?.user?.firstName + " " + article?.user?.lastName}</h3>
          </Link>
          <button className="btn btn-outline">+ Follow</button>
        </div>
        <ul className="article-actions">
          <li className="article-action-item">
            <button className="btn btn-icon">
              <i className="far fa-comment"></i>
              <span>{article?.comments}</span>
            </button>
          </li>
          <li className="article-action-item">
            <button className="btn btn-icon">
              <i className="far fa-heart"></i>
              <span>{article?.likes}</span>
            </button>
          </li>
          <li className="article-action-item">
            <button className="btn btn-icon">
              <i className="far fa-bookmark"></i>
            </button>
          </li>
        </ul>
      </div>
      <div className="article-body">
        <img src={article?.cover} className="article-cover-image" alt="image-article" />
        <div className="article-content">
          <p>{article?.content}
          </p>
        </div>
      </div>
    </main>
  );
};

export default ArticleDetail;
