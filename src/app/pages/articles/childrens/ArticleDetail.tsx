import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getArticleDetail } from '../article.middleware';

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getArticleDetail(
        id,
        (res) => {
          setArticle(res);
        },
        (error) => {
          // console.log("Error:", error);
        }));
    }
  }, [id])

  return (
    <main className="article-detail-wrap">
      <header className="article-detail-header">
        <div className="article-detail-header-left">
          <ul className="article-detail-list-info">
            <li className="article-detail-item-author">
              <Link to="/">
                <i className="fas fa-pen-fancy"></i>
                <span>Alexey Trofimov </span>
              </Link></li>
            <li className="article-detail-item-comment">
              <i className="far fa-comment"></i>
              <span>1 </span>
            </li>
            <li className="article-detail-item-likes">
              <i className="far fa-heart"></i>
              <span>2 </span>
            </li>
          </ul>
        </div>
        <div className="article-detail-header-right">
          <Link to="/">
            <i className="far fa-bookmark"></i>
          </Link>
        </div>
        <h2 className="article-title">How Minimalism Helps Me Stay Calm</h2>
        <div className="article-detail-header-separator"></div>
      </header>
      <section className="article-detail-content">
        <div className="container">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </section>
    </main>
  );
};

export default ArticleDetail;
