import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import purify from "dompurify";
import { useLoading } from '@app/shared/contexts/loading.context';
import { getArticleDetail } from '../article.middleware';

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<any>({});
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
  const { title, user, comments, likes, cover, content } = article;
  return (
    <main className="main-content">
      <div className="article-header">
        <h2 className="article-title">{title}</h2>
        <div className="article-author">
          <span className="text-writen-by">WRITEN BY</span>
          <Link to="/" className="article-author-name">
            <i className="fas fa-pen-fancy"></i>
            <h3>{user?.firstName + " " + user?.lastName}</h3>
          </Link>
          <button className="btn btn-outline">+ Follow</button>
        </div>
        <ul className="article-actions">
          <li className="article-action-item">
            <button className="btn btn-icon">
              <i className="far fa-comment"></i>
              <span>{comments}</span>
            </button>
          </li>
          <li className="article-action-item">
            <button className="btn btn-icon">
              <i className="far fa-heart"></i>
              <span>{likes}</span>
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
        <img src={cover} className="article-cover-image" alt="image-article" />
        <div className="article-content" dangerouslySetInnerHTML={{ __html:purify.sanitize(content)}}>
        </div>
      </div>
    </main>
  );
};
export default ArticleDetail;
